"use client";

import { useState, useEffect } from "react";

// Define screen size types
export type ScreenSize = "desktop" | "tablet" | "mobile";

// Define breakpoints
const BREAKPOINTS = {
  DESKTOP: 1320,
  TABLET: 768,
};

export function useScreenSize(): ScreenSize {
  // Initialize with a default value
  const [screenSize, setScreenSize] = useState<ScreenSize>("desktop");

  useEffect(() => {
    // Function to determine screen size based on window width
    const handleResize = () => {
      window.innerWidth >= BREAKPOINTS.DESKTOP ? 
      setScreenSize("desktop") : 
      ( window.innerWidth >= BREAKPOINTS.TABLET ? 
        setScreenSize("tablet") : 
        setScreenSize("mobile"));
    };

    // Set initial size
    handleResize();

    // Debounce resize events to avoid excessive updates
    let timeoutId: NodeJS.Timeout;

    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    // Add event listener for resize
    window.addEventListener("resize", debouncedResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return screenSize;
}
