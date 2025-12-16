import Image from 'next/image';

function Page() {
  return (
    <div>
      <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden mb-[90px]">
        <Image
          src="/images/hotel/h5.jpg"
          alt="Bespoke Journey"
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
            <h1>Where Nature Meets Nirvana</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-[14px] lg:text-[16px] text-center my-[24px]">
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
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px] gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className={`flex md:flex-row flex-col w-full justify-center gap-2 ${item%2 === 0 ? 'md:flex-row-reverse': ''}`}>
            <div className="border w-full aspect-square">
              <Image
                src="/images/dummy/img1.jpg"
                alt=""
                className="object-cover h-full w-full"
                height={500}
                width={500}
              />
            </div>
            <div className="flex flex-col justify-center md:px-4 md:h-[500px] md:w-full aspect-square">
              <h1>Cultural Connection</h1>
              <p className='text-[14px] md:text-[16px]'>
                Combine helicopter journeys with sustainable luxury lodges,
                curated local cuisine, and intimate cultural experiences for a
                fully bespoke Bhutanese exploration.
              </p>
              <p className='font-bold mt-4 italic text-[16px] text-primary'>Where culture isn’t watched — it’s lived</p>
            </div>
          </div>
        ))}
      </section>
      <section className='px-[16px] lg:px-[32px] mb-[90px]'>
        <div className='flex flex-col items-center justify-center bg-primary w-full py-[24px] md:py-[52px]'>
          <h2 className='text-white'>JOIN THE MOVEMENT</h2>
          <p className='text-[14px] md:text-[16px]'>Travel that restores balance</p>
          <p className='text-[14px] md:text-[16px]'>Travel that listens to nature</p>
          <p className='text-[14px] md:text-[16px]'>Travel that leaves the world better</p>
          <p className='mt-4 font-bold md:text-[16px]'>Born Explorer — where every journey has a purpose</p>
        </div>
      </section>
    </div>
  );
}

export default Page;
