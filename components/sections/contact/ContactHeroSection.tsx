"use client";

import Image from "next/image";
import SectionPill from "@/components/ui/SectionPill";

export default function ContactHeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/contact/hero-bg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-[100px] gap-10 lg:gap-8">
        {/* Left — Heading + Contact Cards */}
        <div className="flex flex-col gap-10 items-start w-full lg:w-[583px] lg:shrink-0">
          <div className="flex flex-col gap-4 items-start w-full">
            {/* Pill */}
            <SectionPill>CONTACT US</SectionPill>

            {/* Heading */}
            <h1 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.19] tracking-[-2.04px] text-[#222]">
              Got any questions?{" "}
              <span className="bg-gradient-to-b from-[#DF8251] to-[#D54050] bg-clip-text text-transparent">
                Contact us
              </span>
            </h1>
          </div>

          {/* Contact cards */}
          <div className="flex flex-col gap-3 w-full">
            {/* Sales card */}
            <div className="bg-white border-2 border-[rgba(0,0,0,0.08)] rounded-[20px] px-6 py-8 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="font-montserrat font-semibold text-[20px] leading-[1.2] tracking-[-0.4px] text-[#222]">
                  Sales & Partnerships
                </p>
                <p className="font-montserrat font-normal text-[14.8px] leading-[1.5] tracking-[-0.3px] text-[#444]">
                  Explore partnerships or find the right solution for your organization.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 sm:gap-8 items-center">
                <div className="flex gap-2 items-center">
                  <Image src="/assets/contact/icon-email.svg" alt="" width={26} height={26} />
                  <span className="font-montserrat font-normal text-[16px] leading-[1.5] text-[#444]">hello@someli.ai</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Image src="/assets/contact/icon-phone.svg" alt="" width={24} height={24} />
                  <span className="font-montserrat font-normal text-[16px] leading-[1.5] text-[#444]">+971 58 518 9194</span>
                </div>
              </div>
            </div>

            {/* Support card */}
            <div className="bg-white border-2 border-[rgba(0,0,0,0.08)] rounded-[20px] px-6 py-8 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="font-montserrat font-semibold text-[20px] leading-[1.2] tracking-[-0.4px] text-[#222]">
                  Customer Support
                </p>
                <p className="font-montserrat font-normal text-[14.8px] leading-[1.5] tracking-[-0.3px] text-[#444]">
                  Get help with implementation, platform support, or any questions.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 sm:gap-8 items-center">
                <div className="flex gap-2 items-center">
                  <Image src="/assets/contact/icon-email.svg" alt="" width={26} height={26} />
                  <span className="font-montserrat font-normal text-[16px] leading-[1.5] text-[#444]">hello@someli.ai</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Image src="/assets/contact/icon-phone.svg" alt="" width={24} height={24} />
                  <span className="font-montserrat font-normal text-[16px] leading-[1.5] text-[#444]">+971 58 518 9194</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Book a Demo Form */}
        <div className="w-full lg:w-[583px] lg:shrink-0 bg-gradient-to-b from-[#DF8251] to-[#D54050] rounded-[24px] p-8 sm:p-10 flex flex-col gap-10 items-center">
          {/* Form header */}
          <div className="flex flex-col gap-2 items-start text-center text-white w-full">
            <p className="font-montserrat font-bold text-[28px] sm:text-[32px] leading-[1.2] tracking-[-0.64px] w-full">
              Book a Demo
            </p>
            <p className="font-montserrat font-normal text-[14.8px] leading-[1.5] tracking-[-0.3px] w-full">
              Tell us a bit about yourself and we&apos;ll connect you with the right expert
            </p>
          </div>

          {/* Form fields */}
          <div className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[rgba(255,255,255,0.16)] border border-white rounded-[8px] px-6 py-5 font-montserrat font-medium text-[16px] text-white placeholder-white tracking-[0.64px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] outline-none"
            />
            <input
              type="email"
              placeholder="Work Email"
              className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.2)] rounded-[8px] px-6 py-5 font-montserrat font-medium text-[16px] text-white placeholder-[rgba(255,255,255,0.6)] tracking-[0.64px] outline-none"
            />
            <div className="flex gap-2 w-full">
              <div className="flex items-center gap-4 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.2)] rounded-[8px] px-6 py-5 shrink-0">
                <div className="flex items-center gap-2">
                  <Image src="/assets/contact/uae-flag.png" alt="" width={26} height={18} className="rounded-[2px]" />
                  <span className="font-montserrat font-medium text-[16px] text-[rgba(255,255,255,0.6)] tracking-[0.64px]">+971</span>
                </div>
                <Image src="/assets/contact/icon-chevron-down.svg" alt="" width={12} height={7} />
              </div>
              <input
                type="tel"
                placeholder="Contact No."
                className="flex-1 min-w-0 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.2)] rounded-[8px] px-6 py-5 font-montserrat font-medium text-[16px] text-white placeholder-[rgba(255,255,255,0.6)] tracking-[0.64px] outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.2)] rounded-[8px] px-6 py-5 font-montserrat font-medium text-[16px] text-white placeholder-[rgba(255,255,255,0.6)] tracking-[0.64px] outline-none"
            />
            <div className="relative w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.2)] rounded-[8px] px-6 py-5 flex items-center justify-between">
              <span className="font-montserrat font-medium text-[16px] text-[rgba(255,255,255,0.6)] tracking-[0.64px]">No. of Employees</span>
              <Image src="/assets/contact/icon-chevron-down.svg" alt="" width={12} height={7} />
            </div>
            <textarea
              placeholder="Goals/ Challenges"
              className="w-full h-[93px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.2)] rounded-[8px] px-6 py-5 font-montserrat font-medium text-[16px] text-white placeholder-[rgba(255,255,255,0.6)] tracking-[0.64px] outline-none resize-none"
            />
          </div>

          {/* Submit button */}
          <button className="border border-white rounded-full pl-7 pr-10 py-4 font-montserrat font-bold text-[16px] text-white leading-none cursor-pointer">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
