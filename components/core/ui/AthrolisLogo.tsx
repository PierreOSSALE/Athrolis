// components/core/ui/AthrolisLogo.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { Route } from "next";

export default function AthrolisLogo() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();

      // Réinitialise la ligne
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });

      // Animation ligne dessinée
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: "power2.out",
        delay: 0.2,
      });
    }
  }, []);

  return (
    <Link href={"/" as Route} className="relative inline-block">
      <span className="text-[hsl(var(--brand))] text-2xl tracking-wide relative z-10">
        Athrolis
      </span>

      {/* Ligne courbe SVG */}
      <svg
        className="absolute -bottom-1.5 left-0 w-full h-[10px] z-0"
        viewBox="0 0 100 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M0,10 C30,0 70,0 100,10"
          stroke="hsl(var(--brand))"
          strokeWidth="1.5"
          fill="transparent"
          opacity={0}
        />
      </svg>
    </Link>
  );
}
