import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  image?: string;
  imageClasses?: string;
  title: string;
  text: string;
  rtl?: boolean;
  className?: string;
  button?: {
    href: string | { pathname: string; query: { [key: string]: string } };
    text: string;
  };
}
const TwoPaneSection = ({
  image,
  title,
  text,
  rtl,
  button,
  imageClasses = "aspect-[1.05/1] object-cover",
  className,
}: Props) => {
  return (
    <section className={className}>
      <div className="max-page-width grid grid-cols-1 items-center justify-between gap-6 px-4 py-12 md:gap-8 md:py-24 lg:grid-cols-2 lg:gap-32">
        <div className={twMerge("flex flex-col gap-6 md:gap-8")}>
          <h3 className="text-3xl font-medium tracking-wide md:text-4xl lg:text-5xl">
            {title}
          </h3>
          <p className="whitespace-pre-line text-base md:text-lg">{text}</p>
          {button && (
            <Link
              href={button.href}
              className="flex w-fit items-center gap-2 transition-all duration-200 ease-in-out hover:gap-3 hover:text-cyan-500"
            >
              <ArrowRight size={18} />
              <p className="text-base font-medium underline underline-offset-4">
                {button.text}
              </p>
            </Link>
          )}
        </div>
        {image && (
          <div className={twMerge(rtl ? "lg:order-[-1]" : "")}>
            <Image
              priority
              quality={100}
              src={image}
              alt=""
              fill
              className={twMerge(
                "!relative h-auto w-full max-w-full rounded-xl object-center",
                imageClasses,
              )}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default TwoPaneSection;
