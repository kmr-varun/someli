import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#111] px-24 py-[120px]">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-50 overflow-hidden">
        <div className="absolute h-[140.64%] w-[157.96%]" style={{ left: '-6.16%', top: '-20.32%' }}>
          <Image
            src="/assets/footer/background.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-20">
        {/* CTA Section */}
        <div className="flex w-full flex-col items-center gap-14 border-b border-[rgba(255,255,255,0.5)] pb-14">
          <div className="flex w-full flex-col items-center gap-8 text-center text-white">
            <h2 className="font-['Montserrat'] text-[80px] font-bold leading-[1.3] tracking-[-2px]">
              Ready to 10x your reach?
            </h2>
            <p className="font-['Montserrat'] text-[18px] font-normal leading-[1.5]">
              Join thousands of professionals and companies building influence that drives real results.
            </p>
          </div>

          {/* Book Demo Button */}
          <button className="inline-flex items-center rounded-full border border-[#ED6B52] py-4 pl-7 pr-10">
            <span className="font-['Montserrat'] text-[16px] font-bold text-[#ED6B52]">
              • Book a Demo →
            </span>
          </button>

          {/* 30 day guarantee badge - positioned absolutely */}
          <div className="absolute left-[1011px] top-[53.22px] flex w-[224px] items-center gap-3 rounded-full bg-[rgba(17,17,17,0.4)] px-5 py-3">
            <div className="relative h-[22px] w-[22px] shrink-0">
              <Image
                src="/assets/footer/guarantee-icon.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <p className="font-['Montserrat'] text-[13px] font-medium leading-[1.2] tracking-[0.52px] text-white">
              30 days money back guarantee
            </p>
          </div>
        </div>

        {/* Footer Links & Contact */}
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex w-full flex-col items-center gap-20">
            {/* Logo */}
            <div className="relative h-[186px] w-[602px] shrink-0">
              <Image
                src="/assets/footer/logo.png"
                alt="Someli AI"
                fill
                className="pointer-events-none object-contain"
              />
            </div>

            {/* Navigation Columns */}
            <div className="flex w-full items-start justify-between">
              {/* Product Column */}
              <div className="flex flex-1 flex-col gap-[18px] font-['Montserrat'] font-medium">
                <h3 className="text-[20px] leading-normal text-white">Product</h3>
                <ul className="flex flex-col gap-[14px] text-[14px] leading-normal text-[rgba(255,255,255,0.9)]">
                  <li className="list-disc ms-[21px]">Platform</li>
                  <li className="list-disc ms-[21px]">How Someli Works</li>
                  <li className="list-disc ms-[21px]">Pricing</li>
                  <li className="list-disc ms-[21px]">For Corporates</li>
                  <li className="list-disc ms-[21px]">Supercharge Plan</li>
                  <li className="list-disc ms-[21px]">AI powered Personal Branding</li>
                </ul>
              </div>

              {/* Resources Column */}
              <div className="flex flex-1 flex-col gap-[18px] font-['Montserrat'] font-medium">
                <h3 className="text-[20px] leading-normal text-white">Resources</h3>
                <ul className="flex flex-col gap-[14px] text-[14px] leading-normal text-[rgba(255,255,255,0.9)]">
                  <li className="list-disc ms-[21px]">Product Tour</li>
                  <li className="list-disc ms-[21px]">Client Cases</li>
                  <li className="list-disc ms-[21px]">Blogs & Insights</li>
                  <li className="list-disc ms-[21px]">Tools & Calculators</li>
                  <li className="list-disc ms-[21px]">Guides & Playbooks</li>
                  <li className="list-disc ms-[21px]">Help Center</li>
                </ul>
              </div>

              {/* Company Column */}
              <div className="flex flex-1 flex-col gap-[18px] font-['Montserrat'] font-medium">
                <h3 className="text-[20px] leading-normal text-white">Company</h3>
                <ul className="flex flex-col gap-[14px] text-[14px] leading-normal text-[rgba(255,255,255,0.9)]">
                  <li className="list-disc ms-[21px]">Our Story</li>
                  <li className="list-disc ms-[21px]">Why Someli</li>
                  <li className="list-disc ms-[21px]">Careers & Partnership</li>
                  <li className="list-disc ms-[21px]">Contact Us</li>
                </ul>
              </div>

              {/* Support Column */}
              <div className="flex flex-1 flex-col gap-[18px] font-['Montserrat'] font-medium">
                <h3 className="text-[20px] leading-normal text-white">Support</h3>
                <ul className="flex flex-col gap-[14px] text-[14px] leading-normal text-[rgba(255,255,255,0.9)]">
                  <li className="list-disc ms-[21px]">Book a Demo</li>
                  <li className="list-disc ms-[21px]">FAQ</li>
                  <li className="list-disc ms-[21px]">Privacy Policy</li>
                  <li className="list-disc ms-[21px]">Terms of Use</li>
                </ul>
              </div>

              {/* Contact Us Column */}
              <div className="flex flex-1 flex-col gap-[18px] font-['Montserrat'] font-medium">
                <h3 className="text-[20px] leading-normal text-white">Contact Us</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex w-[199px] items-center gap-[10px]">
                    <div className="relative h-[18px] w-[18px] shrink-0">
                      <Image
                        src="/assets/footer/icon-phone.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="font-['Open_Sans'] text-[14px] font-normal leading-normal text-[rgba(255,255,255,0.9)]">
                      +971 58 518 9194
                    </p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div className="relative h-[18px] w-[18px] shrink-0">
                      <Image
                        src="/assets/footer/icon-email.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="font-['Open_Sans'] text-[14px] font-normal leading-normal text-[rgba(255,255,255,0.9)]">
                      hello@someli.ai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Social */}
          <div className="flex w-full items-center justify-between border-t border-[rgba(255,255,255,0.5)] pt-5">
            <p className="font-['Montserrat'] text-[12px] font-normal leading-normal text-center text-[rgba(255,255,255,0.9)] whitespace-nowrap">
              © 2026 Someli AI. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <div className="relative h-[30px] w-[30px]">
                <Image
                  src="/assets/footer/icon-facebook.svg"
                  alt="Facebook"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-[30px] w-[30px]">
                <Image
                  src="/assets/footer/icon-linkedin.svg"
                  alt="LinkedIn"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-[30px] w-[30px]">
                <Image
                  src="/assets/footer/icon-youtube.svg"
                  alt="YouTube"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
