import Image from 'next/image';

const takeaways = [
  {
    icon: '/assets/case-study-detail/icon-plug.svg',
    title: 'Training & Enablement',
    description: 'Posts, reels, articles, videos, and graphics, all customized to your brand',
  },
  {
    icon: '/assets/case-study-detail/icon-referral.svg',
    title: 'Qualified Lead Referrals',
    description: 'Employees opt-in and instantly access your private library',
  },
  {
    icon: '/assets/case-study-detail/icon-referral.svg',
    title: 'Revenue Sharing',
    description: 'Employees opt-in and instantly access your private library',
  },
  {
    icon: '/assets/case-study-detail/icon-territory.svg',
    title: 'Territory access',
    description: '1-click scheduling, so employees share on-brand content in their own voice, on time',
  },
];

export default function CaseStudyDetailKeyTakeaways() {
  return (
    <section id="takeaways" className="bg-white w-full px-24 py-[100px] flex flex-col gap-16 items-center">
      {/* Heading */}
      <div className="flex flex-col gap-4 items-center w-[616px]">
        <h2 className="font-montserrat font-bold text-[60px] text-[#222] tracking-[-2px] leading-[71.4px] text-center pb-[0.67px]">
          Key Takeaways
        </h2>
        <p className="font-montserrat font-normal text-[18px] text-[#444] leading-[1.5] text-center">
          AI + Strategy + Consistency + Influence that grows your businesss
        </p>
      </div>

      {/* 4 cards */}
      <div className="flex gap-4 items-start w-full">
        {takeaways.map((item, index) => (
          <div
            key={index}
            className="flex-1 min-w-px bg-white border-2 border-[rgba(0,0,0,0.08)] rounded-[20px] p-6 flex flex-col gap-[18px] items-start self-stretch"
          >
            <div className="bg-[rgba(237,107,82,0.1)] rounded-[10px] p-3 w-[52px] h-[52px] flex items-center justify-center">
              <div className="relative w-[29px] h-[29px]">
                <Image
                  src={item.icon}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[3px] w-full">
              <p className="font-montserrat font-bold text-[14px] text-[#222] tracking-[-0.28px] leading-[1.5]">
                {item.title}
              </p>
              <p className="font-montserrat font-normal text-[14px] text-[#5f5f5f] tracking-[-0.28px] leading-[1.5]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
