// components/core/ui/DynamicButton.tsx
"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import gsap from "gsap";
import { Route } from "next";

type DynamicButtonProps = {
  href: string;
  label: string;
  color?: "mint" | "deep-forest";
};

export default function DynamicButton({
  href,
  label,
  color = "mint",
}: DynamicButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.3 }
      );
    }
  }, []);

  return (
    <Link
      ref={ref}
      href={href as Route}
      className={clsx(
        "inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold transition-all group",
        {
          "bg-mint text-deep-forest hover:opacity-90": color === "mint",
          "bg-deep-forest text-white hover:opacity-90": color === "deep-forest",
        }
      )}
    >
      {label}
    </Link>
  );
}
