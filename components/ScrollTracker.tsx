"use client";

import { useEffect, useCallback } from "react";
import { trackScrollDepth, trackTimeOnPage, trackPageView } from "@/lib/analytics";

export function ScrollTracker() {
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.round((scrolled / total) * 100);
    if (pct >= 100) trackScrollDepth(100);
    else if (pct >= 75) trackScrollDepth(75);
    else if (pct >= 50) trackScrollDepth(50);
    else if (pct >= 25) trackScrollDepth(25);
  }, []);

  useEffect(() => {
    trackPageView();

    const fired: Set<25 | 50 | 75 | 100> = new Set();
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.round((scrolled / total) * 100);
      const thresholds: (25 | 50 | 75 | 100)[] = [25, 50, 75, 100];
      thresholds.forEach((t) => {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          trackScrollDepth(t);
        }
      });
    };

    const timeouts = [
      setTimeout(() => trackTimeOnPage(30), 30000),
      setTimeout(() => trackTimeOnPage(60), 60000),
      setTimeout(() => trackTimeOnPage(120), 120000),
    ];

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      timeouts.forEach(clearTimeout);
    };
  }, [handleScroll]);

  return null;
}
