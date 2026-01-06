'use client';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Testimonial as TestimonialType } from '@/lib/types';

interface TestimonialProps {
  testimonials: TestimonialType[];
}

function Testimonial({ testimonials }: TestimonialProps) {
  return (
    <div className="flex">
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
        className="w-full"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col items-center justify-center py-10 px-4 md:px-8">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">
                {testimonial.author}
              </h1>
              <p className="text-center text-base md:text-[14] lg:text-[16] font-bold text-black/70 mt-4">
                {testimonial.quote}
              </p>
              {testimonial.source && (
                <p className="font-bold mt-3 text-sm md:text-base">
                  {testimonial.source}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
