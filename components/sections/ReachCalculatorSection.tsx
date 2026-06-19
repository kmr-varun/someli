import Image from 'next/image';

export default function ReachCalculatorSection() {

  return (
    <section className="relative w-full bg-[#0D0D0D] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px]">
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
      <div className="relative max-w-[1248px] mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 md:gap-12 lg:gap-16">
        {/* Left side - Heading + Calculator */}
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16 flex-shrink-0 w-full lg:w-auto">
          {/* Heading block */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="flex flex-col gap-2 sm:gap-3">
              {/* Pill label */}
              <div className="inline-flex items-center self-start bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] rounded-full px-3 sm:px-4 md:px-[15px] py-[5px] sm:py-[6px] md:py-[7px]">
                <span className="text-[#ED6B52] text-[10px] sm:text-[11px] md:text-[12px] font-normal tracking-[0.8px] sm:tracking-[0.96px] uppercase font-['Space_Grotesk']">
                  REACH MULTIPLIED
                </span>
              </div>

              {/* Main heading */}
              <h2 className="text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold leading-[1.2] tracking-[-1.5px] md:tracking-[-2px]">
                See your potential.
                <br />
                Multiply your reach.
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.5]">
              Calculate how employee advocacy can 10x your brand reach on LinkedIn.
            </p>
          </div>

          {/* Calculator widget */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6 bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[10px] sm:rounded-[12px] px-4 sm:px-6 md:px-8 py-4 sm:py-5">
            {/* Brand Reach */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/assets/reach-calculator/icon-brand.svg"
                alt=""
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <div className="text-white">
                <div className="text-[13px] sm:text-[14px] md:text-[16px] font-medium tracking-[0.5px] sm:tracking-[0.64px] leading-[1.2]">
                  Your Brand Reach
                </div>
                <div className="text-[16px] sm:text-[18px] md:text-[20px] font-bold tracking-[0.6px] sm:tracking-[0.8px] leading-[1.2]">
                  120k
                </div>
              </div>
            </div>

            {/* × symbol */}
            <div className="text-white text-[24px] sm:text-[28px] md:text-[32px] font-normal tracking-[1px] sm:tracking-[1.28px] leading-none">
              ×
            </div>

            {/* Employee Networks */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/assets/reach-calculator/icon-network.svg"
                alt=""
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <div className="text-white">
                <div className="text-[13px] sm:text-[14px] md:text-[16px] font-medium tracking-[0.5px] sm:tracking-[0.64px] leading-[1.2]">
                  Employee Networks
                </div>
                <div className="text-[16px] sm:text-[18px] md:text-[20px] font-bold tracking-[0.6px] sm:tracking-[0.8px] leading-[1.2]">
                  250k+
                </div>
              </div>
            </div>

            {/* = symbol */}
            <div className="text-white text-[24px] sm:text-[28px] md:text-[32px] font-normal tracking-[1px] sm:tracking-[1.28px] leading-none">
              =
            </div>

            {/* More Reach */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[43px] md:h-[43px] bg-white border border-white rounded-full flex items-center justify-center">
                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-bold bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">
                  10X
                </span>
              </div>
              <div className="text-white">
                <div className="text-[13px] sm:text-[14px] md:text-[16px] font-medium tracking-[0.5px] sm:tracking-[0.64px] leading-[1.2]">
                  More Reach
                </div>
                <div className="text-[16px] sm:text-[18px] md:text-[20px] font-bold tracking-[0.6px] sm:tracking-[0.8px] leading-[1.2]">
                  1.2M+
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Report request card */}
        <div className="glass-border-card w-full lg:w-[377px] bg-[rgba(255,255,255,0.04)] rounded-[5.735px] p-5 sm:p-6 flex flex-col gap-5 sm:gap-[22.939px] flex-shrink-0 relative z-10">
          {/* Icon */}
          <Image
            src="/assets/reach-calculator/icon-report.svg"
            alt=""
            width={56}
            height={56}
            className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px]"
          />

          {/* Content */}
          <div className="border-b border-[rgba(255,255,255,0.08)] pb-6 sm:pb-8 flex flex-col gap-5 sm:gap-[23px]">
            {/* Heading + description */}
            <div className="text-white flex flex-col gap-3 sm:gap-4">
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold tracking-[-1.5px] md:tracking-[-2px] leading-[1.4]">
                Request your free reach report
              </h3>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] font-normal leading-[1.5]">
                Get a personalized report for your company and discover your true reach potential
              </p>
            </div>

            {/* Bullet list */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {['Custom reach analysis for your organization', 'Benchmark vs. industry leaders', 'Actionable recommendations to grow'].map((text, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <Image
                    src="/assets/reach-calculator/checkmark.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="flex-shrink-0 mt-0.5 w-[13px] h-[13px] sm:w-[15px] sm:h-[15px]"
                  />
                  <span className="text-[#ED6B52] text-[14px] sm:text-[15px] md:text-[16px] font-normal tracking-[0.5px] sm:tracking-[0.64px] leading-none font-['Space_Grotesk']">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA button */}
          <button className="self-start border border-[#ED6B52] rounded-full px-5 sm:px-6 py-3 sm:py-4 text-[#ED6B52] text-[15px] sm:text-[16px] md:text-[17px] font-medium hover:bg-[rgba(237,107,82,0.1)] transition-colors">
            <span className="flex items-center">
              <span className="mr-2">•</span>
              Generate my report
            </span>
          </button>
        </div>
      </div>

      {/* Floating "Trusted by" card - hidden on mobile/tablet */}
      <div className="hidden lg:block absolute inset-0 max-w-[1248px] mx-auto pointer-events-none">
      <div className="glass-border-card flex absolute right-[260px] top-[79.81px] w-[226px] bg-[rgba(17,17,17,0.85)] rounded-[12px] px-6 py-5 flex-col gap-3 backdrop-blur-md z-20 pointer-events-auto">
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
      </div>
    </section>
  );
}
