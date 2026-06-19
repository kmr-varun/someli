"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RotatingCircle from "@/components/RotatingCircle";
import ProfileCard from "@/components/ProfileCard";

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

export default function HeroSection() {
  return (
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
              <div
                className="self-start flex items-center px-3 sm:px-4 md:px-[15px] py-[5px] sm:py-[6px] md:py-[7px] rounded-full border"
                style={{
                  backgroundColor: "rgba(237,107,82,0.16)",
                  borderColor: "rgba(237,107,82,0.15)",
                }}
              >
                <span className="text-[10px] sm:text-[11px] md:text-[12px] font-normal text-[#ED6B52] tracking-[0.8px] sm:tracking-[0.96px] uppercase">
                  Employee Advocacy and AI Powered Personal Branding Platform
                </span>
              </div>

              {/* H1 */}
              <h1
                className="font-extrabold text-[#222] w-full"
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
                className="flex items-center gap-2 pl-5 pr-8 sm:pl-6 sm:pr-9 md:pl-7 md:pr-10 py-3 sm:py-3.5 md:py-4 rounded-full border border-[#ED6B52] text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#ED6B52] whitespace-nowrap"
              >
                <span>•</span>
                <span>Book a Demo</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 sm:gap-3 text-[15px] sm:text-[16px] md:text-[17px] font-bold text-[#ED6B52] whitespace-nowrap"
              >
                <Image src="/assets/hero/arrow-play.svg" alt="" width={6} height={7} className="sm:w-[7px] sm:h-[8px]" />
                <span>See how it works</span>
              </a>
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
            <div className="relative flex items-center justify-center w-full aspect-square max-h-[350px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[476px]">
              {/* Background circle — rotates infinitely */}
              <RotatingCircle />
              {/* Social card — centred over the circle */}
              <div className="relative z-30 w-[55%] sm:w-[50%] md:w-[48%] lg:w-[46%] aspect-[486/591]">
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
              <div className="hidden lg:block">
                {[
                  { name: "David Carter", connections: "20K Connections", avatar: "https://www.figma.com/api/mcp/asset/723ab5b9-1eeb-416e-a349-4df9216eb5c4", angle: -90, distance: 210, arrowDistance: 168, arrowOffsetX: 0, arrowOffsetY: 0, alignment: "right" },
                  { name: "Alex Johnson", connections: "12.5K Connections", avatar: "https://www.figma.com/api/mcp/asset/dc1508bf-0822-4160-bb81-e365d6d1fe8c", angle: 90, distance: 210, arrowDistance: 168, arrowOffsetX: 0, arrowOffsetY: 0, alignment: "right" },
                  { name: "Taylor Morgan", connections: "11.1K Connections", avatar: "https://www.figma.com/api/mcp/asset/68043845-e974-4eca-808e-8e8910de6ba9", angle: 180, distance: 250, arrowDistance: 152, arrowOffsetX: 0, arrowOffsetY: 0, alignment: "left" },
                  { name: "Casey Brown", connections: "13.2K Connections", avatar: "https://www.figma.com/api/mcp/asset/15a0cc47-012a-4741-90ee-b22b5a1b1c04", angle: 0, distance: 250, arrowDistance: 152, arrowOffsetX: 0, arrowOffsetY: 0, alignment: "right" },
                  { name: "Jordan Lee", connections: "10.8K Connections", avatar: "https://www.figma.com/api/mcp/asset/9218f8bb-4ce9-42a5-8446-9ab563d5006d", angle: -157, distance: 250, arrowDistance: 147, arrowOffsetX: 0, arrowOffsetY: -20, alignment: "left" },
                  { name: "Chris Taylor", connections: "9.8K Connections", avatar: "https://www.figma.com/api/mcp/asset/69f95f53-3e06-4dbe-9ee8-cb1f8ba41866", angle: -23, distance: 250, arrowDistance: 147, arrowOffsetX: 0, arrowOffsetY: -20, alignment: "right" },
                  { name: "Jamie Parker", connections: "8.7K Connections", avatar: "https://www.figma.com/api/mcp/asset/a8fe1acb-a6a8-42b2-a8af-ee9195a3b620", angle: 157, distance: 250, arrowDistance: 149, arrowOffsetX: 0, arrowOffsetY: 20, alignment: "left" },
                  { name: "Riley White", connections: "10.9K Connections", avatar: "https://www.figma.com/api/mcp/asset/171dbaeb-fd0a-4e08-88a3-77661dcea161", angle: 23, distance: 250, arrowDistance: 149, arrowOffsetX: 0, arrowOffsetY: 20, alignment: "right" },
                ].map((card, index) => {
                  const radians = (card.angle * Math.PI) / 180;
                  const cardX = card.distance * Math.cos(radians);
                  const cardY = card.distance * Math.sin(radians);

                  // Arrow position from card's arrowDistance property with optional offsets
                  const arrowX = card.arrowDistance * Math.cos(radians) + (card.arrowOffsetX || 0);
                  const arrowY = card.arrowDistance * Math.sin(radians) + (card.arrowOffsetY || 0);
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
                        <svg width="7" height="35" viewBox="0 0 7 35" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      {stat.value}
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
  );
}
