// app/page.tsx
"use client";

import { useState } from "react";
import HomeOnlyLoader from "@/components/core/layout/HomeOnlyLoader";
import HeroParallax from "./Hero-parallax";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <HomeOnlyLoader onFinish={() => setLoaded(true)} />}
      {loaded && <HeroParallax />}
    </>
  );
}
