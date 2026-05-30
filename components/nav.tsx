"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";

const links = [
  { label: "Programs", href: "/programs" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-zinc-900 tracking-tight hover:text-zinc-600 transition-colors duration-200"
          >
            Wade Jen
            <span className="ml-2 text-xs font-mono text-zinc-400 font-normal hidden sm:inline">
              任祈蔚
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
                    active
                      ? "text-zinc-900 font-semibold underline underline-offset-4 decoration-1"
                      : "text-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-zinc-500 hover:text-zinc-900 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-white md:hidden" style={{ top: "64px" }}>
          <nav className="px-6 py-8 flex flex-col gap-1">
            {links.map((link, i) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base transition-all duration-200 ${
                    active
                      ? "text-zinc-900 font-semibold underline underline-offset-4 decoration-1"
                      : "text-zinc-400 hover:text-zinc-900"
                  }`}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
