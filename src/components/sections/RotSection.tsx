import Button from "@/components/buttons/Button";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface Props {
  image?: string;
  title: string;
  text: string;
  rtl?: boolean;
  className?: string;
  button?: {
    href: string;
    text: string;
  };
}
const RotSection = ({ title, text, button, className }: Props) => {
  return (
    <section className={className}>
      <div
        className={twMerge(
          "max-page-width grid justify-center gap-8 px-4 py-12 md:gap-12 md:py-24 lg:max-w-screen-lg lg:grid-cols-2",
        )}
      >
        <div className={twMerge("flex flex-col gap-6 md:gap-8")}>
          <h3 className="text-3xl font-semibold tracking-wide sm:text-3xl md:text-4xl">
            {title}
          </h3>
          <p className="whitespace-pre-line text-base md:text-lg">{text}</p>
        </div>
        {button && (
          <div className="flex items-center justify-start lg:justify-end">
            <Button
              href={button.href}
              text={button.text}
              className="min-w-fit bg-background px-8 text-primary hover:bg-background/90 md:text-lg"
              icon={<ArrowRight size={20} />}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default RotSection;
