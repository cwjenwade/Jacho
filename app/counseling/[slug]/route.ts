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

// Each theory page has independent search metadata; visible article content comes from counseling.html.
const SEO_TOPICS: Record<string, { title: string; description: string; keywords: string[] }> = {
  "psychodynamic": {
    title: "心理動力治療與精神分析｜心理動力典範｜小祈叔叔的心理學研究",
    description: "心理動力治療與精神分析如何理解無意識、防衛和早期關係？整理阿德勒、榮格、客體關係等心理動力學派的理論、心理困擾與治療途徑。",
    keywords: ["心理動力治療","精神分析","無意識","心理防衛","阿德勒","榮格","客體關係"],
  },
  "humanistic-existential-experiential": {
    title: "人本治療、存在治療與完形治療｜小祈叔叔的心理學研究",
    description: "介紹人本治療、個人中心治療、存在治療、完形治療與情緒焦點治療，整理人本—存在—經驗典範的人性觀、心理困擾與治療方法。",
    keywords: ["人本治療","個人中心治療","存在治療","完形治療","情緒焦點治療","經驗取向"],
  },
  "behavioral": {
    title: "行為治療與學習理論｜行為典範｜小祈叔叔的心理學研究",
    description: "行為治療如何從學習理論理解情緒與行為的形成？介紹古典制約、操作制約、增強、暴露與行為介入的理論及應用。",
    keywords: ["行為治療","行為主義","學習理論","古典制約","操作制約","暴露治療","增強"],
  },
  "cognitive-behavioral": {
    title: "認知行為治療（CBT）與認知治療｜小祈叔叔的心理學研究",
    description: "認知行為治療如何理解自動化思考、核心信念與情緒困擾？介紹認知治療、理情行為治療及相關學派的核心假設與治療介入。",
    keywords: ["認知行為治療","認知治療","CBT","自動化思考","核心信念","理情行為治療"],
  },
  "constructivist-postmodern": {
    title: "敘事治療、焦點解決與建構主義｜小祈叔叔的心理學研究",
    description: "介紹建構主義與後現代心理治療，涵蓋敘事治療、焦點解決短期治療與個人建構心理學，整理語言、意義與心理改變的觀點。",
    keywords: ["敘事治療","焦點解決短期治療","建構主義","後現代心理治療","個人建構心理學"],
  },
  "systemic-relational": {
    title: "家庭治療、伴侶治療與系統取向｜小祈叔叔的心理學研究",
    description: "系統與關係取向從家庭治療、伴侶治療及互動模式理解心理困擾，整理家庭系統、角色、界線及關係治療的理論與介入。",
    keywords: ["家庭治療","系統取向","伴侶治療","家庭系統","關係治療","結構派家族治療"],
  },
  "feminist-critical": {
    title: "女性主義治療、性別與多元文化｜小祈叔叔的心理學研究",
    description: "女性主義治療與批判取向重視性別、權力、多元文化及社會脈絡，整理其心理困擾觀、治療關係與介入實踐。",
    keywords: ["女性主義治療","女性主義心理治療","性別","多元文化","權力","批判心理學"],
  },
  "group-counseling-and-psychotherapy": {
    title: "團體諮商與團體心理治療｜小祈叔叔的心理學研究",
    description: "團體諮商與團體心理治療如何透過成員互動促進理解與改變？整理 Yalom、Corey 等團體治療理論、治療因素與團體帶領方法。",
    keywords: ["團體諮商","團體心理治療","團體治療","Yalom","Corey","團體帶領"],
  },
};

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
  const topic = SEO_TOPICS[slug];
  const description = topic.description;
  const canonical = `${SITE_URL}/counseling/${slug}`;

  section = section
    .replace('data-open="false"', 'data-open="true"')
    .replace('aria-expanded="false"', 'aria-expanded="true"')
    .replace('class="atlas-panel" hidden=""', 'class="atlas-panel"');
  html = `${html.slice(0, sectionOpen)}${section}${html.slice(sectionEnd)}`;

  const safeTitle = escapeHtml(topic.title);
  const safeKeywords = escapeHtml(topic.keywords.join(", "));
  const safeDescription = escapeHtml(description);
  // JACHO_SEO_SOURCE_INTEGRATED_V1
  // Remove overview SEO from the reused template; page-specific SEO is inserted below.
  html = html
    .replace(/<(meta|link)[^>]*(canonical|description|keywords|og:|twitter:)[^>]*>/g, "")
    .replace(/<script[^>]*ld.json[^>]*>.*?<[/]script>/g, "");
  html = html.replace("<h1>諮商與心理治療</h1>", `<h1>${escapeHtml(title)}</h1>`);
  const articleJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    keywords: topic.keywords.join(", "),
    image: `${SITE_URL}/brand/images/counseling.webp`,
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
    `<meta name="description" content="${safeDescription}"/><meta name="keywords" content="${safeKeywords}"/><link rel="canonical" href="${canonical}"/><meta property="og:type" content="article"/><meta property="og:locale" content="zh_TW"/><meta property="og:site_name" content="小祈叔叔的心理學研究"/><meta property="og:title" content="${safeTitle}"/><meta property="og:description" content="${safeDescription}"/><meta property="og:url" content="${canonical}"/><meta property="og:image" content="${SITE_URL}/brand/images/counseling.webp"/><meta property="og:image:alt" content="諮商與心理治療專論插畫"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${safeTitle}"/><meta name="twitter:description" content="${safeDescription}"/><meta name="twitter:image" content="${SITE_URL}/brand/images/counseling.webp"/><script type="application/ld+json">${articleJson}</script></head>`,
  );

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
