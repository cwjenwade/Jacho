"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ImageSquare } from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/fade-in";
import { motion } from "framer-motion";

const spectrum = [
  {
    pole: "Meaning-making",
    node: "#B45309",
    title: "Qualitative & Interpretive",
    blurb: "Deep-dive into human stories and subjective experiences through rigorous inquiry.",
    skills: ["Narrative Inquiry", "Thematic Analysis", "Grounded Theory", "Interview Research", "Content Analysis", "Action Research"],
  },
  {
    pole: "Precision",
    node: "#1D4ED8",
    title: "Quantitative & Psychometric",
    blurb: "Rigorous validation and algorithmic modeling, powered by R, JASP, and MATLAB.",
    skills: [
      "Structural Equation Modeling",
      "Factor Analysis (EFA/CFA)",
      "Scale Development",
      "Categorical Data Analysis",
      "Basic Statistics",
      "Item Response Theory"
    ],
  },
];

const mondrianItems = [
  {
    id: "01",
    category: "Clinical Core",
    skills: ["Licensed Counseling Psychologist"],
    bgPos: "0% 0%",
    exit: { y: "-100%" },
  },
  {
    id: "02",
    category: "Visual Aesthetics",
    skills: ["Web & Graphic Design", "UI / UX", "Digital Aesthetics"],
    bgPos: "100% 0%",
    exit: { x: "100%" },
  },
  {
    id: "03",
    category: "Operational Strategy",
    skills: ["Project Management", "SEM / SEO Strategy"],
    bgPos: "0% 100%",
    exit: { x: "-100%" },
  },
  {
    id: "04",
    category: "System Architecture",
    skills: ["System Design", "Workflow Automation"],
    bgPos: "100% 100%",
    exit: { y: "100%" },
  },
];

const projects = [
  {
    name: "Digital Picture Book",
    tagline: "Narrative-based intervention via LINE",
    phase: "Visual Prototyping",
    accent: "#B45309",
    accentSoft: "#FBF1E3",
    image: "/programs/digital-picture-book.png",
    goal: "Utilizing Picture Book Therapy to deliver narrative-based psychological interventions through an accessible LINE-based experience.",
    progress: [{ label: "Script", done: true }, { label: "System Architecture", done: true }, { label: "Visual Design", done: false }],
  },
  {
    name: "IELTS CAT",
    tagline: "Adaptive Testing for language assessment",
    phase: "Conceptual Modeling",
    accent: "#1D4ED8",
    accentSoft: "#EAF0FB",
    image: "/programs/ielts-cat.png",
    goal: "Implementing Computerized Adaptive Testing to streamline the IELTS experience with higher measurement precision and fewer items.",
    progress: [{ label: "Item Bank Design", done: false }, { label: "Adaptive Logic", done: false }],
  },
  {
    name: "The Monster System",
    tagline: "Behavioral reinforcement RPG",
    phase: "Logic Framework",
    accent: "#EA580C",
    accentSoft: "#FBEEE3",
    image: "/programs/monster-system.png",
    goal: "A gamified behavioral reinforcement system that transforms task management into a monster-raising RPG.",
    progress: [{ label: "Reward Logic", done: false }, { label: "Game Loop", done: false }],
  },
];

type Project = (typeof projects)[number];

function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <div className="border-t border-[#EAEAEA] pt-6 mb-16">
      <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#111111] leading-none">
        {children}
      </h3>
    </div>
  );
}

function MondrianBlock({ item }: { item: (typeof mondrianItems)[0] }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-xl border border-[#EAEAEA] group bg-white shadow-sm hover:shadow-xl transition-all duration-700">
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-0">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#787774] opacity-60">
            Category · {item.id}
          </span>
          <h4 className="text-xl font-bold text-[#111111] tracking-tight mt-4">{item.category}</h4>
          <ul className="mt-6 space-y-3">
            {item.skills.map((s) => (
              <li key={s} className="text-[14px] text-[#2F3437] font-medium leading-tight">{s}</li>
            ))}
          </ul>
        </div>
        <div className="h-px w-6 bg-[#111111]" />
      </div>

      <motion.div
        initial={{ x: 0, y: 0 }}
        whileHover={item.exit}
        transition={{ duration: 0.2, ease: "linear" }}
        className="absolute inset-0 z-10 cursor-pointer grayscale-[0.8] sepia-[0.2] contrast-[1.1] hover:grayscale-0 hover:sepia-0 transition-all duration-200 shadow-inner"
        style={{
          backgroundImage: "url('/art/mondrian.jpg')",
          backgroundSize: "200% 200%",
          backgroundPosition: item.bgPos,
        }}
      />
    </div>
  );
}

