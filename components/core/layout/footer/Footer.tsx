// components/core/layout/footer/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import type { Route } from "next";

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-[hsl(var(--text))] border-t border-muted py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 ">
        {/* Col 1: Logo + Réseaux */}
        <div className="space-y-4 p-2 md:p-0">
          <Link href="/" className="inline-block text-mint text-xl font-bold">
            Athrolis
          </Link>

          <svg
            className="h-[10px] w-20"
            viewBox="0 0 100 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,10 C30,0 70,0 100,10"
              stroke="(var(--muted)"
              strokeWidth="1.5"
              fill="transparent"
            />
          </svg>

          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Col 2: About */}
        <div className=" p-2 md:p-0">
          <h4 className="text-sm font-semibold mb-3">ABOUT</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/about">Meet your coach</Link>
            </li>
            <li>
              <Link href="/how-it-works">How it works</Link>
            </li>
            <li>
              <Link href="/book">Book a consult</Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div className=" p-2 md:p-0 ">
          <h4 className="text-sm font-semibold mb-3">SERVICES</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/services">Personal training</Link>
            </li>
            <li>
              <Link href="/services">Run coaching</Link>
            </li>
            <li>
              <Link href="/services">Health coaching</Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Logos */}
        <div className="flex flex-col p-2 md:p-0 gap-4 ">
          {" "}
          <div className="flex items-center gap-1 text-[11px]">
            <Image
              src="/images/nsca.png"
              alt="NSCA Logo"
              width={40}
              height={40}
              className="bg-white rounded-full"
            />
            <span className="w-28">NSCA Certified Personal Trainer</span>
          </div>{" "}
          <div className="flex items-center gap-1 text-[11px]">
            <Image
              src="/images/IIN.png"
              alt="IIN Logo"
              width={50}
              height={40}
            />
            <span className="w-24">Health Coach (INHC)</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mx-auto max-w-7xl mt-15 pt-4 text-white/60 text-sm ">
        <span className="mt-1 w-full md:w-auto text-center">
          &copy; 2025 Athrolis. All rights reserved.
        </span>
        <div className="hidden md:flex justify-center md:gap-6 mt-1">
          <Link href={"/terms" as Route}>Terms & conditions</Link>
          <Link href={"/privacy" as Route}>Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
