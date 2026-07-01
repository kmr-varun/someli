"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function RotatingCircle() {
  return (
    <div className="absolute inset-0">
      <DotLottieReact
        src="/assets/hero/hero-circle.lottie"
        loop
        autoplay
        speed={0.5}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
