"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

const statsTop = [
  { icon: "/assets/hero/icons/users.svg", value: "500+", label: "Organizations Trust us" },
  { icon: "/assets/our-story/icon-handshake.svg", value: "1M+", label: "Employee Advocates" },
  { icon: "/assets/hero/icons/chart.svg", value: "10X", label: "Average Reach Increase" },
];

const statsBottom = [
  { icon: "/assets/hero/icons/dollar.svg", value: "SOC 2", label: "Type II Certified" },
  { icon: "/assets/hero/icons/user-star.svg", value: "60+", label: "Countries Impacted" },
];

const sections = [
  {
    title: "Mission",
    text: "Most social media tools help you post. We help you grow. Every feature in Someli is designed around a single question: will this drive real business results? That's why we pair smart automation with dedicated marketing support, engagement reports, and actionable AI recommendations — not just dashboards.",
  },
  {
    title: "Vision",
    text: "To create a world where every employee becomes a confident brand storyteller — driving authentic connections, measurable growth, and shared success across every organization they represent.",
  },
];

function CounterStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const duration = 1500;
    const startTime = Date.now();
    const isDecimal = target % 1 !== 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (isDecimal) {
        setDisplay(current.toFixed(1) + suffix);
      } else {
        setDisplay(Math.round(current) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-[7.263px] w-[140px] sm:w-[154px] md:w-[164px] lg:w-[174px] h-[110px] sm:h-[120px] md:h-[128px] lg:h-[135px] flex flex-col items-center justify-center gap-[8.242px] py-[8.242px]">
      <div className="relative w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[37.489px] lg:h-[37.489px]">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>
      <p className="font-['Inter'] font-bold text-[14px] sm:text-[16px] lg:text-[18.544px] text-[#ff5722] text-center leading-none">
        <CounterStat value={value} />
      </p>
      <p className="font-['Inter'] font-semibold text-[7px] sm:text-[7.5px] lg:text-[8.201px] text-[#4b5563] text-center leading-[11.276px]">
        {label}
      </p>
    </div>
  );
}

export default function MissionVisionSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Grid background */}
      <Image
        src="/assets/pricing-page/union-background.png"
        alt=""
        fill
        className="absolute inset-0 object-cover pointer-events-none"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-12 sm:py-16 md:py-20 lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        {/* Left — Mission & Vision accordion */}
        <div className="flex flex-col items-start w-full lg:w-[541px]">
          {sections.map((section, i) => (
            <div
              key={i}
              className={`flex flex-col gap-[32px] items-start w-full ${i < sections.length - 1 ? "pb-[32px] border-b border-[rgba(0,0,0,0.3)]" : "pt-[32px]"}`}
            >
              <button
                onClick={() => setActiveIndex(i)}
                className="cursor-pointer"
              >
                <h2 className="font-montserrat font-bold text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] tracking-[4px] leading-none outlined-text-orange">
                  {section.title}
                </h2>
              </button>
              {activeIndex === i && (
                <p className="font-['Space_Grotesk'] font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#444] leading-[1.5]">
                  {section.text}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right — Stat cards */}
        <div className="flex flex-col gap-[9.684px] items-center">
          <div className="flex gap-[10px]">
            {statsTop.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>
          <div className="flex gap-[10px]">
            {statsBottom.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
