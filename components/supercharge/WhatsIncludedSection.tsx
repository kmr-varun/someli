import Image from "next/image";

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
      <div className="max-w-[1440px] mx-auto px-24 py-[100px] flex flex-col gap-14 items-center">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center w-full">
          {/* Pill Label */}
          <div className="inline-flex items-center px-[15px] py-[7px] bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] rounded-full">
            <span className="text-[#ED6B52] text-[12px] font-normal uppercase tracking-[0.96px] leading-[15px]">
              Transparent pricing
            </span>
          </div>

          {/* Heading + Description */}
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-[60px] font-bold leading-[71.4px] tracking-[-2px] text-black">
              What's Included
            </h2>
            <p className="text-[18px] font-normal leading-[24.5px] text-black w-[808px]">
              A dedicated marketing team consisting of a video editor, a graphic designer, and a customer support manager — all done for you.
            </p>
          </div>
        </div>

        {/* Services Grid - 3 columns, 2 rows */}
        <div className="flex flex-col gap-6 w-full">
          {/* Row 1 */}
          <div className="flex gap-8 items-center justify-center">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-3 w-[394.667px] flex flex-col gap-3"
              >
                <div className="relative w-full aspect-[293/184] rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1440px) 100vw, 395px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start pb-4">
                  <p className="text-[16px] font-bold leading-[1.5] tracking-[-0.32px] text-[#222222] text-center w-full">
                    {service.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-8 items-center justify-center">
            {services.slice(3, 6).map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-3 w-[394.667px] flex flex-col gap-3"
              >
                <div className="relative w-full aspect-[293/184] rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1440px) 100vw, 395px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start pb-4">
                  <p className="text-[16px] font-bold leading-[1.5] tracking-[-0.32px] text-[#222222] text-center w-full">
                    {service.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
