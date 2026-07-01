"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const regions = [
  {
    name: "MENA",
    priority: true,
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
  },
  { name: "INDIA", priority: false, countries: [] },
  { name: "AUSTRALIA", priority: false, countries: [] },
  { name: "USA", priority: false, countries: [] },
];

export default function StrategicPartnerSection() {
  const [expandedRegion, setExpandedRegion] = useState<string>("MENA");

  return (
    <section className="relative w-full overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/careers/hero-grid-pattern.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-[80px]">
        {/* Header */}
        <SectionHeader
          pill="PARTNERSHIPS"
          heading="Become a strategic growth partner"
          description="We are building a carefully selected partner ecosystem across key global markets. We are seeking high-performing agencies and consulting firms that serve enterprise and mid-market organizations looking to increase employee engagement, brand reach, and social impact"
          align="center"
          headingClassName="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.19] tracking-[-2px]"
          descriptionClassName="max-w-[900px]"
          className="mb-10 sm:mb-[60px]"
        />

        {/* Map + Region cards */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[64px]">
          {/* Left - Region cards */}
          <div className="flex flex-col gap-2 w-full lg:w-[477px] lg:shrink-0">
            {regions.map((region) => {
              const isExpanded = expandedRegion === region.name;
              return (
                <button
                  key={region.name}
                  onClick={() => setExpandedRegion(isExpanded ? "" : region.name)}
                  className={`w-full rounded-[20px] border-2 p-6 text-left transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? "bg-gradient-to-b from-[#DF8251] to-[#D54050] border-[rgba(0,0,0,0.08)]"
                      : "bg-white border-[rgba(0,0,0,0.08)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-montserrat font-bold text-[14px] tracking-[-0.28px] leading-[1.5] ${
                        isExpanded ? "text-white" : "text-[#222]"
                      }`}
                    >
                      {region.name}
                    </span>
                    {region.priority && (
                      <div
                        className={`rounded-full px-[15px] py-[7px] border ${
                          isExpanded
                            ? "bg-[rgba(255,255,255,0.2)] border-white"
                            : "bg-[rgba(237,107,82,0.16)] border-[rgba(237,107,82,0.16)]"
                        }`}
                      >
                        <span
                          className={`font-montserrat text-[12px] font-normal tracking-[0.96px] uppercase leading-[15px] ${
                            isExpanded ? "text-white" : "text-[#ED6B52]"
                          }`}
                        >
                          PRIORITY REGION
                        </span>
                      </div>
                    )}
                  </div>
                  {isExpanded && region.countries.length > 0 && (
                    <ul className="mt-3 font-montserrat text-[16px] lg:text-[18px] font-normal text-white leading-[1.5] list-disc pl-7">
                      {region.countries.map((country) => (
                        <li key={country}>{country}</li>
                      ))}
                    </ul>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right - World map */}
          <div className="flex-1 relative w-full">
            <Image
              src="/assets/careers/world-map.svg"
              alt="World map showing partner regions"
              width={707}
              height={458}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
