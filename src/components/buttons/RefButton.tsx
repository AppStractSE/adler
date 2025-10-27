"use client";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  icon?: React.ReactNode;
  className?: string;
  targetId: string;
}

const RefButton = ({ text, icon, className, targetId }: Props) => {
  return (
    <button
      onClick={() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      className={twMerge(
        "flex w-fit items-center justify-center rounded-sm bg-primary/90 px-6 py-2.5 text-base text-background transition-all duration-300 ease-in-out hover:bg-primary",
        icon && "items-center gap-2",
        className,
      )}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
};

export default RefButton;
