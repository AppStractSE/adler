"use client";
import { useHeaderHeight } from "@/utils/headerHeight";
import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  const { headerHeight } = useHeaderHeight();

  return <main style={{ marginTop: headerHeight }}>{children}</main>;
};

export default Main;
