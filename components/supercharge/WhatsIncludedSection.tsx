import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    image: "/assets/supercharge/services/strategic-content.png",
    title: "Strategic Content Library",
  },
  {
    image: "/assets/supercharge/services/content-planner.png",
    title: "2 week content planner",
  },
  {
    image: "/assets/supercharge/services/insights-dashboard.png",
    title: "Insights Dashboard",
  },
  {
    image: "/assets/supercharge/services/branded-posts.png",
    title: "Branded Posts Library",
  },
  {
    image: "/assets/supercharge/services/brand-positioning.png",
    title: "Brand Positioning",
  },
  {
    image: "/assets/supercharge/services/online-networking.png",
    title: "Online Networking",
  },
];

export default function WhatsIncludedSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px] flex flex-col gap-10 sm:gap-12 md:gap-14 items-center">
        {/* Header */}
        <SectionHeader
          pill="Transparent pricing"
          heading="What's Included"
          description="A dedicated marketing team consisting of a video editor, a graphic designer, and a customer support manager — all done for you."
          align="center"
          headingClassName="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-[1.2] tracking-[-1.5px] lg:tracking-[-2px]"
          descriptionClassName="max-w-[808px]"
          className="w-full max-w-4xl"
        />

        {/* Services Grid - Responsive */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-3 flex flex-col gap-3"
            >
              <div className="relative w-full aspect-[293/184] rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 395px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 items-start pb-4">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-bold leading-[1.5] tracking-[-0.32px] text-[#222222] text-center w-full">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
