// components/core/layout/header/MobileNav.tsx
"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import type { Route } from "next";
import AthrolisLogo from "../../ui/AthrolisLogo";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const navItems: { href: Route; label: string }[] = [
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "/#how-it-works", label: "How it works" },
  ];

  // Fermer si clic en dehors de la sidebar
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="md:hidden flex items-center w-full">
      {/* Top bar mobile */}
      <div className="flex items-center justify-between w-full mt-4 z-50">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-white"
        >
          <Menu />
        </button>
        <AthrolisLogo
          key={
            typeof window !== "undefined" ? window.location.pathname : "static"
          }
        />
      </div>

      {/* Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/60 z-40 transition-opacity duration-500",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      />

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        role="dialog"
        aria-modal="true"
        className={clsx(
          "fixed z-50 left-0 top-0 bg-deep-forest min-h-screen w-90 sm:w-80 p-6 transition-transform duration-700 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-white"
          >
            <X />
          </button>
        </div>

        <AthrolisLogo
          key={
            typeof window !== "undefined" ? window.location.pathname : "static"
          }
        />

        <nav className="mt-12 flex flex-col space-y-6">
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
        </nav>
        <div className="mt-32 flex ">
          <Link
            href={"/book" as Route}
            className="px-4 py-3 border text-sm font-medium transition-colors border-muted text-mint m-auto"
          >
            Book a consultation
          </Link>
        </div>
      </aside>
    </div>
  );
}
