import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync } from "node:fs";
import { setTimeout } from "node:timers/promises";

// Jacho: notify participating IndexNow engines only after the matching Vercel
// production commit succeeds. Google's discovery channel remains sitemap.xml.
const SITE = "https://jacho.vercel.app";
const REPO = process.env.GH_REPOSITORY || "cwjenwade/Jacho";
const SHA = process.env.GH_SHA || execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
const BEFORE = process.env.GH_BEFORE && /^[0-9a-f]{40}$/i.test(process.env.GH_BEFORE) &&
  !/^0+$/.test(process.env.GH_BEFORE)
  ? process.env.GH_BEFORE : SHA + "^";
const DRY = process.argv.includes("--dry-run");

const THEORY = [
  "psychodynamic", "humanistic-existential-experiential", "behavioral",
  "cognitive-behavioral", "constructivist-postmodern", "systemic-relational",
  "feminist-critical", "group-counseling-and-psychotherapy",
].map((slug) => "/counseling/" + slug);

function command(args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}
function sitemap(xml) {
  const entries = new Map();
  const blocks = xml.match(/<url>\s*[\s\S]*?<\/url>/g) || [];
  for (const block of blocks) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() || "";
    if (!loc) continue;
    const url = new URL(loc);
    if (url.origin !== SITE || url.search || url.hash) {
      throw new Error("Sitemap must only list canonical Jacho URLs: " + loc);
    }
    entries.set(url.href, lastmod);
  }
  if (!entries.size) throw new Error("Sitemap contains no canonical URLs");
  return entries;
}
const current = sitemap(readFileSync("public/sitemap.xml", "utf8"));
let previous;
try { previous = sitemap(command(["show", BEFORE + ":public/sitemap.xml"])); }
catch { previous = new Map(); }

let changed = [];
try { changed = command(["diff", "--name-only", BEFORE, SHA]).split("\n").filter(Boolean); }
catch (error) { throw new Error("Cannot inspect changed files: " + error.message); }
console.log("Changed files: " + changed.join(", "));

const staticPages = {
  "public/brand/index.html": ["/"],
  "public/brand/about.html": ["/about"],
  "public/brand/counseling.html": ["/counseling", ...THEORY],
  "public/brand/journal.html": ["/journal"],
  "app/page.tsx": ["/research"], // The public / route is rewritten to brand/index.html.
  "app/research/page.tsx": ["/research"],
  "app/programs/page.tsx": ["/programs"],
  "app/programs/layout.tsx": ["/programs"],
  "app/counseling/[slug]/route.ts": THEORY,
};
const candidates = new Set();
for (const file of changed) {
  if (staticPages[file]) for (const path of staticPages[file]) candidates.add(SITE + path);
  const match = file.match(/^app\/(.+?)\/page\.(?:jsx?|tsx?)$/);
  if (match && !match[1].includes("[") && !match[1].includes("(")) {
    const url = SITE + "/" + match[1];
    if (current.has(url)) candidates.add(url);
    else throw new Error("New public page must be added to public/sitemap.xml before publication: " + url);
  }
}
if (changed.includes("public/sitemap.xml")) {
  for (const [url, modified] of current) {
    if (!previous.has(url) || previous.get(url) !== modified) candidates.add(url);
  }
}
// Content formats are not assumed: new markdown routes must enter sitemap.xml.
if (changed.some((file) => /^(?:content|articles|posts)\/.*\.mdx?$/.test(file)) &&
    !changed.includes("public/sitemap.xml")) {
  throw new Error("Article content changed without a sitemap update. Add its canonical URL to public/sitemap.xml.");
}
// A single initial homepage smoke test confirms the pipeline really submits.
if (changed.includes(".github/workflows/jacho-indexnow.yml") &&
    changed.includes("scripts/seo/indexnow.mjs")) candidates.add(SITE + "/");

