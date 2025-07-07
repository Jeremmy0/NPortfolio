import { useState, useEffect } from "react";
import { breakpoints } from "../components/constants.jsx";

export function useBreakpoint() {
  const getBreakpoint = (width) => {
    if (width < breakpoints.sm) return "xs";
    if (width < breakpoints.md) return "sm";
    if (width < breakpoints.lg) return "md";
    if (width < breakpoints.xl) return "lg";
    if (width < breakpoints["2xl"]) return "xl";
    return "2xl";
  };

  const [breakpoint, setBreakpoint] = useState(() =>
    typeof window !== "undefined" ? getBreakpoint(window.innerWidth) : "xl"
  );

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint; // "xs", "sm", "md", "lg", "xl", "2xl"
}