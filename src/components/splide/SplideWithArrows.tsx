"use client";
import { content } from "@/data/content";
import "@/styles/customsplide.scss";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

const SplideWithArrows = () => {
  const options = {
    rewind: false,
    gap: "2rem",
    perPage: 3,
    perMove: 1,
    focus: 0,
    start: 0,
    pagination: false,
    trimSpace: true,
    breakpoints: {
      1280: {
        gap: "1.5rem",
        perPage: 2.5,
        pagination: true,
        trimSpace: false,
        arrows: false,
      },
      1024: {
        gap: "1rem",
        perPage: 1.75,
        pagination: true,
        arrows: false,
        trimSpace: false,
      },
      768: {
        gap: "1rem",
        perPage: 1.5,
        pagination: true,
        trimSpace: false,
        arrows: false,
      },
      640: {
        gap: "1rem",
        perPage: 1.25,
        pagination: true,
        trimSpace: false,
        arrows: false,
      },
      480: {
        gap: "1rem",
        perPage: 1.15,
        pagination: true,
        arrows: false,
      },
    },
    classes: {
      pagination: "splide__pagination custom__pagination",
      prev: "splide__arrow--prev splide__big__arrows",
      next: "splide__arrow--next splide__big__arrows",
    },
  };
  return (
    <div className="w-full">
      <Splide options={options} aria-labelledby="" hasTrack={false}>
        <div className="splide__wrapper relative [&>*:first-child]:rounded-xl">
          <SplideTrack className="items-stretch !overflow-visible py-2">
            {content.services.map((service, index) => (
              <SplideSlide key={index}>
                <Link
                  key={index}
                  href={"/vara-tjanster/" + service.id}
                  className="flex flex-col gap-6"
                >
                  <div className="relative aspect-[1.5/1] md:aspect-[1.25/1]">
                    <Image
                      quality={100}
                      fill
                      src={service.image}
                      alt="Service image"
                      className="h-full w-full rounded-lg object-cover object-center"
                    />
                  </div>
                  <h3 className="text-balance text-xl font-medium">
                    {service.title}
                  </h3>
                </Link>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows"></div>
        </div>
        <div className="flex justify-center pt-12 xl:hidden">
          <div className="custom__pagination splide__pagination"></div>
        </div>
      </Splide>
    </div>
  );
};

export default SplideWithArrows;
