// components/features/talkToCoach/TalkToCoachSection.tsx

"use client";

import { useRef } from "react";
import CallToActionButton from "@/components/core/ui/CallToActionButton";

export default function TalkToCoachSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="bg-mint text-dark-olive py-16 px-6 sm:px-12"
    >
      <div className="max-w-3xl mx-auto text-center space-y-2">
        {/* 🟢 Titre principal */}
        <h2 className="text-6xl font-heading font-extrabold tracking-tight leading-tight">
          TALK TO <br />
          <span className="font-outline-deep-forest text-transparent">
            YOUR COACH
          </span>
        </h2>

        {/* 🟢 Sous-texte */}
        <p className="text-base sm:text-lg text-deep-forest/90">
          Let’s figure out what works best for your body and life.
        </p>

        {/* 🟢 Bouton */}
        <div className="pt-2">
          <CallToActionButton
            href="/book"
            label="Book a free consultation"
            color="dark-olive"
          />
        </div>
      </div>
    </section>
  );
}
