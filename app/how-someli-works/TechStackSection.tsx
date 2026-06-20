import Image from 'next/image';

const techStackPills = [
  ['NLP', 'Generative AI', 'SOC 2 Type II'],
  ['Multi-Channel Publishing APIs', 'SEO Ready (Roadmap)', 'Predictive Analytics'],
];

export default function TechStackSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px]">
      <div className="absolute inset-[-46.89%_-1.53%_-44.09%_-1.53%] pointer-events-none opacity-50 lg:opacity-100">
        <Image src="/assets/how-someli-works/tech/union-bg.svg" alt="" fill className="object-cover" />
      </div>
      <div className="relative max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col pb-[0.67px] w-full lg:w-[541px] text-center lg:text-left">
          <h2 className="text-black text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[60px] font-bold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.2]">
            Built on a modern, secure, and scalable tech stack.
          </h2>
        </div>
        <div className="flex flex-col gap-2 sm:gap-[8.49px] items-center justify-center w-full lg:w-auto">
          <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-[8.767px] w-full lg:w-[617px] justify-center">
            {techStackPills[0].map((tech, index) => (
              <div key={index} className="bg-white border-[0.877px] border-[rgba(0,0,0,0.08)] flex-1 min-w-[100px] sm:min-w-0 flex items-center justify-center px-2 sm:px-3 py-3 sm:py-[14.028px] rounded-[7.263px]">
                <p className="text-[#ff5722] text-[12px] sm:text-[14px] md:text-[16.26px] font-bold font-['Inter'] text-center leading-none">{tech}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-[8.767px] w-full lg:w-[617px] justify-center">
            {techStackPills[1].map((tech, index) => (
              <div key={index} className="bg-white border-[0.877px] border-[rgba(0,0,0,0.08)] flex-1 min-w-[120px] sm:min-w-[180px] lg:min-w-0 flex items-center justify-center px-3 sm:px-4 md:px-[28.055px] py-3 sm:py-[14.028px] rounded-[7.263px]">
                <p className="text-[#ff5722] text-[11px] sm:text-[13px] md:text-[16.26px] font-bold font-['Inter'] text-center leading-none">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
