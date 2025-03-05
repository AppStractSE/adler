import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  className?: string;
  children?: React.ReactNode;
}
const CenteredSection = ({ className, children }: Props) => {
  return (
    <section className={className}>
      <div
        className={twMerge(
          "max-page-width w-full flex flex-col items-center gap-8 px-4 py-12 md:gap-12 md:py-24",
        )}
          >
              {children}
      </div>
    </section>
  );
};

export default CenteredSection;
