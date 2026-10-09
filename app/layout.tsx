import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jacho.vercel.app"),
  title: { default: "小祈叔叔的心理學研究｜任祈蔚 諮商心理師", template: "%s｜小祈叔叔的心理學研究" },
  description: "任祈蔚諮商心理師的個人網站。關於心理諮商、情緒歷程、人格與關係，以及心理學研究與書寫。",
  openGraph: { type: "website", locale: "zh_TW", siteName: "小祈叔叔的心理學研究", title: "小祈叔叔的心理學研究" }
};
export default function RootLayout({children}:{children:ReactNode}) {
  return <html lang="zh-Hant" className={GeistSans.variable + " " + GeistMono.variable}>
    <body><Nav/><main id="main-content">{children}</main><Footer/></body>
  </html>;
}
