'use client';

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// ─── canvas dimensions ────────────────────────────────────────────────────────
const CANVAS_W = 524;
const CANVAS_H = 352;

// ─── reach-graph arc geometry ─────────────────────────────────────────────────
const R = 60;
const CIRCUMFERENCE = 2 * Math.PI * R;       // 376.99
const TRACK_DASH  = CIRCUMFERENCE * 0.5;     // full top semicircle = 188.5
const TARGET_DASH = TRACK_DASH * 0.75;       // 75% progress fill   = 141.4

// ─── count-up helper ─────────────────────────────────────────────────────────
function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return value;
}

// ─── Inline SVG arrows ────────────────────────────────────────────────────────
function ArrowSmall({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 62.0875 55.8585" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="arrow-sm-g" x1="31" y1="0" x2="31" y2="55.86" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF821B" /><stop offset="1" stopColor="#D54050" />
        </linearGradient>
      </defs>
      <path
        className={animate ? "hero-arrow-animate" : ""}
        d="M38.8918 2.91899L45.9157 9.94284L0 55.8585H11.9888L51.91 15.9372L59.1684 23.1891L62.0875 0L38.8918 2.91899Z"
        fill="url(#arrow-sm-g)"
      />
    </svg>
  );
}

function ArrowLarge({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 82.6899 76.4609" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="arrow-lg-g" x1="41" y1="0" x2="41" y2="76.46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF821B" /><stop offset="1" stopColor="#D54050" />
        </linearGradient>
      </defs>
      <path
        className={animate ? "hero-arrow-animate-delayed" : ""}
        d="M59.4942 2.91901L66.5181 9.94938L0 76.4609H11.9822L72.5125 15.9438L79.7709 23.1957L82.6899 0L59.4942 2.91901Z"
        fill="url(#arrow-lg-g)"
      />
    </svg>
  );
}

