import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Wade Chi-Wei Jen | Clinical Psychology PhD Student",
};

export const dynamic = "force-dynamic";

const awards = [
  {
    year: "2025",
    title: "Annual Outstanding Thesis Award, First Prize",
    body: "Taiwan Counseling Psychology Association",
  },
  {
    year: "2025",
    title: "Scholarship for Students Attending International Conferences",
    body: "Office of Global Affairs, National Tsing Hua University",
  },
  {
    year: "2024 · 2025",
    title: "NSTC Graduate Student Scholarship for Attending International Academic Conferences",
    body: "National Science and Technology Council (NSTC)",
  },
  {
    year: "2024 · 2025",
    title: "International Exchange Scholarship for Students",
    body: "College of Education, National Tsing Hua University",
  },
  {
    year: "2024 · 2025",
    title: "Humanities and Social Sciences Research Center International Conference Scholarship",
    body: "Center for Humanities and Social Sciences Research, National Tsing Hua University",
  },
  {
    year: "2024",
    title: "Cross-disciplinary Education Leader Program Award",
    body: "College of Education, National Tsing Hua University",
  },
  {
    year: "2023 · 2024 · 2025",
    title: "Co-learning Circle Program Scholarship, four consecutive terms",
    body: "Teaching Development Center, National Tsing Hua University",
  },
  {
    year: "2023 · 2024",
    title: "Prof. Hsu Tao-Ning Mathematics and Humanities Scholarship, three consecutive terms",
    body: "Department of Mathematics, National Tsing Hua University",
  },
];

const artworks = [
  {
    image: "/art/kandinsky.webp",
    artwork: "Kandinsky, Color Study: Squares with Concentric Circles",
    interest: "Alexithymia and emotional processing",
    meaning:
      "Emotional differentiation, emodiversity, and the processes through which feelings are identified, organized, and communicated.",
  },
  {
    image: "/art/matisse.jpg",
    artwork: "Matisse, Dance I",
    interest: "Unstructured group counseling and early intervention",
    meaning:
      "Group counseling informed by Yalom's interpersonal framework, with attention to therapeutic processes, group movement, and mechanisms of change.",
  },
  {
    image: "/art/delaunay.jpg",
    artwork: "Delaunay, Rythme, Joie de vivre",
    interest: "Couple therapy and interpersonal dynamics",
    meaning:
      "Relational rhythms, interactional cycles, and the ways negative dynamics may weaken intimacy, trust, and emotional responsiveness.",
  },
  {
    image: "/art/zhuangzi.jpg",
    artwork: "Ike no Taiga, Zhuangzi dreaming of a butterfly",
    interest: "Zhuangzi thought",
    meaning:
      "Zhuangzi thought as a philosophical inquiry into transformation, freedom, the relation between self and world, and the limits of language in understanding life.",
  },
  {
    image: "/art/blue-horse.jpg",
    artwork: "Franz Marc, Blue Horse I",
    interest: "Men, masculinity, and depression",
    meaning:
      "How men express, inhibit, or reshape emotional life in relation to social expectations, cultural norms, gendered standards, and experiences of depression.",
  },
];

const education = [
  {
    degree: "Ph.D. in Clinical Psychology",
    status: "In Progress",
    institution: "Department of Psychology, National Taiwan University",
    period: "Oct 2025 – Present",
    detail: null,
  },
  {
    degree: "M.S. in Educational Psychology and Counseling",
    status: null,
    institution: "National Tsing Hua University",
    period: "Oct 2022 – Jul 2025",
    detail:
      "Thesis: Narrative Inquiry of the Transformation Process of Alexithymia Tendency among College Students in Group Counseling Based on an Interpersonal Interaction Orientation.",
  },
];

