import Image from "next/image";

const steps = [
  { number: "1", title: "Apply", description: "Submit agency profile" },
  { number: "2", title: "Qualification", description: "Submit agency profile" },
  { number: "3", title: "Discovery", description: "Submit agency profile" },
  { number: "4", title: "Launch", description: "Submit agency profile" },
];

export default function PartnershipProcessSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#111]">
      {/* Background */}
      <div className="absolute inset-0 opacity-50 overflow-hidden">
        <Image
          src="/assets/careers/process-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-24 py-[100px] flex flex-col gap-[56px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center">
          <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] rounded-full px-[15px] py-[7px]">
            <span className="font-montserrat text-[10px] font-normal tracking-[1px] uppercase text-[#ED6B52] leading-[15px] text-center">
              OUR TEAM
            </span>
          </div>
          <h2 className="font-montserrat font-bold text-[60px] leading-[1.19] tracking-[-2px] text-white text-center">
            Our Partnership Process
          </h2>
        </div>

        {/* Steps + CTA */}
        <div className="flex flex-col gap-8 items-center w-full">
          {/* Steps row */}
          <div className="flex gap-4 items-center w-full">
            {steps.map((step, i) => (
              <div key={step.number} className="contents">
                <div className="flex-1 glass-border-card bg-[rgba(255,255,255,0.04)] rounded-[16px] px-8 py-10">
                  <div className="flex flex-col gap-[18px]">
                    <div className="w-[52px] h-[52px] rounded-[10px] bg-[rgba(237,107,82,0.1)] flex items-center justify-center">
                      <span className="font-montserrat font-bold text-[28px] leading-none tracking-[-0.56px] text-[#ED6B52]">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <p className="font-montserrat font-bold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                        {step.title}
                      </p>
                      <p className="font-montserrat text-[14px] font-normal leading-[1.5] tracking-[-0.28px] text-white">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="shrink-0 w-[62px]">
                    <Image
                      src="/assets/careers/process-arrow.svg"
                      alt=""
                      width={62}
                      height={6}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="border border-[#ED6B52] rounded-full pl-7 pr-10 py-4 font-montserrat font-bold text-[16px] text-[#ED6B52] leading-none text-center cursor-pointer">
            • Become a Partner →
          </button>
        </div>
      </div>
    </section>
  );
}
