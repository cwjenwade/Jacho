import Link from "next/link";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-medium text-zinc-900">Wade Chi-Wei Jen</p>
          <p className="text-xs text-zinc-400 mt-0.5 font-mono">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="mailto:d14227201@ntu.edu.tw"
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
          >
            <EnvelopeSimple size={14} weight="regular" />
            d14227201@ntu.edu.tw
          </Link>
          <nav className="flex items-center gap-4">
            {[{ label: "Programs", href: "/programs" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
