// components/core/layout/header/DesktopNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { Route } from "next";
import AthrolisLogo from "@/components/core/ui/AthrolisLogo"; // ⬅️ adapte le chemin

export default function DesktopNav() {
  const pathname = usePathname();

  const navItems: { href: Route; label: string }[] = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How it works" },
  ];

  return (
    <nav className="hidden md:flex items-center justify-between gap-8 w-full mt-4">
      {/* 🔥 Athrolis = couleur du logo */}
      <AthrolisLogo
        key={
          typeof window !== "undefined" ? window.location.pathname : "static"
        }
      />

      <div className="flex gap-6 ml-10">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "text-sm font-medium transition-colors hover:text-[hsl(var(--brand))]",
              pathname === href ? "text-[hsl(var(--brand))]" : "text-white"
            )}
          >
            {label}
          </Link>
        ))}
      </div>

      <div>
        <Link
          href={"/book" as Route}
          className="px-4 py-3 border text-sm font-medium transition-colors border-[hsl(var(--border-brand))] text-[hsl(var(--brand))]"
        >
          Book a consultation
        </Link>
      </div>
    </nav>
  );
}
