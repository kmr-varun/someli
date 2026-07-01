"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import RotatingCircle from "@/components/RotatingCircle";
import ProfileCard from "@/components/ProfileCard";
import SectionPill from "@/components/ui/SectionPill";

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
    const duration = 3000;
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

const STAT_ITEMS = [
  {
    icon: "/assets/hero/icons/users.svg",
    iconSize: 28,
    value: "2.8X",
    line1: "More Engagement",
    line2: "than brand posts",
  },
  {
    icon: "/assets/hero/icons/handshake.png",
    iconSize: 28,
    value: "4X",
    line1: "More Trust",
    line2: "from audiences",
  },
  {
    icon: "/assets/hero/icons/chart.svg",
    iconSize: 25,
    value: "3X",
    line1: "More Reach",
    line2: "through employee networks",
  },
  {
    icon: "/assets/hero/icons/dollar.svg",
    iconSize: 28,
    value: "24%",
    line1: "Higher Conversion",
    line2: "through social selling",
  },
  {
    icon: "/assets/hero/icons/user-star.svg",
    iconSize: 25,
    value: "Stronger",
    line1: "Employer Brand",
    line2: "&amp; Talent Attraction",
  },
];

const DESKTOP_RADIUS = 476; // px — design canvas container size

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const circleContainerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const update = () => {
      if (circleContainerRef.current) {
        const size = circleContainerRef.current.offsetHeight;
        setScale(size / DESKTOP_RADIUS);
        setIsDesktop(window.innerWidth >= 1024);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
    <section className="relative w-full overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[790px]">
      {/* Union3 background pattern */}
      <Image
        src="/assets/hero/union3-background.png"
        alt=""
        fill
        className="absolute inset-0 object-cover pointer-events-none"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-8 sm:pt-12 md:pt-16 lg:pt-24 xl:pt-[120px] pb-6 sm:pb-8 md:pb-10 flex flex-col">
        {/* Main two-column row */}
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-8">
          {/* LEFT: ~49% — matches Figma 606px out of 1248px content area */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full lg:w-[49%] shrink-0">
            {/* Pill label */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <SectionPill className="whitespace-nowrap">Employee Advocacy and AI Powered Personal Branding Platform</SectionPill>

              {/* H1 */}
              <h1
                className="font-bold text-[#222] w-full"
                style={{
                  fontSize: "clamp(28px, 6vw, 60px)",
                  lineHeight: "1.19",
                  letterSpacing: "-1.5px",
                }}
              >
                10x your reach.<br />
                Build influence that<br />
                <span
                  style={{
                    backgroundImage: "linear-gradient(to bottom, #df8251, #d54050)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  drives real business.
                </span>
              </h1>
            </div>

            {/* Body copy */}
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#444] leading-[1.5] font-normal">
              Someli builds influence at scale, helping founders and teams
              create high-impact content, build personal brands, and drive 3-5x
              more impressions every single day.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-10">
              <a
                href="#"
                className="flex items-center gap-2 pl-5 pr-8 sm:pl-6 sm:pr-9 md:pl-7 md:pr-10 py-3 sm:py-3.5 md:py-4 rounded-full border border-[#ED6B52] text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#ED6B52] whitespace-nowrap hover:bg-[#ED6B52] hover:text-white transition-colors"
              >
                <span>Book a Demo</span>
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="flex items-center gap-2 sm:gap-3 text-[15px] sm:text-[16px] md:text-[17px] font-bold text-[#ED6B52] whitespace-nowrap hover:opacity-70 transition-opacity cursor-pointer"
              >
                <Image src="/assets/hero/arrow-play.svg" alt="" width={6} height={7} className="sm:w-[7px] sm:h-[8px]" />
                <span>See how it works</span>
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Avatar stack */}
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[33px] md:h-[33px] rounded-full overflow-hidden border-2 border-white"
                    style={{ marginLeft: i === 1 ? 0 : "-8px", zIndex: i }}
                  >
                    <Image
                      src={`/assets/hero/avatars/avatar-${i}.png`}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="33px"
                    />
                  </div>
                ))}
              </div>
              {/* Stars + rating */}
              <div className="flex flex-col gap-1">
                <Image
                  src="/assets/hero/stars.svg"
                  alt="5 stars"
                  width={75}
                  height={10}
                  className="sm:w-[82px] md:w-[88px]"
                  style={{ width: "auto", height: "auto" }}
                />
                <span className="text-[11px] sm:text-[12px] md:text-[13px] text-[#888] font-medium tracking-[0.3px] sm:tracking-[0.325px]">
                  4.8/5 from 200+ customers
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Circle + Twitter card */}
          <div className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
            {/* Circle with card centred on top - hide network visualization on mobile */}
            <div ref={circleContainerRef} className="relative flex items-center justify-center w-full aspect-square max-h-[350px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[476px]">
              {/* Background circle — rotates infinitely */}
              <RotatingCircle />
              {/* Social card — centred over the circle */}
              <div className="relative z-30 w-[55%] max-w-[192px] lg:max-w-none lg:w-[46%] aspect-[486/591]">
                <Image
                  src="/assets/hero/linkedin-card.png"
                  alt="Social post mockup"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 55vw, (max-width: 768px) 50vw, (max-width: 1024px) 48vw, 25vw"
                  priority
                  unoptimized
                />
              </div>

              {/* Profile cards positioned using polar coordinates - hidden on mobile/tablet, visible on lg+ */}
              <div>
                {[
                  { name: "David Carter", connections: "20K Connections", avatar: "/assets/hero/profile-cards/david-carter.png", angle: -90, distance: 210, arrowDistance: 168, arrowOffsetX: 0, arrowOffsetY: 0, alignment: "right" },
                  { name: "Alex Johnson", connections: "12.5K Connections", avatar: "/assets/hero/profile-cards/alex-johnson.png", angle: 90, distance: 210, arrowDistance: 168, arrowOffsetX: 0, arrowOffsetY: 0, alignment: "right" },
                  { name: "Taylor Morgan", connections: "11.1K Connections", avatar: "/assets/hero/profile-cards/taylor-morgan.png", angle: 180, distance: 250, arrowDistance: 152, arrowOffsetX: 0, arrowOffsetY: 0, alignment: "left" },
                  { name: "Casey Brown", connections: "13.2K Connections", avatar: "/assets/hero/profile-cards/casey-brown.png", angle: 0, distance: 250, arrowDistance: 152, arrowOffsetX: 0, arrowOffsetY: 0, alignment: "right" },
                  { name: "Jordan Lee", connections: "10.8K Connections", avatar: "/assets/hero/profile-cards/jordan-lee.png", angle: -157, distance: 250, arrowDistance: 147, arrowOffsetX: 0, arrowOffsetY: -20, alignment: "left" },
                  { name: "Chris Taylor", connections: "9.8K Connections", avatar: "/assets/hero/profile-cards/chris-taylor.png", angle: -23, distance: 250, arrowDistance: 147, arrowOffsetX: 0, arrowOffsetY: -20, alignment: "right" },
                  { name: "Jamie Parker", connections: "8.7K Connections", avatar: "/assets/hero/profile-cards/jamie-parker.png", angle: 157, distance: 250, arrowDistance: 149, arrowOffsetX: 0, arrowOffsetY: 20, alignment: "left" },
                  { name: "Riley White", connections: "10.9K Connections", avatar: "/assets/hero/profile-cards/riley-white.png", angle: 23, distance: 250, arrowDistance: 149, arrowOffsetX: 0, arrowOffsetY: 20, alignment: "right" },
                ].map((card, index) => {
                  const radians = (card.angle * Math.PI) / 180;
                  // On mobile/tablet (<lg), the circle is full-width so outer cards (250px) would overflow
                  // the viewport. Cap them at 210px, which safely fits at all mobile/tablet sizes.
                  const effectiveDist = !isDesktop && card.distance > 210 ? 210 : card.distance;
                  const cardX = effectiveDist * scale * Math.cos(radians);
                  const cardY = effectiveDist * scale * Math.sin(radians);

                  const effectiveArrowDist = !isDesktop && card.arrowDistance > 168 ? 168 : card.arrowDistance;
                  const arrowX = effectiveArrowDist * scale * Math.cos(radians) + (card.arrowOffsetX || 0) * scale;
                  const arrowY = effectiveArrowDist * scale * Math.sin(radians) + (!isDesktop ? 0 : (card.arrowOffsetY || 0)) * scale;
                  const arrowRotation = card.angle + 90; // SVG points up (-90°), so add 90 to point at card angle

                  return (
                    <div key={index}>
                      {/* Arrow - animates from center */}
                      <motion.div
                        className="absolute left-1/2 top-1/2 z-20"
                        initial={{
                          x: "-50%",
                          y: "-50%",
                          rotate: arrowRotation,
                        }}
                        animate={{
                          x: `calc(-50% + ${arrowX}px)`,
                          y: `calc(-50% + ${arrowY}px)`,
                          rotate: arrowRotation,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                      >
                        <svg width={Math.max(4, 7 * scale)} height={Math.max(20, 35 * scale)} viewBox="0 0 7 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.70522 0.13448C3.52595 -0.044796 3.23529 -0.044796 3.05601 0.13448L0.13455 3.05594C-0.0447251 3.23521 -0.0447251 3.52588 0.13455 3.70515C0.313825 3.88443 0.604488 3.88443 0.783764 3.70515L3.38062 1.1083L5.97747 3.70515C6.15674 3.88443 6.44741 3.88443 6.62668 3.70515C6.80596 3.52588 6.80596 3.23521 6.62668 3.05594L3.70522 0.13448ZM3.38062 35L3.83968 35L3.83968 0.459087L3.38062 0.459087L2.92155 0.459087L2.92155 35L3.38062 35Z" fill="#F76739"/>
                        </svg>
                      </motion.div>

                      {/* Profile Card - animates from center */}
                      <motion.div
                        className="absolute left-1/2 top-1/2 z-20"
                        initial={{
                          x: "-50%",
                          y: "-50%",
                        }}
                        animate={{
                          x: `calc(-50% + ${cardX}px)`,
                          y: `calc(-50% + ${cardY}px)`,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                      >
                        <ProfileCard
                          name={card.name}
                          connections={card.connections}
                          avatar={card.avatar}
                          alignment={card.alignment as "left" | "right"}
                        />
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats row — sits under the right column */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-[9.7px] w-full">
              {STAT_ITEMS.map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col items-center py-2 sm:py-[8px] gap-2 sm:gap-[8px] rounded-[6px] sm:rounded-[7px] border border-black/10 bg-white"
                >
                  <div className="flex items-center justify-center w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[37px] md:h-[37px]">
                    <Image
                      src={stat.icon}
                      alt=""
                      width={stat.iconSize}
                      height={stat.iconSize}
                      className="w-auto h-auto max-w-[20px] sm:max-w-[24px] md:max-w-[28px]"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-[#ff5722] leading-none text-center text-[14px] sm:text-[16px] md:text-[18.5px]">
                      <CounterStat value={stat.value} />
                    </span>
                    <div className="mt-[6px] sm:mt-[8px] md:mt-[9px] flex flex-col items-center">
                      <span className="text-[#4b5563] font-semibold text-center whitespace-nowrap text-[7px] sm:text-[7.5px] md:text-[8.2px] leading-[10px] sm:leading-[10.5px] md:leading-[11.3px]">
                        {stat.line1}
                      </span>
                      <span className="text-[#4b5563] font-normal text-center whitespace-nowrap text-[7px] sm:text-[7.5px] md:text-[8.2px] leading-[10px] sm:leading-[10.5px] md:leading-[11.3px]">
                        {stat.line2}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Video Modal */}
    {videoOpen && (
      <div
        className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
        onClick={() => setVideoOpen(false)}
      >
        <div
          className="relative w-full max-w-[900px] aspect-video rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute top-3 right-3 z-10 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white text-xl hover:bg-black/80 transition-colors"
          >
            ✕
          </button>
          <iframe
            src="https://www.youtube.com/embed/-liVkedgwBs?autoplay=1"
            title="How Someli Works"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    )}
    </>
  );
}
