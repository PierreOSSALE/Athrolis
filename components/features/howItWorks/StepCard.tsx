// components/features/howItWorks/StepCard.tsx
// ✅ StepCard.tsx
"use client";

import clsx from "clsx";

export type StepCardProps = {
  step: number;
  title: string;
  description: string;
  className?: string;
};

export default function StepCard({
  step,
  title,
  description,
  className,
}: StepCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center rounded-xl border border-white/20 px-6 py-16 text-center space-y-4 bg-black",
        className
      )}
    >
      <h3 className="text-sm text-white/60 font-bold">STEP {step}</h3>
      <h4 className="text-lg font-heading italic text-mint font-semibold">
        {title}
      </h4>
      <p className="text-white/80 text-sm max-w-xs mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
