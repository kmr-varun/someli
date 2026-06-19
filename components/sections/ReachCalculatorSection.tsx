import Image from 'next/image';

export default function ReachCalculatorSection() {

  return (
    <section className="relative w-full bg-[#0D0D0D] px-24 py-[120px]">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-50 overflow-hidden">
        <div className="absolute inset-0" style={{ height: '147.16%', top: '-1.93%', left: '-0.01%' }}>
          <Image
            src="/assets/reach-calculator/background-pattern.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Main content grid */}
      <div className="relative max-w-[1248px] mx-auto flex items-center justify-between">
        {/* Left side - Heading + Calculator */}
        <div className="flex flex-col gap-16 flex-shrink-0">
          {/* Heading block */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              {/* Pill label */}
              <div className="inline-flex items-center self-start bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] rounded-full px-[15px] py-[7px]">
                <span className="text-[#ED6B52] text-[12px] font-normal tracking-[0.96px] uppercase font-['Space_Grotesk']">
                  REACH MULTIPLIED
                </span>
              </div>

              {/* Main heading */}
              <h2 className="text-white text-[60px] font-bold leading-[71.4px] tracking-[-2px]">
                See your potential.
                <br />
                Multiply your reach.
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-white text-[18px] font-normal leading-[1.5]">
              Calculate how employee advocacy can 10x your
              <br />
              brand reach on LinkedIn.
            </p>
          </div>

          {/* Calculator widget */}
          <div className="flex items-center gap-6 bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[12px] px-8 py-5">
            {/* Brand Reach */}
            <div className="flex items-center gap-3">
              <Image
                src="/assets/reach-calculator/icon-brand.svg"
                alt=""
                width={24}
                height={24}
              />
              <div className="text-white">
                <div className="text-[16px] font-medium tracking-[0.64px] leading-[1.2]">
                  Your Brand Reach
                </div>
                <div className="text-[20px] font-bold tracking-[0.8px] leading-[1.2]">
                  120k
                </div>
              </div>
            </div>

            {/* × symbol */}
            <div className="text-white text-[32px] font-normal tracking-[1.28px] leading-none">
              ×
            </div>

            {/* Employee Networks */}
            <div className="flex items-center gap-3">
              <Image
                src="/assets/reach-calculator/icon-network.svg"
                alt=""
                width={24}
                height={24}
              />
              <div className="text-white">
                <div className="text-[16px] font-medium tracking-[0.64px] leading-[1.2]">
                  Employee Networks
                </div>
                <div className="text-[20px] font-bold tracking-[0.8px] leading-[1.2]">
                  250k+
                </div>
              </div>
            </div>

            {/* = symbol */}
            <div className="text-white text-[32px] font-normal tracking-[1.28px] leading-none">
              =
            </div>

            {/* More Reach */}
            <div className="flex items-center gap-3">
              <div className="w-[43px] h-[43px] bg-white border border-white rounded-[35.25px] flex items-center justify-center">
                <span className="text-[14px] font-bold bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">
                  10X
                </span>
              </div>
              <div className="text-white">
                <div className="text-[16px] font-medium tracking-[0.64px] leading-[1.2]">
                  More Reach
                </div>
                <div className="text-[20px] font-bold tracking-[0.8px] leading-[1.2]">
                  1.2M+
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Report request card */}
        <div className="glass-border-card w-[377px] bg-[rgba(255,255,255,0.04)] rounded-[5.735px] p-6 flex flex-col gap-[22.939px] flex-shrink-0 relative z-10">
          {/* Icon */}
          <Image
            src="/assets/reach-calculator/icon-report.svg"
            alt=""
            width={56}
            height={56}
          />

          {/* Content */}
          <div className="border-b border-[rgba(255,255,255,0.08)] pb-8 flex flex-col gap-[23px]">
            {/* Heading + description */}
            <div className="text-white flex flex-col gap-4">
              <h3 className="text-[24px] font-bold tracking-[-2px] leading-[1.4]">
                Request your free reach report
              </h3>
              <p className="text-[17px] font-normal leading-[1.5]">
                Get a personalized report for your company and discover your true reach potential
              </p>
            </div>

            {/* Bullet list */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-start">
                <Image
                  src="/assets/reach-calculator/checkmark.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="flex-shrink-0 mt-0.5"
                />
                <span className="text-[#ED6B52] text-[16px] font-normal tracking-[0.64px] leading-none font-['Space_Grotesk']">
                  Custom reach analysis for your organization
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <Image
                  src="/assets/reach-calculator/checkmark.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="flex-shrink-0 mt-0.5"
                />
                <span className="text-[#ED6B52] text-[16px] font-normal tracking-[0.64px] leading-none font-['Space_Grotesk']">
                  Benchmark vs. industry leaders
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <Image
                  src="/assets/reach-calculator/checkmark.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="flex-shrink-0 mt-0.5"
                />
                <span className="text-[#ED6B52] text-[16px] font-normal tracking-[0.64px] leading-none font-['Space_Grotesk']">
                  Actionable recommendations to grow
                </span>
              </div>
            </div>
          </div>

          {/* CTA button */}
          <button className="self-start border border-[#ED6B52] rounded-full px-6 py-4 text-[#ED6B52] text-[17px] font-medium hover:bg-[rgba(237,107,82,0.1)] transition-colors">
            <span className="flex items-center">
              <span className="mr-2">•</span>
              Generate my report
            </span>
          </button>
        </div>
      </div>

      {/* Floating "Trusted by" card - positioned absolutely */}
      <div className="glass-border-card absolute left-[765px] top-[79.81px] w-[226px] bg-[rgba(17,17,17,0.85)] rounded-[12px] px-6 py-5 flex flex-col gap-3 backdrop-blur-md z-20">
        {/* Avatar stack */}
        <div className="flex items-center w-[90px] h-[38.077px]">
          <Image
            src="/assets/reach-calculator/avatar-1.png"
            alt=""
            width={38.462}
            height={38.077}
            className="mr-[-12.692px] relative"
          />
          <Image
            src="/assets/reach-calculator/avatar-2.png"
            alt=""
            width={38.462}
            height={38.077}
            className="mr-[-12.692px] relative"
          />
          <Image
            src="/assets/reach-calculator/avatar-3.png"
            alt=""
            width={38.462}
            height={38.077}
            className="relative"
          />
        </div>

        {/* Text */}
        <p className="text-[#ED6B52] text-[16px] font-medium tracking-[0.64px] leading-[1.2] w-[187px]">
          Trusted by 500+ companies worldwide
        </p>
      </div>
    </section>
  );
}
