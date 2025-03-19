import CardWithOverlay from "@/components/cards/CardWithOverlay";
import CenteredSection from "@/components/sections/CenteredSection";
import CenterSection from "@/components/sections/CenterSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";
import SplideWithArrows from "@/components/splide/SplideWithArrows";
import { content } from "@/data/content";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

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
        image="/hero-image002.webp"
      />
      <CenteredSection className="overflow-hidden border-b">
        <h2 className="text-center text-3xl font-medium tracking-wide md:text-4xl lg:text-5xl">
          Allt för ström & ljus
        </h2>
        <p className="max-w-screen-md whitespace-pre-line text-balance text-center text-base md:text-lg">
          Smarta och säkra el-lösningar anpassade för alla behov – från hem och
          företag till industri och offentliga miljöer. Med vår expertis får du
          trygg och effektiv elservice, oavsett projektets storlek.
        </p>
        <SplideWithArrows
          options={{
            rewind: false,
            gap: "2rem",
            perPage: 3,
            perMove: 1,
            focus: 0,
            start: 0,
            pagination: false,
            trimSpace: true,
            breakpoints: {
              1280: {
                gap: "1.5rem",
                perPage: 2.5,
                pagination: true,
                trimSpace: false,
                arrows: false,
              },
              1024: {
                gap: "1rem",
                perPage: 1.75,
                pagination: true,
                arrows: false,
                trimSpace: false,
              },
              768: {
                gap: "1rem",
                perPage: 1.5,
                pagination: true,
                trimSpace: false,
                arrows: false,
              },
              640: {
                gap: "1rem",
                perPage: 1.25,
                pagination: true,
                trimSpace: false,
                arrows: false,
              },
              480: {
                gap: "1rem",
                perPage: 1.15,
                pagination: true,
                arrows: false,
              },
            },
            classes: {
              pagination: "splide__pagination custom__pagination",
              prev: "splide__arrow--prev splide__big__arrows !top-[45%]",
              next: "splide__arrow--next splide__big__arrows !top-[45%]",
            },
          }}
        >
          {content.services.map((service) => (
            <Link
              key={service.id}
              href={"/vara-tjanster/" + service.id}
              className="flex flex-col gap-6"
            >
              <div className="relative aspect-[1.5/1] md:aspect-[1.25/1]">
                <Image
                  priority
                  quality={100}
                  fill
                  src={service.image}
                  alt={service.title || "Service image"}
                  className="h-full w-full rounded-lg object-cover object-center"
                />
              </div>
              <h3 className="text-balance text-xl font-medium">
                {service.title}
              </h3>
            </Link>
          ))}
        </SplideWithArrows>
      </CenteredSection>
      {content.services.map((service, index) => (
        <TwoPaneSection
          rtl={index % 2 === 0}
          key={index}
          button={{
            href: "/vara-tjanster/" + service.id,
            text: "Läs mer",
          }}
          className="border-b border-gray-300"
          image={service.image}
          title={service.title}
          text={service.description}
        />
      ))}
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
      <CenterSection
        button={{
          href: "/rotavdrag",
          text: "Räkna ut ROT-avdrag",
        }}
        className="border-b border-gray-300"
        title="Hur räknar jag ut ROT-avdrag?"
        text={`Planera och utnyttja rotavdraget för att minska kostnaderna för dina elinstallationer vid renovering eller nybyggnation. Våra lösningar säkerställer ett effektivt utförande, där du enkelt kan dra nytta av skatteavdraget för ett ekonomiskt resultat.`}
      />
    </>
  );
}
