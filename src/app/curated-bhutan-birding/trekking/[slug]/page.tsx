import LetsTalk from '@/components/shared/let-talk';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import SideSelling from '../../components/slider';
import { getTrekBySlug, RECURRING_CONTENT, getAllTreks } from '@/lib/data';
import { notFound } from 'next/navigation';

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params as { slug: string };
  const trek = getTrekBySlug(slug);

  if (!trek) {
    notFound();
  }

  const allTreks = getAllTreks();
  const otherTreks = allTreks.filter(t => t.slug !== slug).slice(0, 5);
  return (
    <main>
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden mb-[90px]">
        <Image
          src={trek.image.src}
          alt={trek.image.alt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">
            {trek.title}
          </h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{trek.title}</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-center my-[24px]">
              {RECURRING_CONTENT.whereNatureMeetsNirvana.description}
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold uppercase">
              {RECURRING_CONTENT.whereNatureMeetsNirvana.tagline}
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center px-[16px] lg:px-[32px] mb-[90px] gap-2">
        <div className="flex-1 h-[362px] w-full md:w-[50%]">
          <SideSelling />
        </div>
        <div className="flex-1 w-full space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-2 border p-4 bg-primary text-white">
              <h3 className="text-white">{RECURRING_CONTENT.trekking.bestSeason}</h3>
              <p className="text-white font-medium">
                {trek.info.bestSeason}
              </p>
            </div>
            <div className="flex-1 border p-4 bg-primary text-center text-white">
              <h3 className="text-white">{RECURRING_CONTENT.trekking.altitude}</h3>
              <p className="text-white font-medium">{RECURRING_CONTENT.trekking.altitudeHigh} {trek.info.altitude.high}</p>
              <p className="text-white font-medium">{RECURRING_CONTENT.trekking.altitudeLow} {trek.info.altitude.low}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 border bg-primary py-6 px-4 text-center text-white">
              <h3 className="text-white">{RECURRING_CONTENT.trekking.onTrek}</h3>
              <p className="text-white font-medium">{trek.info.duration}</p>
            </div>
            <div className="flex-1 border bg-primary py-6 px-4 text-center text-white">
              <h3 className="text-white">{RECURRING_CONTENT.trekking.grade}</h3>
              <p className="text-white font-medium">{trek.info.grade}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <h1 className="text-center">{RECURRING_CONTENT.trekking.essentialInfoTitle}</h1>
        <p className="lg:px-[240px] text-center font-medium my-6">
          {trek.description || `The ${trek.title} is one of Bhutan's most legendary high-altitude adventures. To help you prepare, here are the key things every traveler must know before embarking on this once-in-a-lifetime journey.`}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-6">
          {trek.essentialInfo.map((info) => (
            <div
              key={info.id}
              className="w-full border bg-primary p-4 lg:p-[24px] flex flex-col items-center justify-center text-white"
            >
              <h2 className="text-white text-center">{info.title}</h2>
              <p className="text-center font-medium lg:px-[46px] my-6">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="h-auto md:h-[60vh] w-full">
          <LetsTalk
            images={RECURRING_CONTENT.letsTalk.image}
            description={RECURRING_CONTENT.letsTalk.description}
          />
        </div>
      </section>
      <section className="relative w-full h-[80vh] hidden lg:block mb-[90px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${trek.image.src}')`,
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
      </section>
      <section className="flex flex-col lg:flex-row px-[16px] lg:px-[32px] gap-2 mb-[90px]">
        {/* LEFT IMAGE SECTION */}
        <div className="w-full lg:w-[70%] min-h-[40vh] lg:min-h-[80vh] relative">
          <Image
            src={RECURRING_CONTENT.travelWithPurpose.image}
            alt="Travel with Purpose"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full lg:w-[34.5%] bg-[#111820] p-[24px] flex flex-col justify-between">
          <div>
            <h2 className="text-white">{RECURRING_CONTENT.travelWithPurpose.title}</h2>

            {RECURRING_CONTENT.travelWithPurpose.description.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-white text-[16px] mt-[32px]">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-[32px] flex">
            <Link
              className="bg-primary py-2 px-3 text-[20px] font-bold text-white"
              href={RECURRING_CONTENT.travelWithPurpose.cta.href}
            >
              {RECURRING_CONTENT.travelWithPurpose.cta.text}
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col px-[16px] lg:px-[32px] items-center justify-center gap-2 mb-[90px]">
        <h2>{RECURRING_CONTENT.trekking.nextLevelAdventuresTitle}</h2>
        <p className="my-[24px] text-center px-4 md:px-[142px]">
          {RECURRING_CONTENT.trekking.nextLevelAdventuresDescription}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
          {otherTreks.slice(0, 3).map((otherTrek) => (
            <div key={otherTrek.id} className="w-full flex flex-col h-full bg-primary overflow-hidden">
               <Link href={`/curated-bhutan-birding/trekking/${otherTrek.slug}`} className="w-full h-[400px] relative">
                <Image
                  src={otherTrek.image.src}
                  alt={otherTrek.image.alt}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="p-[24px] flex-1 flex flex-col">
                <h3 className="text-white text-center">{otherTrek.title}</h3>
                <p className='my-4 text-center flex-1'>
                  {otherTrek.description || `Explore the majestic ${otherTrek.title} and discover Bhutan's pristine wilderness.`}
                </p>
                <div className="w-full flex justify-center mt-auto">
                  <Link href={`/curated-bhutan-birding/trekking/${otherTrek.slug}`}>
                    <Button className='bg-black rounded-none text-primary font-bold'>{RECURRING_CONTENT.trekking.viewDetails}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-2">
          {otherTreks.slice(3, 5).map((otherTrek) => (
             <div key={otherTrek.id} className="w-full flex flex-col h-full bg-primary overflow-hidden">
               <Link href={`/curated-bhutan-birding/trekking/${otherTrek.slug}`} className="w-full h-[400px] md:h-[540px] relative">
                <Image
                  src={otherTrek.image.src}
                  alt={otherTrek.image.alt}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="p-[24px] flex-1 flex flex-col">
                <h3 className="text-white text-center">{otherTrek.title}</h3>
                <p className='my-4 text-center flex-1'>
                  {otherTrek.description || `Explore the majestic ${otherTrek.title} and discover Bhutan's pristine wilderness.`}
                </p>
                <div className="w-full flex justify-center mt-auto">
                  <Link href={`/curated-bhutan-birding/trekking/${otherTrek.slug}`}>
                    <Button className='bg-black rounded-none text-primary font-bold'>{RECURRING_CONTENT.trekking.viewDetails}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Page;
