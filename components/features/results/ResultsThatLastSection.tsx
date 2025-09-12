// components/features/results/ResultsThatLastSection.tsx
"use client";

import { Check } from "lucide-react";
import DynamicButton from "@/components/core/ui/DynamicButton";
import Image from "next/image";

const checklist = [
  "Wake up with more energy",
  "Be strong every day",
  "Eat better without rigid rules",
  "No more burnout",
  "Feel good in your body again",
];

export default function ResultsThatLastSection() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-6 sm:px-12 min-h-[90vh] flex items-center justify-center">
      <Image
        src="/images/results-bg.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className=" -z-1"
      />{" "}
      <div className="absolute top-0 left-0 -z-1 bg-black/80 w-full h-full" />
      <div className="w-full max-w-[75rem] p-4 sm:px-6 lg:p-12  flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Texte à gauche */}
        <div className="sm:max-w-md space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold italic">
            <span className="text-white">RESULTS THAT </span>
            <span className="text-mint">LAST</span>
          </h2>

          <p className="text-white/90">
            Feel stronger, more focused, and at ease in your body. This is
            health coaching designed around your life — not a quick fix, but
            real, lasting change.
          </p>

          <DynamicButton href="/how-it-works" label="How it works" />
        </div>

        {/* Liste à droite */}
        <ul className="space-y-4 text-base sm:text-lg m-auto md:m-0 p-6 w-full sm:max-w-sm">
          {checklist.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="min-w-5 min-h-5 text-mint mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
