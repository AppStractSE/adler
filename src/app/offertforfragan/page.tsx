import ContactForm from "@/components/forms/ContactForm";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offertförfrågan",
  openGraph: {
    title: "TC Elservice | Offertförfrågan",
    description: "Få en offert redan idag hos TC Elservice",
    url: "/offertforfragan",
    siteName: "TC Elservice",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "TC Elservice | Offertförfrågan",
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
        alt: "TC Elservice - Offertförfrågan",
      },
    ],
    description: "Få en offert redan idag hos TC Elservice",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        title="Offertförfrågan"
        text="Få en offert redan idag"
      />
      <section>
        <div className="max-page-width flex flex-col justify-between gap-12 px-4 py-12 md:flex-row md:gap-24 md:py-24">
          <div className="flex basis-6/12 flex-col gap-4">
            <h3 className="text-2xl font-medium tracking-wide sm:text-3xl md:text-4xl">
              Vill du få en offert?
            </h3>
            <p className="whitespace-pre-line text-base md:text-lg">
              Vad kul att du vill ha vår hjälp! Fyll i fälten så återkopplar vi
              så snart vi kan, normalt svarar vi nästkommande vardag.
            </p>
          </div>
          <div className="basis-4/12">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
