// components/features/about/RootedRealLifeSection.tsx
"use client";

import DynamicButton from "@/components/core/ui/DynamicButton";
import PhoneVideoFrame from "@/components/core/ui/PhoneVideoFrame";

export default function RootedRealLifeSection() {
  return (
    <section id="about" className="w-full bg-deep-forest text-white min-h-svh ">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left image and phone */}
        <div className="relative w-xl min-h-60 md:min-h-svh flex justify-center py-4">
          <img
            src="/images/bg-hero.png"
            alt="Coach background"
            className="absolute inset-0 w-full h-full object-cover opacity-20 -z-0"
          />
          <div className="absolute top-36 left-8 lg:top-28  lg:left-2/3">
            <PhoneVideoFrame src="/videos/demo-kb-push.mp4" />
          </div>
        </div>

        {/* Right text block */}
        <div className="space-y-6 text-center lg:text-left py-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black italic">
            ROOTED IN REAL LIFE
          </h2>
          <p className="text-white/90 max-w-xl mx-auto lg:mx-0">
            Most fitness programs promise quick results—flat abs, 30-day
            transformations, or rapid weight loss—but those approaches often
            rely on short bursts of willpower and unsustainable routines. My
            coaching philosophy is the opposite. I don’t focus on fast fitness
            fads; I focus on building a foundation that lasts.
          </p>

          <DynamicButton href="/book" label="Meet your caoch" />
        </div>
      </div>
    </section>
  );
}
