import BestSelling from '@/components/landing-component/best-selling';
import HeroSwapper from '@/components/landing-component/hero-swapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

function Page() {
  return (
    <main>
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden">
        <Image
          src="/images/dummy/img5.jpg"
          alt="Bespoke Journey"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">Her Bhutan, Her Story</h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-4 md:px-8 my-12 md:my-20">
        <div className="border-[0.5px] border-primary h-20 mb-10" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full md:w-[740px]">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Where Nature Meets Nirvana
            </h1>
          </div>
          <div className="w-full md:w-[920px]">
            <p className="text-[14px] md:text-[16px] my-6">
              Every journey is crafted entirely around you, blending seamless
              planning with rare, meaningful encounters. Each experience unfolds
              with thoughtful detail—from the first welcome to the quiet moments
              in nature—creating memories that linger long after you return home
              and leaving a gentle, positive imprint on the places you visit.{' '}
            </p>
          </div>
          <div className="md:min-w-[250px]">
            <span className="font-bold text-lg md:text-xl">
              EVERY JOURNEY TELLS A STORY – FIND THE ONE THAT’S YOURS
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-20 my-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 w-[60%] gap-3 justify-items-center">
          <div className="w-full bg-gray-100">
            <div className="bg-primary text-white px-[20px] text-center">
              <h4 className="text-white">WHEN</h4>
            </div>
            <div className="p-[20px] font-bold text-center">
              <p>February - June &</p>
              <p>September - November &</p>
            </div>
          </div>
          <div className="w-full bg-gray-100">
            <div className="bg-primary px-[20px] text-center">
              <h4 className="text-white">PRICE</h4>
            </div>
            <div className="p-[20px] font-bold text-center">
              <p>From £4,615pp excl. flights (based on 2 ppl sharing)</p>
            </div>
          </div>
          <div className="w-full bg-gray-100">
            <div className="bg-primary px-[20px] text-center">
              <h4 className="text-white">HOW LONG</h4>
            </div>
            <div className="p-[20px] font-bold text-center">
              <p>5 nights ideal length</p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-[50px]">
        <HeroSwapper />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px] gap-4">
        <div className="w-full py-[50px] bg-primary flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="md:w-[70%] px-[12px]">
            <h6 className="text-white">MAKE THIS ITINERARY YOURS</h6>
            <p className="text-[14px]  md:text-[16px] mt-[14px]">
              Each and every Born Explorer trip is tailored exactly to who you
              are and what you want to do So tell us about yourself and we’ll
              create something that’s entirely you.
            </p>
          </div>
          <div className="flex flex-col space-y-4 px-[12px]">
            <Button className="bg-black rounded-none text-white font-bold text-[24px] py-[24px]">
              {' '}
              ENQUIRE NOW
            </Button>
            <Button className="bg-black rounded-none text-white font-bold text-[24px] py-[24px]">
              DOWNLOAD INTNERARY
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px] gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className={`flex flex-col md:flex-row w-full justify-center md:space-x-2 ${
              item % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:h-[500px] aspect-square w-full">
              <Image
                src="/images/dummy/img1.jpg"
                alt=""
                className="object-cover h-full w-full"
                height={500}
                width={500}
              />
            </div>
            <div className="flex flex-col justify-center md:px-4 md:h-[500px] aspect-square w-full">
              <h1>Cultural Connection</h1>
              <p className="text-[14px] md:text-[16px]">
                Combine helicopter journeys with sustainable luxury lodges,
                curated local cuisine, and intimate cultural experiences for a
                fully bespoke Bhutanese exploration.
              </p>
              <p className="font-bold mt-4 italic text-[18px] text-primary">
                Where culture isn’t watched — it’s lived
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px] gap-4">
        <h2>Boutique Hotels</h2>
        <div className="my-[32px] flex flex-col md:flex-row gap-2 w-full">
          <div className="bg-primary flex-1 min-h-[520px] flex flex-col items-center justify-center">
            <h1 className="text-white">BESPOKE JOURNEYS</h1>
            <p className="text-[24px] font-bold">
              Your story, perfectly tailored
            </p>
          </div>
          <div className="bg-primary flex-1 min-h-[520px] flex flex-col items-center justify-center">
            <h1 className="text-white">ESQUISITE STAYS</h1>
            <p className="text-[24px] font-bold">
              Where elegance feels effortless
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button className="rounded-none bg-black text-[24px] py-8 px-[32px]">
            VIEW ALL
          </Button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-4 md:px-8 my-12 md:my-20">
        <div className="border-[0.5px] border-primary h-20 mb-10" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full md:w-[740px]">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Other Holidays
            </h1>
          </div>
          <div className="w-full md:w-[920px]">
            <p className="text-[14px] md:text-[16px] my-6">
              Every journey is crafted entirely around you, blending seamless
              planning with rare, meaningful encounters. Each experience unfolds
              with thoughtful detail—from the first welcome to the quiet moments
              in nature—creating memories that linger long after you return home
              and leaving a gentle, positive imprint on the places you visit.
            </p>
          </div>
          <div className="md:min-w-[250px]">
            <span className="font-bold text-lg md:text-xl">
              EVERY JOURNEY TELLS A STORY – FIND THE ONE THAT’S YOURS
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-20 my-10" />
      </section>
      <section className="flex flex-col items-center justify-center px-4 md:px-8 my-12 md:my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto md:max-w-[80%] gap-2">
        {
          [1,2,3].map((item) => (
             <div className="bg-gray-100" key={item}>
            <div className="bg-primary h-[240px]"></div>
            <div className="flex flex-col items-center justify-center p-[20px] text-center">
              <h4>Her Bhutan; Her Story</h4>
              <p className='mb-[18px] text-[18px]'>
                Combine helicopter journeys with sustainable luxury lodges,
                curated local cuisine, and intimate cultural experiences for a
                fully bespoke Bhutanese exploration.
              </p>
              <Button className='rounded-none bg-black text-[24px]'>View Details</Button>
            </div>
          </div>
          ))
        }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:max-w-[80%] gap-2 my-4">
        {
          [1,2].map((item) => (
             <div className="bg-gray-100" key={item}>
            <div className="bg-primary h-[340px]"></div>
            <div className="flex flex-col items-center justify-center p-[20px] text-center">
              <h4>Her Bhutan; Her Story</h4>
              <p className='text-[18px] mb-[18px]'>
                Combine helicopter journeys with sustainable luxury lodges,
                curated local cuisine, and intimate cultural experiences for a
                fully bespoke Bhutanese exploration.
              </p>
              <Button className='rounded-none bg-black text-[24px]'>View Details</Button>
            </div>
          </div>
          ))
        }
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-4 md:px-8 my-12 md:my-20">
        <BestSelling />
      </section>
      <section className="bg-[#111820] w-full p-[24px]">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-3">
            <h1>Let’s Talk</h1>
          </div>
          <div className="flex-2">
            <p className="text-white text-[20px]">
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
      </section>
    </main>
  );
}

export default Page;
