import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Wade Chi-Wei Jen (任祈蔚) | Research Methods, Psychometrics & Digital Projects" },
  description:
    "Research methods and digital projects by Wade Chi-Wei Jen (任祈蔚): psychometrics, factor analysis, structural equation modeling, adaptive testing, R and MATLAB.",
  keywords: ["research methods", "psychometrics", "structural equation modeling", "factor analysis", "adaptive testing", "R", "MATLAB", "心理計量", "結構方程模型", "數位心理學"],
  alternates: { canonical: "/programs" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wade Chi-Wei Jen",
    title: "Wade Chi-Wei Jen (任祈蔚) | Research Methods, Psychometrics & Digital Projects",
    description:
      "Research methods, counseling psychology, and digital projects in mental health and education.",
    url: "/programs",
    images: [{ url: "/brand/images/index.webp", alt: "小祈叔叔的心理學研究" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wade Chi-Wei Jen (任祈蔚) | Research Methods, Psychometrics & Digital Projects",
    description:
      "Research methods, counseling psychology, and digital projects in mental health and education.",
    images: ["/brand/images/index.webp"],
  },
};

const projectCollectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Wade Chi-Wei Jen (任祈蔚) | Research Methods, Psychometrics & Digital Projects",
  url: "https://jacho.vercel.app/programs",
  inLanguage: "en",
  keywords: "psychometrics, research methods, structural equation modeling, factor analysis, adaptive testing, digital psychology",
  author: {
    "@type": "Person",
    name: "任祈蔚",
    alternateName: "Wade Chi-Wei Jen",
    url: "https://jacho.vercel.app/about",
  },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectCollectionStructuredData) }}
      />
      {children}
    </>
  );
}
