import Image from "next/image";

const features = [
  {
    title: "Easy Content Sharing",
    description:
      "Curated on-brand content employees can share in one click across their networks.",
    image: "/assets/corporates/feature-1.png",
  },
  {
    title: "AI Personal Branding",
    description:
      "Curated on-brand content employees can share in one click across their networks.",
    image: "/assets/corporates/feature-2.png",
  },
  {
    title: "Smart Automation",
    description:
      "Curated on-brand content employees can share in one click across their networks.",
    image: "/assets/corporates/feature-3.png",
  },
  {
    title: "AI Personal Branding",
    description:
      "Curated on-brand content employees can share in one click across their networks.",
    image: "/assets/corporates/feature-2.png",
  },
  {
    title: "Powerful Analytics",
    description:
      "Curated on-brand content employees can share in one click across their networks.",
    image: "/assets/corporates/feature-4.png",
  },
  {
    title: "Arabic Content Support",
    description:
      "Curated on-brand content employees can share in one click across their networks.",
    image: "/assets/corporates/feature-5.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 lg:py-[100px] flex flex-col gap-[56px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center text-center w-full">
          <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] rounded-full px-[15px] py-[7px]">
            <span className="font-montserrat font-normal text-[12px] text-[#ED6B52] tracking-[0.96px] uppercase leading-[15px]">
              FEATURES
            </span>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-black leading-[1.19] tracking-[-2px]">
              The Employee Advocacy Platform that delivers
            </h2>
            <p className="font-montserrat font-normal text-[16px] lg:text-[18px] text-[#222] leading-[1.36] max-w-[808px]">
              Everything you need to launch, engage, and scale your advocacy program
            </p>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-3 flex flex-col gap-3"
            >
              {/* Image */}
              <div className="relative aspect-[293/184] rounded-[12px] overflow-hidden w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 items-center text-center pb-4">
                <h3 className="font-montserrat font-bold text-[20px] sm:text-[22px] lg:text-[24px] text-[#222] leading-[1.5] tracking-[-0.48px]">
                  {feature.title}
                </h3>
                <p className="font-montserrat font-normal text-[14px] text-[#222] leading-[1.3]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
