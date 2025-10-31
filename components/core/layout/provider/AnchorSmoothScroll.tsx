// components/core/layout/provider/AnchorSmoothScroll.tsx
"use client";

import { useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

export default function AnchorSmoothScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // ✅ On récupère la page courante
      const currentPath = window.location.pathname;

      // 👉 Cas 1 : lien ancre locale ("#..." ou "/#...")
      if (href.startsWith("#") || href.startsWith("/#")) {
        e.preventDefault();

        const id = href.replace("/#", "").replace("#", "");
        const el = document.getElementById(id);

        if (el) {
          lenis.scrollTo(el, {
            offset: -1,
            duration: 1.5,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
          });
          // Supprime le hash dans l’URL
          window.history.replaceState({}, "", currentPath);
        }
        return;
      }

      // 👉 Cas 2 : lien vers "/" (home)
      if (href === "/") {
        // ✅ Seulement empêcher le reload si on est déjà sur "/"
        if (currentPath === "/") {
          e.preventDefault();
          lenis.scrollTo(0, {
            duration: 1.2,
            easing: (t: number) => 1 - Math.pow(1 - t, 2),
          });
          window.history.replaceState({}, "", "/");
        }
        // sinon, on laisse Next.js gérer la navigation normale
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}
