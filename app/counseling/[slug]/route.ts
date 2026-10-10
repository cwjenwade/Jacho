import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const SITE_URL = "https://jacho.vercel.app";
const THEORY_SLUGS = [
  "psychodynamic",
  "humanistic-existential-experiential",
  "behavioral",
  "cognitive-behavioral",
  "constructivist-postmodern",
  "systemic-relational",
  "feminist-critical",
  "group-counseling-and-psychotherapy",
];

function decodeHtml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"');
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function plainText(value: string) {
  return decodeHtml(value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ")).trim();
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  if (!THEORY_SLUGS.includes(slug)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const filePath = path.join(process.cwd(), "public", "brand", "counseling.html");
  let html = await readFile(filePath, "utf8");

  const sectionBlocks = THEORY_SLUGS.map((theorySlug) => {
    const marker = html.indexOf(`id="theory-${theorySlug}"`);
    const start = html.lastIndexOf("<section", marker);
    const nextSection = html.indexOf('<section class="atlas-item', start + 1);
    const end = nextSection < 0 ? html.indexOf("</div></div></main>", start) : nextSection;
    return { theorySlug, start, end };
  });
  if (sectionBlocks.some(({ start, end }) => start < 0 || end < 0)) {
    return new NextResponse("Not found", { status: 404 });
  }

  for (const block of sectionBlocks
    .filter(({ theorySlug }) => theorySlug !== slug)
    .sort((left, right) => right.start - left.start)) {
    html = `${html.slice(0, block.start)}${html.slice(block.end)}`;
  }

  const sectionStart = html.indexOf(`id="theory-${slug}"`);
  if (sectionStart < 0) {
    return new NextResponse("Not found", { status: 404 });
  }

  const sectionOpen = html.lastIndexOf("<section", sectionStart);
  const nextSection = html.indexOf('<section class="atlas-item', sectionStart + 1);
  const sectionEnd = nextSection < 0 ? html.indexOf("</div></div></main>", sectionStart) : nextSection;
  if (sectionOpen < 0 || sectionEnd < 0) {
    return new NextResponse("Not found", { status: 404 });
  }

  let section = html.slice(sectionOpen, sectionEnd);
  const titleMatch = section.match(/<span class="atlas-title">([\s\S]*?)<\/span>/);
  const proseStart = section.indexOf('class="chapter-prose');
  const introMatch = proseStart >= 0 ? section.slice(proseStart).match(/<p>([\s\S]*?)<\/p>/) : null;
  const title = titleMatch ? plainText(titleMatch[1]) : "心理治療取向專論";
  const description = (introMatch ? plainText(introMatch[1]) : `${title}的理論、治療概念與實務介紹。`).slice(0, 180);
  const canonical = `${SITE_URL}/counseling/${slug}`;

  section = section
    .replace('data-open="false"', 'data-open="true"')
    .replace('aria-expanded="false"', 'aria-expanded="true"')
    .replace('class="atlas-panel" hidden=""', 'class="atlas-panel"');
  html = `${html.slice(0, sectionOpen)}${section}${html.slice(sectionEnd)}`;

  const safeTitle = escapeHtml(`${title}｜心理治療取向專論｜小祈叔叔的心理學研究`);
  const safeDescription = escapeHtml(description);
  // JACHO_SEO_SOURCE_INTEGRATED_V1
  // Remove overview SEO from the reused template; page-specific SEO is inserted below.
  html = html
    .replace(/<(meta|link)[^>]*(canonical|description|og:|twitter:)[^>]*>/g, "")
    .replace(/<script[^>]*ld.json[^>]*>.*?<[/]script>/g, "");
  html = html.replace("<h1>諮商與心理治療</h1>", `<h1>${escapeHtml(title)}</h1>`);
  const articleJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: "zh-Hant",
    mainEntityOfPage: canonical,
    author: {
      "@type": "Person",
      name: "任祈蔚",
      alternateName: "Wade Chi-Wei Jen",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Person",
      name: "任祈蔚",
      url: `${SITE_URL}/about`,
    },
  }).replace(/</g, "\\u003c");
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`);
  html = html.replace(
    "</head>",
    `<meta name="description" content="${safeDescription}"/><link rel="canonical" href="${canonical}"/><meta property="og:type" content="article"/><meta property="og:locale" content="zh_TW"/><meta property="og:site_name" content="小祈叔叔的心理學研究"/><meta property="og:title" content="${safeTitle}"/><meta property="og:description" content="${safeDescription}"/><meta property="og:url" content="${canonical}"/><meta property="og:image" content="${SITE_URL}/brand/images/counseling.webp"/><meta property="og:image:alt" content="諮商與心理治療專論插畫"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${safeTitle}"/><meta name="twitter:description" content="${safeDescription}"/><meta name="twitter:image" content="${SITE_URL}/brand/images/counseling.webp"/><script type="application/ld+json">${articleJson}</script></head>`,
  );

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
