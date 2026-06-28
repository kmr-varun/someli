'use client';

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Figma canvas dimensions for the right illustration panel
const CANVAS_W = 524;
const CANVAS_H = 352;

export default function PricingHeroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(Math.min(entry.contentRect.width / CANVAS_W, 1));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scaledH = CANVAS_H * scale;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Grid background */}
      <Image
        src="/assets/pricing-page/union-background.png"
        alt=""
        fill
        className="absolute inset-0 object-cover pointer-events-none"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-12 sm:py-16 md:py-20 lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">

        {/* Left content */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[40px] w-full lg:w-[759px] lg:shrink-0">
          <div className="flex flex-col gap-[16px] items-start">
            <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)] px-[15px] py-[7px] rounded-full">
              <p className="font-['Montserrat'] font-normal text-[12px] text-[#ED6B52] tracking-[0.96px] uppercase leading-[15px]">
                Pricing
              </p>
            </div>
            <h1 className="font-['Montserrat'] font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#222222] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.04px] leading-[1.19]">
              Simple Pricing.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to bottom, #df8251, #d54050)" }}
              >
                Serious Growth.
              </span>
            </h1>
          </div>
          <p className="font-['Montserrat'] font-normal text-[15px] sm:text-[16px] md:text-[18px] text-[#444444] leading-[1.5]">
            No hidden fees. No long-term lock-ins. Just the tools, strategy, and support your business needs to grow on social media — from day one.
          </p>
        </div>

        {/* Right: composite illustration */}
        <div
          ref={wrapperRef}
          className="w-full lg:flex-1 lg:min-w-0 overflow-visible"
          style={{ height: `${scaledH}px` }}
        >
          <div
            className="relative origin-top-left"
            style={{ width: `${CANVAS_W}px`, height: `${CANVAS_H}px`, transform: `scale(${scale})` }}
          >
            {/* 1. Blob background */}
            <div
              className="hero-blob absolute"
              style={{ left: 0, top: 0, width: "455.82px", height: "310.52px" }}
            >
              <img
                src="/assets/pricing-page/hero/blob-bg.svg"
                alt=""
                className="w-full h-full"
              />
            </div>

            {/* 2. Dashboard card */}
            <div
              className="hero-dashboard absolute overflow-hidden rounded-[10px] border border-[rgba(0,0,0,0.1)]"
              style={{ left: "136.41px", top: "121.01px", width: "367px", height: "228px" }}
            >
              <img
                src="/assets/pricing-page/hero/dashboard.png"
                alt="Someli dashboard"
                className="absolute inset-0 w-full h-[108.48%] object-cover"
                style={{ top: "-0.17%" }}
              />
            </div>

            {/* 3. Analytics card */}
            <div
              className="hero-analytics-card absolute bg-white rounded-[7.151px] flex flex-col gap-[5.721px] p-[8.581px]"
              style={{
                left: "25.41px",
                top: "57.51px",
                width: "123px",
                height: "108.698px",
                border: "0.715px solid #ff821b",
                boxShadow: "0px 2.86px 7.151px rgba(0,0,0,0.2)",
              }}
            >
              <div className="flex flex-col gap-[5.721px]" style={{ width: "105.837px" }}>
                <p className="font-['Inter'] font-medium text-[#878787] leading-none" style={{ fontSize: "7.151px" }}>
                  Impressions
                </p>
                <p className="font-['Inter'] font-bold text-black leading-none" style={{ fontSize: "10.012px" }}>
                  Analytics Overview
                </p>
              </div>
              <div className="flex flex-col gap-[6.436px]" style={{ width: "68.651px" }}>
                <p className="font-['Inter'] font-bold text-black leading-none" style={{ fontSize: "14.302px", height: "14.302px" }}>
                  128K
                </p>
                <p className="font-['Inter'] font-normal text-[#08b15c] leading-none" style={{ fontSize: "7.151px", height: "7.866px" }}>
                  +74%
                </p>
              </div>
              <div style={{ height: "32.895px", width: "100%" }}>
                <img
                  src="/assets/pricing-page/hero/analytics-chart.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 4. Arrow 1 */}
            <div
              className="hero-arrow-1 absolute"
              style={{ left: "105.32px", top: "294.68px", width: "62.087px", height: "55.858px" }}
            >
              <img src="/assets/pricing-page/hero/arrow-1.svg" alt="" className="w-full h-full" />
            </div>

            {/* 5. Arrow 2 */}
            <div
              className="hero-arrow-2 absolute"
              style={{ left: "58.41px", top: "273.51px", width: "82.69px", height: "76.461px" }}
            >
              <img src="/assets/pricing-page/hero/arrow-2.svg" alt="" className="w-full h-full" />
            </div>

            {/* 6. Reach graph badge */}
            <div
              className="hero-reach-graph absolute"
              style={{ left: "375.41px", top: "47.27px", width: "148px", height: "75px" }}
            >
              <img src="/assets/pricing-page/hero/reach-graph.svg" alt="" className="w-full h-full" />
            </div>

            {/* 7. 92/100 score */}
            <div
              className="hero-score absolute text-center"
              style={{ left: "401.41px", top: "101.27px", width: "96px" }}
            >
              <span className="font-['Inter'] font-bold text-[#222]" style={{ fontSize: "12px" }}>92</span>
              <span className="font-['Inter'] font-normal text-[#222]" style={{ fontSize: "12px" }}>/100</span>
            </div>

            {/* 8. "Reach Graph" label */}
            <p
              className="hero-reach-label absolute font-['Inter'] font-light uppercase tracking-[0.18px] text-[#888] whitespace-nowrap"
              style={{ left: "395.41px", top: "34.27px", fontSize: "9px" }}
            >
              Reach Graph
            </p>

            {/* 9. "Analytics" label */}
            <p
              className="hero-analytics-label absolute font-['Inter'] font-light uppercase tracking-[0.18px] text-[#888] whitespace-nowrap"
              style={{ left: "102.41px", top: "44.27px", fontSize: "9px" }}
            >
              Analytics
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
