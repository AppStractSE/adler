import CenterSection from "@/components/sections/CenterSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TwoPaneSection
        rtl
        button={{
          href: "/om-oss",
          text: "Läs mer om oss",
        }}
        className="border-b border-gray-300"
        image="/adler-byggservice.png"
        title="Snickare i Skara"
        text={`Vi erbjuder ett mångsidigt utbud av tjänster för allt från småfix till stora projekt. Med vår långa erfarenhet och passion för hantverk levererar vi skräddarsydda lösningar som inte bara möter, utan överträffar dina förväntningar.\n\nOavsett om det är en snabb reparation eller en omfattande renovering, sätter vi en ära i att få varje detalj att glänsa.`}
      />
      <ServicesSection className="border-b border-gray-300" />
      <TwoPaneSection
        button={{
          href: "/vara-tjanster/kok",
          text: "Läs mer om kök",
        }}
        className="border-b border-gray-300"
        image="/image002.webp"
        title="Köksplaner? Vi hjälper dig!"
        text={`Vi erbjuder professionell köksplanering och installation för att skapa ditt drömkök. Vårt team av erfarna hantverkare hjälper dig genom hela processen, från design till färdigställande.\n\nOavsett om du vill ha en modern, klassisk eller skräddarsydd lösning, så har vi expertisen och engagemanget för att göra ditt kök både funktionellt och stilrent.`}
      />
      <CenterSection
        button={{
          href: "/rotavdrag",
          text: "Till kalkylatorn",
        }}
        className="border-b border-gray-300"
        title="Hur räknar jag ut ROT-avdrag?"
        text={`ROT-avdraget är en skattereduktion som gör det billigare att renovera, bygga om eller bygga till i ditt hem. Det gäller för arbetskostnaden och kan ge dig upp till 30% rabatt på arbetskostnaden för godkända arbeten.\n\nVi har skapat en enkel kalkylator som hjälper dig att räkna ut hur mycket du kan spara med ROT-avdraget. Ange bara kostnaden för arbetet och se hur mycket du kan dra av på din skatt.`}
      />
      <ContactSection />
    </>
  );
}
