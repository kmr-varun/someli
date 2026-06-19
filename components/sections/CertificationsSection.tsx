import Image from 'next/image';

export default function CertificationsSection() {
  return (
    <section className="w-full bg-white px-24 py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-14">
        {/* Header */}
        <div className="flex w-full flex-col items-center gap-4">
          {/* Pill Label */}
          <div className="inline-flex items-center rounded-full border border-[rgba(237,107,82,0.16)] bg-[rgba(237,107,82,0.16)] px-[15px] py-[7px]">
            <span className="font-['Space_Grotesk'] text-[12px] font-normal uppercase leading-[15px] tracking-[0.96px] text-[#ED6B52]">
              OUR CERTIFICATIONS
            </span>
          </div>

          {/* Heading */}
          <h2 className="pb-[0.67px] text-center font-['Montserrat'] text-[60px] font-bold leading-[71.4px] tracking-[-2px] text-black">
            Our Certifications
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="flex w-[1440px] items-stretch">
          {/* Logo 1 - Logoipsum with mark + type */}
          <div className="flex flex-1 items-center justify-center gap-2 overflow-hidden border border-[rgba(0,0,0,0.08)] border-r-0 px-10 py-14">
            <div className="relative h-[35.089px] w-[35.089px] shrink-0">
              <Image
                src="/assets/certifications/cert-logo-1-mark.svg"
                alt="Certification logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[27.474px] w-[147.738px] shrink-0">
              <Image
                src="/assets/certifications/cert-logo-1-type.svg"
                alt="Certification logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Logo 2 */}
          <div className="flex flex-1 flex-col items-center justify-center overflow-hidden border border-[rgba(0,0,0,0.08)] border-r-0 px-10 py-14">
            <div className="relative h-[35.089px] w-[107.898px] shrink-0">
              <Image
                src="/assets/certifications/cert-logo-2.svg"
                alt="Certification logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Logo 3 */}
          <div className="flex flex-1 items-center justify-center overflow-hidden border border-[rgba(0,0,0,0.08)] border-r-0 px-10 py-14">
            <div className="relative h-[16.878px] w-[218.693px] shrink-0">
              <Image
                src="/assets/certifications/cert-logo-3.svg"
                alt="Certification logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Logo 4 */}
          <div className="flex flex-1 flex-col items-center justify-center overflow-hidden border border-[rgba(0,0,0,0.08)] border-r-0 px-10 py-14">
            <div className="relative h-[35.089px] w-[112.285px] shrink-0">
              <Image
                src="/assets/certifications/cert-logo-4.svg"
                alt="Certification logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Logo 5 */}
          <div className="flex flex-1 items-center justify-center overflow-hidden border border-[rgba(0,0,0,0.08)] px-10 py-14">
            <div className="relative h-[35.089px] w-[35.089px] shrink-0">
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
