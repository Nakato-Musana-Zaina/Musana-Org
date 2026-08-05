import type { Metadata } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/fraunces/900.css";
import "@fontsource/fraunces/600-italic.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Musana | The Humanitarian Organisation",
  description:
    "Musana means light from the sun. We care for orphans through Quran studies and education, empower vulnerable women with skills, and build clean water, food and shelter for communities across Eastern Uganda.",
  keywords: [
    "Musana",
    "Uganda charity",
    "orphan care Uganda",
    "women empowerment Uganda",
    "clean water Uganda",
    "Eastern Uganda humanitarian",
  ],
  openGraph: {
    title: "Musana | The Humanitarian Organisation",
    description:
      "Light for orphans, women and communities across Eastern Uganda. Join us.",
    images: ["/images/feeding-children.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-cream text-charcoal">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
