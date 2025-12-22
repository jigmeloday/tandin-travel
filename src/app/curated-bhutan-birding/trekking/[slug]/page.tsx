import LetsTalk from '@/components/shared/let-talk';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import SideSelling from '../../components/slider';

export default function Page() {
  return (
    <main>
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden mb-[90px]">
        <Image
          src="/images/dummy/img5.jpg"
          alt="Bespoke Journey"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">
            Curated Adventure <br />
            Multi-day Trekking & Exploration
          </h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>Gangkar Puensum Exploratory Trek</h1>
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
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>
      <section className="flex items-center justify-center px-[16px] lg:px-[32px] mb-[90px] gap-2">
        <div className="flex-1 h-[362px] w-[50%]">
          <SideSelling />
        </div>
        <div className="flex-1  space-y-2">
          <div className="flex gap-2">
            <div className="flex-2 border p-4 bg-primary">
              <h3 className="text-black">Best Season</h3>
              <p className="text-white font-medium">
                March to May and September to October are the best seasons to
                visit Bhutan, offering ideal weather, vibrant landscapes, and
                memorable experiences.
              </p>
            </div>
            <div className="flex-1 border p-4 bg-primary text-center">
              <h3 className="text-black">Alt.m</h3>
              <p className="text-white font-medium">High: 4600m</p>
              <p className="text-white font-medium">Low: 1350m</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 border bg-primary py-6 px-4 text-center">
              <h3 className="text-black">On Trek</h3>
              <p className="text-white font-medium">15 Days on Trek</p>
            </div>
            <div className="flex-1 border bg-primary py-6 px-4 text-center">
              <h3 className="text-black">Grade</h3>
              <p className="text-white font-medium">Strenous</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <h1 className="text-center">Essential Information for the Trek</h1>
        <p className="lg:px-[240px] text-center font-medium">
          The Gangkar puensum Trek is one of Bhutan’s most legendary
          high-altitude adventures. To help you prepare, here are the key things
          every traveler must know before embarking on this once-in-a-lifetime
          journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Link
              href={`/curated-bhutan-birding/trekking/${item}`}
              key={item}
              className="w-full border"
            >
              <div className="h-[400px]">
                <Image
                  src="/images/dummy/img3.jpg"
                  height={500}
                  width={500}
                  className="h-full w-full object-cover"
                  alt={'img'}
                />
              </div>
              <div className="bg-primary p-4 lg:p-[24px] flex flex-col items-center justify-center">
                <h2 className="text-white text-center">Gangkar Puensum Trek</h2>
                <p className="text-center font-medium lg:px-[46px] my-6">
                  Marvel at Bhutan’s towering peaks, emerald valleys, and sacred
                  monasteries from the comfort of a spacious, private Marvel at
                  Bhutan’s towering peaks, emerald valleys, and sacred
                  monasteries from the comfort of a spacious, private{' '}
                </p>
                <Button className="bg-black rounded-none text-primary font-bold hover:bg-black/60">
                  View Details
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="h-[84vh]">
          <LetsTalk
            images="/images/dummy/img2.jpg"
            description="For decades, our team has been crafting journeys that go beyond the
                        ordinary. Share your dream destination and your passions with us, and
                        we’ll design a one-of-a-kind adventure that’s truly yours—a journey
                        you’ll remember for a lifetime."
          />
        </div>
      </section>
      <section className="relative w-full h-[80vh] hidden lg:block mb-[90px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/slide.jpg')",
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
      </section>
      <section className="flex flex-col lg:flex-row px-[16px] lg:px-[32px] gap-2 mb-[90px]">
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
      <section className="flex flex-col px-[16px] lg:px-[32px] items-center justify-center gap-2 mb-[90px]">
        <h2>Next-Level Adventures & More</h2>
        <p className="my-[24px] text-center px-[142px]">
          Continue your exploration with our other related adventures, each
          crafted to showcase Bhutan’s rugged beauty, cultural depth, and
          pristine wilderness—perfect for trekkers seeking powerful experiences,
          breathtaking landscapes, and meaningful moments beyond the main
          journey.
        </p>
        <div className="grid grid-cols-3 gap-2 w-full">
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-full">
              <div className="w-full border h-[400px]">Image</div>
              <div className="p-[24px] bg-primary text-center">
                <h3 className="text-white">Gangkar Puensum Trek</h3>
                <p className='my-4'>
                  Marvel at Bhutan’s towering peaks, emerald valleys, and sacred
                  monasteries from the comfort of a spacious, private Marvel at
                  Bhutan’s towering peaks, emerald valleys, and sacred
                  monasteries from the comfort of a spacious, private
                </p>
                <Button className='bg-black rounded-none text-primary font-bold'>View Details</Button>
              </div>
            </div>
          ))}
        </div>
         <div className="grid grid-cols-2 gap-2 w-full mt-2">
          {[1, 2].map((item) => (
            <div key={item} className="w-full">
              <div className="w-full border h-[540px]">hello</div>
              <div className="p-[24px] bg-primary text-center">
                <h3 className="text-white">Gangkar Puensum Trek</h3>
                <p className='my-4'>
                  Marvel at Bhutan’s towering peaks, emerald valleys, and sacred
                  monasteries from the comfort of a spacious, private Marvel at
                  Bhutan’s towering peaks, emerald valleys, and sacred
                  monasteries from the comfort of a spacious, private
                </p>
                <Button className='bg-black rounded-none text-primary font-bold'>View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
