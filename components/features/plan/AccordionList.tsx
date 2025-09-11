// components/features/plan/AccordionList.tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const accordionItems = [
  {
    title: "Customized Workout Plans",
    content:
      "Our workout plans are tailored to your goals, fitness level, and lifestyle, ensuring consistent progress without burnout.",
  },
  {
    title: "Nutrition Programming",
    content:
      "Receive nutrition guidance that complements your training and supports your long-term health, not crash diets.",
  },
  {
    title: "Optimized Sleep Plan",
    content:
      "Sleep is the foundation of recovery. We’ll build habits that promote better rest and better results.",
  },
  {
    title: "Supplement Guidance",
    content:
      "Get honest, personalized recommendations on supplements—only what you need, nothing you don’t.",
  },
  {
    title: "Mental Health Support",
    content:
      "Your mindset matters. We’ll work together on confidence, motivation, and self-awareness to sustain your success.",
  },
];

export default function AccordionList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 w-full">
      {accordionItems.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border-b border-white/20 ">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex justify-between items-center py-3 text-left text-white text-sm sm:text-base cursor-pointer"
            >
              <span>{item.title}</span>
              {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {isOpen && (
              <p className="text-white/70 text-sm pb-4 pl-1 animate-fade-in">
                {item.content}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
