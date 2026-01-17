import Button from "@/components/buttons/Button";
import CenteredSection from "@/components/sections/CenteredSection";
import CenterSection from "@/components/sections/CenterSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection className="border-b border-neutral-300" />
      <CenteredSection className="border-b border-neutral-300">
        <h2 className="max-w-screen-md text-balance text-center text-3xl font-medium md:text-4xl lg:text-5xl">
          Hyr byggnadsställningar med komplett leverans & montage
        </h2>
        <p className="max-w-screen-md whitespace-pre-line text-balance text-center text-base md:text-lg">
          {`Börjar det bli dags att bygga om, renovera eller bygga nytt och du har behov av att hyra byggställning?`}
        </p>
        <Image
          priority
          quality={100}
          src="/byggstallning.jpg"
          alt=""
          height={800}
          width={1200}
          className={twMerge(
            "h-auto w-full max-w-full rounded-sm object-cover object-center",
          )}
        />
        <div className="flex items-center">
          <Button
            href="/hyr-byggstallning"
            text="Till våra byggställningar"
            className="min-w-fit bg-primary px-8 text-background hover:bg-primary/90 md:text-lg"
          />
        </div>
      </CenteredSection>
      <TwoPaneSection
        rtl
        button={{
          href: "/om-oss",
          text: "Läs mer om oss",
        }}
        className="border-b border-neutral-300"
        image="/adler-byggservice.png"
        title="Snickare i Skara"
        text={`Vi erbjuder ett mångsidigt utbud av tjänster för allt från småfix till stora projekt. Med vår långa erfarenhet och passion för hantverk levererar vi skräddarsydda lösningar som inte bara möter, utan överträffar dina förväntningar.\n\nOavsett om det är en snabb reparation eller en omfattande renovering, sätter vi en ära i att få varje detalj att glänsa.`}
      />
      <TwoPaneSection
        button={{
          href: "/vara-tjanster/kok",
          text: "Läs mer om kök",
        }}
        className="border-b border-neutral-300"
        image="/image002.webp"
        title="Köksplaner? Vi hjälper dig!"
        text={`Vi erbjuder professionell köksplanering och installation för att skapa ditt drömkök. Vårt team av erfarna hantverkare hjälper dig genom hela processen, från design till färdigställande.\n\nOavsett om du vill ha en modern, klassisk eller skräddarsydd lösning, så har vi expertisen och engagemanget för att göra ditt kök både funktionellt och stilrent.`}
      />
      <CenterSection
        button={{
          href: "/rotavdrag",
          text: "Till kalkylatorn",
        }}
        className="border-b border-neutral-300"
        title="Hur räknar jag ut ROT-avdrag?"
        text={`ROT-avdraget är en skattereduktion som gör det billigare att renovera, bygga om eller bygga till i ditt hem. Det gäller för arbetskostnaden och kan ge dig upp till 30% rabatt på arbetskostnaden för godkända arbeten.\n\nVi har skapat en enkel kalkylator som hjälper dig att räkna ut hur mycket du kan spara med ROT-avdraget. Ange bara kostnaden för arbetet och se hur mycket du kan dra av på din skatt.`}
      />
      <ContactSection />
    </>
  );
}
