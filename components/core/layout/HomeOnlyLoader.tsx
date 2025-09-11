// components/core/layout/HomeOnlyLoader.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function HomeOnlyLoader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);

  // 🟢 Loader line animation
  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: "power2.out",
        delay: 0.1,
      });
    }
  }, []);

  // ⏳ Chargement de l'image réelle
  useEffect(() => {
    const img = new Image();
    img.src = "/images/bg-hero.jpg";
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  // 🔁 Progression simulée
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          clearInterval(interval);
        }
        return next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // ✅ Fin du loader uniquement quand progress = 100 **et** image chargée
  useEffect(() => {
    if (progress >= 100 && imageLoaded) {
      const timeout = setTimeout(() => {
        onFinish();
      }, 400); // petit delay pour propreté
      return () => clearTimeout(timeout);
    }
  }, [progress, imageLoaded, onFinish]);

  return (
    <div className="fixed inset-0 bg-deep-forest text-white grid place-items-center z-50">
      <div className="text-center space-y-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-bold tracking-wider relative z-10">
            {`Athrolis`.substring(0, Math.floor((progress / 100) * 8))}
          </h1>
          <svg
            className="absolute -bottom-1.5 left-0 w-full h-[10px] z-0"
            viewBox="0 0 100 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M0,10 C30,0 70,0 100,10"
              stroke="var(--color-mint)"
              strokeWidth="1.5"
              fill="transparent"
              opacity={0}
            />
          </svg>
        </div>

        <div className="w-64 h-2 bg-white/10 rounded">
          <div
            className="h-full bg-mint rounded transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
