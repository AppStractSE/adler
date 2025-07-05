"use client";

import { content } from "@/data/content";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import CardWithOverlay from "../cards/CardWithOverlay";

interface Props {
  className?: string;
}

const ProjectsSection = ({ className }: Props) => {
  const servicesPerLoad = 4;
  const [visibleCount, setVisibleCount] = useState(servicesPerLoad);

  const LoadMore = () => {
    setVisibleCount((prev) => prev + servicesPerLoad);
  };

  return (
    <section className={className}>
      <div className="max-page-width flex flex-col items-center gap-4 px-4 py-12 md:gap-8 md:py-24">
        <h2 className="text-balance text-center text-3xl font-medium tracking-wide sm:text-4xl md:text-5xl">
          Placeholder
        </h2>
        <p className="max-w-3xl text-balance text-center text-lg leading-loose tracking-wider md:text-xl">
          Placeholder
        </p>
        <div className="grid w-full grid-cols-1 grid-rows-1 items-start gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
          {content.projects.slice(0, visibleCount).map((project, index) => (
            <CardWithOverlay
              key={index}
              href={"/projekt/"}
              title={project.title}
              subtitle="Projekt"
              description={project.description}
              image={project.image}
              className={twMerge(
                index === 2 ? "row-span-1 md:col-span-2" : "row-span-1",
                "aspect-video max-h-[350px] md:aspect-auto md:max-h-[480px]",
              )}
            />
          ))}
        </div>
        {visibleCount < content.projects.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={LoadMore}
              className="flex w-fit items-center justify-center rounded-sm bg-orange-900 px-6 py-2.5 text-base text-background transition-all duration-300 ease-in-out hover:bg-orange-800"
            >
              Visa fler
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
