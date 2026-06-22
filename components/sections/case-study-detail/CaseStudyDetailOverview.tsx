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
    <section id="overview" className="relative w-full px-24 py-[100px] flex items-center justify-between">
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
      <div className="relative z-10 flex flex-col gap-8 items-start w-[541px] pb-[0.67px]">
        <h2 className="font-montserrat font-bold text-[60px] text-[#222] tracking-[-2px] leading-[71.4px]">
          Overview
        </h2>
        <p className="font-['Space_Grotesk'] font-normal text-[17px] text-[#444] leading-[1.5]">
          Most social media tools help you post. We help you grow. Every feature in Someli is designed around a single question: will this drive real business results? That&apos;s why we pair smart automation with dedicated marketing support, engagement reports, and actionable AI recommendations — not just dashboards.
        </p>
      </div>

      {/* Right stat cards grid */}
      <div className="relative z-10 flex flex-col gap-[10.667px] items-center justify-center">
        {/* Row 1 */}
        <div className="flex gap-[11.015px] items-center">
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
        <div className="flex gap-[11.015px] items-center">
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
