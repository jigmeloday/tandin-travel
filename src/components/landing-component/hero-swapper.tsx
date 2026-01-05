'use client';

import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSlide } from '@/lib/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface HeroSwapperProps {
  slides: HeroSlide[];
}

export default function HeroSwapper({ slides }: HeroSwapperProps) {

  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      pagination={{ clickable: true }}
      spaceBetween={10}
      speed={1500} // fade duration
      loop={true} // infinite loop
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      slidesPerView={1}
      className="w-full h-screen"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="w-full h-full relative flex items-center justify-center px-[32px]"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold mb-2">
            {slide.title}
          </h2>

        </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
