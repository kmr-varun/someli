'use client';

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const CANVAS_W = 524;
const CANVAS_H = 352;

function ArrowSmall() {
  return (
    <svg viewBox="0 0 62.0875 55.8585" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="arrow-sm-grad" x1="31.0437" y1="0" x2="31.0437" y2="55.8585" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF821B" />
          <stop offset="1" stopColor="#D54050" />
        </linearGradient>
      </defs>
      <path d="M38.8918 2.91899L45.9157 9.94284L0 55.8585H11.9888L51.91 15.9372L59.1684 23.1891L62.0875 0L38.8918 2.91899Z" fill="url(#arrow-sm-grad)" />
    </svg>
  );
}

function ArrowLarge() {
  return (
    <svg viewBox="0 0 82.6899 76.4609" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="arrow-lg-grad" x1="41.3449" y1="0" x2="41.3449" y2="76.4609" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF821B" />
          <stop offset="1" stopColor="#D54050" />
        </linearGradient>
      </defs>
      <path d="M59.4942 2.91901L66.5181 9.94938L0 76.4609H11.9822L72.5125 15.9438L79.7709 23.1957L82.6899 0L59.4942 2.91901Z" fill="url(#arrow-lg-grad)" />
    </svg>
  );
}

function ReachGraph() {
  return (
    <svg viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="reach-grad" x1="74" y1="0" x2="74" y2="148" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF821B" />
          <stop offset="1" stopColor="#D54050" />
        </linearGradient>
      </defs>
      {/* Outer light fill arc */}
      <path
        d="M148 74C148 54.374 140.204 35.5518 126.326 21.6741C112.448 7.79641 93.626 7.05056e-06 74 5.56883e-06C54.374 4.08711e-06 35.5518 7.79641 21.6741 21.6741C7.79641 35.5518 2.96345e-06 54.374 0 74L13.9235 74C13.9235 58.0667 20.253 42.786 31.5195 31.5195C42.786 20.253 58.0667 13.9235 74 13.9235C89.9333 13.9235 105.214 20.253 116.48 31.5195C127.747 42.786 134.076 58.0667 134.076 74H148Z"
        fill="#ED6B52"
        fillOpacity="0.08"
      />
      {/* Gradient progress arc */}
      <path
        d="M135.897 33.4447C127.168 20.1214 114.372 9.97036 99.4125 4.50034C84.4528 -0.969686 68.1273 -1.46672 52.8625 3.08311C37.5977 7.63293 24.2084 16.9867 14.6846 29.7543C5.16072 42.5219 0.0107313 58.0218 1.67418e-05 73.9502L13.9235 73.9596C13.9322 61.0282 18.1132 48.4447 25.8451 38.0794C33.577 27.7141 44.447 20.1203 56.8397 16.4265C69.2323 12.7328 82.486 13.1363 94.631 17.5771C106.776 22.0179 117.164 30.2589 124.251 41.0754L135.897 33.4447Z"
        fill="url(#reach-grad)"
      />
    </svg>
  );
}

function AnalyticsSparkline() {
  return (
    <svg viewBox="0 0 105 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF821B" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FF821B" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 28 C10 26, 18 22, 26 20 C34 18, 40 24, 48 18 C56 12, 62 10, 70 8 C78 6, 86 10, 95 4 L105 2"
        stroke="#FF821B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M0 28 C10 26, 18 22, 26 20 C34 18, 40 24, 48 18 C56 12, 62 10, 70 8 C78 6, 86 10, 95 4 L105 2 L105 33 L0 33 Z"
        fill="url(#spark-grad)"
      />
    </svg>
  );
}

function AnalyticsCard() {
  return (
    <div
      className="absolute bg-white flex flex-col gap-[5.721px] p-[8.581px]"
      style={{
        left: "25.41px",
        top: "57.51px",
        width: "123px",
        height: "108.698px",
        border: "0.715px solid #ff821b",
        borderRadius: "7.151px",
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
      <div className="flex flex-col gap-[6.436px]">
        <p className="font-['Inter'] font-bold text-black leading-none" style={{ fontSize: "14.302px" }}>
          128K
        </p>
        <p className="font-['Inter'] font-normal text-[#08b15c] leading-none" style={{ fontSize: "7.151px" }}>
          +74%
        </p>
      </div>
      <div className="flex-1" style={{ minHeight: "28px" }}>
        <AnalyticsSparkline />
      </div>
    </div>
  );
}

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
            {/* Blob background — image ok */}
            <div className="absolute" style={{ left: 0, top: 0, width: "455.82px", height: "310.52px" }}>
              <img src="/assets/pricing-page/hero/blob-bg.svg" alt="" className="w-full h-full" />
            </div>

            {/* Dashboard screenshot — image ok */}
            <div
              className="absolute overflow-hidden rounded-[10px] border border-[rgba(0,0,0,0.1)]"
              style={{ left: "136.41px", top: "121.01px", width: "367px", height: "228px" }}
            >
              <img
                src="/assets/pricing-page/hero/dashboard.png"
                alt="Someli dashboard"
                className="absolute inset-0 w-full object-cover"
                style={{ height: "108.48%", top: "-0.17%" }}
              />
            </div>

            {/* Analytics card — built as real HTML */}
            <AnalyticsCard />

            {/* Arrow small — inline SVG */}
            <div
              className="hero-arrow-small absolute"
              style={{ left: "105.32px", top: "294.68px", width: "62.087px", height: "55.858px" }}
            >
              <ArrowSmall />
            </div>

            {/* Arrow large — inline SVG */}
            <div
              className="hero-arrow-large absolute"
              style={{ left: "58.41px", top: "273.51px", width: "82.69px", height: "76.461px" }}
            >
              <ArrowLarge />
            </div>

            {/* Reach graph arc — inline SVG */}
            <div
              className="hero-reach-graph absolute"
              style={{ left: "375.41px", top: "47.27px", width: "148px", height: "75px" }}
            >
              <ReachGraph />
            </div>

            {/* Reach Graph label */}
            <p
              className="hero-reach-label absolute font-['Inter'] font-light uppercase tracking-[0.18px] text-[#888] whitespace-nowrap"
              style={{ left: "395.41px", top: "34.27px", fontSize: "9px" }}
            >
              Reach Graph
            </p>

            {/* 92/100 score */}
            <div
              className="hero-score absolute text-center"
              style={{ left: "401.41px", top: "101.27px", width: "96px" }}
            >
              <span className="font-['Inter'] font-bold text-[#222]" style={{ fontSize: "12px" }}>92</span>
              <span className="font-['Inter'] font-normal text-[#222]" style={{ fontSize: "12px" }}>/100</span>
            </div>

            {/* Analytics label */}
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
