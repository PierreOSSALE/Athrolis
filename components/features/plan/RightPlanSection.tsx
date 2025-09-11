// components/features/plan/RightPlanSection.tsx
"use client";

import DynamicButton from "@/components/core/ui/DynamicButton";
import AccordionList from "./AccordionList";
import Image from "next/image";

export default function RightPlanSection() {
  return (
    <section className="relative bg-black text-white py-16 bg-cover bg-center min-h-svh z-10">
      <Image
        src="/images/RightPlan.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className=" -z-1"
      />
      <div className="absolute top-0 left-0 -z-1 bg-black/80 w-full h-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent)] -z-2" />
      <div className="flex flex-col gap-8 max-w-7xl px-4 sm:px-6 lg:px-12 mx-auto">
        {" "}
        <h2 className="text-xl sm:text-5xl font-heading font-bold uppercase leading-tight">
          Because <span className="text-mint">the right plan</span>
          <br />
          makes all the difference
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start ">
          {/* Texte à gauche */}

          <div className="space-y-6 m-auto">
            <p className="text-white/80 max-w-md">
              We’ll work together to establish a routine that supports your
              long-term physical and mental well-being, rooted in consistency
              and self-awareness rather than discipline alone.
            </p>

            <DynamicButton href="/how-it-works" label="How it works" />
          </div>

          {/* Accordéon à droite */}
          <div className="w-full">
            <AccordionList />
          </div>
        </div>
      </div>
    </section>
  );
}
