import LetsTalk from '@/components/shared/let-talk';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import SideSelling from './components/slider';

export default function Page() {
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
          <h1 className="text-white text-center px-4">
            Curated Adventure <br />
            Multi-day Trekking & Exploration
          </h1>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-[24px] px-[16px] lg:px-[32px] mt-[90px]">
        <div className="flex-2">
          <h1 className="leading-[52px]">
            Journey Through Nature Culture and Serenity in Every Step
          </h1>
          <p className="my-[24px] font-medium">
            Every journey is crafted entirely around you, blending seamless
            planning with rare, meaningful encounters. Each experience unfolds
            with thoughtful detail—from the first welcome to the quiet moments
            in nature—creating memories that linger long after you return home
            and leaving a gentle, positive imprint on the places you visit.{' '}
          </p>
          <Button className="rounded-none">SPEAK TO AN EXPERT </Button>
        </div>
        <div className="flex-1 w-full !h-[400px] lg:w-[422px] lg:h-[500px]">
          <SideSelling />
        </div>
      </section>
      <section className="gap-[50px] px-[16px] lg:px-[32px] mt-[90px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`aspect-square border flex flex-col items-center justify-center px-[42px] text-center ${
                item % 2 !== 0 ? 'bg-primary ' : 'bg-black text-white'
              }`}
            >
              <h1
                className={`leading-[52px] ${
                  item % 2 !== 0 ? 'text-black' : 'text-white'
                }`}
              >
                A Bird’s-Eye View of Majesty
              </h1>
              <div
                className={`border w-[50%] my-[24px] ${
                  item % 2 !== 0 ? 'border-black' : 'border-white'
                }`}
              />
              <p className="font-medium">
                Marvel at Bhutan’s towering peaks, emerald valleys, and sacred
                monasteries from the comfort of a spacious, private
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-2">
          {[1, 2, 3].map((item) =>
            item <= 2 ? (
              <div key={item} className="relative lg:aspect-square border">
                <Image
                  src="/images/slide.jpg"
                  alt="bg"
                  height={500}
                  width={500}
                  className="h-full w-full object-cover opacity-[0.8]"
                />
                <div className="absolute bottom-0 px-[24px] text-white">
                  <h3>A Bird’s-Eye View of Majesty</h3>
                  <p>
                    Marvel at Bhutan’s towering peaks, emerald valleys, and
                    sacred monasteries from the comfort of a spacious, private{' '}
                  </p>
                </div>
              </div>
            ) : (
              <div
                className="flex flex-col items-center justify-center lg:px-4 "
                key={item}
              >
                <h1 className="leading-[52px]">
                  Journey Through Nature Culture and
                </h1>
                <p className="my-6 text-[18px] font-medium">
                  Every journey is crafted entirely around you, blending
                  seamless planning with rare, meaningful encounters. Each
                  experience unfolds with thoughtful detail—from the first
                  welcome to the quiet moments in nature—creating memories that
                  linger long after you return home and leaving a gentle,
                  positive imprint on the places you visit.
                </p>
              </div>
            )
          )}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mt-[90px]">
        <h1 className='text-center'>Getaways Crafted For You</h1>
        <p className="lg:px-[240px] text-center font-medium">
          Exclusive itineraries thoughtfully designed to immerse you in unique
          experiences, local culture, and unforgettable adventures, creating
          memories that last forever.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Link href={`/curated-bhutan-birding/trekking/${item}`} key={item} className="w-full border">
              <div className="h-[540px]">
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
                <p className='text-center font-medium lg:px-[46px] my-6'>
                  Marvel at Bhutan’s towering peaks, emerald valleys, and sacred
                  monasteries from the comfort of a spacious, private Marvel at
                  Bhutan’s towering peaks, emerald valleys, and sacred
                  monasteries from the comfort of a spacious, private{' '}
                </p>
                <Button className='bg-black rounded-none text-primary font-bold hover:bg-black/60'>View Details</Button>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col lg:flex-row px-[16px] lg:px-[32px] mt-[90px] gap-2">
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
      <section className="flex flex-col items-center justify-center my-[90px] px-[16px] lg:px-[32px]">
        <div className="h-[60vh]">
          <LetsTalk
            images="/images/dummy/img2.jpg"
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
