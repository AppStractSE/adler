import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  href: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  className?: string;
}
const CardWithOverlay = ({
  title,
  subtitle,
  description,
  href,
  image,
  className,
}: Props) => {
  return (
    <div
      className={twMerge(
        "relative flex h-full flex-col gap-6 overflow-hidden rounded-lg",
        className,
      )}
    >
      <Image
        quality={100}
        width={1512}
        height={496}
        src={image}
        alt="Service image"
        className="h-full min-h-[327px] w-full overflow-hidden object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.25) 35%, rgba(0, 0, 0, 0.75) 100%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-background md:w-9/12 lg:p-6">
        <div className="flex flex-col gap-2">
          <p className="text-normal text-xs md:text-sm">{subtitle}</p>
          <h3 className="text-balance text-xl font-medium">{title}</h3>
          <p className="text-base md:text-lg">{description}</p>
        </div>
        <Link
          href={href}
          className="flex w-fit items-center gap-2 transition-all duration-200 ease-in-out hover:gap-3 hover:text-cyan-500"
        >
          <ArrowRight size={18} />
          <p className="text-base font-medium underline underline-offset-4">
            Läs mer
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CardWithOverlay;
