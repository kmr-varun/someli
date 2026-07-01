'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import SectionHeader from "@/components/ui/SectionHeader";

const ILLUS_W = 606;
const ILLUS_H = 479;

const BADGES = [
  {
    label: 'Content Strategist',
    avatar: '/assets/advocacy-engine/avatar-content-strategist.png',
    avatarBorder: '/assets/advocacy-engine/avatar-border-left.svg',
    arrow: '/assets/advocacy-engine/arrow-left.svg',
    arrowW: 229.279,
    left: 30.57,
    top: 63.46,
    textLeft: 87.24,
  },
  {
    label: 'Copyrwriter',
    avatar: '/assets/advocacy-engine/avatar-copywriter.png',
    avatarBorder: '/assets/advocacy-engine/avatar-border-copywriter.svg',
    arrow: '/assets/advocacy-engine/arrow-right-copywriter.svg',
    arrowW: 161.93,
    left: 359.9,
    top: 156.46,
    textLeft: 89.17,
  },
  {
    label: 'Creative Director',
    avatar: '/assets/advocacy-engine/avatar-creative-director.png',
    avatarBorder: '/assets/advocacy-engine/avatar-border-left.svg',
    arrow: '/assets/advocacy-engine/arrow-left.svg',
    arrowW: 229.279,
    left: 0,
    top: 375.68,
    textLeft: 87.24,
  },
  {
    label: 'Designer',
    avatar: '/assets/advocacy-engine/avatar-designer.png',
    avatarBorder: '/assets/advocacy-engine/avatar-border-designer.png',
    arrow: '/assets/advocacy-engine/arrow-right-designer.svg',
    arrowW: 184.358,
    left: 307.96,
    top: 415.32,
    textLeft: 92.45,
  },
];

export default function AdvocacyEngineSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setScale(Math.min(w / ILLUS_W, 1));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scaledH = ILLUS_H * scale;

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px]">
      {/* Background Union pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <Image
          src="/assets/advocacy-engine/bg-union.svg"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        {/* Left: Text block */}
        <div className="flex w-full flex-col gap-6 lg:w-[48%] lg:flex-shrink-0">
          <div className="flex flex-col gap-4 lg:gap-10">
            <SectionHeader
              pill="MORE REACH. MORE IMPACT. LESS COST"
              heading="Your Next Marketing Hire or an entire Advocacy Engine?"
              description="For less than the cost of one employee, Someli AI provides an AI-powered employee advocacy platform, a dedicated creative team, content strategy, and amplified reach across your leadership team."
              headingClassName="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[60px] leading-[1.19] tracking-[-1.5px] md:tracking-[-2px]"
            />
          </div>

          {/* CTA */}
          <Link
            href="/how-someli-works"
            className="group self-start inline-flex items-center rounded-full border border-[#ED6B52] pl-7 pr-10 py-4 hover:bg-[#ED6B52] transition-colors"
          >
            <span className="font-montserrat text-[16px] font-bold text-[#ED6B52] group-hover:text-white transition-colors leading-none">
              See How it Works →
            </span>
          </Link>
        </div>

        {/* Right: Illustration — scales to fit its wrapper */}
        <div
          ref={wrapperRef}
          className="w-full lg:w-[48%] lg:flex-shrink-0 flex justify-center overflow-hidden"
          style={{ height: `${scaledH}px` }}
        >
          <div
            className="relative"
            style={{
              width: `${ILLUS_W}px`,
              height: `${ILLUS_H}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
            }}
          >
            {/* Dot grid background from Figma */}
            <img
              src="/assets/advocacy-engine/dots-bg.svg"
              alt=""
              className="absolute pointer-events-none"
              style={{ left: '20.83px', top: 0, width: '531.213px', height: '477.652px' }}
            />

            {/* Central white pricing card */}
            <div
              className="absolute flex flex-col gap-9 bg-white"
              style={{
                left: '141.4px',
                top: '113.86px',
                width: '270px',
                height: '277px',
                border: '1.719px solid #EE6F58',
                borderRadius: '13.751px',
                padding: '34.378px 27.502px',
              }}
            >
              <div className="flex flex-col gap-[18px] w-full">
                <div className="flex flex-col gap-[10px] w-full">
                  <p className="font-montserrat font-bold text-[18.229px] leading-[1.5] tracking-[-0.365px] text-[#222] capitalize">
                    Your entire creative &amp; advocacy team
                  </p>
                  <p className="font-montserrat font-medium text-[13.751px] leading-[1.5] tracking-[-0.275px] text-[#222]">
                    For less than one employee
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-[6.51px]">
                  <span
                    className="font-montserrat font-bold text-[36px] leading-[1.1] tracking-[-0.72px]"
                    style={{
                      background: 'linear-gradient(to bottom, #EE6F58, #D33546)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    $1,500
                  </span>
                  <span className="font-montserrat font-medium text-[13.751px] leading-[1.5] tracking-[-0.275px] text-[#222]">
                    /month
                  </span>
                </div>
              </div>

              {/* All inclusive pill */}
              <div className="flex w-full items-center justify-center gap-[5.877px] rounded-full bg-[rgba(245,245,245,0.5)] px-[14px] py-[9px]">
                <div className="relative h-[9.937px] w-[9.937px] flex-shrink-0">
                  <Image
                    src="/assets/advocacy-engine/dot-icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-montserrat text-[9.403px] font-normal uppercase tracking-[0.376px] text-[#111] leading-none whitespace-nowrap">
                  ALL INCLUSIVE. NO HIDDEN COSTS
                </span>
              </div>
            </div>

            {/* Role badges */}
            {BADGES.map((badge) => {
              const totalW = 73.514 + badge.arrowW - 11.778;
              return (
                <div
                  key={badge.label}
                  className="absolute flex items-center"
                  style={{
                    left: `${badge.left}px`,
                    top: `${badge.top}px`,
                    height: '63.665px',
                    width: `${totalW}px`,
                  }}
                >
                  {/* Avatar group */}
                  <div
                    className="relative flex-shrink-0"
                    style={{ width: '73.514px', height: '63.665px', marginRight: '-11.778px', zIndex: 2 }}
                  >
                    <img
                      src={badge.avatar}
                      alt={badge.label}
                      style={{ position: 'absolute', width: '71.174px', height: '61.638px', left: '1.17px', top: '1.01px' }}
                    />
                    <img
                      src={badge.avatarBorder}
                      alt=""
                      style={{ position: 'absolute', width: '73.514px', height: '63.665px', left: 0, top: 0 }}
                    />
                  </div>

                  {/* Arrow + text */}
                  <div
                    className="relative flex-shrink-0"
                    style={{ width: `${badge.arrowW}px`, height: '61.638px', zIndex: 1 }}
                  >
                    <img
                      src={badge.arrow}
                      alt=""
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                    />
                    <p
                      className="absolute font-montserrat font-bold text-white whitespace-nowrap leading-none"
                      style={{
                        left: `${badge.textLeft - 73.514 + 11.778}px`,
                        top: 'calc(50% - 9.51px)',
                        fontSize: '18.597px',
                      }}
                    >
                      {badge.label}
                    </p>
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
