import CenterSection from "@/components/sections/CenterSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";
import { content } from "@/data/content";
import { redirect } from "next/navigation";
export async function generateStaticParams() {
  return content.services.map((service) => ({
    id: service.id,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any) {
  const param = await params;
  const service = content.services.find(
    (service) => service.id === param.id,
  );
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

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const param = await params;
  const service = content.services.find((service) => service.id === param.id);
  if (!service) redirect("/404");

  return (
    <>
      <SubPageHeroSection title={service.description} text={service.title} />
      <TwoPaneSection
        className="border-b border-gray-300"
        title={service.sellingPointTitle}
        text={service.sellingPointDesc}
        image={service.image}
        button={{
          href: {
            pathname: "/offertforfragan",
            query: {
              s: service.id,
            },
          },
          text: "Jag vill ha en offert",
        }}
      />
      <ServicesSection className="border-b border-gray-300" />
      <CenterSection
        button={{
          href: "/rotavdrag",
          text: "Räkna ut ROT-avdrag",
        }}
        className="border-b border-gray-300"
        title="Du vet väl om att du kan nyttja ROT-avdrag hos oss?"
        text={`Planera och utnyttja rotavdraget för att minska kostnaderna för dina elinstallationer vid renovering eller nybyggnation. Våra lösningar säkerställer ett effektivt utförande, där du enkelt kan dra nytta av skatteavdraget för ett ekonomiskt resultat.`}
      />
    </>
  );
}
