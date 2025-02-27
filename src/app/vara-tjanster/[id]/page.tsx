import ServicesSection from "@/components/sections/ServicesSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { content } from "@/data/content";
// import { Metadata } from "next";
import { redirect } from "next/navigation";
export async function generateStaticParams() {
  return content.services.map((service) => ({
    id: service.id,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any) {
  const service = content.services.find((service) => service.id === params.id);
  if (!service) redirect("/404");
  return {
    title: service.title,
    openGraph: {
      title: `TC Elservice | ${service.title}`,
      description: service.description,
      url: `/vara-tjanster/${service.id}`,
      siteName: "TC Elservice",
      images: [
        {
          url: `/${service.image}`,
          width: 1200,
          height: 630,
          alt: `TC Elservice | ${service.title}`,
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
          url: `/${service.image}`,
          width: 1200,
          height: 630,
          alt: `TC Elservice | ${service.title}`,
        },
      ],
      description: service.description,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({ params }: any) {
  const service = content.services.find((service) => service.id === params.id);
  if (!service) redirect("/404");

  return (
    <>
      <SubPageHeroSection
        title="Få en offert redan idag."
        text={service.title}
      />
      <ServicesSection />
    </>
  );
}
