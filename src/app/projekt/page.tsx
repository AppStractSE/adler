import CardWithOverlay from "@/components/cards/CardWithOverlay";
import CenteredSection from "@/components/sections/CenteredSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import SplideWithArrows from "@/components/splide/SplideWithArrows";
import { content } from "@/data/content";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

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
      <CenteredSection className="overflow-hidden border-b">
        <h2 className="text-center text-3xl font-medium tracking-wide md:text-4xl lg:text-5xl">
          Nyfiken på vad vi kan göra?
        </h2>
        <p className="max-w-screen-md whitespace-pre-line text-balance text-center text-base md:text-lg">
          Utforska våra tidigare projekt och tjänster för att få en bättre
          förståelse för hur vi kan hjälpa dig. Oavsett om det är en mindre
          installation eller ett större entreprenadprojekt, har vi lösningen för
          dig.
        </p>
        <SplideWithArrows
          options={{
            rewind: false,
            gap: "2rem",
            perPage: 1.75,
            perMove: 1,
            focus: 0,
            start: 0,
            pagination: false,
            trimSpace: true,
            breakpoints: {
              1280: {
                gap: "1.5rem",
                perPage: 1.5,
                pagination: true,
                trimSpace: false,
                arrows: false,
              },
              1024: {
                gap: "1rem",
                perPage: 1.33,
                pagination: true,
                arrows: false,
                trimSpace: false,
              },
              768: {
                gap: "1rem",
                perPage: 1.25,
                pagination: true,
                trimSpace: false,
                arrows: false,
              },
              640: {
                gap: "1rem",
                perPage: 1.15,
                pagination: true,
                trimSpace: false,
                arrows: false,
              },
              480: {
                gap: "1rem",
                perPage: 1.05,
                pagination: true,
                arrows: false,
              },
            },
            classes: {
              pagination: "splide__pagination custom__pagination",
              prev: twMerge(
                "splide__arrow--prev splide__big__arrows",
                "!top-[50%]",
              ),
              next: twMerge(
                "splide__arrow--next splide__big__arrows",
                "!top-[50%]",
              ),
            },
          }}
        >
          {content.projects.map((project, index) => (
            <CardWithOverlay
              key={index}
              href={"/projekt/"}
              title={project.title}
              subtitle="Projekt"
              description={project.description}
              image={project.image}
              className="lg:aspect-video"
            />
          ))}
        </SplideWithArrows>
      </CenteredSection>
    </>
  );
}
