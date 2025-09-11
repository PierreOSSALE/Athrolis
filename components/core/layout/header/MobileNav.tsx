// components/core/layout/header/MobileNav.tsx
"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import type { Route } from "next"; // ✅ Typage route

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const navItems: { href: Route; label: string }[] = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/book", label: "Book a consultation" },
  ];

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="text-white"
      >
        <Menu />
      </button>

      <div
        className={clsx(
          "fixed inset-0 z-40 bg-[hsl(var(--bg))] transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-white text-lg font-semibold"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
