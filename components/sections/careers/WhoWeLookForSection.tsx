import Image from "next/image";

const categories = [
  {
    title: "Marketing Agencies",
    criteria: [
      "50+ active corporate clients",
      "B2B Focus Preferred",
      "Strong Executive Relationship",
      "Digital Transformation Expertise",
    ],
  },
  {
    title: "PR & Communication Firms",
    criteria: [
      "50+ active corporate clients",
      "B2B Focus Preferred",
      "Strong Executive Relationship",
      "Digital Transformation Expertise",
    ],
  },
  {
    title: "HR & Employer Branding Consultants",
    criteria: [
      "50+ active corporate clients",
      "B2B Focus Preferred",
      "Strong Executive Relationship",
      "Digital Transformation Expertise",
    ],
  },
];

export default function WhoWeLookForSection() {
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-[100px] flex flex-col gap-10 sm:gap-[56px]">
        <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.19] tracking-[-2px] text-black text-center w-full">
          Who we are looking for?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[56px] items-start w-full">
          {categories.map((cat) => (
            <div key={cat.title} className="flex flex-col gap-7">
              <h3 className="font-montserrat font-bold text-[24px] sm:text-[28px] leading-[1.2] tracking-[2px] outlined-text-orange md:min-h-[67px] flex items-start">
                {cat.title}
              </h3>
              <div className="flex flex-col gap-2">
                {cat.criteria.map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <Image
                      src="/assets/careers/check-circle.svg"
                      alt=""
                      width={16}
                      height={24}
                      className="shrink-0 mt-0.5"
                    />
                    <span className="font-montserrat text-[16px] font-normal leading-[1.5] text-[#222]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
