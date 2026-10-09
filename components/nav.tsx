"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於小祈" },
  { href: "/counseling", label: "心理諮商" },
  { href: "/journal", label: "觀點書寫" },
  { href: "/research", label: "學術研究" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="xq-header">
      <div className="xq-nav-inner">
        <Link href="/" className="xq-logo" aria-label="小祈叔叔的心理學研究，回首頁" onClick={() => setOpen(false)}>
          小祈叔叔的心理學研究
        </Link>
        <nav className="xq-nav-links" aria-label="主要導覽">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              aria-current={pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/")) ? "page" : undefined}
              className={pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/")) ? "xq-active" : ""}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="xq-menu-toggle" type="button" aria-label={open ? "關閉選單" : "開啟選單"} aria-expanded={open}
          aria-controls="xq-mobile-nav" onClick={() => setOpen(!open)}>
          {open ? "關閉" : "選單"} <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open && <nav id="xq-mobile-nav" className="xq-mobile-nav" aria-label="手機導覽">
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
            aria-current={pathname === link.href ? "page" : undefined}>{link.label} <span aria-hidden="true">↗</span></Link>
        ))}
      </nav>}
    </header>
  );
}
