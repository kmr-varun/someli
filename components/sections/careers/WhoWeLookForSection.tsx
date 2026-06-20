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
      <div className="max-w-[1440px] mx-auto px-24 py-[100px] flex flex-col gap-[56px]">
        <h2 className="font-montserrat font-bold text-[60px] leading-[1.19] tracking-[-2px] text-black text-center w-full">
          Who we are looking for?
        </h2>

        <div className="flex gap-[56px] items-start w-full">
          {categories.map((cat) => (
            <div key={cat.title} className="flex-1 flex flex-col gap-7 min-w-0">
              <h3 className="font-montserrat font-bold text-[28px] leading-[1.2] tracking-[2px] outlined-text-orange min-h-[67px] flex items-start">
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
