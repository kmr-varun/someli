import Image from "next/image";

const columns = [
  {
    images: [
      { src: "/assets/careers/life/photo-1.jpg", height: 306 },
      { src: "/assets/careers/life/photo-2.jpg", height: 306 },
      { src: "/assets/careers/life/photo-3.jpg", height: 176 },
    ],
  },
  {
    images: [
      { src: "/assets/careers/life/photo-4.jpg", height: 306 },
      { src: "/assets/careers/life/photo-5.jpg", height: 275 },
    ],
  },
  {
    images: [
      { src: "/assets/careers/life/photo-6.jpg", height: 306 },
      { src: "/assets/careers/life/photo-7.jpg", height: 319 },
    ],
  },
  {
    images: [
      { src: "/assets/careers/life/photo-8.jpg", height: 220 },
      { src: "/assets/careers/life/photo-9.jpg", height: 375 },
    ],
  },
  {
    images: [
      { src: "/assets/careers/life/photo-10.jpg", height: 306 },
      { src: "/assets/careers/life/photo-11.jpg", height: 176 },
      { src: "/assets/careers/life/photo-12.jpg", height: 306 },
    ],
  },
];

export default function LifeAtSomeliSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-[80px] flex flex-col items-center">
        {/* Photo grid */}
        <div className="flex gap-3 items-start w-full mb-[-73px]">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 flex flex-col gap-3 min-w-0">
              {col.images.map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  className="relative w-full rounded-[20px] overflow-hidden border-[1.68px] border-white"
                  style={{ height: `${img.height}px` }}
                >
                  <Image
                    src={img.src}
                    alt="Life at Someli"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.19] tracking-[-2px] text-black text-center relative z-10">
          Life at Someli
        </h2>
      </div>
    </section>
  );
}
