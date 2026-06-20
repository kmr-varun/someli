"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const statsRow1 = [
  {
    value: "5X",
    label: "Increase in Reach",
    icon: "/assets/hero/icons/users.svg",
    targetNumber: 5,
    suffix: "X",
  },
  {
    value: "2-3X",
    label: "Increase in Engagement",
    icon: "/assets/corporates/icon-handshake.svg",
    targetNumber: 3,
    prefix: "2-",
    suffix: "X",
  },
  {
    value: "35%",
    label: "Increase in Website Traffic",
    icon: "/assets/hero/icons/chart.svg",
    targetNumber: 35,
    suffix: "%",
  },
];

const statsRow2 = [
  {
    value: "25%",
    label: "More qualified Leads",
    icon: "/assets/hero/icons/dollar.svg",
    targetNumber: 25,
    suffix: "%",
  },
  {
    value: "90%",
    label: "Employees Love Using It",
    icon: "/assets/hero/icons/user-star.svg",
    targetNumber: 90,
    suffix: "%",
  },
];

function StatCard({
  icon,
  label,
  targetNumber,
  prefix = "",
  suffix = "",
  delay = 0,
}: {
  icon: string;
  label: string;
  targetNumber: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCount(targetNumber);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, targetNumber, delay]);

  return (
    <div
      ref={cardRef}
      className="bg-white border border-[rgba(0,0,0,0.08)] rounded-[7.263px] w-[174px] h-[135px] flex flex-col items-center justify-center gap-[8.242px] py-[8.242px] transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="relative w-[37px] h-[37px]">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>
      <p className="font-['Inter'] font-bold text-[18.544px] text-[#ff5722] text-center leading-none">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="font-['Inter'] font-semibold text-[8.201px] text-[#4b5563] text-center leading-[11.276px]">
        {label}
      </p>
    </div>
  );
}

export default function RealResultsSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/pricing-page/union-background.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
        {/* Left heading */}
        <div className="w-full lg:w-[541px]">
          <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-black leading-[1.19] tracking-[-2px]">
            Real results for companies like yours.
          </h2>
        </div>

        {/* Right stat cards */}
        <div className="flex flex-col gap-[9.684px] items-center w-full lg:w-auto">
          <div className="flex flex-wrap justify-center gap-[10px]">
            {statsRow1.map((stat, i) => (
              <StatCard key={i} {...stat} delay={i * 100} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-[10px]">
            {statsRow2.map((stat, i) => (
              <StatCard key={i} {...stat} delay={(i + statsRow1.length) * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
