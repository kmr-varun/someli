import Image from "next/image";
import SectionPill from "@/components/ui/SectionPill";

export default function FoundersHeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Grid Background Pattern */}
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

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px] flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 sm:gap-10 lg:gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-[759px] flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {/* Pill Label + Heading */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Pill Label */}
            <SectionPill>Unlock Your Marketing Team</SectionPill>

            {/* Heading */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] font-bold leading-[1.2] tracking-[-1.5px] lg:tracking-[-2.04px]">
              <div className="text-[#222222]">Founder's Circle -</div>
              <div className="bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">
                VIP Creator's Key
              </div>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#444444] leading-[1.5] font-normal max-w-[600px]">
            You've been chosen as one of 500 VIP business owners globally to unlock an entire year of Someli AI's Supercharge Plan — worth more than $12,000.
          </p>
        </div>

        {/* Right Side - Stat Cards (Hidden on mobile, shown on lg+) */}
        <div className="hidden lg:block relative w-[486px] h-[296px] shrink-0">
          {/* Background decorative elements */}
          <Image
            src="/assets/supercharge/hero/arrow-vector.svg"
            alt=""
            width={62}
            height={68}
            className="absolute top-[115px] left-[424px]"
          />
          <Image
            src="/assets/supercharge/hero/network-lines.svg"
            alt=""
            width={263}
            height={205}
            className="absolute top-[48px] left-[223px]"
          />
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
          <Image
            src="/assets/supercharge/hero/decoration.svg"
            alt=""
            width={74}
            height={53}
            className="absolute top-[217px] left-[355px]"
          />

          {/* Card 1 - Total Reach */}
          <div className="absolute top-[190px] left-[97px] w-[195px] bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[8.966px] px-[17.93px] py-[22.41px] flex flex-col gap-[8.966px]">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col gap-[4.48px] text-white">
                <p className="text-[8.966px] font-normal uppercase tracking-[0.538px] leading-none">Total Reach</p>
                <p className="text-[23.534px] font-bold leading-[1.1]">10X</p>
              </div>
              <div className="w-[39.224px] h-[39.224px] bg-[rgba(255,255,255,0.2)] rounded-[7.543px] flex items-center justify-center shrink-0">
                <Image src="/assets/supercharge/hero/icon-reach.svg" alt="" width={16} height={17} />
              </div>
            </div>
            <p className="text-[8.966px] font-medium text-white tracking-[-0.179px] leading-[1.5] whitespace-nowrap">
              More than Company Pages
            </p>
          </div>

          {/* Card 2 - Engagement Rate */}
          <div className="absolute top-[57px] left-0 w-[229.7px] bg-white border-[1.32px] border-[#DF8251] rounded-[10.561px] px-[21.12px] py-[26.4px] flex flex-col gap-[10.56px]">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col gap-[5.28px]">
                <p className="text-[10.561px] font-normal text-[#444444] uppercase tracking-[0.634px] leading-none">Engagement Rate</p>
                <p className="text-[27.722px] font-bold leading-[1.1] bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">8.7X</p>
              </div>
              <div className="w-[46.2px] h-[46.2px] shrink-0">
                <Image src="/assets/supercharge/hero/icon-chart.svg" alt="" width={46} height={46} />
              </div>
            </div>
            <p className="text-[10.561px] font-medium text-[#222222] tracking-[-0.211px] leading-[1.5] whitespace-nowrap">
              Higher than Brand Channels
            </p>
          </div>

          {/* Card 3 - Trust Factor */}
          <div className="absolute top-[3px] left-[271px] w-[176.32px] bg-white border-[1.013px] border-[#DF8251] rounded-[8.107px] px-[16.21px] py-[20.27px] flex flex-col gap-[8.11px]">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col gap-[4.05px]">
                <p className="text-[8.107px] font-normal text-[#444444] uppercase tracking-[0.486px] leading-none">Trust Factor</p>
                <p className="text-[21.28px] font-bold leading-[1.1] bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">2.4X</p>
              </div>
              <div className="w-[35.47px] h-[35.47px] shrink-0">
                <Image src="/assets/supercharge/hero/icon-shield.svg" alt="" width={35} height={35} />
              </div>
            </div>
            <p className="text-[8.107px] font-medium text-[#222222] tracking-[-0.162px] leading-[1.5] w-[99.31px]">
              More trusted than Brand Posts
            </p>
          </div>
        </div>

        {/* Mobile Stat Cards - Simple Grid Layout */}
        <div className="lg:hidden w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card 1 - Total Reach */}
          <div className="bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-lg p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col gap-1 text-white">
                <p className="text-[10px] font-normal uppercase tracking-[0.5px] leading-none">Total Reach</p>
                <p className="text-[24px] font-bold leading-[1.1]">10X</p>
              </div>
              <div className="w-10 h-10 bg-[rgba(255,255,255,0.2)] rounded-lg flex items-center justify-center shrink-0">
                <Image src="/assets/supercharge/hero/icon-reach.svg" alt="" width={16} height={17} />
              </div>
            </div>
            <p className="text-[10px] font-medium text-white tracking-[-0.2px] leading-[1.4]">
              More than Company Pages
            </p>
          </div>

          {/* Card 2 - Engagement Rate */}
          <div className="bg-white border-2 border-[#DF8251] rounded-lg p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col gap-1">
                <p className="text-[10px] font-normal text-[#444444] uppercase tracking-[0.5px] leading-none">Engagement</p>
                <p className="text-[24px] font-bold leading-[1.1] bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">8.7X</p>
              </div>
              <div className="w-10 h-10 shrink-0">
                <Image src="/assets/supercharge/hero/icon-chart.svg" alt="" width={40} height={40} />
              </div>
            </div>
            <p className="text-[10px] font-medium text-[#222222] tracking-[-0.2px] leading-[1.4]">
              Higher than Brands
            </p>
          </div>

          {/* Card 3 - Trust Factor */}
          <div className="bg-white border-2 border-[#DF8251] rounded-lg p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col gap-1">
                <p className="text-[10px] font-normal text-[#444444] uppercase tracking-[0.5px] leading-none">Trust Factor</p>
                <p className="text-[24px] font-bold leading-[1.1] bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">2.4X</p>
              </div>
              <div className="w-10 h-10 shrink-0">
                <Image src="/assets/supercharge/hero/icon-shield.svg" alt="" width={35} height={35} />
              </div>
            </div>
            <p className="text-[10px] font-medium text-[#222222] tracking-[-0.2px] leading-[1.4]">
              More Trusted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
