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
      description: "Discover Bhutan through inspiring women’s eyes—intimate stories, hidden traditions, and unique encounters that reveal a side of the kingdom rarely seen by travelers.",
      category: "WOMEN ONLY TOUR",
      image: "/images/dummy/img5.jpg"
    },
    {
      id: 2,
      title: "Bhutan Soul Walk",
      description: "Step into Bhutan’s serene landscapes and sacred corners, where every path inspires reflection, every view awakens wonder, and your soul leaves footprints of tranquility.",
      category: "A GENTLE JOURNEY",
      image: "/images/dummy/img6.jpg"
    },
    {
      id: 3,
      title: "Mysteries of Gangkar Puensum",
      description: "Venture where few have tread: mystical peaks, untouched valleys, and sacred secrets await in the shadow of Bhutan’s enigmatic Gangkar Puensum.",
      category: "ADVENTURE TOUR",
      image: "/images/dummy/img7.jpg"
    },
    {
      id: 4,
      title: "Tribal Ties: East to West",
      description: "Journey across Bhutan’s diverse lands, meeting vibrant tribes, witnessing age-old rituals, and connecting deeply with traditions that span the kingdom’s rich tapestry.",
      category: "NATURE TOUR",
      image: "/images/dummy/img8.jpg"
    },
    {
      id: 5,
      title: "Druk Path Awakening",
      description: "Awaken your senses on this iconic trek, where alpine lakes, misty valleys, and ancient monasteries invite awe, adventure, and spiritual reflection at every step.",
      category: "SPIRITUAL TOUR",
      image: "/images/dummy/img9.jpg"
    },
    {
      id: 6,
      title: "Sacred Symphony",
      description: "Feel Bhutan’s heartbeat through ritual, music, and heritage, where every moment resonates in harmony, crafting an unforgettable journey of culture, spirit, and discovery.",
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
                    <h4>
                      {tour.title}
                    </h4>
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