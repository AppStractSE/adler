"use client";

import useMounted from "@/hooks/useMounted";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";

interface Props {
  className?: string;
}

const HeroSection = ({ className }: Props) => {
  const isMounted = useMounted();
  return (
    <section className={className}>
      <div className="relative flex min-h-[80vh] flex-col justify-center md:min-h-screen">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-page-width relative z-10 w-full px-4 py-12 lg:gap-8 lg:py-24 xl:py-32">
          <div
            className={twMerge(
              "flex flex-col gap-4 transition-all duration-500 ease-in-out md:w-3/4 lg:w-2/3",
              isMounted
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0",
            )}
          >
            <h2 className="whitespace-pre-line text-lg font-medium text-background sm:text-balance">
              Elektriker i Örebro & Lindesberg
            </h2>
            <h1 className="whitespace-pre-line text-balance text-2xl font-medium text-background md:text-4xl">
              Vi fixar allt från små reparationer till stora elprojekt med
              kvalitet och snabb service - vi har lösningen!
            </h1>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Button
                href="/kontakt"
                text="Kom i kontakt med oss"
                className="min-w-fit bg-cyan-950 px-8 text-white hover:bg-cyan-900 md:text-lg"
                icon={<ArrowRight size={20} />}
              />
              <Button
                href="/tjanster"
                text="Se våra tjänster"
                className="min-w-fit bg-cyan-500 px-8 text-primary hover:bg-cyan-400 md:text-lg"
                icon={<ArrowRight size={20} />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
