'use client';

import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';

const categories = [
  'Category 01',
  'Category 02',
  'Category 03',
  'Category 04',
  'Category 05',
];

const blogPosts = [
  {
    id: 1,
    image: '/assets/blog/blog-image-1.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.',
    author: 'Ray Austin',
    avatar: '/assets/blog/author-avatar.png',
    date: '12 August 2024',
    readTime: '4 min read',
  },
  {
    id: 2,
    image: '/assets/blog/blog-image-2.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.',
    author: 'Ray Austin',
    avatar: '/assets/blog/author-avatar.png',
    date: '12 August 2024',
    readTime: '4 min read',
  },
  {
    id: 3,
    image: '/assets/blog/blog-image-3.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.',
    author: 'Ray Austin',
    avatar: '/assets/blog/author-avatar.png',
    date: '12 August 2024',
    readTime: '4 min read',
  },
  {
    id: 4,
    image: '/assets/blog/blog-image-1.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.',
    author: 'Ray Austin',
    avatar: '/assets/blog/author-avatar.png',
    date: '12 August 2024',
    readTime: '4 min read',
  },
  {
    id: 5,
    image: '/assets/blog/blog-image-2.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.',
    author: 'Ray Austin',
    avatar: '/assets/blog/author-avatar.png',
    date: '12 August 2024',
    readTime: '4 min read',
  },
  {
    id: 6,
    image: '/assets/blog/blog-image-3.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur. Vitae rhoncus pellentesque elementum risus.',
    author: 'Ray Austin',
    avatar: '/assets/blog/author-avatar.png',
    date: '12 August 2024',
    readTime: '4 min read',
  },
];

export default function BlogsInsightsPage() {
  const [activeCategory, setActiveCategory] = useState('Category 02');

  return (
    <div className="bg-white w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px] min-h-[400px] sm:min-h-[480px] md:min-h-[520px] xl:h-[560px] flex items-center justify-between overflow-hidden">
        {/* Background pattern - positioned absolutely at the back */}
        <div className="absolute inset-[-46.2%_-1.53%_-46.36%_-1.53%] pointer-events-none opacity-50 md:opacity-100">
          <Image
            src="/assets/blogs-insights/union-pattern.svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Left content */}
        <div className="relative z-10 w-full lg:w-[759px] flex flex-col gap-3 sm:gap-4">
          {/* Pill label */}
          <div className="inline-flex items-center px-3 sm:px-4 md:px-[15px] py-[5px] sm:py-[6px] md:py-[7px] rounded-full bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.15)] w-fit">
            <span className="text-[#ED6B52] text-[10px] sm:text-[11px] md:text-[12px] font-normal tracking-[0.8px] sm:tracking-[0.96px] uppercase">
              BLOGS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold leading-[1.2] tracking-[-1.5px] md:tracking-[-2px] text-[#222]">
            Our Latest Blogs & Resources
          </h1>
        </div>

        {/* Right decorative graphics - hidden on mobile/tablet */}
        <div className="hidden xl:block relative z-10 shrink-0">
          <div className="relative w-[557.393px] h-[271px]">
            {/* Group 109 - back layer */}
            <div className="absolute top-[41px] left-0 w-[345.157px] h-[201px]">
              <Image
                src="/assets/blogs-insights/group-109.svg"
                alt=""
                fill
                className="object-contain"
                sizes="345px"
              />
            </div>
            {/* Group 111 - front layer */}
            <div className="absolute top-0 left-[155.46px] w-[401.933px] h-[271px]">
              <Image
                src="/assets/blogs-insights/group-111.svg"
                alt=""
                fill
                className="object-contain"
                sizes="402px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[100px]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 items-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  flex items-center justify-center gap-2 pl-5 pr-8 sm:pl-6 sm:pr-9 md:pl-7 md:pr-10 py-3 sm:py-3.5 md:py-4 rounded-full text-[14px] sm:text-[15px] md:text-[16px] font-bold transition-all duration-300 whitespace-nowrap
                  ${
                    activeCategory === category
                      ? 'bg-[#F76739] text-white shadow-[0px_4px_4px_rgba(247,103,57,0.2)]'
                      : 'border border-[#ED6B52] text-[#ED6B52]'
                  }
                `}
              >
                <span>•</span>
                <span>{category}</span>
              </button>
            ))}
          </div>

          {/* Blog Cards Grid */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            {/* First row - responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {blogPosts.slice(0, 3).map((post, index) => (
                <BlogCard
                  key={post.id}
                  {...post}
                  featured={index === 0}
                />
              ))}
            </div>

            {/* Second row - responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {blogPosts.slice(3, 6).map((post) => (
                <BlogCard
                  key={post.id}
                  {...post}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
