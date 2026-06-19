"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "People first",
    description: "We believe in the power of people and put them at the centre of everything we do.",
    image: "/assets/our-story/puzzle-1.png",
  },
  {
    number: "02",
    title: "Trust and integrity",
    description: "We act with honesty, transparency, and respect in every interaction.",
    image: "/assets/our-story/puzzle-2.png",
  },
  {
    number: "03",
    title: "Innovation",
    description: "We challenge the status quo and build solutions that create real impact.",
    image: "/assets/our-story/puzzle-3.png",
  },
  {
    number: "04",
    title: "Excellence",
    description: "We are committed to excellence in our work and the value we deliver.",
    image: "/assets/our-story/puzzle-4.png",
  },
];

export default function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${principles.length * 100}%`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const newIndex = Math.min(
            Math.floor(self.progress * principles.length),
            principles.length - 1
          );
          setActiveIndex(newIndex);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-12 sm:py-16 md:py-20 lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 h-screen">
        {/* Left — Puzzle illustration */}
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[525px] lg:h-[538px] flex-shrink-0">
          {principles.map((item, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === activeIndex ? 1 : 0 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right — Heading + Accordion */}
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-[64px] items-start w-full lg:w-[594px]">
          {/* Header */}
          <div className="flex flex-col gap-[16px] items-start w-full">
            <div className="bg-[rgba(247,103,57,0.16)] border border-[rgba(247,103,57,0.16)] px-[15px] py-[7px] rounded-full">
              <p className="font-montserrat font-normal text-[12px] text-[#f76739] tracking-[0.96px] uppercase leading-[15px]">
                OUR PRINCIPLES
              </p>
            </div>
            <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-black tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] leading-[1.19]">
              Principles that guide us
            </h2>
          </div>

          {/* Accordion */}
          <div className="flex flex-col items-end w-full max-w-[489px]">
            {principles.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  className="flex gap-[16px] items-center w-full"
                >
                  {/* Number */}
                  <div className="flex flex-col items-start justify-center w-[26px] shrink-0">
                    <p className={`font-montserrat font-normal text-[17px] leading-[1.5] transition-colors duration-500 ${isActive ? "text-[#f76739]" : "text-[#888]"}`}>
                      {item.number}
                    </p>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 flex flex-col gap-[8px] items-start pl-[16px] py-[16px] border-l-[1.5px] transition-colors duration-500 ${isActive ? "border-[#f76739]" : "border-[rgba(136,136,136,0.5)]"}`}>
                    <p className={`text-[18px] sm:text-[20px] leading-none transition-all duration-500 ${isActive ? "font-montserrat font-bold text-[#f76739]" : "font-montserrat font-normal text-[#888]"}`}>
                      {item.title}
                    </p>
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: isActive ? "100px" : "0px",
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <p className="font-montserrat font-normal text-[15px] sm:text-[16px] lg:text-[17px] text-[#444] leading-[1.5]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
