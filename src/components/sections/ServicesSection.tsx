"use client";

import { content } from "@/data/content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  className?: string;
}

const ServicesSection = ({ className }: Props) => {
  const servicesPerLoad = 3;
  const [visibleCount, setVisibleCount] = useState(servicesPerLoad);

  const LoadMore = () => {
    setVisibleCount((prev) => prev + servicesPerLoad);
  };

  return (
    <section className={className}>
      <div className="max-page-width flex flex-col items-center gap-4 px-4 py-12 md:gap-8 md:py-24">
        <h2 className="text-balance text-center text-3xl font-medium tracking-wide md:text-4xl">
          Allt inom bygg och renovering
        </h2>
        <p className="max-w-3xl text-balance text-center text-base leading-loose tracking-wider md:text-lg">
          Vi erbjuder ett mångsidigt utbud av tjänster för allt från småfix till
          stora projekt. Med vår långa erfarenhet och passion för hantverk
          levererar vi skräddarsydda lösningar som möter dina förväntningar.
        </p>
        <div className="mt-4 grid w-full grid-cols-1 gap-x-4 gap-y-12 md:mt-6 md:grid-cols-2 lg:grid-cols-3">
          {content.services.slice(0, visibleCount).map((service, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="relative aspect-[2/1] md:aspect-[1.5/1]">
                <video
                  playsInline
                  src={service.video}
                  autoPlay
                  loop
                  muted
                  className="h-full w-full rounded-sm object-cover object-center"
                />
              </div>
              <div className="mb-auto flex flex-col gap-2">
                <h3 className="text-balance text-xl font-medium">
                  {service.title}
                </h3>
                <p className="text-base md:pr-4 md:text-lg">
                  {service.description}
                </p>
              </div>
              <Link
                href={`/vara-tjanster/${service.id}`}
                className="flex w-fit items-center gap-2 transition-all duration-200 ease-in-out hover:gap-3 hover:text-orange-500"
              >
                <ArrowRight size={18} />
                <p className="text-base font-medium underline underline-offset-4">
                  Läs mer
                </p>
              </Link>
            </div>
          ))}
        </div>
        {visibleCount < content.services.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={LoadMore}
              className="flex w-fit items-center justify-center rounded-full bg-orange-600 px-6 py-2.5 text-base text-background transition-all duration-300 ease-in-out hover:bg-orange-600/90"
            >
              Ladda fler tjänster
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
