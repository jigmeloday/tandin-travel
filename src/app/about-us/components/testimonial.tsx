'use client';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function Testimonial() {
  const slides = [
    {
      id:1,
      title: 'Robb Report',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      date: 'April 2020'
    },
     {
      id:2,
      title: 'Forbes',
      description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: 'May 2019'
    }
  ]
  return(
    <div className='flex my-[32px]'>
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
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className='flex flex-col items-center justify-center py-[42px]'>
            <h1 className='text-black'>{slide.title}</h1>
            <p className='text-center text-[20px] font-bold text-black/70'>{slide.description}</p>
            <p className='font-bold mt-[12px]'>{slide.date}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default Testimonial;