// components/features/services/ServicesGridSection.tsx
"use client";

import ServicesCard from "./ServicesCard";

export default function ServicesGridSection() {
  return (
    <section id="services" className="bg-deep-forest py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-2xl sm:text-5xl font-heading font-semibold mb-12 max-w-800 mx-auto p-4">
          <span className="italic">SERVICES ADAPTED TO </span>
          <span className="italic text-mint">FIT YOU</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServicesCard
            title="Personal training"
            image="/images/services/personal-training.jpg"
            href="/services/personal-training"
          />
          <ServicesCard
            title="Run coaching"
            image="/images/services/run-coaching.jpg"
            href="/services/run-coaching"
          />
          <ServicesCard
            title="Health coaching"
            image="/images/services/health-coaching.jpg"
            href="/services/health-coaching"
          />
        </div>
      </div>
    </section>
  );
}
