import ContactSection from "@/components/sections/ContactSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Offertförfrågan",
  openGraph: {
    title: "Adler Byggservice | Offertförfrågan",
    description: "Få en offert redan idag hos Adler Byggservice",
    url: "/offertforfragan",
    siteName: "Adler Byggservice",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Adler Byggservice | Offertförfrågan",
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
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Adler Byggservice - Offertförfrågan",
      },
    ],
    description: "Få en offert redan idag hos Adler Byggservice",
  },
};

export default function Page() {
  return (
    <Suspense>
      <SubPageHeroSection
        title="Offertförfrågan"
        text="Få en offert redan idag"
        image="/hero-image003.webp"
      />
      <ContactSection />
    </Suspense>
  );
}
