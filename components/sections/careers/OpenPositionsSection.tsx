"use client";

import { useState } from "react";
import Image from "next/image";

const teams = [
  {
    name: "Design Team",
    positions: [
      { title: "Product Designer", description: "Join our design team to craft intuitive user experiences and drive product innovation." },
      { title: "UI/UX Designer", description: "Create beautiful, user-centered interfaces that delight our customers." },
      { title: "Visual Illustrator", description: "Bring our brand to life through compelling illustrations and visual storytelling." },
    ],
  },
  {
    name: "Design Team",
    positions: [
      { title: "Product Designer", description: "Join our design team to craft intuitive user experiences and drive product innovation." },
      { title: "UI/UX Designer", description: "Create beautiful, user-centered interfaces that delight our customers." },
      { title: "Visual Illustrator", description: "Bring our brand to life through compelling illustrations and visual storytelling." },
    ],
  },
  {
    name: "Design Team",
    positions: [
      { title: "Product Designer", description: "Join our design team to craft intuitive user experiences and drive product innovation." },
      { title: "UI/UX Designer", description: "Create beautiful, user-centered interfaces that delight our customers." },
      { title: "Visual Illustrator", description: "Bring our brand to life through compelling illustrations and visual storytelling." },
    ],
  },
  {
    name: "Design Team",
    positions: [
      { title: "Product Designer", description: "Join our design team to craft intuitive user experiences and drive product innovation." },
      { title: "UI/UX Designer", description: "Create beautiful, user-centered interfaces that delight our customers." },
      { title: "Visual Illustrator", description: "Bring our brand to life through compelling illustrations and visual storytelling." },
    ],
  },
];

export default function OpenPositionsSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-[80px] flex flex-col gap-10 sm:gap-[56px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center">
          <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] rounded-full px-[15px] py-[7px]">
            <span className="font-montserrat text-[12px] font-normal tracking-[0.96px] uppercase text-[#ED6B52] leading-[15px]">
              CAREERS
            </span>
          </div>
          <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.19] tracking-[-2px] text-black text-center">
            Join the Team Building the Future of Employee Advocacy
          </h2>
        </div>

        {/* Job cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {teams.map((team, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[rgba(0,0,0,0.08)] rounded-[20px] p-6 flex flex-col gap-6"
            >
              {/* Team header */}
              <div className="flex flex-col gap-[18px]">
                <div className="w-[52px] h-[52px] rounded-[10px] bg-[rgba(237,107,82,0.1)] flex items-center justify-center">
                  <Image
                    src="/assets/careers/icon-pen.svg"
                    alt=""
                    width={17}
                    height={17}
                  />
                </div>
                <p className="font-montserrat font-bold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#222]">
                  {team.name}
                </p>
              </div>

              {/* Position list */}
              <div className="flex flex-col">
                {team.positions.map((position, posIdx) => {
                  const key = `${idx}-${posIdx}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={key} className="border-b border-[rgba(237,107,82,0.2)]">
                      <button
                        onClick={() => toggleItem(key)}
                        className="flex items-center justify-between py-4 w-full cursor-pointer"
                      >
                        <span className="font-montserrat font-medium text-[14px] leading-none text-[#ED6B52]">
                          {position.title}
                        </span>
                        <Image
                          src="/assets/careers/chevron-down-sm.svg"
                          alt=""
                          width={7}
                          height={4}
                          className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-[200px] pb-4" : "max-h-0"}`}
                      >
                        <p className="font-montserrat text-[13px] font-normal leading-[1.5] text-[#666]">
                          {position.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
