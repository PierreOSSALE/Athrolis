// app/page.tsx
"use client";

import { useState } from "react";
import HomeOnlyLoader from "@/components/core/layout/HomeOnlyLoader";
import HeroParallax from "./Hero-parallax";
import CallToActionSection from "@/components/features/callAction/CallToActionSection";
import TalkToCoachSection from "@/components/features/talkToCoach/TalkToCoachSection";
import RootedRealLifeSection from "@/components/features/about/RootedRealLifeSection";
import RightPlanSection from "@/components/features/plan/RightPlanSection";
import ResultsThatLastSection from "@/components/features/results/ResultsThatLastSection";
import ServicesGridSection from "@/components/features/services/ServicesGridSection";
import HowItWorksSection from "@/components/features/howItWorks/HowItWorksSection";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <HomeOnlyLoader onFinish={() => setLoaded(true)} />}
      {loaded && <HeroParallax />}
      <RootedRealLifeSection />
      <RightPlanSection />
      <ServicesGridSection />
      <CallToActionSection />
      <HowItWorksSection />
      <ResultsThatLastSection />
      <TalkToCoachSection />
    </>
  );
}
