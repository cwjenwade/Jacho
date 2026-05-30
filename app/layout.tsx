import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Wade Chi-Wei Jen | Licensed Counselor & Clinical Psychology PhD Student",
    template: "%s | Wade Jen",
  },
  description:
    "Personal academic website of Wade Chi-Wei Jen (任祈蔚), licensed counselor in Taiwan and PhD student in clinical psychology at National Taiwan University, specializing in alexithymia and group psychotherapy.",
  keywords: [
    "Wade Chi-Wei Jen",
    "任祈蔚",
    "clinical psychology",
    "alexithymia",
    "group counseling",
    "psychotherapy",
    "NTU",
    "National Taiwan University",
    "mixed methods",
    "SPR",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Wade Chi-Wei Jen | Licensed Counselor & Clinical Psychology PhD Student",
    description:
      "Mixed-methods researcher at NTU investigating alexithymia and group psychotherapy.",
  },
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
      </body>
    </html>
  );
}
