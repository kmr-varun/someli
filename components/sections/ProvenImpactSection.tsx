'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: '/assets/proven-impact/icon-increase.svg',
    label: 'INCREASE IN IMPRESSIONS',
    number: '3-5x',
    description: 'Within - 30- 60 weeks',
  },
  {
    icon: '/assets/proven-impact/icon-group.svg',
    label: 'INCREASE IN IMPRESSIONS',
    number: '3-5x',
    description: 'Within - 30- 60 weeks',
  },
  {
    icon: '/assets/proven-impact/icon-increase.svg',
    label: 'CONTENT OUTPUT',
    number: '10x',
    description: 'Without increasing output',
  },
];

// Duplicate stats for seamless infinite scroll
const duplicatedStats = [...stats, ...stats];

export default function ProvenImpactSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Union2 background pattern */}
      <Image
        src="/assets/proven-impact/union2-background.png"
        alt=""
        fill
        className="absolute inset-0 object-cover pointer-events-none"
      />

      {/* Content container */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px] flex flex-col lg:flex-row items-center lg:items-center justify-end gap-8 md:gap-12 lg:gap-[164px]">
        {/* Left: Stats column with outlined numbers - infinite scroll animation - only visible on lg+ */}
        <div className="hidden lg:flex flex-1 h-[400px] md:h-[450px] lg:h-[516px] relative overflow-hidden">
          {/* Top fade gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[436px] h-[100px] md:h-[130px] lg:h-[154px] pointer-events-none z-10">
            <div
              className="w-full h-full scale-y-[-1]"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0), white)',
              }}
            />
          </div>

          {/* Animated stats container */}
          <motion.div
            className="flex flex-col gap-12 md:gap-16 lg:gap-[80px]"
            animate={{
              y: [0, -(stats.length * (150 + 48 + 80))],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Stats - duplicated for seamless loop */}
            {duplicatedStats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-2">
                  <div className="w-[13px] md:w-[14px] lg:w-[15px] h-[10px] md:h-[11px] lg:h-3 relative shrink-0">
                    <Image
                      src={stat.icon}
                      alt=""
                      width={15}
                      height={12}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] md:text-[11px] lg:text-[12px] font-normal text-[#222222] tracking-[0.8px] md:tracking-[0.96px] uppercase leading-[15px]">
                    {stat.label}
                  </p>
                </div>
                <p className="text-[100px] md:text-[120px] lg:text-[150px] font-bold leading-none tracking-[2px] outlined-stat-number">
                  {stat.number}
                </p>
                <p className="text-[10px] md:text-[11px] lg:text-[12px] font-normal text-[#444444] tracking-[0.4px] md:tracking-[0.48px] leading-[15px]">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Bottom fade gradient */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[436px] h-[110px] md:h-[140px] lg:h-[164px] pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0), white)',
            }}
          />
        </div>

        {/* Right: Heading + CTA */}
        <div className="w-full lg:w-[648px] shrink-0 flex flex-col gap-6 sm:gap-7 md:gap-8 items-start lg:items-end">
          {/* Pill label */}
          <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] rounded-full px-3 sm:px-4 md:px-[15px] py-[5px] sm:py-[6px] md:py-[7px]">
            <p className="text-[9px] sm:text-[10px] font-normal text-[#ed6b52] tracking-[0.8px] sm:tracking-[1px] uppercase leading-[15px] font-['Inter']">
              Proven Impact
            </p>
          </div>

          {/* Heading */}
          <div className="w-full text-left lg:text-right flex flex-col gap-6 sm:gap-8 md:gap-10">
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold text-black leading-[1.2] tracking-[-1.5px] md:tracking-[-2px]">
              Teams using Someli show up every day and the numbers prove it.
            </h2>
            <div className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[44px] font-bold text-[#ed6b52] leading-[1.2] tracking-[-1.5px] md:tracking-[-2px]">
              <p className="mb-0">Less spend.</p>
              <p className="mb-0">More attention.</p>
              <p className="mb-0">Better conversions.</p>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[16px] md:text-[18px] font-light text-[#424242] leading-[1.2]">
            Real results. From real people
          </p>

          {/* CTA button */}
          <button className="border border-[#ed6b52] rounded-full pl-5 pr-8 sm:pl-6 sm:pr-9 md:pl-7 md:pr-10 py-3 sm:py-3.5 md:py-4 text-[#ed6b52] font-bold text-[14px] sm:text-[15px] md:text-[16px] leading-none hover:bg-[#ed6b52] hover:text-white transition-colors">
            • Calculate your Reach
          </button>
        </div>
      </div>
    </section>
  );
}