const publications = [
  {
    type: "Journal Article",
    authors: "Jen, C.-W.",
    year: "2025",
    title:
      "Attachment-based family therapy in adolescent depression and suicide intervention: Applications and localization considerations.",
    venue: "Guidance Quarterly (輔導季刊), 61(3), 33-49.",
    status: "published",
  },
  {
    type: "Under Review",
    authors: "Jen, C. W.",
    year: "",
    title: "Emotional processing trajectories and conceptual perspectives on alexithymia.",
    venue: "Manuscript submitted for publication.",
    status: "review",
  },
  {
    type: "Under Review",
    authors: "Jen, C. W.",
    year: "",
    title:
      "Relational development in college students with alexithymic tendencies: A cross-case analysis of divergent pathways within an interpersonal group.",
    venue: "Manuscript submitted for publication.",
    status: "review",
  },
];

const conferences = [
  {
    authors: "Jen, C. W., Fang, M. C., & Hsu, Y. K.",
    year: "2026",
    title: "Differences in emotional experience and intensity in alexithymia: A psychometric analysis.",
    venue: "57th SPR Annual Meeting, Osaka, Japan.",
    type: "Poster (Accepted)",
  },
  {
    authors: "Jen, C. W., Fang, M. C., & Hsu, Y. K.",
    year: "2026",
    title:
      "Preliminary exploration of the experience of transformation in alexithymia with psychic retreat: A two-case narrative inquiry.",
    venue: "57th SPR Annual Meeting, Osaka, Japan.",
    type: "Brief Paper (Accepted)",
  },
  {
    authors: "Li, R. Y., Lee, S. C., & Jen, C. W.",
    year: "2026",
    title:
      "Expressive therapy mediated by music in an adolescent with non-suicidal self-injury: A single-case study.",
    venue: "57th SPR Annual Meeting, Osaka, Japan.",
    type: "Poster (Accepted)",
  },
  {
    authors: "Jen, C. W., & Hsu, Y. K.",
    year: "2025",
    title:
      "Narrative Inquiry of the Transformation Process of Alexithymia Tendency among College Students in Group Counseling Based on an Interpersonal Interaction Orientation.",
    venue: "Taiwan Counseling Psychology Association Annual Conference, Taichung, Taiwan.",
    type: "Presentation (Award)",
  },
  {
    authors: "Jen, C. W., & Hsu, Y. K.",
    year: "2025",
    title: "The Emotions and Emodiversity in Alexithymia.",
    venue: "56th SPR Annual Meeting, Krakow, Poland.",
    type: "Presentation",
  },
  {
    authors: "Jen, C.-W., Hsu, Y. K., & Chuah, S. K.",
    year: "2025",
    title: "Defensiveness in Encounter Groups for Taiwanese Sexual Minority Males.",
    venue: "56th SPR Annual Meeting, Krakow, Poland.",
    type: "Presentation",
  },
  {
    authors: "Jen, C. W.",
    year: "2024",
    title: "Integration of Group Counseling in Taiwan's Learning Assistance Program: An Action Research Approach.",
    venue: "16th Asian Conference on Education.",
    type: "Poster",
  },
  {
    authors: "Jen, C. W., Su, C. C., & Hsu, Y. K.",
    year: "2024",
    title:
      "Preliminary exploration of the benefits for alexithymia tendency participants in a counseling group by short-term interpersonal psychodynamic approach.",
    venue: "55th SPR Annual Meeting, Ottawa, Canada.",
    type: "Poster",
  },
  {
    authors: "Wu, H.-K., & Jen, C. W.",
    year: "2024",
    title:
      "Bridging tongues through the eyes of the young: Exploring English learning experiences among rural indigenous fourth graders in Taiwan.",
    venue: "2024 International Conference on Educational Innovation, Hsinchu, Taiwan.",
    type: "Presentation",
  },
  {
    authors: "Fang, M. C., & Jen, C. W.",
    year: "2024",
    title:
      "Predicaments of adult sexual minority males in transitional stages: A non-structured group process study.",
    venue: "2024 Taiwan Group Counseling and Therapy Research Association Annual Conference, Changhua, Taiwan.",
    type: "Poster",
  },
];

