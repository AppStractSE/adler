import { useEffect, useState } from "react";

export const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(60);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) setHeaderHeight(header.clientHeight);
    };

    updateHeaderHeight();

    const handleResize = () => {
      updateHeaderHeight();
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [headerHeight, width]);

  return { headerHeight, width };
};
