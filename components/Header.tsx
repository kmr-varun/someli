import Image from "next/image";

const NAV_ITEMS = [
  { label: "Platform", hasChevron: false, active: true },
  { label: "Solutions", hasChevron: true, active: false },
  { label: "Resources", hasChevron: true, active: false },
  { label: "Pricing", hasChevron: false, active: false },
  { label: "Company", hasChevron: true, active: false },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      <div className="flex items-center justify-between px-24 py-4 h-24">
        {/* Left: logo + nav */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="relative w-[158px] h-16 shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Someli"
              fill
              className="object-contain object-left"
              sizes="158px"
              priority
            />
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-2 text-[14px] leading-none text-[#222] whitespace-nowrap ${
                  item.active ? "font-bold" : "font-normal"
                }`}
              >
                <span className="text-[#222]">•</span>
                <span>{item.label}</span>
                {item.hasChevron && (
                  <Image
                    src="/assets/icons/chevron-down.svg"
                    alt=""
                    width={7}
                    height={4}
                  />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: buttons */}
        <div className="flex items-center gap-2">
          {/* Log in — ghost, no border */}
          <a
            href="#"
            className="flex items-center gap-2 pl-7 pr-10 py-4 rounded-full text-[16px] font-bold text-[#ED6B52] whitespace-nowrap"
          >
            <span>•</span>
            <span>Log in</span>
          </a>

          {/* Book a Demo — outlined */}
          <a
            href="#"
            className="flex items-center gap-2 pl-7 pr-10 py-4 rounded-full border border-[#ED6B52] text-[16px] font-bold text-[#ED6B52] whitespace-nowrap"
          >
            <span>•</span>
            <span>Book a Demo</span>
          </a>
        </div>
      </div>
    </header>
  );
}
