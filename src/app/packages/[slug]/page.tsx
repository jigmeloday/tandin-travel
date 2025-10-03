import ImageBox from '@/components/shared/image-box';
import { IMAGE_BOX } from '@/lib/dummy-data/dummy-data';
import Image from 'next/image';

function Page() {
  return (
    <main>
      <section className="h-screen w-full overflow-hidden">
        <Image
          src="/images/dummy/img5.jpg"
          alt="Bespoke Journey"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">Culture & Wellness</h1>
        </div>
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
      <section className="h-[600px] my-[50px]">
        <Image
          src="/images/dummy/img1.jpg"
          alt="img"
          height={700}
          width={700}
          className="h-full w-full object-cover"
        />
      </section>
      <section className="px-[32px]">
        <div className="bg-black w-full p-[24px]">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-3">
              <h1>
                Freedom and <br /> Independence
              </h1>
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
      <section className="grid lg:grid-cols-3 px-[16px] lg:px-[32px] gap-[8px] lg:gap-[8px] my-[24px] lg:my-[50px]">
        {IMAGE_BOX.map(({ id, image, label, subtitle }) => (
          <ImageBox key={id} image={image} label={label} subtitle={subtitle} />
        ))}
      </section>
    </main>
  );
}

export default Page;
