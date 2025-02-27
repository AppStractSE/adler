import ServicesSection from "@/components/sections/ServicesSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss",
  openGraph: {
    title: "TC Elservice | Om oss",
    description: "Välkommen till TC Elservice",
    url: "/om-oss",
    siteName: "TC Elservice",
    images: [
      {
        url: "/image006.webp",
        width: 1200,
        height: 630,
        alt: "TC Elservice | Om oss",
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
        alt: "TC Elservice - Om oss",
      },
    ],
    description: "Välkommen till TC Elservice",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection title="Om oss" text="Allt du förväntar dig" />
      <ServicesSection />
    </>
  );
}
