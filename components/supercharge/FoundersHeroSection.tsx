import Image from "next/image";

export default function FoundersHeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Grid Background Pattern - same as other sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '46px 46px'
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-24 py-[100px] flex items-center justify-between">
        {/* Left Content */}
        <div className="w-[759px] flex flex-col gap-10">
          {/* Pill Label + Heading */}
          <div className="flex flex-col gap-4">
            {/* Pill Label */}
            <div className="inline-flex items-center px-[15px] py-[7px] bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)] rounded-full w-fit">
              <span className="text-[#ED6B52] text-[12px] font-normal uppercase tracking-[0.96px] leading-[15px]">
                Unlock Your Marketing Team
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[60px] font-bold leading-[71.4px] tracking-[-2.04px]">
              <div className="text-[#222222]">Founder's Circle -</div>
              <div className="bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">
                VIP Creator's Key
              </div>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-[18px] text-[#444444] leading-[1.5] font-normal">
            You've been chosen as one of 500 VIP business owners globally to unlock an entire year of Someli AI's Supercharge Plan — worth more than $12,000.
          </p>
        </div>

        {/* Right Side - Stat Cards with Decorative Elements */}
        <div className="relative w-[486px] h-[296px] shrink-0">
          {/* Background decorative arrow/vector */}
          <Image
            src="/assets/supercharge/hero/arrow-vector.svg"
            alt=""
            width={62}
            height={68}
            className="absolute top-[115px] left-[424px]"
          />

          {/* Network lines decoration */}
          <Image
            src="/assets/supercharge/hero/network-lines.svg"
            alt=""
            width={263}
            height={205}
            className="absolute top-[48px] left-[223px]"
          />

          {/* Top decorative icons */}
          <Image
            src="/assets/supercharge/hero/icon-trust.svg"
            alt=""
            width={81}
            height={57}
            className="absolute top-0 left-[149px]"
          />

          <Image
            src="/assets/supercharge/hero/icon-engagement.svg"
            alt=""
            width={46}
            height={46}
            className="absolute top-[190px] left-[297px]"
          />

          {/* Bottom right decoration */}
          <Image
            src="/assets/supercharge/hero/decoration.svg"
            alt=""
            width={74}
            height={53}
            className="absolute top-[217px] left-[355px]"
          />

          {/* Card 1 - Total Reach (gradient, bottom left) */}
          <div className="absolute top-[190px] left-[97px] w-[195px] bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[8.966px] px-[17.93px] py-[22.41px] flex flex-col gap-[8.966px]">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col gap-[4.48px] text-white">
                <p className="text-[8.966px] font-normal uppercase tracking-[0.538px] leading-none">
                  Total Reach
                </p>
                <p className="text-[23.534px] font-bold leading-[1.1]">
                  10X
                </p>
              </div>
              <div className="w-[39.224px] h-[39.224px] bg-[rgba(255,255,255,0.2)] rounded-[7.543px] flex items-center justify-center shrink-0">
                <Image
                  src="/assets/supercharge/hero/icon-reach.svg"
                  alt=""
                  width={16}
                  height={17}
                />
              </div>
            </div>
            <p className="text-[8.966px] font-medium text-white tracking-[-0.179px] leading-[1.5] whitespace-nowrap">
              More than Company Pages
            </p>
          </div>

          {/* Card 2 - Engagement Rate (white with orange border, middle left) */}
          <div className="absolute top-[57px] left-0 w-[229.7px] bg-white border-[1.32px] border-[#DF8251] rounded-[10.561px] px-[21.12px] py-[26.4px] flex flex-col gap-[10.56px]">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col gap-[5.28px]">
                <p className="text-[10.561px] font-normal text-[#444444] uppercase tracking-[0.634px] leading-none">
                  Engagement Rate
                </p>
                <p className="text-[27.722px] font-bold leading-[1.1] bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">
                  8.7X
                </p>
              </div>
              <div className="w-[46.2px] h-[46.2px] shrink-0">
                <Image
                  src="/assets/supercharge/hero/icon-chart.svg"
                  alt=""
                  width={46}
                  height={46}
                />
              </div>
            </div>
            <p className="text-[10.561px] font-medium text-[#222222] tracking-[-0.211px] leading-[1.5] whitespace-nowrap">
              Higher than Brand Channels
            </p>
          </div>

          {/* Card 3 - Trust Factor (white with orange border, top right) */}
          <div className="absolute top-[3px] left-[271px] w-[176.32px] bg-white border-[1.013px] border-[#DF8251] rounded-[8.107px] px-[16.21px] py-[20.27px] flex flex-col gap-[8.11px]">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col gap-[4.05px]">
                <p className="text-[8.107px] font-normal text-[#444444] uppercase tracking-[0.486px] leading-none">
                  Trust Factor
                </p>
                <p className="text-[21.28px] font-bold leading-[1.1] bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">
                  2.4X
                </p>
              </div>
              <div className="w-[35.47px] h-[35.47px] shrink-0">
                <Image
                  src="/assets/supercharge/hero/icon-shield.svg"
                  alt=""
                  width={35}
                  height={35}
                />
              </div>
            </div>
            <p className="text-[8.107px] font-medium text-[#222222] tracking-[-0.162px] leading-[1.5] w-[99.31px]">
              More trusted than Brand Posts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
