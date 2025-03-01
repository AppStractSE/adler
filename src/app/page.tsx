import HeroSection from "@/components/sections/HeroSection";
import RotSection from "@/components/sections/RotSection";
import ServicePopupSection from "@/components/sections/ServicePopupSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";

export default function Home() {
  return (
    <>
      <HeroSection
        className={`bg-[url('/hero-image.webp')] bg-cover bg-center bg-no-repeat`}
      />
      <ServicePopupSection className="-mt-12 overflow-hidden border-b md:-mt-20" />
      <TwoPaneSection
        rtl
        button={{
          href: "/offertforfragan",
          text: "Skaffa dig ett smart hem",
        }}
        className="border-b"
        image="/image001.webp"
        title="Drömmer du om ett smart hem?"
        text={`Vi installerar smarta el- och styrsystem som sparar tid, pengar och energi, oavsett projektets storlek. Med våra lösningar får du ökad säkerhet, lägre energikostnader och en vardag som blir både smartare och enklare.`}
      />
      <ServicesSection className="border-b" />
      <TwoPaneSection
        button={{
          href: "/vara-tjanster/laddbox",
          text: "Läs mer om laddbox",
        }}
        className="border-b"
        image="/image002.webp"
        title="Nyfiken på laddbox?"
        text={`Planera och övervaka din laddning för att alltid ha tillräckligt med ström när du behöver det. Den hjälper också till att minimera din elräkning genom att ladda när elpriset är lägst.\n\nEn installation av en elbilsladdare är enkel och snabb. Du kan ansluta laddboxen till din elmätare och ställa in ditt laddningsschema med hjälp av den intuitiva appen.`}
      />
      <RotSection
        button={{
          href: "/rotavdrag",
          text: "Räkna ut ROT-avdrag",
        }}
        className="border-b"
        image="/image002.webp"
        title="Hur räknar jag ut ROT-avdrag?"
        text={`Planera och utnyttja rotavdraget för att minska kostnaderna för dina elinstallationer vid renovering eller nybyggnation. Våra lösningar säkerställer ett effektivt utförande, där du enkelt kan dra nytta av skatteavdraget för ett ekonomiskt resultat.`}
      />
    </>
  );
}
