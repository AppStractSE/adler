import ServicesSection from "@/components/sections/ServicesSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Våra tjänster",
  openGraph: {
    title: "TC Elservice | Våra tjänster",
    description: "Våra tjänster",
    url: "/vara-tjanster",
    siteName: "TC Elservice",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "TC Elservice | Våra tjänster",
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
        alt: "TC Elservice - Våra tjänster",
      },
    ],
    description: "Våra tjänster",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        title="Våra tjänster"
        text="Elektriker i Lindesberg"
      />
      <ServicesSection />
    </>
  );
}
