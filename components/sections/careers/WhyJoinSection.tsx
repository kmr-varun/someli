import Image from "next/image";
import SectionPill from "@/components/ui/SectionPill";
import Button from "@/components/ui/Button";

const reasons = [
  { number: "1", title: "Global Impact", description: "Submit agency profile" },
  { number: "2", title: "Remote First Culture", description: "Submit agency profile" },
  { number: "3", title: "Growth Opportunities", description: "Submit agency profile" },
  { number: "4", title: "Innovative Product", description: "Submit agency profile" },
];

export default function WhyJoinSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0D0D0D]">
      {/* Background */}
      <div className="absolute inset-0 opacity-50 overflow-hidden">
        <Image
          src="/assets/careers/process-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-[100px] flex flex-col gap-10 sm:gap-[56px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center">
          <SectionPill>OUR TEAM</SectionPill>
          <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.19] tracking-[-2px] text-white text-center">
            Why Join Someli
          </h2>
        </div>

        {/* Cards + CTA */}
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="glass-border-card bg-[rgba(255,255,255,0.04)] rounded-[16px] px-6 sm:px-8 py-8 sm:py-10"
              >
                <div className="flex flex-col gap-[18px]">
                  <div className="w-[52px] h-[52px] rounded-[10px] bg-[rgba(237,107,82,0.1)] flex items-center justify-center">
                    <span className="font-montserrat font-bold text-[28px] leading-none tracking-[-0.56px] text-[#ED6B52]">
                      {reason.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[3px]">
                    <p className="font-montserrat font-bold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                      {reason.title}
                    </p>
                    <p className="font-montserrat text-[14px] font-normal leading-[1.5] tracking-[-0.28px] text-white">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button variant="outlined">Become a Partner →</Button>
        </div>
      </div>
    </section>
  );
}
