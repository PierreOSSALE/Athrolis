// components/features/howItWorks/HowItWorksSection.tsx
"use client";

import StepCard from "./StepCard";
import CallToActionButton from "@/components/core/ui/CallToActionButton";

export default function HowItWorksSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#333932] via-[#363b35] to-[#242923] py-16 px-6 sm:px-10">
      {/* Overlay bruit (papier de verre) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/images/noise.png')",
          opacity: 0.08,
          backgroundRepeat: "repeat",
        }}
      />
      <div className=" max-w-7xl mx-auto">
        {/* Titre global */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mb-10">
          <div className="absolute top-15 left-0 bg-deep-forest text-white text-xl sm:text-2xl font-medium px-12 py-6 max-w-3xl">
            <p>
              Health and wellness feel <br /> simple with the right strategy
            </p>
          </div>
          <h2 className="absolute top-15 right-28 p-6 text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight font-heading uppercase italic bold font-outline text-transparent">
            YOUR PLAN
          </h2>
        </div>

        {/* Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mt-40">
          <StepCard
            step={1}
            title="START WITH YOU"
            description="Book a free consultation and tell me about your health goals, availability, and lifestyle."
          />
          <StepCard
            step={2}
            title="BUILD YOUR PLAN"
            description="We'll map out a clear, doable routine based on your preferences, needs, and how you want to feel day to day."
          />
          <StepCard
            step={3}
            title="PUT INTO ACTION"
            description="You'll start small, stay supported, and make progress in a way that feels natural, flexible, and realistic for your life."
          />
        </div>

        {/* Call-to-action */}
        <div className="text-center">
          <CallToActionButton
            href="/book"
            label="Book a free consultation"
            color="mint"
          />
        </div>
      </div>
    </section>
  );
}
