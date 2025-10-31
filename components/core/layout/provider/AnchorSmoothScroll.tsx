// components/core/layout/provider/AnchorSmoothScroll.tsx
// components/core/layout/provider/AnchorSmoothScroll.tsx
"use client";

import { useEffect } from "react";

export default function AnchorSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      const currentPath = window.location.pathname;

      if (href.startsWith("#") || href.startsWith("/#")) {
        e.preventDefault();
        const id = href.replace("/#", "").replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState({}, "", currentPath);
        }
        return;
      }

      if (href === "/" && currentPath === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState({}, "", "/");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
