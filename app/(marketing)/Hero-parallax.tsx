// app/(marketing)/HeroParallax.tsx
// app/(marketing)/HeroParallax.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import CallToActionButton from "@/components/core/ui/CallToActionButton";

export default function HeroParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      subtextRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtextRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
      }
    );

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full min-h-[100svh] flex items-center justify-center px-6"
    >
      {/* ✅ Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/bg-hero.jpg")' }}
      />

      {/* ✅ Overlays */}
      <div className="absolute top-0 left-0 z-10 bg-black/60 w-full h-full" />
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent)] z-20" /> */}

      {/* ✅ Content */}
      <div className="relative z-30 text-center max-w-3xl text-white space-y-6 mt-32">
        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight font-heading uppercase italic bold"
        >
          Athrolis <br />
          <span className="font-outline text-transparent">
            Move beyond limits
          </span>
        </h1>

        <p ref={subtextRef} className="text-base sm:text-lg text-white/80">
          Transform your body and mindset with <strong>Athrolis</strong>.
          Discover premium coaching and training programs tailored to push you
          beyond your limits — because you’re built for more.
        </p>

        <CallToActionButton href={""} label="Book a free consultation" />
      </div>
    </section>
  );
}
