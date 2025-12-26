'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function TripSlider({ images }: { images: string[] }) {
  const swiperRef = useRef<any>(null);

  const updateScales = () => {
    if (!swiperRef.current) return;
    const slides = swiperRef.current.slides;
    const activeIndex = swiperRef.current.activeIndex;

    slides?.forEach((slide: HTMLElement, i: number) => {
      // Determine relative position in the 4-slide viewport
      const index = (i - activeIndex + slides.length) % slides.length;
      // small-big-big-small pattern
      if (index === 0 || index === 3) {
        slide.style.transform = 'scaleY(0.7)';
      } else {
        slide.style.transform = 'scaleY(1)';
      }
      slide.style.transition = 'transform 0.3s';
    });
  };

  useEffect(() => {
    updateScales();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold text-center text-[#7a0c21]">
        Image Gallery
      </h2>
      <p className="text-xl mt-1 mb-10 text-center">Recent Trip Image</p>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={updateScales}
        modules={[Autoplay]}
        slidesPerView={4} // exactly 4 slides visible
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <div className="w-[340px] h-[450px]">
              <Image
                src={img}
                alt="slider"
                width={300}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
