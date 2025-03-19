import CardWithOverlay from "@/components/cards/CardWithOverlay";
import CenteredSection from "@/components/sections/CenteredSection";
import CenterSection from "@/components/sections/CenterSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicePopupSection from "@/components/sections/ServicePopupSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";
import { content } from "@/data/content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <>
      <HeroSection
        className={`bg-[url('/hero-image.webp')] bg-cover bg-center bg-no-repeat`}
      />
      <ServicePopupSection className="-mt-12 overflow-hidden border-b border-gray-300 md:-mt-20" />
      <TwoPaneSection
        rtl
        button={{
          href: "/om-oss",
          text: "Läs mer om oss",
        }}
        className="border-b border-gray-300"
        image="/ton-elskap.png"
        title="Varmt välkomna till TC Elservice!"
        text={`Vi är ett litet företag med stora ambitioner, grundat 2024 av Kiattisak "Ton" Chokla – en auktoriserad elektriker med över 10 års erfarenhet. Från Lindesberg levererar vi smarta och säkra el- och automationslösningar för hem och företag. Service är vår styrka, men vi fixar allt från nybyggnation till ROT-projekt.`}
      />
      <CenteredSection className="border-b border-gray-300">
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
        <div className="grid w-full grid-cols-1 grid-rows-1 items-start gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
          {content.projects.slice(0, 3).map((project, index) => (
            <CardWithOverlay
              key={index}
              href={"/projekt/"}
              title={project.title}
              subtitle="Projekt"
              description={project.description}
              image={project.image}
              className={twMerge(
                index == 2 ? "md:col-span-2" : "",
                "max-h-[450px]",
              )}
            />
          ))}
        </div>
        <Link
          href="/projekt"
          className="flex w-fit items-center gap-2 transition-all duration-200 ease-in-out hover:gap-3 hover:text-cyan-500"
        >
          <ArrowRight size={18} />
          <p className="text-base font-medium underline underline-offset-4 md:text-lg">
            Gå till projekt
          </p>
        </Link>
      </CenteredSection>
      <TwoPaneSection
        rtl
        button={{
          href: "/vara-tjanster/belysning",
          text: "Skaffa dig ett smart hem",
        }}
        className="border-b border-gray-300"
        image="/plejd-app.png"
        title="Drömmer du om ett smart hem?"
        text={`Vi installerar smarta el- och styrsystem som sparar tid, pengar och energi, oavsett projektets storlek. Med våra lösningar får du ökad säkerhet, lägre energikostnader och en vardag som blir både smartare och enklare.`}
      />
      <ServicesSection className="border-b border-gray-300" />
      <TwoPaneSection
        button={{
          href: "/vara-tjanster/laddbox",
          text: "Läs mer om laddbox",
        }}
        className="border-b border-gray-300"
        image="/image002.webp"
        title="Nyfiken på laddbox?"
        text={`Planera och övervaka din laddning för att alltid ha tillräckligt med ström när du behöver det. Den hjälper också till att minimera din elräkning genom att ladda när elpriset är lägst.\n\nEn installation av en elbilsladdare är enkel och snabb. Du kan ansluta laddboxen till din elmätare och ställa in ditt laddningsschema med hjälp av den intuitiva appen.`}
      />
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
