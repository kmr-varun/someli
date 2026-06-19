"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Rajiv Shah", role: "FOUNDER & CEO", image: "/assets/our-story/team-1.jpg" },
  { name: "Johny Doe", role: "FOUNDER & CEO", image: "/assets/our-story/team-2.jpg" },
  { name: "Jimmy Doe", role: "FOUNDER & CEO", image: "/assets/our-story/team-3.jpg" },
  { name: "Johny Doe", role: "FOUNDER & CEO", image: "/assets/our-story/team-2.jpg" },
];

export default function TeamSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#111]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/assets/our-story/team-dark-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[96px] py-12 sm:py-16 md:py-20 lg:py-[120px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        {/* Left content */}
        <div className="flex flex-col gap-[40px] items-start w-full lg:w-[595px]">
          <div className="flex flex-col gap-[16px] items-start w-full">
            {/* Pill */}
            <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] px-[15px] py-[7px] rounded-full">
              <p className="font-montserrat font-normal text-[10px] text-[#ED6B52] tracking-[1px] uppercase leading-[15px]">
                OUR TEAM
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-white tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] leading-[1.19]">
              A Team That&apos;s In Your Corner
            </h2>
          </div>

          {/* Body */}
          <p className="font-montserrat font-normal text-[15px] sm:text-[16px] lg:text-[18px] text-white leading-[1.5]">
            When you sign up with Someli, you&apos;re not just getting software. Depending on your plan, you get a dedicated marketing team managing your content strategy, branding, design, and video — working as an extension of your business.
          </p>

          {/* CTA */}
          <button className="border border-[#ED6B52] rounded-full pl-[28px] pr-[40px] py-[16px]">
            <span className="font-montserrat font-bold text-[16px] text-[#ED6B52] leading-none">
              • Contact us →
            </span>
          </button>
        </div>

        {/* Right — Team cards infinite slide */}
        <div className="w-full lg:w-[574px] h-[300px] sm:h-[370px] lg:h-[437px] overflow-hidden relative flex-shrink-0">
          <motion.div
            className="flex gap-[16px] items-start absolute top-0 left-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          >
            {[0, 1].map((pass) => (
              <div key={pass} className="flex gap-[16px] items-start shrink-0">
                {teamMembers.map((member, i) => (
                  <div
                    key={i}
                    className="glass-border-card bg-[rgba(255,255,255,0.04)] flex flex-col items-start shrink-0 p-[16px] sm:p-[18px] lg:p-[20px] rounded-[10.109px] w-[240px] sm:w-[280px] lg:w-[322px]"
                  >
                    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[26px] items-start w-full relative">
                      {/* Photo */}
                      <div className="relative w-full h-[200px] sm:h-[260px] lg:h-[316px] rounded-[12px] overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-[8px] right-[8px] w-[29px] h-[29px]">
                          <Image
                            src="/assets/our-story/linkedin-badge.png"
                            alt=""
                            fill
                            className="object-contain rounded-[6px]"
                          />
                        </div>
                      </div>

                      {/* Name & role */}
                      <div className="flex flex-col gap-[8px] items-start w-full">
                        <p className="font-montserrat font-normal text-[18px] sm:text-[20px] lg:text-[24px] text-white leading-[1.24]">
                          {member.name}
                        </p>
                        <p className="font-montserrat font-normal text-[10px] sm:text-[11px] lg:text-[12px] text-[rgba(255,255,255,0.8)] leading-[1.4]">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
