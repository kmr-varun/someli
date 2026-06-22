import Image from 'next/image';

const stats = [
  {
    icon: '/assets/hero/icons/users.svg',
    value: '2.8X',
    label: 'More Engagement',
    subtitle: 'than brand posts',
  },
  {
    icon: '/assets/corporates/icon-handshake.svg',
    value: '4X',
    label: 'More Trust',
    subtitle: 'from audiences',
  },
  {
    icon: '/assets/hero/icons/chart.svg',
    value: '3X',
    label: 'More Reach',
    subtitle: 'through employee networks',
  },
  {
    icon: '/assets/hero/icons/dollar.svg',
    value: '24%',
    label: 'Higher Conversion',
    subtitle: 'through social selling',
  },
  {
    icon: '/assets/hero/icons/user-star.svg',
    value: 'Stronger',
    label: 'Employer Brand',
    subtitle: '& Talent Attraction',
    valueSize: 'text-[22.5px]',
  },
  {
    icon: '/assets/hero/icons/user-star.svg',
    value: 'Stronger',
    label: 'Employer Brand',
    subtitle: '& Talent Attraction',
    valueSize: 'text-[22.5px]',
  },
];

export default function CaseStudyDetailOverview() {
  return (
    <section id="overview" className="relative w-full overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
      {/* Union decorative pattern */}
      <div className="absolute inset-[-42.75%_-1.53%_-40.19%_-1.53%]">
        <Image
          src="/assets/case-study-detail/overview-union-pattern.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Left content */}
      <div className="relative z-10 flex flex-col gap-6 lg:gap-8 items-start w-full lg:w-[541px] pb-[0.67px]">
        <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-[#222] tracking-[-2px] leading-[1.19]">
          Overview
        </h2>
        <p className="font-['Space_Grotesk'] font-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#444] leading-[1.5]">
          Most social media tools help you post. We help you grow. Every feature in Someli is designed around a single question: will this drive real business results? That&apos;s why we pair smart automation with dedicated marketing support, engagement reports, and actionable AI recommendations — not just dashboards.
        </p>
      </div>

      {/* Right stat cards grid */}
      <div className="relative z-10 flex flex-col gap-[10.667px] items-center justify-center w-full lg:w-auto">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-[11.015px] items-center w-full">
          {stats.slice(0, 3).map((stat, index) => (
            <div
              key={index}
              className="bg-white border-[1.101px] border-[rgba(0,0,0,0.08)] flex flex-col gap-[9.078px] h-[148.699px] w-[191.657px] items-center py-[9.078px] rounded-[7.263px]"
            >
              <div className="relative w-[37px] h-[37px]">
                <Image
                  src={stat.icon}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="pt-[10.323px]">
                  <p className={`font-['Inter'] font-bold ${stat.valueSize || 'text-[20.43px]'} text-[#ff5722] text-center leading-none ${stat.valueSize ? 'tracking-[-0.5807px]' : ''}`}>
                    {stat.value}
                  </p>
                </div>
                <div className="pt-[10.323px] flex flex-col items-center">
                  <p className="font-['Inter'] font-semibold text-[9.03px] text-[#4b5563] text-center leading-[12.42px]">
                    {stat.label}
                  </p>
                  <p className="font-['Inter'] font-normal text-[9.03px] text-[#4b5563] text-center leading-[12.42px]">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-[11.015px] items-center w-full">
          {stats.slice(3, 6).map((stat, index) => (
            <div
              key={index}
              className="bg-white border-[1.101px] border-[rgba(0,0,0,0.08)] flex flex-col gap-[9.078px] h-[148.699px] w-[191.657px] items-center py-[9.078px] rounded-[7.263px]"
            >
              <div className="relative w-[37px] h-[37px]">
                <Image
                  src={stat.icon}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="pt-[10.323px]">
                  <p className={`font-['Inter'] font-bold ${stat.valueSize || 'text-[20.43px]'} text-[#ff5722] text-center leading-none ${stat.valueSize ? 'tracking-[-0.5807px]' : ''}`}>
                    {stat.value}
                  </p>
                </div>
                <div className="pt-[10.323px] flex flex-col items-center">
                  <p className="font-['Inter'] font-semibold text-[9.03px] text-[#4b5563] text-center leading-[12.42px]">
                    {stat.label}
                  </p>
                  <p className="font-['Inter'] font-normal text-[9.03px] text-[#4b5563] text-center leading-[12.42px]">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
