// components/features/services/ServiceCard.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Route } from "next";

type Props = {
  title: string;
  image: string;
  href: string;
};

export default function ServiceCard({ title, image, href }: Props) {
  return (
    <Link
      href={href as Route}
      className="relative group overflow-hidden rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-mint"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
      <div className="absolute bottom-4 left-4 z-10 text-white text-lg font-medium flex items-center gap-2">
        {title}
        <ArrowUpRight size={18} />
      </div>
    </Link>
  );
}
