'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

function BestSelling() {
  const tours = [
    {
      id: 1,
      title: "HER BHUTAN, HER STORY",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      category: "WOMEN ONLY TOUR",
      image: "/images/dummy/img5.jpg"
    },
    {
      id: 2,
      title: "CULTURAL JOURNEY",
      description: "Explore the rich cultural heritage of the region.",
      category: "CULTURAL TOUR",
      image: "/images/dummy/img6.jpg"
    },
    {
      id: 3,
      title: "ADVENTURE EXPEDITION",
      description: "Thrilling adventures for the brave at heart.",
      category: "ADVENTURE TOUR",
      image: "/images/dummy/img7.jpg"
    },
    {
      id: 4,
      title: "NATURE RETREAT",
      description: "Connect with nature in its purest form.",
      category: "NATURE TOUR",
      image: "/images/dummy/img8.jpg"
    },
    {
      id: 5,
      title: "SPIRITUAL PILGRIMAGE",
      description: "A journey of self-discovery and enlightenment.",
      category: "SPIRITUAL TOUR",
      image: "/images/dummy/img9.jpg"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden my-8 px-4">      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
         pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        loop={true}
        
        className="w-full"
      >
        {tours.map((tour) => (
          <SwiperSlide
           key={tour.id}>
            <div className="flex-shrink-0 w-full h-[300px] lg:h-[600px] border-l-8 border-primary overflow-hidden group">
              {/* Card container */}
              <div className="flex flex-col lg:flex-row h-full w-full bg-black transition-transform duration-300">
                {/* Image section */}
                <div className="w-full lg:w-[60%] h-64 lg:h-full relative">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                  {/* Optional overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Text content */}
                <div className="flex flex-col justify-between flex-1 px-4 sm:px-6 py-4 sm:py-6 text-white bg-black">
                  <div className="flex flex-col items-start text-start">
                    <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white">
                      {tour.category}
                    </span>
                    <h2 className="mt-2 sm:mt-4 mb-1 sm:mb-2 font-extrabold text-lg sm:text-2xl lg:text-3xl text-primary">
                      {tour.title}
                    </h2>
                    <p className="text-sm sm:text-[16px] lg:text-[18px] font-light text-gray-200">
                      {tour.description}
                    </p>
                  </div>

                  {/* Call to action */}
                  <div className="mt-2 sm:mt-4 self-start">
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 sm:px-6 py-2 transition-colors duration-200 text-sm sm:text-base">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>      
    </div>
  );
}

export default BestSelling;