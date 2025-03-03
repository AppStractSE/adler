import ContactSection from "@/components/sections/ContactSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offertförfrågan",
  openGraph: {
    title: "TC Elservice | Offertförfrågan",
    description: "Få en offert redan idag hos TC Elservice",
    url: "/offertforfragan",
    siteName: "TC Elservice",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "TC Elservice | Offertförfrågan",
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
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "TC Elservice - Offertförfrågan",
      },
    ],
    description: "Få en offert redan idag hos TC Elservice",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        title="Offertförfrågan"
        text="Få en offert redan idag"
      />
      <ContactSection />
    </>
  );
}