// ─── Reach gauge (stroke-dashoffset animated arc) ────────────────────────────
function ReachGraph({ animate }: { animate: boolean }) {
  const [offset, setOffset] = useState(TARGET_DASH);

  useEffect(() => {
    if (!animate) return;
    // one-frame delay so the browser paints the initial offset first
    const id = requestAnimationFrame(() => setOffset(0));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  return (
    <svg viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="reach-g" x1="74" y1="0" x2="74" y2="148" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF821B" /><stop offset="1" stopColor="#D54050" />
        </linearGradient>
      </defs>
      {/* background track */}
      <circle
        cx="74" cy="74" r={R}
        fill="none"
        stroke="#ED6B52"
        strokeOpacity="0.12"
        strokeWidth="14"
        strokeDasharray={`${TRACK_DASH} ${CIRCUMFERENCE - TRACK_DASH}`}
        transform="rotate(180, 74, 74)"
      />
      {/* animated progress arc */}
      <circle
        cx="74" cy="74" r={R}
        fill="none"
        stroke="url(#reach-g)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={`${TARGET_DASH} ${CIRCUMFERENCE}`}
        strokeDashoffset={offset}
        transform="rotate(180, 74, 74)"
        style={{ transition: animate ? "stroke-dashoffset 1.8s cubic-bezier(0.25,0.1,0.25,1)" : "none" }}
      />
    </svg>
  );
}

// ─── Analytics sparkline (path draw animation) ───────────────────────────────
function Sparkline({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 105 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF821B" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FF821B" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* fill area */}
      <path
        d="M0 28 C10 26,18 22,26 20 C34 18,40 24,48 18 C56 12,62 10,70 8 C78 6,86 10,95 4 L105 2 L105 33 L0 33 Z"
        fill="url(#spark-fill)"
        opacity={animate ? 1 : 0}
        style={{ transition: animate ? "opacity 0.6s ease 1s" : "none" }}
      />
      {/* line — drawn via stroke-dashoffset */}
      <path
        d="M0 28 C10 26,18 22,26 20 C34 18,40 24,48 18 C56 12,62 10,70 8 C78 6,86 10,95 4 L105 2"
        stroke="#FF821B"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset={animate ? 0 : 1}
        style={{ transition: animate ? "stroke-dashoffset 1.4s ease-out 0.4s" : "none" }}
      />
    </svg>
  );
}

// ─── Analytics card ──────────────────────────────────────────────────────────
function AnalyticsCard({ animate }: { animate: boolean }) {
  const impressions = useCountUp(128, 1400, animate);   // "128K"
  const growth      = useCountUp(74, 1200, animate);    // "+74%"

  return (
    <div
      className="absolute bg-white flex flex-col justify-between p-[8.581px]"
      style={{
        left: "25.41px", top: "57.51px",
        width: "123px", height: "108.698px",
        border: "0.715px solid #ff821b",
        borderRadius: "7.151px",
        boxShadow: "0px 2.86px 7.151px rgba(0,0,0,0.2)",
      }}
    >
      {/* header */}
      <div className="flex flex-col gap-[4px]">
        <p className="font-['Inter'] font-medium text-[#878787] leading-none" style={{ fontSize: "7.151px" }}>
          Impressions
        </p>
        <p className="font-['Inter'] font-bold text-black leading-none" style={{ fontSize: "10.012px" }}>
          Analytics Overview
        </p>
      </div>
      {/* numbers */}
      <div className="flex items-baseline gap-[6px]">
        <p className="font-['Inter'] font-bold text-black leading-none" style={{ fontSize: "14.302px" }}>
          {impressions}K
        </p>
        <p className="font-['Inter'] font-normal text-[#08b15c] leading-none" style={{ fontSize: "7.151px" }}>
          +{growth}%
        </p>
      </div>
      {/* sparkline */}
      <div style={{ height: "32px", width: "100%" }}>
        <Sparkline animate={animate} />
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function PricingHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale]     = useState(1);
  const [animate, setAnimate] = useState(false);

  // responsive scale
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(Math.min(entry.contentRect.width / CANVAS_W, 1));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // trigger animations on scroll-into-view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const scaledH = CANVAS_H * scale;

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <Image
        src="/assets/pricing-page/union-background.png"
        alt="" fill
        className="absolute inset-0 object-cover pointer-events-none"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-12 sm:py-16 md:py-20 lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">

        {/* Left */}
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
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to bottom, #df8251, #d54050)" }}>
                Serious Growth.
              </span>
            </h1>
          </div>
          <p className="font-['Montserrat'] font-normal text-[15px] sm:text-[16px] md:text-[18px] text-[#444444] leading-[1.5]">
            No hidden fees. No long-term lock-ins. Just the tools, strategy, and support your business needs to grow on social media — from day one.
          </p>
        </div>

        {/* Right: composite illustration */}
        <div ref={wrapperRef} className="w-full lg:flex-1 lg:min-w-0 overflow-visible" style={{ height: `${scaledH}px` }}>
          <div className="relative origin-top-left" style={{ width: `${CANVAS_W}px`, height: `${CANVAS_H}px`, transform: `scale(${scale})` }}>

            {/* blob — static image ok */}
            <div className="absolute" style={{ left: 0, top: 0, width: "455.82px", height: "310.52px" }}>
              <img src="/assets/pricing-page/hero/blob-bg.svg" alt="" className="w-full h-full" />
            </div>

            {/* dashboard screenshot — static image ok */}
            <div className="absolute overflow-hidden rounded-[10px] border border-[rgba(0,0,0,0.1)]" style={{ left: "136.41px", top: "121.01px", width: "367px", height: "228px" }}>
              <img src="/assets/pricing-page/hero/dashboard.png" alt="Someli dashboard" className="absolute inset-0 w-full object-cover" style={{ height: "108.48%", top: "-0.17%" }} />
            </div>

            {/* analytics card — animated */}
            <AnalyticsCard animate={animate} />

            {/* arrow small — animated */}
            <div className="absolute" style={{ left: "105.32px", top: "294.68px", width: "62.087px", height: "55.858px" }}>
              <ArrowSmall animate={animate} />
            </div>

            {/* arrow large — animated */}
            <div className="absolute" style={{ left: "58.41px", top: "273.51px", width: "82.69px", height: "76.461px" }}>
              <ArrowLarge animate={animate} />
            </div>

            {/* reach gauge — animated */}
            <div className="absolute" style={{ left: "375.41px", top: "47.27px", width: "148px", height: "75px" }}>
              <ReachGraph animate={animate} />
            </div>

            {/* reach graph label */}
            <p className="absolute font-['Inter'] font-light uppercase tracking-[0.18px] text-[#888] whitespace-nowrap" style={{ left: "395.41px", top: "34.27px", fontSize: "9px" }}>
              Reach Graph
            </p>

            {/* 92/100 score */}
            <div className="absolute text-center" style={{ left: "401.41px", top: "101.27px", width: "96px" }}>
              <span className="font-['Inter'] font-bold text-[#222]" style={{ fontSize: "12px" }}>92</span>
              <span className="font-['Inter'] font-normal text-[#222]" style={{ fontSize: "12px" }}>/100</span>
            </div>

            {/* analytics label */}
            <p className="absolute font-['Inter'] font-light uppercase tracking-[0.18px] text-[#888] whitespace-nowrap" style={{ left: "102.41px", top: "44.27px", fontSize: "9px" }}>
              Analytics
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