function ProjectMeta({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono rounded-full uppercase tracking-wider border border-zinc-200" style={{ backgroundColor: "#FFFFFF", color: "#787774" }}>
        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: project.accent }} />
        {project.phase}
      </span>
      <h3 className={`${featured ? "text-2xl md:text-3xl" : "text-xl"} font-bold text-[#111111] tracking-[-0.02em] mt-6`}>{project.name}</h3>
      <p className="text-sm text-[#787774] font-medium mt-1.5">{project.tagline}</p>
      <p className="text-[15px] text-[#2F3437] leading-relaxed mt-5 max-w-[42ch]">{project.goal}</p>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
        {project.progress.map((step) => (
          <span key={step.label} className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-tight">
            <span className={`w-1.5 h-1.5 rounded-full ${step.done ? "" : "border border-zinc-300"}`} style={step.done ? { backgroundColor: project.accent } : undefined} />
            <span className={step.done ? "text-[#111111] font-bold" : "text-[#787774]"}>{step.label}</span>
          </span>
        ))}
      </div>
    </>
  );
}

export default function ProgramsPage() {
  return (
    <div className="bg-white min-h-screen text-[#111111] selection:bg-[#E1F3FE]">
      {/* Manifesto */}
      <section className="bg-white border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 pt-40 pb-28 text-center md:text-left">
          <FadeIn y={20}>
            <p className="text-[10px] font-mono text-[#787774] uppercase tracking-[0.25em] mb-12">Programs · Framework</p>
          </FadeIn>
          <FadeIn delay={0.1} y={32}>
            <h1 className="text-3xl md:text-[3.25rem] font-bold tracking-[-0.04em] leading-[1.1] max-w-4xl mx-auto md:mx-0">
              Sometimes I need to make something out of what’s in my head, just to digest everything I’ve taken in. It makes life a little more interesting.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Research Spectrum */}
      <section className="py-32 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn y={40}><SectionHeader>Research Method</SectionHeader></FadeIn>

          <FadeIn delay={0.1} y={20}>
            <div className="relative mb-20 px-4">
              <div className="absolute left-0 right-0 top-[7px] h-[1px] bg-[#EAEAEA]" />
              <div className="relative flex justify-between">
                {spectrum.map((band) => (
                  <div key={band.pole} className="flex flex-col items-center">
                    <div
                      className="w-3.5 h-3.5 rounded-full border-4 border-white"
                      style={{ backgroundColor: band.node }}
                    />
                    <span className="mt-4 text-[10px] font-mono uppercase tracking-[0.2em] text-[#787774]">
                      {band.pole}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {spectrum.map((band, i) => (
              <FadeIn key={band.title} delay={0.15 + i * 0.1} y={28}>
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#111111] tracking-tight">
                    {band.title}
                  </h3>
                  <p className="text-[15px] text-[#787774] leading-relaxed mt-4 mb-10 max-w-sm">
                    {band.blurb}
                  </p>
                  <div className="flex flex-wrap gap-2.5 mt-auto">
                    {band.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 bg-white border border-[#EAEAEA] text-[#2F3437] text-[11px] font-mono uppercase tracking-tight rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Core */}
      <section className="py-32 bg-[#FBFBFA] border-b border-[#EAEAEA]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn y={40}>
            <div className="flex items-end justify-between border-t border-[#EAEAEA] pt-6 mb-16">
              <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#111111] leading-none">
                Operational Core
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#787774] opacity-50 mb-1">
                [ Hover to reveal ]
              </span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {mondrianItems.map((item, i) => (
              <FadeIn key={item.id} delay={0.1 + i * 0.05} y={32}>
                <MondrianBlock item={item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Active Development */}
      <section className="py-32 bg-[#F7F6F3]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn y={40}><SectionHeader>Active Development</SectionHeader></FadeIn>
          <div className="space-y-16">
            <FadeIn y={32}>
                <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#EAEAEA] transition-all duration-500 hover:border-zinc-300 h-full">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 p-6 md:p-10 md:items-center">
                    <div className="md:col-span-7 md:pr-12">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#EAEAEA] bg-[#FBFBFA] flex items-center justify-center">
                         {projects[0].image ? (
                           <Image src={projects[0].image} alt={projects[0].name} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                         ) : (
                           <div className="opacity-10"><ImageSquare size={48} weight="thin" /></div>
                         )}
                      </div>
                    </div>
                    <div className="md:col-span-5"><ProjectMeta project={projects[0]} featured /></div>
                  </div>
                </article>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.slice(1).map((project, i) => (
                <FadeIn key={project.name} delay={0.1 + i * 0.1} y={32}>
                   <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#EAEAEA] transition-all duration-500 hover:border-zinc-300 h-full">
                      <div className="flex flex-col p-6 md:p-8">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#EAEAEA] bg-[#FBFBFA] flex items-center justify-center">
                           {project.image ? (
                             <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                           ) : (
                             <div className="opacity-10"><ImageSquare size={32} weight="thin" /></div>
                           )}
                        </div>
                        <div className="mt-8"><ProjectMeta project={project} /></div>
                      </div>
                   </article>
                </FadeIn>
              ))}
            </div>
          </div>
          <FadeIn delay={0.4} y={16}>
            <div className="mt-24 pt-12 border-t border-zinc-200 flex justify-between items-center text-[#787774]">
              <Link href="/" className="inline-flex items-center gap-3 text-[13px] font-bold text-[#111111] uppercase tracking-wider hover:opacity-60 transition-opacity">
                <ArrowLeft size={16} weight="bold" /> Return
              </Link>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-30">Wade Chi-Wei Jen · 2026</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
