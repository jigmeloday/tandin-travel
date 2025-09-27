import BestSelling from '@/components/landing-component/best-selling';
import HeroSwapper from '@/components/landing-component/hero-swapper';
import SliderComponent from '@/components/landing-component/slider';
import { Headphones, Mail, Plane, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const ImageBox = [
    {
      id: 1,
      image: '/images/dummy/img6.jpg',
      label: 'BHUTAN IN THE CLOUD',
      subtitle: 'Above the ordinary',
    },
    {
      id: 2,
      image: '/images/dummy/img5.jpg',
      label: 'BHUTAN THROUGH THE LENS',
      subtitle: 'Capture the extraordinary',
    },
    {
      id: 3,
      image: '/images/dummy/img3.jpg',
      label: 'CULINARY TAPESTRY',
      subtitle: 'Savor the sublime',
    },
    {
      id: 4,
      image: '/images/dummy/img11.jpg',
      label: 'RIVER RAFTING',
      subtitle: 'Heritage in full color',
    },
    {
      id: 5,
      image: '/images/dummy/img2.jpg',
      label: 'EDUCATION TOUR',
      subtitle: 'Enrich your journey',
    },
    {
      id: 6,
      image: '/images/dummy/img7.jpg',
      label: 'FUTURE TRAVEL',
      subtitle: 'Bhutan, reimagined',
    },
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
              link: '/bespoke-journey',
            },
            {
              id: 2,
              img: 'img2',
              title: 'EXQUISITE STAYS',
              subtitle: '(Where elegance feels effortless) ',
              link: '/culture-wellness',
            },
            {
              id: 3,
              img: 'img3',
              title: 'CULTURE & WELLNESS',
              subtitle: '(Revive, connect, and awaken)',
              link: '/culture-wellness',
            },
          ].map(({ img, title, subtitle, link }, idx) => (
            <Link
              href={link}
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
                <h4 className="relative inline-block text-white after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/80 after:transition-all after:duration-300 after:ease-out group-hover:after:left-0 group-hover:after:w-full">
                  {title}
                </h4>
                <span className="text-[16px] lg:text-[18px] text-white">
                  {subtitle}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-center my-[42px]">
        <h1>Flagship Signature Journey</h1>
        <BestSelling />
      </section>
      <section className="flex flex-col justify-center items-center text-center my-[42px] px-[16px] lg:px-[32px] scrollbar-hide">
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
        <h1>From Dream to Departure</h1>
        <div className="w-[840px]">
          <p className="text-[20px]">
            Every remarkable journey begins with a single step. Our simple,
            seamless process ensures your Bhutan experience is perfectly
            tailored, effortless, and unforgettable—from first inquiry to the
            moment you depart.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center lg:flex-row my-[40px] gap-8">
          {[
            {
              id: 1,
              icon: Search,
              title: 'Make an Enquiry',
              description:
                'Submit your travel request online or by phone—let us know your dreams, preferences, and travel dates.',
            },
            {
              id: 2,
              icon: Headphones,
              title: 'Speak to an Expert',
              description:
                'Connect with your dedicated Travel Specialist to discuss your vision, fine-tune details, and craft your personalized itinerary.',
            },
            {
              id: 3,
              icon: Mail,
              title: 'Receive a Quote',
              description:
                'We design your bespoke holiday and provide a detailed quote, ensuring every experience meets your expectations.',
            },
            {
              id: 4,
              icon: Plane,
              title: 'Book Your Trip',
              description:
                'Once everything is perfectly tailored to your wishes, we confirm your booking and prepare you for an unforgettable journey.',
            },
          ].map(({ id, title, description, icon }) => {
            const IconCoponent = icon;
            return (
              <div
                key={id}
                className="flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center size-[80px] rounded-full bg-primary">
                  <IconCoponent className="text-white" />
                </div>
                <p className="mt-4 text-[24px] text-primary font-bold">
                  0{id}. {title}
                </p>
                <div className="w-[180px]">
                  <p className="text-[18px]">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="px-[24px] py-[12px] bg-primary text-white text-2xl cursor-pointer">
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
              <span className="font-extrabold text-[24px]">Silent Monks</span>
              <h3>Whisper, wonder, wander</h3>
              <span className="text-[18px]">
                Step into Bhutan’s serene sanctuaries, where quiet moments,
                mindful rituals, and tranquil landscapes invite reflection,
                wonder, and a gentle escape from the everyday.
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
                <p className="font-extrabold text-[24px]">Family Legacy Tour</p>
                <h3>Together, every step</h3>
                <p className="text-[18px]">
                  Forge unforgettable memories exploring Bhutan’s culture,
                  nature, and traditions together, crafting shared experiences
                  that delight every generation in elegance and comfort.
                </p>
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
                <p className="font-extrabold text-[24px]">Curated Adventure</p>
                <h3>Thrills, tailored just for you</h3>
                <p className="text-[18px]">
                  Tailored for the discerning thrill-seeker, this journey blends
                  Bhutan’s majestic landscapes, hidden trails, and exhilarating
                  activities into a perfectly crafted adventure.
                </p>
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
                <p className="font-extrabold text-[24px]">Wildside Bhutan</p>
                <h3 className="text-2xl lg:text-3xl font-extrabold">
                  Go wild, go Bhutan
                </h3>
                <p className="text-[18px]">
                  Venture into Bhutan’s untamed corners—remote valleys, pristine
                  forests, and rare wildlife—where luxury meets the exhilaration
                  of the kingdom’s wild heart.
                </p>
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
                <p className="font-extrabold text-[24px]">WOMEN ONLY TOUR</p>
                <h3>
                  Her Bhutan, <br /> Her Story
                </h3>
                <p className="text-[18px]">
                  Celebrate female travelers with a journey of empowerment,
                  connecting with Bhutanese women, cultural treasures, and
                  shared experiences in refined comfort and style.
                </p>
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
            <h1>We don’t just promise—we deliver every detail</h1>
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
        {ImageBox.map(({ id, image, label, subtitle }) => (
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
            <div className="absolute inset-0 bg-black/30 hover:bg-black/80 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
              <div className="text-center border-b-2 border-transparent group-hover:border-white transition-all duration-300">
                <span className="text-white text-[32px] font-bold">
                  {label}
                </span>
                <p className="text-primary font-bold text-[24px]">{subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="my-[42px] px-[16px] lg:px-[32px]">
        <SliderComponent />
      </section>
      <section className="flex flex-col items-center justify-center my-[80px] lg:px-[32px] px-[16px]">
        <h1 className="text-3xl font-bold">Moments from Bhutan (Blog Post)</h1>
        <p className="font-bold text-[18px] mt-2">
          FRESHLY DISCOVERED, EXCLUSIVELY FOR YOU
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-2 my-[40px]">
          {[
            {
              id: 1,
              image: '/images/dummy/img6.jpg',
              label: 'MONASTIC SERENITY',
              subtitle: 'Above the ordinary',
            },
            {
              id: 2,
              image: '/images/dummy/img5.jpg',
              label: 'FESTIVALS IN FULL COLOR',
              subtitle: 'Capture the extraordinary',
            },
            {
              id: 3,
              image: '/images/dummy/img3.jpg',
              label: 'HIDDEN WILDERNESS',
              subtitle: 'Savor the sublime',
            },
          ].map(({ id, image, label }) => (
            <div
              key={id}
              className="relative w-full aspect-square flex items-center justify-center overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
              <div className="relative text-center text-white">
                <h4 className="text-xl font-bold text-white relative inline-block after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary after:mx-auto after:transition-all after:duration-500 delay-75 group-hover:after:w-full">
                  {label}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black w-full p-[24px]">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-3">
              <h1>Let’s Talk</h1>
            </div>
            <div className="flex-2">
              <p className="text-white text-[20px] leading-relaxed">
                Combine helicopter journeys with sustainable luxury lodges,
                curated local cuisine, and intimate cultural experiences for a
                fully bespoke Bhutanese exploration.
              </p>
            </div>
          </div>
          <div
            className="w-full mt-[32px] h-[540px] flex items-center justify-center relative group cursor-pointer overflow-hidden"
            style={{
              backgroundImage: "url('/images/slide.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
            <h4 className="relative z-10 text-white inline-block after:content-[''] after:block after:h-[2px] after:w-0 after:bg-white after:mx-auto after:transition-all after:duration-300 group-hover:after:w-full">
              Connect Now – We’ll throw in enlightenment
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}
