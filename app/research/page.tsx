import type { Metadata } from "next";
import ResearchContent from "../page";

export const metadata: Metadata = {
  title: { absolute: "Wade Chi-Wei Jen (任祈蔚) | Academic CV & Psychology Research" },
  keywords: ["Wade Chi-Wei Jen", "任祈蔚", "academic CV", "psychology research", "alexithymia", "emotional processing", "group counseling", "psychometrics", "諮商心理學", "心理學研究"],
  description:
    "Academic CV of Wade Chi-Wei Jen (任祈蔚): counseling psychology, research publications, conference presentations and interests in alexithymia, emotional processing and group counseling.",
  alternates: { canonical: "/research" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    siteName: "Wade Chi-Wei Jen",
    title: "Wade Chi-Wei Jen (任祈蔚) | Academic CV & Psychology Research",
    description:
      "Academic profile, psychology research interests, publications, conference presentations, and research experience.",
    url: "/research",
    images: [{ url: "/brand/images/about.webp", alt: "任祈蔚學術履歷" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wade Chi-Wei Jen (任祈蔚) | Academic CV & Psychology Research",
    description:
      "Academic profile, psychology research interests, publications, conference presentations, and research experience.",
    images: ["/brand/images/about.webp"],
  },
};

export const dynamic = "force-dynamic";

const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Wade Chi-Wei Jen (任祈蔚) | Academic CV & Psychology Research",
  url: "https://jacho.vercel.app/research",
  inLanguage: "en",
  keywords: "psychology research, alexithymia, emotional processing, group counseling, academic CV",
  mainEntity: {
    "@type": "Person",
    name: "Wade Chi-Wei Jen",
    alternateName: ["任祈蔚", "小祈叔叔"],
    jobTitle: "Counseling Psychologist and Psychology Researcher",
    url: "https://jacho.vercel.app/about",
    image: "https://jacho.vercel.app/brand/images/about.webp",
    affiliation: [
      { "@type": "CollegeOrUniversity", name: "國立臺灣大學" },
      { "@type": "CollegeOrUniversity", name: "國立清華大學" },
    ],
    knowsAbout: ["Psychology Research", "Alexithymia", "Emotional Processing", "Group Counseling", "Psychotherapy"],
  },
};

export default function ResearchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileStructuredData) }}
      />
      <ResearchContent />
    </>
  );
}
