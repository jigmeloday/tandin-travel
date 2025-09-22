import BestSelling from '@/components/landing-component/best-selling';
import HeroSwapper from '@/components/landing-component/hero-swapper';
import SliderComponent from '@/components/landing-component/slider';
import Image from 'next/image';

export default function Home() {
  const ImageBox = [
    { id: 1, image: '/images/dummy/img6.jpg', label: 'BHUTAN IN THE CLOUD' },
    {
      id: 2,
      image: '/images/dummy/img5.jpg',
      label: 'BHUTAN THROUGH THE LENS',
    },
    { id: 3, image: '/images/dummy/img3.jpg', label: 'CULINARY TAPESTRY' },
    { id: 4, image: '/images/dummy/img11.jpg', label: 'RIVER RAFTING' },
    { id: 5, image: '/images/dummy/img2.jpg', label: 'EDUCATION TOUR' },
    { id: 6, image: '/images/dummy/img7.jpg', label: 'FUTURE TRAVEL' },
  ];
  return (
    <main>
      <section className="h-screen w-full overflow-hidden">
        <HeroSwapper />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>Where Nature Meets Nirvana</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-[18px] lg:text-[32px] text-center my-[24px]">
              Every journey is crafted entirely around you, blending seamless
              planning with rare, meaningful encounters. Each experience unfolds
              with thoughtful detail—from the first welcome to the quiet moments
              in nature—creating memories that linger long after you return home
              and leaving a gentle, positive imprint on the places you visit.
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold">
              EVERY JOURNEY TELLS A STORY – FIND THE ONE THAT’S YOURS
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>
      <section className="px-[32px] mb-[142px]">
        <div className="grid lg:grid-cols-3 gap-4 w-full mb-5">
          {[
            {
              id: 1,
              img: 'img1',
              title: 'BESPOKE JOURNEYS',
              subtitle: '(Your story, perfectly tailored)',
            },
            {
              id: 2,
              img: 'img2',
              title: 'EXQUISITE STAYS',
              subtitle: '(Where elegance feels effortless) ',
            },
            {
              id: 3,
              img: 'img3',
              title: 'CULTURE & WELLNESS',
              subtitle: '(Revive, connect, and awaken)',
            },
          ].map(({ img, title, subtitle }, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-square text-center overflow-hidden group cursor-pointer"
            >
              <Image
                src={`/images/dummy/${img}.jpg`}
                alt="img"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
                <h4
                  className="relative inline-block text-white after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/80 after:transition-all after:duration-300 after:ease-out group-hover:after:left-0 group-hover:after:w-full"
                  >
                  {title}
                </h4>
                <span className="text-[16px] lg:text-[18px] text-white">
                  {subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-center my-[42px]">
        <h1>
          Flagship Signature Journey
        </h1>
        <BestSelling />
      </section>
      <section className="flex flex-col justify-center items-center text-center my-[42px] px-[16px] lg:px-[32px] scrollbar-hide">
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
        <h1>
          From Dream to Departure
        </h1>
        <p>
          Every remarkable journey begins with a single step. Our simple,
          seamless process ensures your Bhutan experience is perfectly tailored,
          effortless, and unforgettable—from first inquiry to the moment you
          depart.
        </p>
        <div className="flex flex-col lg:flex-row my-[40px] gap-8">
          {[
            {id: 1, title: 'Make an Enquiry', description: 'Submit your travel request online or by phone—let us know your dreams, preferences, and travel dates.'},
            {id: 2, title: 'Speak to an Expert', description: 'Connect with your dedicated Travel Specialist to discuss your vision, fine-tune details, and craft your personalized itinerary.'},
            {id: 3, title: 'Receive a Quote', description: 'We design your bespoke holiday and provide a detailed quote, ensuring every experience meets your expectations.'},
            {id: 4, title: 'Book Your Trip', description: 'Once everything is perfectly tailored to your wishes, we confirm your booking and prepare you for an unforgettable journey.'},
          ].map(({id, title, description }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center"
            >
              <div className="size-[80px] rounded-full bg-black"></div>
              <p className="mt-4 text-[24px] text-primary">
                0{id}. {title}
              </p>
              <div className="w-[180px]">
                <p className="text-[18px]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="px-[24px] py-[12px] bg-primary text-white text-2xl">
          ENQUIRE NOW
        </button>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>
      <section className="px-[16px] lg:px-[32px] my-[42px]">
        <div className="flex flex-col lg:flex-row w-full my-[40px] h-[550px]">
          <div className="lg:flex-3">
            <Image
              src="/images/slide.jpg"
              alt="img"
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between flex-1 px-[24px] py-[42px] text-white bg-black">
            <div>
              <span className="font-extrabold">WOMEN ONLY TOUR</span>
              <h2 className="mt-[32px] mb-[12px] font-extrabold text-[24px] lg:text-[42px] text-primary">
                HER BHUTAN, HER STORY
              </h2>
              <span className="text-[18px] lg:text-[24px] font-thin">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              </span>
            </div>
            <div className="bg-primary w-fit px-[16px] py-[8px] cursor-pointer">
              VIEW DETAILS
            </div>
          </div>
        </div>
        <div className="space-y-[32px]">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="border w-full lg:flex-[1] flex flex-col">
              <div className="h-[70vh]">
                <Image
                  src="/images/dummy/img1.jpg"
                  alt="img"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-black text-white p-5 flex flex-col flex-1">
                <p className="font-extrabold">WOMEN ONLY TOUR</p>
                <h3 className="text-2xl lg:text-3xl font-extrabold">
                  Her Bhutan, Her Story
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <button className="py-2 px-4 bg-primary mt-6 w-fit">
                  VIEW DETAILS
                </button>
              </div>
            </div>
            <div className="border w-full lg:flex-[2] flex flex-col">
              <div className="h-[70vh]">
                <Image
                  src="/images/dummy/img2.jpg"
                  alt="img"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-black text-white p-5 flex flex-col flex-1">
                <p className="font-extrabold">WOMEN ONLY TOUR</p>
                <h3 className="text-2xl lg:text-4xl font-extrabold leading-snug">
                  Her Bhutan, <br /> Her Story
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <button className="py-2 px-4 bg-primary mt-6 w-fit">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="border w-full lg:flex-[2] flex flex-col">
              <div className="h-[70vh]">
                <Image
                  src="/images/dummy/img1.jpg"
                  alt="img"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-black text-white p-5 flex flex-col flex-1">
                <p className="font-extrabold">WOMEN ONLY TOUR</p>
                <h3 className="text-2xl lg:text-3xl font-extrabold">
                  Her Bhutan, Her Story
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <button className="py-2 px-4 bg-primary mt-6 w-fit">
                  VIEW DETAILS
                </button>
              </div>
            </div>
            <div className="border w-full lg:flex-[1] flex flex-col">
              <div className="h-[70vh]">
                <Image
                  src="/images/dummy/img2.jpg"
                  alt="img"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-black text-white p-5 flex flex-col flex-1">
                <p className="font-extrabold">WOMEN ONLY TOUR</p>
                <h3 className="text-2xl lg:text-4xl font-extrabold leading-snug">
                  Her Bhutan, <br /> Her Story
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <button className="py-2 px-4 bg-primary mt-6 w-fit">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[80vh] hidden lg:block">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/slide.jpg')",
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px]">
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[780px]">
            <h1>
              We don’t just promise—we deliver every detail
            </h1>
          </div>
          <div className="lg:w-[900px]">
            <p className="text-[18px] lg:text-[32px] text-center my-[24px]">
              Every adventure is led by experts who know the land intimately,
              granting access to rare moments and authentic encounters. Here,
              each step creates lasting memories, and every journey deepens your
              connection to this extraordinary kingdom.
            </p>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>
      <section className="grid lg:grid-cols-3 px-[16px] lg:px-[32px] gap-[8px] lg:gap-[8px]">
        {ImageBox.map(({ id, image, label }) => (
          <div
            key={id}
            className="relative border aspect-square overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <Image
              src={image}
              alt="image"
              height={500}
              width={500}
              className="object-cover h-full w-full"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 hover:bg-black/60 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
              <div className="border-b-2 border-transparent group-hover:border-primary transition-all duration-300">
                <span className="text-white text-lg font-bold">{label}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="my-[42px] px-[16px] lg:px-[32px]">
        <SliderComponent />
      </section>
    </main>
  );
}
