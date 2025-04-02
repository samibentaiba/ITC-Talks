"use client";

import { useState, useEffect, useCallback } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  const updateMatch = useCallback((event: MediaQueryListEvent) => {
    setMatches(event.matches);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", updateMatch);
    
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [query, updateMatch]);

  return matches;
}
