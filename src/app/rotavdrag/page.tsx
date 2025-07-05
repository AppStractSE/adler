import RotavdragSection from "@/components/sections/RotavdragSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rotavdrag",
  openGraph: {
    title: "Adler Byggservice | Rotavdrag",
    description: "Välkommen till Adler Byggservice",
    url: "/om-oss",
    siteName: "Adler Byggservice",
    images: [
      {
        url: "/image006.webp",
        width: 1200,
        height: 630,
        alt: "Adler Byggservice | Rotavdrag",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    title: "Adler Byggservice",
    images: [
      {
        url: "/image006.webp",
        width: 1200,
        height: 630,
        alt: "Adler Byggservice - Rotavdrag",
      },
    ],
    description: "Välkommen till Adler Byggservice",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        title="Rotavdrag"
        text="Räkna ut ROT-avdrag här"
        image="/hero-image005.webp"
      />
      <RotavdragSection />
    </>
  );
}