const urls = [...candidates].filter((url) => current.has(url)).sort();
console.log("Sitemap URLs: " + current.size + ", proposed notifications: " + urls.length);
if (DRY) {
  console.log("DRY RUN: " + JSON.stringify(urls));
  process.exit(0);
}
if (!urls.length) {
  console.log("No changed indexable URLs. Skipping IndexNow.");
  process.exit(0);
}
if (urls.length > 50) throw new Error("Safety guard: more than 50 changed URLs");

const TOKEN = process.env.GH_TOKEN;
if (!TOKEN || !REPO.startsWith("cwjenwade/")) throw new Error("GitHub status permissions not configured");
const statusUrl = "https://api.github.com/repos/" + REPO + "/commits/" + SHA + "/status";
let isDeployed = false;
for (let attempt = 1; attempt <= 48; attempt++) {
  const result = await fetch(statusUrl, {
    headers: {
      Authorization: "Bearer " + TOKEN,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    signal: AbortSignal.timeout(12000),
  });
  if (!result.ok) throw new Error("Cannot verify Vercel status: HTTP " + result.status);
  const data = await result.json();
  const vercel = data.statuses.find((x) => x.context === "Vercel");
  if (vercel?.state === "success") {
    isDeployed = true;
    console.log("Vercel deployment confirmed for commit " + SHA.slice(0, 12));
    break;
  }
  if (vercel && ["failure", "error"].includes(vercel.state)) {
    throw new Error("Vercel build failed for commit " + SHA + ": " + vercel.description);
  }
  if (attempt % 4 === 1) console.log("Waiting for Vercel production status: attempt " + attempt);
  await setTimeout(10000);
}
if (!isDeployed) throw new Error("Timed out waiting for production deployment. No URLs submitted.");

// Verify that production is serving the matching sitemap before sending URLs.
// When sitemap.xml did not change, Vercel's success status above is the release gate.
if (changed.includes("public/sitemap.xml")) {
  let synchronized = false;
  for (let attempt = 0; attempt < 8; attempt++) {
    const response = await fetch(SITE + "/sitemap.xml", { signal: AbortSignal.timeout(12000) });
    if (!response.ok) throw new Error("Production sitemap returned HTTP " + response.status);
    const live = sitemap(await response.text());
    if (JSON.stringify([...live]) === JSON.stringify([...current])) {
      synchronized = true;
      break;
    }
    await setTimeout(5000);
  }
  if (!synchronized) throw new Error("Production sitemap is still stale; no URLs submitted.");
}

const valid = [];
for (const url of urls) {
  const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error("Published URL not ready: " + url + " HTTP " + response.status);
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) throw new Error("Not an HTML article: " + url);
  const html = await response.text();
  const head = html.slice(0, html.indexOf("</head>") > 0 ? html.indexOf("</head>") : 0);
  if (/<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(head) ||
      /noindex/i.test(response.headers.get("x-robots-tag") || "")) {
    console.log("Skipped intentionally noindex page: " + url);
    continue;
  }
  const canonical = [...html.matchAll(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)/gi)][0]?.[1];
  if (canonical && canonical !== url) throw new Error("Canonical mismatch at " + url + ": " + canonical);
  valid.push(url);
}
if (!valid.length) {
  console.log("No indexable page changes. Nothing to submit.");
  process.exit(0);
}

// IndexNow keys are intentionally public verification files, not GitHub secrets.
const keyFile = readdirSync("public").find((file) => {
  if (!/^[a-f0-9]{32,128}\.txt$/i.test(file)) return false;
  return readFileSync("public/" + file, "utf8").trim() === file.slice(0, -4);
});
if (!keyFile) throw new Error("Verified public IndexNow key file not found");

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: "jacho.vercel.app",
    key: keyFile.slice(0, -4),
    keyLocation: SITE + "/" + keyFile,
    urlList: valid,
  }),
  signal: AbortSignal.timeout(25000),
});
const responseText = (await response.text()).slice(0, 500);
if (![200, 202].includes(response.status)) {
  throw new Error("IndexNow rejected URLs: HTTP " + response.status + " " + responseText);
}
console.log("IndexNow accepted " + valid.length + " URLs, HTTP " + response.status);
for (const url of valid) console.log("Submitted: " + url);
console.log("Acceptance does not guarantee search engine indexing.");
