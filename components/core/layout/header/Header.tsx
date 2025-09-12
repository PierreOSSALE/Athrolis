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

      if (current < lastScroll.current) {
        setShow(true);
        el.classList.add("scrolled");
      } else {
        if (current > 10) {
          setShow(false);
        }
      }

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
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-1000 ease-in-out"
        // show ? "translate-y-0" : "-translate-y-10"
      )}
    >
      {/* 🔳 BLUR overlay avec mask */}
      <div
        className={clsx(
          "absolute inset-x-0 top-0 h-80 z-0",
          "backdrop-blur-3xl bg-black/80",
          "mask-[linear-gradient(to_bottom,white,transparent)]"
        )}
      />

      {/* ✅ Contenu non flouté */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="px-6 py-10 flex items-center justify-between">
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
