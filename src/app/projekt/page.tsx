import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekt",
  openGraph: {
    title: "TC Elservice | Projekt",
    description: "Titta närmare på några av våra tidigare projekt",
    url: "/projekt",
    siteName: "TC Elservice",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "TC Elservice | Projekt",
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
        alt: "TC Elservice - Projekt",
      },
    ],
    description: "Titta närmare på några av våra tidigare projekt",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        title="Projekt"
        text="Titta närmare på några av våra tidigare projekt"
      />
    </>
  );
}
