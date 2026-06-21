import Image from 'next/image';

interface BlogCardProps {
  image: string;
  title: string;
  author: string;
  avatar: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export default function BlogCard({
  image,
  title,
  author,
  avatar,
  date,
  readTime,
  featured = false,
}: BlogCardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl p-4 flex flex-col gap-3 cursor-pointer transition-colors duration-300
        ${featured ? 'border border-[#DF8251]' : 'border border-[rgba(0,0,0,0.08)] hover:border-[#DF8251]'}
      `}
    >
      {/* Image */}
      <div className="relative w-full h-[316px] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 pb-4">
        <p className="text-[16px] font-semibold leading-[1.5] text-[#022425] line-clamp-2">
          {title}
        </p>
        <p className="text-[16px] font-normal leading-none text-[#FF5722]">
          Read more &gt;
        </p>
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between pt-6 border-t border-[rgba(0,0,0,0.12)]">
        <div className="flex items-center gap-2.5">
          <div className="relative w-[30px] h-[30px]">
            <Image
              src={avatar}
              alt={author}
              fill
              className="rounded-full object-cover"
              sizes="30px"
            />
          </div>
          <span className="text-[12px] font-normal leading-none text-[#022425] font-[var(--font-open-sans)]">
            {author}
          </span>
        </div>
        <div className="flex items-center gap-0 text-[12px] font-normal leading-none text-[#2E2316] font-[var(--font-open-sans)]">
          <span>{date}</span>
          <span className="ml-[18px] list-disc" style={{ display: 'list-item' }}>
            {readTime}
          </span>
        </div>
      </div>
    </div>
  );
}
