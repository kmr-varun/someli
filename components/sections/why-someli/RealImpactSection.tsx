"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const statsRow1 = [
  {
    value: "3.5M+",
    label: "Employees Activated",
    icon: "/assets/why-someli/icons/icon-user.svg",
    targetNumber: 3.5,
    suffix: "M+",
  },
  {
    value: "8X",
    label: "Increase in Social Reach",
    icon: "/assets/why-someli/icons/icon-handshake.png",
    targetNumber: 8,
    suffix: "X",
  },
  {
    value: "45%",
    label: "Increase in brand trust",
    icon: "/assets/why-someli/icons/icon-chart.svg",
    targetNumber: 45,
    suffix: "%",
  },
];

const statsRow2 = [
  {
    value: "300%",
    label: "Average ROI delivered",
    icon: "/assets/why-someli/icons/icon-dollar.svg",
    targetNumber: 300,
    suffix: "%",
  },
  {
    value: "62%",
    label: "Increase in Employee Engagement",
    icon: "/assets/why-someli/icons/icon-star.svg",
    targetNumber: 62,
    suffix: "%",
  },
];

function StatCard({
  icon,
  label,
  targetNumber,
  suffix = "",
  delay = 0,
}: {
  icon: string;
  label: string;
  targetNumber: number;
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
      const duration = 2000;
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCount(targetNumber);
          clearInterval(interval);
        } else {
          // For decimals like 3.5, show one decimal place
          if (targetNumber % 1 !== 0) {
            setCount(Math.floor(current * 10) / 10);
          } else {
            setCount(Math.floor(current));
          }
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
        {count}
        {suffix}
      </p>
      <p className="font-['Inter'] font-semibold text-[8.201px] text-[#4b5563] text-center leading-[11.276px]">
        {label}
      </p>
    </div>
  );
}

export default function RealImpactSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Grid background */}
      <Image
        src="/assets/why-someli/real-impact-background.svg"
        alt=""
        fill
        className="object-cover pointer-events-none"
      />

      <div className="relative max-w-[1440px] mx-auto px-24 py-[100px] flex items-center justify-between">
        {/* Left heading */}
        <div className="w-[541px]">
          <h2 className="font-montserrat font-bold text-[60px] text-black leading-[71.4px] tracking-[-2px]">
            Real Impact.
            <br />
            Real Results
          </h2>
        </div>

        {/* Right stat cards */}
        <div className="flex flex-col gap-[9.684px] items-center">
          <div className="flex gap-[10px]">
            {statsRow1.map((stat, i) => (
              <StatCard key={i} {...stat} delay={i * 100} />
            ))}
          </div>
          <div className="flex gap-[10px]">
            {statsRow2.map((stat, i) => (
              <StatCard key={i} {...stat} delay={(i + statsRow1.length) * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
