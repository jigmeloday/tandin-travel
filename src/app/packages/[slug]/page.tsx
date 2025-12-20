import ImageBox from '@/components/shared/image-box';
import { getPackageBySlug, OTHER_PACKAGES, getImageBoxPackages, RECURRING_CONTENT } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params as { slug: string };
  const data = getPackageBySlug(slug);

  if (!data) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="h-[60vh] lg:h-screen w-full relative overflow-hidden mb-[90px]">
        <Image
          src={data.image.src}
          alt={data.image.alt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">
            {data.title}
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[40px] lg:h-[80px] mb-[20px] lg:mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{data.title}</h1>
          </div>
          <div className="w-full lg:w-[920px]">
            <p className="text-[14px] lg:text-[16px] text-center my-[16px] lg:my-[24px]">
              {data.description}
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold text-sm lg:text-lg uppercase">
              {data.subtitle || 'Every journey tells a story'}
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[40px] lg:h-[80px] mt-[20px] lg:mt-[40px]" />
      </section>

      {/* Full Image Section */}
      <section className="h-[300px] lg:h-[90vh] mb-[90px] relative">
        <Image
          src={data.image.src}
          alt={data.image.alt}
          fill
          className="object-cover"
        />
      </section>

      {/* Other Packages */}
      <section className="flex flex-col lg:px-[32px] px-[16px] my-[90px]">
        {OTHER_PACKAGES.map(({ id, description, img, subtitle, title }, index) => (
          <div
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
            key={id}
          >
            {/* Left Content */}
            <div className="flex flex-col justify-center items-center w-full lg:w-[50%] bg-[#111820] p-[20px] text-white">
              <h1 className="text-white">{title}</h1>
              <p className="text-primary font-bold text-[14px] lg:text-[16px] mt-2 uppercase">
                {subtitle}
              </p>
              <div className="px-[20px] lg:px-[60px] mt-[16px] lg:mt-[24px] pb-[20px] lg:pb-[32px]">
                <p className="text-white text-center text-[14px] lg:text-[16px]">
                  {description}
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[50%] relative h-[240px] lg:h-[540px] overflow-hidden">
              <Image
                src={`/images/dummy/${img}`}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Freedom Section */}
      <section className="px-[16px] lg:px-[32px] mb-[90px]">
        <div className="bg-[#111820] w-full p-[16px] lg:p-[24px] text-white">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-3">
              <h3 className="text-white">
                Freedom and <br /> Independence
              </h3>
            </div>
            <div className="flex-2">
              <p className="text-white text-[14px] lg:text-[16px]">
                Combine helicopter journeys with sustainable luxury lodges,
                curated local cuisine, and intimate cultural experiences for a
                fully bespoke Bhutanese exploration.
              </p>
            </div>
          </div>
          <div
            className="w-full mt-[24px] lg:mt-[32px] h-[300px] lg:h-[540px] flex items-center justify-center relative group cursor-pointer overflow-hidden"
            style={{
              backgroundImage: `url('${RECURRING_CONTENT.letsTalk.image}')`,
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
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-[16px] lg:px-[32px] gap-[8px] mb-[90px]">
        {getImageBoxPackages().map((pkg) => (
          <ImageBox
            id={pkg.slug}
            key={pkg.id}
            image={pkg.image.src}
            label={pkg.title || ''}
            subtitle={pkg.subtitle}
          />
        ))}
      </section>
    </main>
  );
}

export default Page;
