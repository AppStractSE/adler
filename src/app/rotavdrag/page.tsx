import RotavdragSection from "@/components/sections/RotavdragSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rotavdrag",
  openGraph: {
    title: "TC Elservice | Rotavdrag",
    description: "Välkommen till TC Elservice",
    url: "/om-oss",
    siteName: "TC Elservice",
    images: [
      {
        url: "/image006.webp",
        width: 1200,
        height: 630,
        alt: "TC Elservice | Rotavdrag",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    title: "TC Elservice",
    images: [
      {
        url: "/image006.webp",
        width: 1200,
        height: 630,
        alt: "TC Elservice - Rotavdrag",
      },
    ],
    description: "Välkommen till TC Elservice",
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