const positions = [
  {
    role: "Project Assistant",
    institution: "NTU Bilingual Education Center",
    institutionFull: "National Taiwan University Bilingual Education Center",
    period: "Jan 2026 – Present",
    status: "current" as const,
    location: "Taipei, Taiwan",
    supervisor: "Associate Prof. Catherine Pei Wern Chou (周珮雯)",
    supervisorInitials: "CP",
    supervisorPhoto: "/supervisors/chou.jpg",
    description:
      "Statistical analysis of EMI (English as a Medium of Instruction) teaching effectiveness across NTU courses. Responsibilities include data cleaning, quantitative analysis using SPSS/R, and preparation of research reports for program evaluation.",
    skills: ["EMI Research", "Quantitative Analysis", "SPSS", "Program Evaluation"],
  },
  {
    role: "Project Assistant",
    institution: "NTU Life Education Center",
    institutionFull: "National Taiwan University Life Education Center",
    period: "Oct 2025 – Present",
    status: "current" as const,
    location: "Taipei, Taiwan",
    supervisor: "Prof. Kaiping Grace Yao (姚開屏) and Prof. Hsiao-chih Sun (孫效智)",
    supervisorInitials: "YK",
    supervisorPhoto: "/supervisors/yao.png",
    description:
      "Development and psychometric validation of a spirituality scale, including item generation, expert review coordination, pilot testing, and statistical analysis.",
    skills: ["Scale Development", "Psychometrics", "Item Analysis", "Structural Validity"],
  },
  {
    role: "Research Assistant",
    institution: "Dept. of Educational Psychology and Counseling, NTU",
    institutionFull:
      "Department of Educational Psychology and Counseling, National Taiwan University",
    period: "Oct 2025 – Present",
    status: "current" as const,
    location: "Taipei, Taiwan",
    supervisor: "Prof. Yu-Kuang Kevin Hsu (許育光)",
    supervisorInitials: "HY",
    supervisorPhoto: "/supervisors/hsu.jpg",
    description:
      "Designing an integrated research project on adolescent internet addiction, including literature review synthesis, research protocol development, and project website construction.",
    skills: ["Internet Addiction", "Research Design", "Literature Review", "Web Construction"],
  },
  {
    role: "Research Assistant",
    institution: "NTHU Teaching Development Center",
    institutionFull: "National Tsing Hua University Teaching Development Center",
    period: "Jan 2023 – Jan 2024",
    status: "completed" as const,
    location: "Hsinchu, Taiwan",
    supervisor: "Assistant Prof. Tonny Menglun Kuo (郭孟倫)",
    supervisorInitials: "KM",
    supervisorPhoto: "/supervisors/guo.jpg",
    description:
      "Qualitative coding and analysis using grounded theory methodology, contributing to a study on learning communities. Responsibilities included inter-rater reliability checks, theoretical memo writing, and academic paper drafting.",
    skills: ["Grounded Theory", "Qualitative Coding", "NVivo", "Academic Writing"],
  },
];

