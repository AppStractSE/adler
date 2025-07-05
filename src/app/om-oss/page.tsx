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
      "Välkommen till Adler Byggservice – din lokala expert på el och automation i Lindesberg.",
    url: "/om-oss",
    siteName: "Adler Byggservice",
    images: [
      {
        url: "/image006.webp",
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
    title: "Adler Byggservice",
    images: [
      {
        url: "/image006.webp",
        width: 1200,
        height: 630,
        alt: "Adler Byggservice - Om oss",
      },
    ],
    description:
      "Välkommen till Adler Byggservice – din lokala expert på el och automation i Lindesberg.",
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
          Er byggpartner i Skara
        </h2>
        <p className="max-w-screen-md whitespace-pre-line text-balance text-center text-base md:text-lg">
          {`Välkommen till Adler Byggservice AB – Er lokala byggpartner i Skara. Inget jobb är för stort eller för litet för oss. Vi erbjuder allt från renoveringar och ombyggnationer till nybyggnationer och tillbyggnader, både inne och ute. Vår passion är att skapa hållbara och funktionella lösningar som möter era behov och önskemål.\n\nVi är stolta över att vara en del av Skara-samhället och ser fram emot att hjälpa er med ert nästa byggprojekt.`}
        </p>
      </CenteredSection>
      <TwoPaneSection
        rtl
        className="border-b border-gray-300"
        image="/adler-byggservice.png"
        title="Vår historia"
        text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit magni, asperiores harum dolor in blanditiis odio consequuntur nostrum deserunt quo reiciendis eos? Ipsam voluptatibus eius alias laborum ducimus eos?`}
      />
      <TwoPaneSection
        className="border-b border-gray-300"
        image="/image006.webp"
        title="Våra värderingar"
        text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit magni, asperiores harum dolor in blanditiis odio consequuntur nostrum deserunt quo reiciendis eos? Ipsam voluptatibus eius alias laborum ducimus eos?`}
      />
      <ServicesSection />
    </>
  );
}
