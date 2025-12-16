import BestSelling from '@/components/landing-component/best-selling';
import HeroSwapper from '@/components/landing-component/hero-swapper';
import SliderComponent from '@/components/landing-component/slider';
import ImageBox from '@/components/shared/image-box';
import LetsTalk from '@/components/shared/let-talk';
import { IMAGE_BOX, TOUR_TYPE } from '@/lib/dummy-data/dummy-data';
import { Headphones, Mail, Plane, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="h-screen w-full overflow-hidden">
        <HeroSwapper />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>Where Nature Meets Nirvana</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-center my-[24px]">
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
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
      <section className="px-[32px] mb-[90px]">
        <div className="grid lg:grid-cols-3 lg:gap-2 gap-3 w-full mb-5">
          {TOUR_TYPE.map(({ img, title, subtitle, link }, idx) => (
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
                <span className="text-[14px] lg:text-[16px] text-white">
                  {subtitle}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-center mb-[90px]">
        <h1 className="mb-8">Flagship Signature Journey</h1>
        <BestSelling />
      </section>
      <section className="flex flex-col justify-center items-center text-center px-[16px] lg:px-[32px] scrollbar-hide mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <h1>From Dream to Departure</h1>
        <div className="md:w-[840px]">
          <p>
            Every remarkable journey begins with a single step. Our simple,
            seamless process ensures your Bhutan experience is perfectly
            tailored, effortless, and unforgettable—from first inquiry to the
            moment you depart.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 items-start justify-center  my-[40px] gap-4">
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
                <div className="flex items-center justify-center size-[60px] rounded-full bg-primary">
                  <IconCoponent className="text-white" />
                </div>
                <p className="mt-4 text-[16px] text-primary font-bold">
                  0{id}. {title}
                </p>
                <div className="md:w-[300px]">
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="px-[24px] py-[12px] bg-primary text-white text-2xl cursor-pointer">
          ENQUIRE NOW
        </button>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
      <section className="px-[16px] lg:px-[32px] mb-[90px]">
        <div className="flex flex-col lg:flex-row w-full mt-[40px] mb-2 h-[550px]">
          <div className="lg:flex-3">
            <Image
              src="/images/slide.jpg"
              alt="img"
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between flex-1 px-[24px] py-[42px] text-white bg-[#111820]">
            <div>
              <span className="font-extrabold text-[18px]">Silent Monks</span>
              <h3>Whisper, wonder, wander</h3>
              <span className="text-[14px] lg:text-[16px]">
                Step into Bhutan’s serene sanctuaries, where quiet moments,
                mindful rituals, and tranquil landscapes invite reflection,
                wonder, and a gentle escape from the everyday.
              </span>
            </div>
            <Link
              href={`/packages/${12}`}
              className="bg-primary w-fit px-[16px] py-[8px] cursor-pointer"
            >
              VIEW DETAILS
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col lg:flex-row gap-2 items-stretch">
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
              <div className="bg-[#111820] text-white p-5 flex flex-col flex-1">
                <p className="font-extrabold text-[18px]">Family Legacy Tour</p>
                <h3>Together, every step</h3>
                <p className="text-[16px]">
                  Forge unforgettable memories exploring Bhutan’s culture,
                  nature, and traditions together, crafting shared experiences
                  that delight every generation in elegance and comfort.
                </p>
                <Link
                  href={`/packages/${13}`}
                  className="py-2 px-4 bg-primary mt-6 w-fit"
                >
                  VIEW DETAILS
                </Link>
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
              <div className="bg-[#111820] text-white p-5 flex flex-col flex-1">
                <p className="font-extrabold text-[18px]">Curated Adventure</p>
                <h3>Thrills, tailored just for you</h3>
                <p className="text-[16px]">
                  Tailored for the discerning thrill-seeker, this journey blends
                  Bhutan’s majestic landscapes, hidden trails, and exhilarating
                  activities into a perfectly crafted adventure.
                </p>
                <Link
                  href={`/packages/${14}`}
                  className="py-2 px-4 bg-primary mt-6 w-fit"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 items-stretch">
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
              <div className="bg-[#111820] text-white p-5 flex flex-col flex-1">
                <p className="font-extrabold text-[18px]">Wildside Bhutan</p>
                <h3 className="text-2xl lg:text-3xl font-extrabold">
                  Go wild, go Bhutan
                </h3>
                <p className="text-[16px]">
                  Venture into Bhutan’s untamed corners—remote valleys, pristine
                  forests, and rare wildlife—where luxury meets the exhilaration
                  of the kingdom’s wild heart.
                </p>
                <Link
                  href={`/packages/${15}`}
                  className="py-2 px-4 bg-primary mt-6 w-fit"
                >
                  VIEW DETAILS
                </Link>
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
              <div className="bg-[#111820] text-white p-5 flex flex-col flex-1">
                <p className="font-extrabold text-[18px]">WOMEN ONLY TOUR</p>
                <h3 className="leading-6 my-[12px]">
                  Her Bhutan, <br /> Her Story
                </h3>
                <p className="text-[16px]">
                  Celebrate female travelers with a journey of empowerment,
                  connecting with Bhutanese women, cultural treasures, and
                  shared experiences in refined comfort and style.
                </p>
                <Link
                  href={`/packages/${16}`}
                  className="py-2 px-4 bg-primary mt-6 w-fit"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[80vh] hidden lg:block mb-[90px] border">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/slide.jpg')",
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Text content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
          <h1 className='text-white'>Titile</h1>
          <p className='px-[112px] text-center font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[780px]">
            <h1>We don’t just promise—we deliver every detail</h1>
          </div>
          <div className="lg:w-[900px]">
            <p className="text-[14px] lg:text-[16px] text-center my-[24px]">
              Every adventure is led by experts who know the land intimately,
              granting access to rare moments and authentic encounters. Here,
              each step creates lasting memories, and every journey deepens your
              connection to this extraordinary kingdom.
            </p>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
      <section className="grid lg:grid-cols-3 px-[16px] lg:px-[32px] gap-2 mb-[90px]">
        {IMAGE_BOX.filter((item) => !item.best_sell && !item.other).map(
          ({ id, image, title, subtitle }) => (
            <ImageBox
              id={id}
              key={id}
              image={image}
              label={title || ''}
              subtitle={subtitle}
            />
          )
        )}
      </section>
      <section className="flex flex-col lg:flex-row px-[16px] lg:px-[32px] mb-[90px] gap-2">
        {/* LEFT IMAGE SECTION */}
        <div className="w-full lg:w-[70%] min-h-[40vh] lg:min-h-[80vh] bg-black/70">
          <Image
            src="/images/dummy/img4.jpg"
            alt="img"
            height={1000}
            width={1000}
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full lg:w-[34.5%] bg-[#111820] p-[24px] flex flex-col justify-between">
          <div>
            <h2>TRAVEL WITH PURPOSE</h2>

            <p className="text-white text-[16px] mt-[32px]">
              At Born Explorer, we believe every journey should enrich both
              traveler and destination. By embracing sustainable practices,
              respecting local cultures, and supporting communities, we ensure
              your Bhutan experience leaves a positive footprint.
            </p>

            <p className="text-white text-[16px] mt-[32px]">
              Travel consciously, discover authentically, and create memories
              that honor the land, its people, and its timeless traditions.
            </p>
          </div>

          <div className="mt-[32px] flex">
            <Link
              className="bg-primary py-2 px-3 text-[20px] font-bold text-white"
              href="/travel-purpose"
            >
              VIEW DETAILS
            </Link>
          </div>
        </div>
      </section>
      <section className="my-[42px] px-[16px] lg:px-[32px]">
        <SliderComponent />
      </section>
      <section className="flex flex-col items-center justify-center my-[90px] lg:px-[32px] px-[16px]">
        <h1 className="text-3xl font-bold">Travel Blogs</h1>
        <p className="font-bold mt-2">
          FRESHLY DISCOVERED, EXCLUSIVELY FOR YOU
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-2 mt-[40px]">
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
      </section>
      <section className="mb-[90px]">
        <div className="h-[60vh]">
          <LetsTalk
            images="/images/dummy/img1.jpg"
            description="For decades, our team has been crafting journeys that go beyond the
          ordinary. Share your dream destination and your passions with us, and
          we’ll design a one-of-a-kind adventure that’s truly yours—a journey
          you’ll remember for a lifetime."
          />
        </div>
      </section>
    </main>
  );
}
