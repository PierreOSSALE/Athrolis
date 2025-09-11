// components/core/layout/header/Header.tsx
// components/core/layout/header/Header.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const lastScroll = useRef(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const current = window.scrollY;

      // Affiche le header si on remonte
      if (current < lastScroll.current) {
        setShow(true);
        el.classList.add("scrolled");
      } else {
        // Cache le header si on descend
        if (current > 10) {
          setShow(false);
        }
      }

      // Supprime le flou si on est tout en haut
      if (current < 10) {
        el.classList.remove("scrolled");
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-1000 ease-in-out",
        "supports-[backdrop-filter]:bg-transparent",
        show ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-6 py-10 flex items-center justify-between">
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
