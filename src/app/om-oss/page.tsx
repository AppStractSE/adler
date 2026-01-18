import CenteredSection from "@/components/sections/CenteredSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss",
  openGraph: {
    title: "Adler Byggservice | Om oss",
    description:
      "Lär känna Adler Byggservice – ett lokalt byggföretag i Skara med fokus på kvalitet, hållbarhet och pålitlighet.",
    url: "/om-oss",
    siteName: "Adler Byggservice",
    images: [
      {
        url: "/Tjänster-kök.jpeg",
        width: 1200,
        height: 630,
        alt: "Adler Byggservice | Om oss",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    title: "Adler Byggservice | Om oss",
    images: [
      {
        url: "/Tjänster-kök.jpeg",
        width: 1200,
        height: 630,
        alt: "Adler Byggservice | Om oss",
      },
    ],
    description:
      "Adler Byggservice är din lokala byggpartner i Skara och Skaraborg.",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        title="Om oss"
        text="Vi är ett lokalt byggteam med stort engagemang."
        image="/hero-image.webp"
      />
      <CenteredSection className="border-b border-neutral-300">
        <h2 className="text-center text-3xl font-medium md:text-4xl lg:text-5xl">
          Er byggpartner i Skara och Skaraborg
        </h2>
        <p className="max-w-screen-md whitespace-pre-line text-balance text-center text-base md:text-lg">
          {`Adler Byggservice är ett byggföretag med bas i Skara, men vi arbetar över hela Skaraborg. Sedan starten 2011 har vi hjälpt privatpersoner, företag och föreningar med allt inom bygg och renovering – från mindre arbeten till större projekt.\n\nVi lägger stor vikt vid tydlig kommunikation, god planering och ett slutresultat som håller över tid. Oavsett uppdrag kan du känna dig trygg med att vi tar ansvar hela vägen, från första kontakt till färdigt arbete.`}
        </p>
      </CenteredSection>
      <TwoPaneSection
        rtl
        className="border-b border-neutral-300"
        image="/adler-byggservice.png"
        title="Vår historia"
        text={`Företaget startades 2011 med en tydlig vision: att erbjuda pålitliga byggtjänster och skapa långsiktiga relationer med våra kunder. Idag är vi fem anställda med en samlad erfarenhet på över 120 år inom byggbranschen.\n\nGenom åren har vi haft förmånen att arbeta med många olika typer av projekt runt om i Skaraborg. Att en stor del av våra uppdrag kommer via rekommendationer ser vi som ett kvitto på vårt engagemang och vår kvalitet.`}
      />
      <TwoPaneSection
        className="border-b border-neutral-300"
        image="/20231221_130143.jpg"
        title="Våra värderingar"
        text={`Kvalitet, hållbarhet och pålitlighet är grunden i allt vi gör. Vi tror på att hålla vad vi lovar, vara punktliga och lyhörda samt att alltid arbeta med respekt för både kund och hem.\n\nVår vision har varit densamma sedan start – att bygga goda relationer genom ärlighet och ett personligt bemötande. Vårt motto sammanfattar det bäst: Då vi är gäster i kundens hem ska vi utföra arbetet med respekt.`}
      />
      <ServicesSection />
    </>
  );
}