function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <div className="border-t-2 border-zinc-700 pt-5 mb-16">
      <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] text-zinc-900 leading-[1.05]">
        {children}
      </h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero — pure white */}
      <section className="min-h-[100dvh] flex items-center bg-white border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-16 gap-y-12 lg:items-start">
            <div className="lg:col-span-3">
              <FadeIn y={16}>
                <p className="text-[10px] md:text-[11px] font-mono text-zinc-400 uppercase tracking-[0.12em] lg:whitespace-nowrap mb-8">
                  Counseling &amp; Clinical Psychology · Gender Studies · Masculinity and Mental Health
                </p>
              </FadeIn>
              <FadeIn delay={0.08} y={40}>
                <h1 className="text-5xl md:text-7xl lg:text-[3.85rem] xl:text-6xl font-bold tracking-[-0.035em] text-zinc-900 leading-[1] lg:whitespace-nowrap mb-3">
                  Wade Chi-Wei Jen
                </h1>
                <p className="text-2xl text-zinc-300 font-light tracking-[0.04em] mb-10">任祈蔚</p>
              </FadeIn>
              <FadeIn delay={0.16} y={32}>
                <div className="space-y-5 max-w-[48ch] mb-12">
                  <p className="text-[17px] text-zinc-500 leading-[1.75]">
                    I am a licensed counseling psychologist in Taiwan and a Ph.D. student in clinical
                    psychology at National Taiwan University. My work explores how gender shapes
                    emotional life, psychological suffering, and the ways people come to understand
                    themselves in relation to others.
                  </p>
                  <p className="text-[17px] text-zinc-500 leading-[1.75]">
                    My current research focuses on men, masculinity, depression, and emotional
                    expression. I am especially interested in how social expectations influence what
                    people feel able to say, hide, or need, and how clinical settings may both
                    reflect and unsettle these expectations.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.24} y={20}>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 active:scale-[0.98] transition-all duration-200"
                >
                  Academic Experience
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </FadeIn>
            </div>
            <div className="lg:col-span-2 flex justify-center lg:justify-end lg:pt-12">
              <div className="hero-parallax hero-image-enter">
                <div className="p-2 rounded-2xl bg-zinc-100 ring-1 ring-zinc-200/80 shadow-[0_8px_40px_-12px_rgba(24,24,27,0.12)]">
                  <div className="w-72 h-96 md:w-80 md:h-[26rem] rounded-xl overflow-hidden bg-zinc-200">
                    <Image
                      src="/wade.png"
                      alt="Wade Chi-Wei Jen"
                      width={512}
                      height={640}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education — cool grayish-white */}
      <section className="py-28 bg-[#EAECF1] border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn y={40}>
            <SectionHeader>Education</SectionHeader>
          </FadeIn>
          <div>
            {education.map((edu, i) => (
              <FadeIn key={edu.degree} delay={i * 0.08} y={28}>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 py-8 border-b border-zinc-300/60 last:border-b-0">
                  <div className="md:col-span-1">
                    <span className="text-xs font-mono text-zinc-500 tabular-nums leading-relaxed">
                      {edu.period}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-lg font-semibold text-zinc-900 leading-snug">
                        {edu.degree}
                      </p>
                      {edu.status && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-medium rounded-full uppercase tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {edu.status}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-500 mt-1">{edu.institution}</p>
                    {edu.detail && (
                      <p className="text-sm text-zinc-600 italic leading-relaxed mt-3 max-w-[60ch]">
                        {edu.detail}
                      </p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Honors and Awards — warm off-white */}
      <section className="py-28 bg-[#F0EEE9] border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn y={40}>
            <SectionHeader>Honors and Awards</SectionHeader>
          </FadeIn>
          <div>
            {awards.map((award, i) => (
              <FadeIn key={award.title} delay={i * 0.04} y={24}>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-5 border-b border-zinc-300/60 last:border-b-0 hover:bg-white/50 transition-colors duration-200 -mx-3 px-3 rounded">
                  <div className="md:col-span-1">
                    <span className="text-xs font-mono text-zinc-500 tabular-nums leading-relaxed">
                      {award.year}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-base font-medium text-zinc-900 leading-snug">{award.title}</p>
                    <p className="text-sm text-zinc-500 mt-1">{award.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests — pure white */}
      <section className="py-28 bg-white border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn y={40}>
            <SectionHeader>Research Interests</SectionHeader>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {artworks.map((art, i) => (
              <FadeIn key={art.interest} delay={i * 0.08} y={32}>
                <figure className="group">
                  <div className="overflow-hidden rounded-xl bg-[#FAFAF8] ring-1 ring-zinc-200/80 aspect-[4/5] flex items-center justify-center p-3">
                    <Image
                      src={art.image}
                      alt={art.artwork}
                      width={600}
                      height={750}
                      className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-5">
                    <p className="text-base font-semibold text-zinc-900 leading-snug">
                      {art.interest}
                    </p>
                    <p className="text-sm text-zinc-500 leading-relaxed mt-1.5">{art.meaning}</p>
                    <p className="text-xs text-zinc-400 italic mt-2.5">{art.artwork}</p>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Publications — cool grayish-white */}
      <section className="py-28 bg-[#EAECF1] border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn y={40}>
            <SectionHeader>Publications</SectionHeader>
          </FadeIn>
          <div>
            {publications.map((pub, i) => (
              <FadeIn key={pub.title} delay={i * 0.07} y={28}>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 py-8 border-b border-zinc-300/60 last:border-b-0 hover:bg-white/40 transition-colors duration-200 -mx-3 px-3 rounded">
                  <div className="md:col-span-1 pt-0.5">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide ${
                        pub.status === "published"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-zinc-200/70 text-zinc-600"
                      }`}
                    >
                      {pub.type}
                    </span>
                    {pub.year && (
                      <p className="text-xs font-mono text-zinc-500 mt-2 tabular-nums">{pub.year}</p>
                    )}
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm text-zinc-500 mb-2">{pub.authors}</p>
                    <p className="text-lg font-semibold text-zinc-900 leading-snug mb-2">{pub.title}</p>
                    <p className="text-sm text-zinc-500 italic">{pub.venue}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-20">
            <FadeIn y={32}>
              <div className="border-t-2 border-zinc-600 pt-5 mb-12">
                <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-zinc-900">
                  Conference Presentations
                </h3>
              </div>
            </FadeIn>
            <div>
              {conferences.map((conf, i) => (
                <FadeIn key={conf.title} delay={i * 0.05} y={24}>
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-6 py-6 border-b border-zinc-300/60 last:border-b-0 hover:bg-white/40 transition-colors duration-200 -mx-3 px-3 rounded">
                    <div className="md:col-span-1 pt-0.5">
                      <span className="text-sm font-mono text-zinc-500 tabular-nums">{conf.year}</span>
                      <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">{conf.type}</p>
                    </div>
                    <div className="md:col-span-5">
                      <p className="text-sm text-zinc-500 mb-2">{conf.authors}</p>
                      <p className="text-base font-medium text-zinc-900 leading-snug mb-2">{conf.title}</p>
                      <p className="text-sm text-zinc-500 italic">{conf.venue}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Work Experience */}
      <section id="experience" className="py-28 bg-[#F0EEE9]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn y={40}>
            <SectionHeader>Academic Work Experience</SectionHeader>
          </FadeIn>
          <div>
            {positions.map((pos, i) => (
              <FadeIn key={`${pos.role}-${pos.institution}`} delay={i * 0.06} y={24}>
                <div className="grid grid-cols-1 md:grid-cols-[130px_1fr_190px] gap-6 py-8 border-b border-zinc-300/60 last:border-b-0 hover:bg-white/60 transition-colors duration-200 -mx-3 px-3 rounded items-start">
                  <div className="space-y-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-medium rounded-full uppercase tracking-wide ${
                        pos.status === "current"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-zinc-200/70 text-zinc-500"
                      }`}
                    >
                      {pos.status === "current" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      )}
                      {pos.status === "current" ? "Active" : "Completed"}
                    </span>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-0.5">
                        Period
                      </p>
                      <p className="text-xs font-mono text-zinc-500 tabular-nums leading-relaxed">
                        {pos.period}
                      </p>
                    </div>
                    <p className="text-xs text-zinc-400">{pos.location}</p>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-zinc-900">{pos.role}</p>
                    <p className="text-sm text-zinc-500 mb-3">{pos.institutionFull}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-3">{pos.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {pos.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-zinc-200/60 text-zinc-600 text-[10px] font-medium rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 pt-1">
                    {pos.supervisorPhoto && (
                      <div className="w-[160px] h-[160px] rounded-full overflow-hidden ring-2 ring-zinc-200 shrink-0">
                        <Image
                          src={pos.supervisorPhoto}
                          alt={pos.supervisor.split("(")[0].trim()}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}
                    <p className="text-[16px] text-zinc-400 text-center leading-tight max-w-[200px]">
                      {pos.supervisor.split("(")[0].trim()}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3} y={16}>
            <div className="mt-12 pt-8 border-t border-zinc-300/60">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
              >
                View programs page
                <ArrowRight size={13} weight="regular" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
