import CardWithOverlay from "@/components/cards/CardWithOverlay";
import CenteredSection from "@/components/sections/CenteredSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";
import SplideWithArrows from "@/components/splide/SplideWithArrows";
import { content } from "@/data/content";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Om oss",
  openGraph: {
    title: "TC Elservice | Om oss",
    description:
      "Välkommen till TC Elservice – din lokala expert på el och automation i Lindesberg.",
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
    description:
      "Välkommen till TC Elservice – din lokala expert på el och automation i Lindesberg.",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        title="Om oss"
        text="Allt du förväntar dig"
        image="/hero-image004.webp"
      />
      <CenteredSection className="border-b border-gray-300">
        <h2 className="text-center text-3xl font-medium tracking-wide md:text-4xl lg:text-5xl">
          Din elpartner i Lindesberg
        </h2>
        <p className="max-w-screen-md whitespace-pre-line text-balance text-center text-base md:text-lg">
          {`Välkommen till TC Elservice AB – din lokala specialist på el och automation i Lindesberg! Vi är ett ungt företag, grundat i mars 2024 av Kiattisak "Ton" Chokla, som med över tio års erfarenhet i branschen brinner för att leverera smarta och hållbara lösningar.\n\nVårt mål är att förenkla din vardag, oavsett om det handlar om ett mindre servicejobb eller ett större projekt. Ton startade företaget med en tydlig tanke: att kombinera hög kvalitet med personlig service. Vi är stolta över att vara en del av Lindesberg och ser fram emot att hjälpa dig med allt inom el!`}
        </p>
      </CenteredSection>
      <TwoPaneSection
        rtl
        className="border-b border-gray-300"
        image="/ton-elskap.png"
        title="Vår historia"
        text={`TC Elservice AB föddes ur en idé om att erbjuda pålitliga och kundanpassade elinstallationer. Ton, vår grundare, har varit i elbranschen sedan 2014 – och med hans energi har han byggt upp en stabil grund av kunskap.\n\nVi har som ambition i Lindesberg att växa och bli det självklara valet för el och automation i regionen.`}
      />
      <TwoPaneSection
        imageClasses="aspect-auto object-cover"
        className="border-b border-gray-300"
        image="/cert.jpg"
        title="Kvalitet i varje steg"
        text={`Vi tar oss an samma uppdrag som andra elfirmor, men med extra omsorg. Vi håller vad vi lovar när det gäller tid och håller dig uppdaterad om något ändras. Tillsammans planerar vi ditt projekt, genomför det med precision och lämnar det i toppskick – både praktiskt och estetiskt. Du slipper oroa dig för stök eller halvdana resultat, för vi gör det ordentligt från start till slut.`}
      />
      <TwoPaneSection
        rtl
        className="border-b border-gray-300"
        image="/image006.webp"
        title="Våra värderingar"
        text={`Kunden är alltid vår prioritet. Med Tons Auktorisation A från Elsäkerhetsverket garanterar vi installationer som är både säkra och enligt reglerna. Vi satsar på raka besked, miljövänliga lösningar och resultat du kan lita på. Från Lindesberg når vi ut till närområdet, redo för både små fixar och större utmaningar.`}
      />
      {/* <CenteredSection className="overflow-hidden border-b">
        <div className="flex flex-col gap-6 md:gap-8">
          <h2 className="w-full text-balance text-3xl font-medium tracking-wide sm:text-4xl md:text-5xl">
            Några av våra tidigare projekt
          </h2>
          <p className="whitespace-pre-line text-balance text-base md:text-lg">
            Nyfiken på vad vi har gjort tidigare? Här kan du se några av våra
            tidigare projekt, där vi har hjälpt kunder med allt från solceller
            och belysning till elinstallationer och nätverksinstallationer.
          </p>
        </div>
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
        <Link
          href="/projekt"
          className="flex w-fit items-center gap-2 transition-all duration-200 ease-in-out hover:gap-3 hover:text-cyan-500"
        >
          <ArrowRight size={18} />
          <p className="text-base font-medium underline underline-offset-4 md:text-lg">
            Gå till projekt
          </p>
        </Link>
      </CenteredSection> */}
      <ServicesSection />
    </>
  );
}
