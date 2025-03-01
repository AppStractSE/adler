import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";
import { content } from "@/data/content";
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
      {content.services.map((service, index) => (
        <TwoPaneSection
          rtl={index % 2 === 0}
          key={index}
          button={{
            href: service.id,
            text: "Läs mer",
          }}
          className={index === content.services.length - 1 ? "" : "border-b"}
          image={service.image}
          title={service.title}
          text={service.description}
        />
      ))}
    </>
  );
}
