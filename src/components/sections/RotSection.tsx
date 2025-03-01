import Button from "@/components/buttons/Button";
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
          "max-page-width flex flex-col items-center justify-center gap-8 px-4 py-12 md:gap-12 md:py-24 lg:max-w-screen-lg",
        )}
      >
        <div className={twMerge("flex flex-col gap-6 md:gap-8")}>
          <h3 className="text-center font-semibold tracking-wide sm:text-3xl md:text-4xl">
            {title}
          </h3>
          <p className="whitespace-pre-line text-balance text-center text-lg md:text-lg">
            {text}
          </p>
        </div>
        {button && (
          <div className="flex items-center">
            <Button
              href={button.href}
              text={button.text}
              className="min-w-fit text-background px-8 bg-primary hover:bg-primary/90 md:text-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default RotSection;
