"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function NavigationLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      setProgress(100);
      timerRef.current = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 300);
      prevPath.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (target.target === "_blank") return;

      const url = new URL(href, window.location.origin);
      if (url.pathname === window.location.pathname) return;

      setLoading(true);
      setProgress(0);

      let p = 0;
      const interval = setInterval(() => {
        p += Math.random() * 30;
        if (p > 90) p = 90;
        setProgress(p);
      }, 200);

      timerRef.current = setTimeout(() => {
        clearInterval(interval);
      }, 10000);
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-1">
      <div
        className="h-full bg-gradient-to-r from-[#052e16] via-[#14532d] to-[#fbbf24] transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
        <div className="h-full w-1/3 bg-white/30 -skew-x-12 animate-[shimmer_1.5s_infinite]" />
      </div>
    </div>
  );
}
