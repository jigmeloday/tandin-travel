'use client';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSlide } from '@/lib/types';

interface SliderComponentProps {
  slides?: HeroSlide[];
}

export default function SliderComponent({ slides = [] }: SliderComponentProps) {
  if (!slides || slides.length === 0) return null;

  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      effect='fade'
      pagination={{ clickable: true }}
      spaceBetween={50}
      speed={1000}
      autoplay={{
        delay: 3000, // 3 seconds
        disableOnInteraction: false, // keep autoplay even after user interacts
      }}
      slidesPerView={1}
      className="w-full h-[70vh]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="w-full h-full relative flex items-center justify-end px-[32px]"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Slide content */}
            <div className="relative bg-white text-black w-full lg:max-w-[32%] p-4 shadow-lg h-[94%]">
              <div className="border-t-4 border-red-700 mb-4" />
              <p className="uppercase text-sm font-bold text-[24px]">{slide.subtitle}</p>
              <h3 className="my-4">{slide.title}</h3>
              <p className="text-gray-700 mb-6 text-[14px] lg:text-[16px]">
                {slide.description}
              </p>
              <Link href='/contact-us' className="uppercase text-sm font-bold border-b-2 border-red-700 inline-block text-[16px]">
                {slide.cta}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
