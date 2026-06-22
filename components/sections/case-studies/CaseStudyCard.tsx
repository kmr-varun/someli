import Image from 'next/image';

interface CaseStudyCardProps {
  companyLogo: string;
  industry: string;
  category: string;
  goal: string;
  outcomes: string[];
  stats: Array<{
    icon: string;
    value: string;
    label: string;
    sublabel: string;
  }>;
  testimonial: {
    quote: string;
    authorName: string;
    authorRole: string;
    authorAvatar: string;
    timeAgo: string;
    companyIcon: string;
  };
  variant?: 'gradient' | 'light';
}

export default function CaseStudyCard({
  companyLogo,
  industry,
  category,
  goal,
  outcomes,
  stats,
  testimonial,
  variant = 'light'
}: CaseStudyCardProps) {
  const isGradient = variant === 'gradient';

  return (
    <div className="w-[1200px] border-2 border-[rgba(0,0,0,0.06)] rounded-[24px] overflow-hidden flex group hover:shadow-[0px_4px_25px_0px_rgba(0,0,0,0.25)] transition-shadow duration-300">
      {/* Left Sidebar */}
      <div className="w-[243px] px-8 py-10 flex flex-col justify-between border-r border-[rgba(0,0,0,0.08)] bg-[#fff6f3] group-hover:bg-gradient-to-b group-hover:from-[#df8251] group-hover:to-[#d54050] transition-all duration-300">
        {/* Company Logo Placeholder */}
        <div className="w-full h-24 rounded-lg bg-white flex items-center justify-center overflow-hidden">
          <Image
            src={companyLogo}
            alt="Company logo"
            width={179}
            height={96}
            className="object-contain"
          />
        </div>

        {/* Industry + Category */}
        <div className="flex flex-col gap-3">
          <h3 className="font-['Montserrat'] text-[24px] font-bold leading-[1.4] tracking-[-1px] text-[#222] group-hover:text-white">
            {industry}
          </h3>
          <div className="inline-block self-start">
            <span className="font-['Montserrat'] text-[12px] font-normal leading-[15px] tracking-[0.96px] uppercase text-[#222] group-hover:text-white">
              {category}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 flex flex-col gap-6">
        {/* Goal + Outcome + Stats */}
        <div className="flex justify-between gap-[76px] pb-6 border-b border-[rgba(0,0,0,0.12)]">
          {/* Goal + Outcome (Left Column) */}
          <div className="w-[399px] flex flex-col gap-8">
            {/* Goal */}
            <div className="flex flex-col gap-2">
              <h4 className="font-['Montserrat'] text-[16px] font-bold leading-[1.5] tracking-[-0.32px] text-[#222]">
                Goal:
              </h4>
              <p className="font-['Montserrat'] text-[16px] font-normal leading-[1.5] text-[#222]">
                {goal}
              </p>
            </div>

            {/* Outcome */}
            <div className="flex flex-col gap-2">
              <h4 className="font-['Montserrat'] text-[16px] font-bold leading-[1.5] tracking-[-0.32px] text-[#222]">
                Outcome:
              </h4>
              <div className="flex flex-col gap-2">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-[15.86px] h-[23.86px] flex-shrink-0">
                      <Image
                        src="/assets/case-studies/checkmark.svg"
                        alt=""
                        width={16}
                        height={24}
                      />
                    </div>
                    <p className="flex-1 font-['Montserrat'] text-[16px] font-normal leading-[1.5] text-[#222]">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats + Testimonial (Right Column) */}
          <div className="w-[418px] flex flex-col gap-2">
            {/* Three Stat Cards */}
            <div className="flex gap-[6.9px]">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex-1 h-[93.155px] bg-white border-[0.69px] border-[rgba(0,0,0,0.16)] rounded-[7.263px] py-[5.687px] flex flex-col items-center gap-[5.687px]"
                >
                  {/* Icon */}
                  <div className="w-[25.868px] h-[25.868px] flex items-center justify-center">
                    <Image
                      src={stat.icon}
                      alt=""
                      width={19}
                      height={19}
                      className="object-contain"
                    />
                  </div>

                  {/* Value */}
                  <p className="font-['Inter'] text-[12.8px] font-bold leading-none text-[#ff5722] text-center pt-[6.467px]">
                    {stat.value}
                  </p>

                  {/* Label */}
                  <div className="pt-[6.467px] flex flex-col items-center">
                    <p className="font-['Inter'] text-[5.66px] font-semibold leading-[7.781px] text-[#4b5563] text-center">
                      {stat.label}
                    </p>
                    <p className="font-['Inter'] text-[5.66px] font-normal leading-[7.781px] text-[#4b5563] text-center">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Card */}
            <div className="flex-1 bg-white border border-[#df8251] rounded-lg p-[20.377px] flex flex-col gap-[15.282px]">
              {/* Quote Icon and Text - with space between */}
              <div className="flex-1 flex flex-col justify-between">
                {/* Quote Icon at top */}
                <div className="w-[17.193px] h-[12.099px] rotate-180">
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12H4L7 7V0H0V7H3L0 12Z" fill="#ED6B52"/>
                    <path d="M10 12H14L17 7V0H10V7H13L10 12Z" fill="#ED6B52"/>
                  </svg>
                </div>

                {/* Quote Text at bottom */}
                <p className="font-['Space_Grotesk'] text-[10.83px] font-normal leading-[1.5] text-[#444]">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-[5.094px] border-t-[0.637px] border-[rgba(0,0,0,0.1)]">
                <div className="flex gap-[5.094px] items-center">
                  <div className="w-[26.744px] h-[28.018px]">
                    <Image
                      src={testimonial.authorAvatar}
                      alt={testimonial.authorName}
                      width={27}
                      height={28}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col w-[76.221px]">
                    <div className="flex items-center text-[#444]">
                      <span className="font-['Space_Grotesk'] text-[7.64px] font-normal leading-normal w-[59.856px]">
                        {testimonial.authorName}
                      </span>
                      <span className="font-['Space_Grotesk'] text-[6.05px] font-light leading-normal w-[23.181px]">
                        {testimonial.timeAgo}
                      </span>
                    </div>
                    <p className="font-['Space_Grotesk'] text-[5.09px] font-normal leading-normal text-[#888]">
                      {testimonial.authorRole}
                    </p>
                  </div>
                </div>
                <div className="w-[14.646px] h-[14.646px] rounded-[6.318px]">
                  <Image
                    src={testimonial.companyIcon}
                    alt=""
                    width={15}
                    height={15}
                    className="rounded-[6.318px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="self-start py-4 text-[#ed6b52] font-['Montserrat'] text-[16px] font-bold leading-none flex items-center">
          <span className="mr-3">•</span> View Case Study
        </button>
      </div>
    </div>
  );
}
