import RefButton from "@/components/buttons/RefButton";
import ScaffoldingForm from "@/components/forms/ScaffoldingForm";
import CenteredSection from "@/components/sections/CenteredSection";
import ScaffoldingFAQSection from "@/components/sections/ScaffoldingFAQSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";
import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Hyr byggställning",
  openGraph: {
    title: "Adler Byggservice | Hyr byggställning",
    description: "Välkommen till Adler Byggservice",
    url: "/hyr-byggstallning",
    siteName: "Adler Byggservice",
    images: [
      {
        url: "/byggstallning.jpg",
        width: 1200,
        height: 630,
        alt: "Adler Byggservice | Hyr byggställning",
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
        url: "/byggstallning.jpg",
        width: 1200,
        height: 630,
        alt: "Adler Byggservice - Hyr byggställning",
      },
    ],
    description: "Välkommen till Adler Byggservice",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        title="Hyr byggställning"
        text="Vi erbjuder uthyrning av byggställningar för alla typer av byggprojekt."
        image="/byggstallning.jpg"
      />
      <CenteredSection className="border-b border-neutral-300">
        <h2 className="max-w-screen-md text-balance text-center text-3xl font-medium md:text-4xl lg:text-5xl">
          Hyr byggnadsställningar med komplett leverans & montage
        </h2>
        <p className="max-w-screen-md whitespace-pre-line text-balance text-center text-base md:text-lg">
          {`Börjar det bli dags att bygga om, renovera eller bygga nytt och du har behov av att hyra byggställning?`}
        </p>
        <div className="flex items-center">
          <RefButton
            targetId="ref"
            text="Hyr nu"
            className="min-w-fit bg-primary px-8 text-background hover:bg-primary/90 md:text-lg"
          />
        </div>
      </CenteredSection>
      <TwoPaneSection
        rtl
        className="border-b border-neutral-300"
        image="/byggstallningar.jpg"
        title="En byggställning gör jobbet enklare"
        text={`
          Att arbeta på höjder utan rätt utrustning kan vara både farligt och ineffektivt. En byggställning ger dig en stabil och säker plattform att arbeta från, vilket gör det möjligt att utföra arbetet snabbare och med högre precision.\n\nDessutom minskar risken för olyckor och skador, vilket är avgörande för att upprätthålla en säker arbetsmiljö. Med en byggställning kan du enkelt nå svåråtkomliga områden, vilket gör det möjligt att utföra arbete på fasader, tak och andra höga ytor utan problem. Detta är särskilt viktigt vid renoveringar och byggprojekt där tillgången till olika delar av byggnaden är avgörande för att slutföra arbetet på ett effektivt sätt.
          `}
      />
      <section className="border-b border-neutral-300">
        <div id="ref" className="relative -top-12"></div>
        <div className="max-page-width flex flex-col justify-between gap-12 px-4 py-12 md:flex-row md:gap-24 md:py-24">
          <div className="flex basis-6/12 flex-col gap-4">
            <h3 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              Hyr byggställning till ett bra pris
            </h3>
            <p className="whitespace-pre-line text-base md:text-lg">
              {`Att hyra byggställning är ett smart val för dig som vill ha en flexibel och kostnadseffektiv lösning för ditt byggprojekt. Vi på Adler Byggservice erbjuder uthyrning av byggställningar som passar alla typer av projekt, oavsett om det handlar om mindre renoveringar eller större byggprojekt.\n\nVåra byggställningar är av hög kvalitet och uppfyller alla säkerhetskrav, så att du kan känna dig trygg när du arbetar på höjder. Vi erbjuder även montering och demontering av byggställningarna, så att du slipper tänka på det praktiska kring installationen.`}
            </p>
            <Image
              priority
              quality={100}
              src="/byggstallning_hus.jpg"
              alt=""
              height={1080}
              width={1920}
              className={twMerge(
                "mt-4 aspect-[1.618/1] h-auto w-full max-w-full rounded-sm object-cover object-center",
              )}
            />
          </div>
          <div className="basis-4/12">
            <Suspense>
              <ScaffoldingForm />
            </Suspense>
          </div>
        </div>
      </section>
      <CenteredSection className="border-b border-neutral-300">
        <h2 className="max-w-screen-md text-balance text-center text-3xl font-medium md:text-4xl lg:text-5xl">
          Vanliga frågor
        </h2>
        <div className="w-full max-w-screen-md">
          <ScaffoldingFAQSection />
        </div>
      </CenteredSection>
    </>
  );
}
