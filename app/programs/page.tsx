import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Programs",
  description: "Research and project assistant experiences of Wade Chi-Wei Jen.",
};

export const dynamic = "force-dynamic";

export default function ProgramsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
        Academic Experience
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">Programs</h1>
      <p className="text-base text-zinc-500 leading-relaxed max-w-[45ch] mb-8">
        Full program details are available on the home page.
      </p>
      <Link
        href="/#experience"
        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
      >
        <ArrowLeft size={13} weight="regular" />
        Back to home
      </Link>
    </div>
  );
}
