"use client";
import { useEffect, useState } from "react";

export const useScreenDimensions = () => {
  function getWindowDimensions() {
    if (typeof window === "undefined") return { width: 0, height: 0 };
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [screenSize, setScreenSize] = useState(getWindowDimensions());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getWindowDimensions());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return [screenSize.width, screenSize.height];
};
