import Image from 'next/image';

export default function CertificationsSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">
        {/* Header */}
        <div className="flex w-full flex-col items-center gap-3 sm:gap-4">
          {/* Pill Label */}
          <div className="inline-flex items-center rounded-full border border-[rgba(237,107,82,0.16)] bg-[rgba(237,107,82,0.16)] px-3 sm:px-4 md:px-[15px] py-[5px] sm:py-[6px] md:py-[7px]">
            <span className="font-['Space_Grotesk'] text-[10px] sm:text-[11px] md:text-[12px] font-normal uppercase leading-[15px] tracking-[0.8px] sm:tracking-[0.96px] text-[#ED6B52]">
              OUR CERTIFICATIONS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-center font-['Montserrat'] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold leading-[1.2] tracking-[-1.5px] md:tracking-[-2px] text-black">
            Our Certifications
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full items-stretch">
          {/* Logo 1 */}
          <div className="flex items-center justify-center gap-2 overflow-hidden border border-[rgba(0,0,0,0.08)] px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14">
            <div className="relative h-[28px] sm:h-[32px] md:h-[35.089px] w-[28px] sm:w-[32px] md:w-[35.089px] shrink-0">
              <Image
                src="/assets/certifications/cert-logo-1-mark.svg"
                alt="Certification logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[22px] sm:h-[24px] md:h-[27.474px] w-[100px] sm:w-[120px] md:w-[147.738px] shrink-0 hidden sm:block">
              <Image
                src="/assets/certifications/cert-logo-1-type.svg"
                alt="Certification logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Logo 2 */}
          <div className="flex flex-col items-center justify-center overflow-hidden border border-[rgba(0,0,0,0.08)] px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14">
            <div className="relative h-[28px] sm:h-[32px] md:h-[35.089px] w-[80px] sm:w-[90px] md:w-[107.898px] shrink-0">
              <Image
                src="/assets/certifications/cert-logo-2.svg"
                alt="Certification logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Logo 3 */}
          <div className="flex items-center justify-center overflow-hidden border border-[rgba(0,0,0,0.08)] px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14">
            <div className="relative h-[14px] sm:h-[15px] md:h-[16.878px] w-[160px] sm:w-[180px] md:w-[218.693px] shrink-0">
              <Image
                src="/assets/certifications/cert-logo-3.svg"
                alt="Certification logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Logo 4 */}
          <div className="flex flex-col items-center justify-center overflow-hidden border border-[rgba(0,0,0,0.08)] px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14">
            <div className="relative h-[28px] sm:h-[32px] md:h-[35.089px] w-[80px] sm:w-[95px] md:w-[112.285px] shrink-0">
              <Image
                src="/assets/certifications/cert-logo-4.svg"
                alt="Certification logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Logo 5 */}
          <div className="flex items-center justify-center overflow-hidden border border-[rgba(0,0,0,0.08)] px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14 col-span-2 sm:col-span-1">
            <div className="relative h-[28px] sm:h-[32px] md:h-[35.089px] w-[28px] sm:w-[32px] md:w-[35.089px] shrink-0">
              <Image
                src="/assets/certifications/cert-logo-5.svg"
                alt="Certification logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
