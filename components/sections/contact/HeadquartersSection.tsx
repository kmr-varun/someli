import Image from "next/image";

export default function HeadquartersSection() {
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-[56px] px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-[100px]">
        {/* Left — Heading + Info */}
        <div className="flex flex-col gap-10 sm:gap-[56px] items-start w-full lg:w-auto lg:shrink-0">
          <h2 className="font-montserrat font-bold text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] tracking-[2px] leading-none outlined-text-orange whitespace-pre-line">
            {"Our\nHeadquarters"}
          </h2>

          <div className="flex flex-col gap-6 items-start">
            {/* Address */}
            <div className="flex gap-[10px] items-start">
              <Image src="/assets/contact/icon-map-pin.svg" alt="" width={24} height={27} className="shrink-0" />
              <span className="font-montserrat font-normal text-[16px] leading-[1.5] text-[#444]">
                DIFC Innovation Hub,<br />
                1st floor, Gate Avenue South,<br />
                Dubai International Financial Center
              </span>
            </div>

            {/* Phone */}
            <div className="flex gap-[10px] items-center">
              <Image src="/assets/contact/icon-phone.svg" alt="" width={24} height={24} className="shrink-0" />
              <span className="font-montserrat font-normal text-[16px] leading-[1.5] text-[#444]">
                +971 58 518 9194
              </span>
            </div>

            {/* Email */}
            <div className="flex gap-[10px] items-center">
              <Image src="/assets/contact/icon-email.svg" alt="" width={26} height={26} className="shrink-0" />
              <span className="font-montserrat font-normal text-[16px] leading-[1.5] text-[#444]">
                hello@someli.ai
              </span>
            </div>

            {/* Hours */}
            <div className="flex gap-[10px] items-start">
              <Image src="/assets/contact/icon-clock.svg" alt="" width={24} height={24} className="shrink-0" />
              <span className="font-montserrat font-normal text-[16px] leading-[1.5] text-[#444]">
                Sun- Thu, 9:00 AM to 6:00 PM (GST)
              </span>
            </div>
          </div>
        </div>

        {/* Right — Map */}
        <div className="flex-1 w-full lg:w-auto relative rounded-[24px] overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[450px]">
          <Image
            src="/assets/contact/map.jpg"
            alt="Office location map"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
