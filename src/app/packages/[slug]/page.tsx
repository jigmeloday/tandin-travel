import ImageBox from '@/components/shared/image-box';
import { IMAGE_BOX, OTHER_PACKAGE } from '@/lib/dummy-data/dummy-data';
import Image from 'next/image';

function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data = IMAGE_BOX.find((item) => item.id === parseInt(slug));

  return (
    <main>
      {/* Hero Section */}
      <section className="h-[60vh] lg:h-screen w-full relative overflow-hidden">
        <Image
          src={data?.image || ''}
          alt={data?.title || 'img'}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">
            {data?.title}
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px]">
        <div className="border-[0.5px] border-primary h-[40px] lg:h-[80px] mb-[20px] lg:mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{data?.title}</h1>
          </div>
          <div className="w-full lg:w-[920px]">
            <p className="text-[16px] lg:text-[32px] text-center my-[16px] lg:my-[24px]">
              Experience Bhutan like never before with premium helicopter
              journeys. Soar above sacred valleys, majestic mountains, and
              hidden monasteries in unrivaled luxury. Each flight blends
              adventure, comfort, and breathtaking discovery, turning travel
              into a transformative, mindful experience where nature, culture,
              and serenity converge seamlessly.
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold text-sm lg:text-lg">
              SKIP THE ROADS, CATCH THE VIEWS
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[40px] lg:h-[80px] my-[20px] lg:my-[40px]" />
      </section>

      {/* Full Image Section */}
      <section className="h-[300px] lg:h-[600px] my-[30px] lg:my-[50px]">
        <Image
          src="/images/dummy/img1.jpg"
          alt="img"
          height={700}
          width={700}
          className="h-full w-full object-cover"
        />
      </section>

      {/* Other Packages */}
      <section className="flex flex-col lg:px-[32px] px-[16px] my-[30px] lg:my-[50px]">
        {OTHER_PACKAGE.map(({ id, description, img, subtitile, title }, index) => (
          <div
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
            key={id}
          >
            {/* Left Content */}
            <div className="flex flex-col justify-center items-center w-full lg:w-[50%] bg-black p-[20px]">
              <h1 className="text-white">{title}</h1>
              <p className="text-primary font-bold text-[18px] lg:text-[24px] mt-2">
                {subtitile}
              </p>
              <div className="px-[20px] lg:px-[60px] mt-[16px] lg:mt-[24px] pb-[20px] lg:pb-[32px]">
                <p className="text-white text-center text-[16px] lg:text-[24px]">
                  {description}
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[50%] relative h-[240px] lg:h-[420px] overflow-hidden">
              <Image
                src={`/images/dummy/${img}`}
                alt="img"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Freedom Section */}
      <section className="px-[16px] lg:px-[32px]">
        <div className="bg-black w-full p-[16px] lg:p-[24px]">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-3">
              <h1 className="text-white">
                Freedom and <br /> Independence
              </h1>
            </div>
            <div className="flex-2">
              <p className="text-white text-[16px] lg:text-[20px]">
                Combine helicopter journeys with sustainable luxury lodges,
                curated local cuisine, and intimate cultural experiences for a
                fully bespoke Bhutanese exploration.
              </p>
            </div>
          </div>
          <div
            className="w-full mt-[24px] lg:mt-[32px] h-[300px] lg:h-[540px] flex items-center justify-center relative group cursor-pointer overflow-hidden"
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

      {/* Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-[16px] lg:px-[32px] gap-[8px] my-[24px] lg:my-[50px]">
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
    </main>
  );
}

export default Page;
