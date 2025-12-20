import ImageBox from '@/components/shared/image-box';
import { getPackageBySlug, getImageBoxPackages, RECURRING_CONTENT, getOtherPackages } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getPackageBySlug(slug);

  if (!data) {
    notFound();
  }

  const otherPackages = getOtherPackages();

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
        <div className="border-[0.5px] border-primary h-[40px] lg:h-[80px] mt-[40px]" />
      </section>

      {/* Full Image Section */}
      <section className="h-[300px] lg:h-[90vh] mb-[90px] relative w-full">
        <Image
          src={data.image.src}
          alt={data.image.alt}
          fill
          className="object-cover"
        />
      </section>

      {/* Other Packages */}
      <section className="flex flex-col lg:px-[32px] px-[16px] my-[90px]">
        <div className="text-center mb-12">
            <h1>Other Holidays</h1>
        </div>
        {otherPackages.map(({ id, description, image, subtitle, title, slug }, index) => (
          <div
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
            key={id}
          >
            {/* Left Content */}
            <div className="flex flex-col justify-center items-center w-full lg:w-[50%] bg-[#111820] p-[40px] text-white">
              <h1 className="text-white text-center">{title}</h1>
              <p className="text-primary font-bold text-[14px] lg:text-[16px] mt-2 uppercase text-center">
                {subtitle}
              </p>
              <div className="px-[20px] lg:px-[60px] mt-[16px] lg:mt-[24px] pb-[20px] lg:pb-[32px]">
                <p className="text-white text-center text-[14px] lg:text-[16px]">
                  {description}
                </p>
              </div>
              <Link
                href={`/packages/${slug}`}
                className="bg-primary px-6 py-2 text-white font-bold hover:bg-primary/80 transition"
              >
                VIEW DETAIL
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[50%] relative h-[300px] lg:h-[540px] overflow-hidden">
              <Image
                src={image.src}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Recurring Content Section */}
      <section className="px-[16px] lg:px-[32px] mb-[90px]">
        <div className="bg-[#111820] w-full p-[24px] lg:p-[48px] text-white">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="flex-1">
              <h2 className="text-white text-3xl md:text-4xl">
                {RECURRING_CONTENT.whereNatureMeetsNirvana.title}
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-white text-[14px] lg:text-[16px]">
                {RECURRING_CONTENT.whereNatureMeetsNirvana.description}
              </p>
            </div>
          </div>
          <div
            className="w-full h-[300px] lg:h-[540px] flex items-center justify-center relative group cursor-pointer overflow-hidden"
          >
            <Image
                src={RECURRING_CONTENT.letsTalk.image}
                alt="Lets Talk"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
            <div className="relative z-10 text-center">
                <h4 className="text-white text-xl md:text-2xl inline-block after:content-[''] after:block after:h-[2px] after:w-0 after:bg-white after:mx-auto after:transition-all after:duration-300 group-hover:after:w-full">
                {RECURRING_CONTENT.whereNatureMeetsNirvana.tagline}
                </h4>
            </div>
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
