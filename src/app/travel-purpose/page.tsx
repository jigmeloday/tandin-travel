import Image from 'next/image';
import { TRAVEL_PURPOSE_PAGE_DATA } from '@/lib/data';

function Page() {
  const {
    hero,
    mainSection,
    alternatingContent,
    movementSection,
  } = TRAVEL_PURPOSE_PAGE_DATA;

  return (
    <div>
      <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden mb-[90px]">
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/12 via-white/14 to-black/90"></div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{mainSection.title}</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-[14px] lg:text-[16px] text-center my-[24px]">
              {mainSection.description}
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
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px] gap-4">
        {alternatingContent.map((item, idx) => (
          <div key={item.id} className={`flex md:flex-row flex-col w-full justify-center gap-2 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="border w-full h-[550px]">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover h-full w-full"
                height={500}
                width={500}
              />
            </div>
            <div className="flex flex-col justify-center md:px-4 md:h-[500px] md:w-full aspect-square">
              <h1>{item.title}</h1>
              <p className='text-[14px] md:text-[16px]'>
                Combine helicopter journeys with sustainable luxury lodges,
                curated local cuisine, and intimate cultural experiences for a
                fully bespoke Bhutanese exploration.
              </p>
              <p className='font-bold mt-4 italic text-[16px] text-primary'>{item.tagline}</p>
            </div>
          </div>
        ))}
      </section>
      <section className='px-[16px] lg:px-[32px] mb-[90px]'>
        <div className='flex flex-col items-center justify-center bg-primary w-full py-[24px] md:py-[52px] text-white'>
          <h2 className='text-white uppercase'>{movementSection.title}</h2>
          {movementSection.items.map((text, idx) => (
            <p key={idx} className='text-[14px] md:text-[16px]'>{text}</p>
          ))}
          <p className='mt-4 font-bold md:text-[16px] text-black'>{movementSection.tagline}</p>
        </div>
      </section>
    </div>
  );
}

export default Page;
