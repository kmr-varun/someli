import Image from "next/image";
import RotatingCircle from "@/components/RotatingCircle";

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
    line2: "& Talent Attraction",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[790px]">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      <div className="relative px-24 pt-[120px] pb-10 flex flex-col">
        {/* Main two-column row */}
        <div className="flex items-start gap-8">
          {/* LEFT: ~49% — matches Figma 606px out of 1248px content area */}
          <div className="flex flex-col gap-10 w-[49%] shrink-0">
            {/* Pill label */}
            <div className="flex flex-col gap-4">
              <div
                className="self-start flex items-center px-[15px] py-[7px] rounded-full border"
                style={{
                  backgroundColor: "rgba(237,107,82,0.16)",
                  borderColor: "rgba(237,107,82,0.15)",
                }}
              >
                <span className="text-[12px] font-normal text-[#ED6B52] tracking-[0.96px] uppercase whitespace-nowrap">
                  Employee Advocacy and AI Powered Personal Branding Platform
                </span>
              </div>

              {/* H1 */}
              <h1
                className="font-extrabold text-[#222] w-full"
                style={{
                  fontSize: "clamp(36px, 4.17vw, 60px)",
                  lineHeight: "1.19",
                  letterSpacing: "-2.04px",
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
            <p className="text-[18px] text-[#444] leading-[1.5] font-normal">
              Someli builds influence at scale, helping founders and teams
              create high-impact content, build personal brands, and drive 3-5x
              more impressions every single day.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-10">
              <a
                href="#"
                className="flex items-center gap-2 pl-7 pr-10 py-4 rounded-full border border-[#ED6B52] text-[16px] font-bold text-[#ED6B52] whitespace-nowrap"
              >
                <span>•</span>
                <span>Book a Demo</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-[17px] font-bold text-[#ED6B52] whitespace-nowrap"
              >
                <Image src="/assets/hero/arrow-play.svg" alt="" width={7} height={8} />
                <span>See how it works</span>
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4">
              {/* Avatar stack */}
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative w-[33px] h-[33px] rounded-full overflow-hidden border-2 border-white"
                    style={{ marginLeft: i === 1 ? 0 : "-10px", zIndex: i }}
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
                  width={88}
                  height={11}
                  style={{ width: "88px", height: "auto" }}
                />
                <span className="text-[13px] text-[#888] font-medium tracking-[0.325px]">
                  4.8/5 from 200+ customers
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: flex-1, circle + card centred */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            {/* Circle with card centred on top */}
            <div className="relative flex items-center justify-center w-full aspect-square max-h-[476px]">
              {/* Background circle — rotates infinitely */}
              <RotatingCircle />
              {/* Social card — centred over the circle */}
              <div className="relative z-10 w-[46%] aspect-[486/591]">
                <Image
                  src="/assets/hero/linkedin-card.png"
                  alt="Social post mockup"
                  fill
                  className="object-contain"
                  sizes="25vw"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Stats row — sits under the right column */}
            <div className="flex gap-[9.7px] w-full">
              {STAT_ITEMS.map((stat) => (
                <div
                  key={stat.value}
                  className="flex-1 flex flex-col items-center py-[8px] gap-[8px] rounded-[7px] border border-black/10 bg-white"
                >
                  <div className="flex items-center justify-center w-[37px] h-[37px]">
                    <Image
                      src={stat.icon}
                      alt=""
                      width={stat.iconSize}
                      height={stat.iconSize}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-[#ff5722] leading-none text-center" style={{ fontSize: "18.5px" }}>
                      {stat.value}
                    </span>
                    <div className="mt-[9px] flex flex-col items-center">
                      <span className="text-[#4b5563] font-semibold text-center whitespace-nowrap" style={{ fontSize: "8.2px", lineHeight: "11.3px" }}>
                        {stat.line1}
                      </span>
                      <span className="text-[#4b5563] font-normal text-center whitespace-nowrap" style={{ fontSize: "8.2px", lineHeight: "11.3px" }}>
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
