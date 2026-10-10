import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://jacho.vercel.app"),
  title: {
    default: "Wade Chi-Wei Jen (任祈蔚) | Counseling Psychologist & Researcher",
    template: "%s | Wade Jen",
  },
  description:
    "Wade Chi-Wei Jen (任祈蔚) is a counseling psychologist and psychology researcher in Taiwan, with interests in emotional processing, alexithymia, group counseling, and psychotherapy.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wade Chi-Wei Jen",
    title: "Wade Chi-Wei Jen (任祈蔚) | Counseling Psychologist & Researcher",
    description:
      "Wade Chi-Wei Jen (任祈蔚) is a counseling psychologist and psychology researcher in Taiwan, with interests in emotional processing, alexithymia, group counseling, and psychotherapy.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-white font-sans antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script src="/brand/js/ga4.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
