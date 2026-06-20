import Image from "next/image";

const cards = [
  {
    title: "Your Goals",
    icon: "/assets/corporates/icon-goals.svg",
    items: [
      "Increase brand visibility and reputation",
      "Build trust with your audience",
      "Attract top talent",
      "Support sales and lead generation",
      "Drive employee engagement",
    ],
  },
  {
    title: "Challenges",
    icon: "/assets/corporates/icon-challenges.svg",
    items: [
      "Increase brand visibility and reputation",
      "Build trust with your audience",
      "Attract top talent",
      "Support sales and lead generation",
      "Drive employee engagement",
    ],
  },
  {
    title: "What you need",
    icon: "/assets/corporates/icon-needs.svg",
    items: [
      "Increase brand visibility and reputation",
      "Build trust with your audience",
      "Attract top talent",
      "Support sales and lead generation",
      "Drive employee engagement",
    ],
  },
];

const whatYouGet = [
  "Increase brand visibility and reputation",
  "Build trust with your audience",
  "Attract top talent",
  "Support sales and lead generation",
  "Drive employee engagement",
];

export default function RightForYouSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#111]">
      {/* Dark background image */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/assets/corporates/dark-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 lg:py-[100px] flex flex-col gap-[80px] items-start">
        {/* Heading */}
        <div className="flex flex-col gap-6 items-center text-center text-white w-full">
          <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.19] tracking-[-2px]">
            Is Someli right for your organization?
          </h2>
          <p className="font-montserrat font-normal text-[16px] lg:text-[18px] leading-[1.36] max-w-[808px]">
            If you have 50-500 employees and want to amplify your brand, engage your people, and drive real business results, Someli is for you
          </p>
        </div>

        {/* Cards + CTA */}
        <div className="flex flex-col gap-8 items-center w-full">
          {/* Top 3 cards row */}
          <div className="flex flex-col md:flex-row gap-5 w-full">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex-1 glass-border-card bg-[rgba(255,255,255,0.04)] rounded-[16px] px-8 py-10"
              >
                <div className="flex flex-col gap-10">
                  {/* Header with title + icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.2)]">
                    <h3
                      className="font-montserrat font-semibold text-[24px] leading-[1.1] bg-clip-text text-transparent"
                      style={{
                        backgroundImage: "linear-gradient(to bottom, #DF8251, #D54050)",
                      }}
                    >
                      {card.title}
                    </h3>
                    <div className="relative w-6 h-6 shrink-0">
                      <Image src={card.icon} alt="" fill className="object-contain" />
                    </div>
                  </div>

                  {/* Bullet list */}
                  <ul className="flex flex-col gap-0 list-disc pl-6">
                    {card.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="font-montserrat font-normal text-[16px] text-white leading-[1.5] tracking-[-0.32px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Full-width gradient card */}
          <div className="relative w-full bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[16px] px-8 py-10 overflow-hidden">
            {/* Checkmark icon */}
            <div className="absolute top-10 right-8 w-[25px] h-[20px]">
              <Image src="/assets/corporates/icon-checkmark.svg" alt="" fill className="object-contain" />
            </div>
            {/* Watermark logo bottom-right */}
            <div className="absolute bottom-0 right-0 w-[232px] h-[182px] pointer-events-none ">
              <Image src="/assets/corporates/watermark-logo.png" alt="" height={232} width={232} className="absolute bottom-0" />
            </div>

            <div className="flex flex-col gap-10">
              {/* Header */}
              <div className="pb-6 border-b border-[rgba(255,255,255,0.2)]">
                <h3 className="font-montserrat font-semibold text-[28px] sm:text-[32px] leading-[1.1] text-white">
                  What you get with Someli
                </h3>
              </div>

              {/* Bullet list */}
              <ul className="flex flex-col gap-0 list-disc pl-6">
                {whatYouGet.map((item, idx) => (
                  <li
                    key={idx}
                    className="font-montserrat font-normal text-[16px] text-white leading-[1.5] tracking-[-0.32px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-black border border-[#ED6B52] rounded-full pl-7 pr-10 py-4 font-montserrat font-semibold text-[16px] text-[#ED6B52] leading-none cursor-pointer">
            • Start your 14-Day FREE Trial Now! →
          </button>
        </div>
      </div>
    </section>
  );
}
