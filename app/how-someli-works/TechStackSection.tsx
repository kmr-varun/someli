import Image from 'next/image';

const techStackPills = [
  ['NLP', 'Generative AI', 'SOC 2 Type II'],
  ['Multi-Channel Publishing APIs', 'SEO Ready (Roadmap)', 'Predictive Analytics'],
];

export default function TechStackSection() {
  return (
    <section className="relative w-full px-24 py-[100px]">
      <div className="absolute inset-[-46.89%_-1.53%_-44.09%_-1.53%] pointer-events-none">
        <Image src="/assets/how-someli-works/tech/union-bg.svg" alt="" fill className="object-cover" />
      </div>
      <div className="relative max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex flex-col pb-[0.67px] w-[541px]">
          <h2 className="text-black text-[60px] font-bold tracking-[-2px] leading-[71.4px]">
            Built on a modern, secure, and scalable tech stack.
          </h2>
        </div>
        <div className="flex flex-col gap-[8.49px] items-center justify-center">
          <div className="flex gap-[8.767px] w-[617px]">
            {techStackPills[0].map((tech, index) => (
              <div key={index} className="bg-white border-[0.877px] border-[rgba(0,0,0,0.08)] flex-1 flex items-center justify-center px-3 py-[14.028px] rounded-[7.263px]">
                <p className="text-[#ff5722] text-[16.26px] font-bold font-['Inter'] text-center leading-none">{tech}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-[8.767px] w-[617px]">
            {techStackPills[1].map((tech, index) => (
              <div key={index} className="bg-white border-[0.877px] border-[rgba(0,0,0,0.08)] flex items-center justify-center px-[28.055px] py-[14.028px] rounded-[7.263px] w-[199.822px]">
                <p className="text-[#ff5722] text-[16.26px] font-bold font-['Inter'] text-center leading-none">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
