// components/core/ui/CallToActionButton.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";
import { Route } from "next";

type CallToActionButtonProps = {
  href: string;
  label: string;
  color?: "mint" | "mint-contrast" | "deep-forest" | "dark-olive";
};

export default function CallToActionButton({
  href,
  label,
  color = "mint",
}: CallToActionButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className="pt-4 flex justify-center">
      <Link
        ref={buttonRef}
        href={href as Route}
        className={clsx(
          "group flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-all duration-300",
          {
            "bg-mint text-mint-contrast border border-mint hover:opacity-90":
              color === "mint",
            "bg-mint-contrast text-white border border-mint-contrast hover:opacity-90":
              color === "mint-contrast",
            "bg-deep-forest text-white border border-deep-forest hover:opacity-90":
              color === "deep-forest",
            "bg-dark-olive text-white border border-dark-olive hover:opacity-90":
              color === "dark-olive",
          }
        )}
      >
        {label}
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
