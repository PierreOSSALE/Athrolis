// components/feature/callAction/CallToActionSection.tsx
"use client";

import CallToActionButton from "@/components/core/ui/CallToActionButton";

export default function CallToActionSection() {
  return (
    <section className="bg-mint text-deep-forest py-8 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Texte d'accroche */}
        <h2 className="text-xl sm:text-2xl font-heading font-semibold text-center sm:text-left">
          NEED HELP GETTING STARTED?
        </h2>

        {/* Bouton avec fond noir (deep-forest) */}
        <div className="pt-1 sm:pt-0">
          <CallToActionButton
            href="/book"
            label="Book a free consultation"
            color="deep-forest"
          />
        </div>
      </div>
    </section>
  );
}
