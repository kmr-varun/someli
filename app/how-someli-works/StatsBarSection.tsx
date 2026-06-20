import Image from 'next/image';

interface StatItemProps {
  number: string;
  label: string;
  iconSrc: string;
  iconWidth?: number;
  iconHeight?: number;
}

function StatItem({ number, label, iconSrc, iconWidth = 14, iconHeight = 14 }: StatItemProps) {
  return (
    <div className="flex flex-col gap-1 sm:gap-[6px] items-start text-center sm:text-left">
      <p className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] leading-none whitespace-nowrap outlined-stat-number-black">
        {number}
      </p>
      <div className="flex gap-1 sm:gap-2 items-center justify-center sm:justify-start">
        <div className="relative shrink-0" style={{ width: iconWidth * 0.8, height: iconHeight * 0.8 }}>
          <Image src={iconSrc} alt="" fill className="object-contain" />
        </div>
        <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-normal text-white tracking-[0.7px] sm:tracking-[0.96px] uppercase leading-[15px]">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function StatsBarSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 sm:py-8 md:py-10">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#111] inset-0" />
        <div className="absolute inset-0 opacity-50 overflow-hidden">
          <Image
            src="/assets/how-someli-works/stats/background.png"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: '50% 50%' }}
          />
        </div>
      </div>
      <div className="relative max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
        <StatItem number="60+" label="Countries" iconSrc="/assets/how-someli-works/stats/icon-countries.svg" iconWidth={14} iconHeight={14} />
        <StatItem number="50K+" label="EMPLOYEE ADVOCATES" iconSrc="/assets/how-someli-works/stats/icon-advocates.svg" iconWidth={22} iconHeight={14} />
        <StatItem number="Logistics" label="& Supply Chain" iconSrc="/assets/how-someli-works/stats/icon-logistics.svg" iconWidth={16} iconHeight={14} />
        <StatItem number="Enterprise" label="Grade Security" iconSrc="/assets/how-someli-works/stats/icon-security.svg" iconWidth={22} iconHeight={14} />
        <StatItem number="Scalable" label="SECURE & COMPLIANT" iconSrc="/assets/how-someli-works/stats/icon-compliance.svg" iconWidth={13} iconHeight={14} />
      </div>
    </section>
  );
}
