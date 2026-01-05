import ImageBox from '@/components/shared/image-box';
import { fetchBySlug, fetchCollection, getStrapiMedia } from '@/lib/strapi';
import { Package } from '@/types/strapi';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function Page() {
  // Fetch Silent Monks package data from Strapi
  const data = await fetchBySlug<Package>('package', 'silent-monks', '*');

  if (!data) {
    notFound();
  }

  // Fetch related packages
  const relatedPackages = await fetchCollection<Package>('package', {
    populate: '*',
    pagination: { pageSize: 6 },
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="h-[60vh] lg:h-screen w-full relative overflow-hidden mb-[90px]">
        <Image
          src={getStrapiMedia(data.image) || '/images/placeholder.jpg'}
          alt={data.title}
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
              {data.long_description || data.description}
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold text-sm lg:text-lg uppercase">
              {data.tagline || data.subtitle || 'Every journey tells a story'}
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[40px] lg:h-[80px] mt-[20px] lg:mt-[40px]" />
      </section>

      {/* Full Image Section */}
      <section className="h-[300px] lg:h-[90vh] mb-[90px]">
        <Image
          src={getStrapiMedia(data.full_image) || getStrapiMedia(data.image) || '/images/placeholder.jpg'}
          alt={data.title}
          height={700}
          width={700}
          className="h-full w-full object-cover"
        />
      </section>

      {/* Detailed Sections */}
      {data.detailed_sections && data.detailed_sections.length > 0 && (
        <section className="flex flex-col lg:px-[32px] px-[16px] my-[90px]">
          {data.detailed_sections.map((section, index) => (
            <div
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
              key={index}
            >
              {/* Left Content */}
              <div className="flex flex-col justify-center items-center w-full lg:w-[50%] bg-[#111820] p-[20px]">
                <h1 className="text-white">{section.title}</h1>
                {section.subtitle && (
                  <p className="text-primary font-bold text-[14px] lg:text-[16px] mt-2">
                    {section.subtitle}
                  </p>
                )}
                <div className="px-[20px] lg:px-[60px] mt-[16px] lg:mt-[24px] pb-[20px] lg:pb-[32px]">
                  <p className="text-white text-center text-[14px] lg:text-[16px]">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-[50%] relative h-[240px] lg:h-[540px] overflow-hidden">
                <Image
                  src={getStrapiMedia(section.image) || '/images/placeholder.jpg'}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Freedom Section */}
      {data.freedom_section && (
        <section className="px-[16px] lg:px-[32px] mb-[90px]">
          <div className="bg-[#111820] w-full p-[16px] lg:p-[24px]">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-3">
                <h3 className="text-white">
                  {data.freedom_section.title}
                </h3>
              </div>
              <div className="flex-2">
                <p className="text-white text-[14px] lg:text-[16px]">
                  {data.freedom_section.description}
                </p>
              </div>
            </div>
            <div
              className="w-full mt-[24px] lg:mt-[32px] h-[300px] lg:h-[540px] flex items-center justify-center relative group cursor-pointer overflow-hidden"
              style={{
                backgroundImage: `url('${getStrapiMedia(data.freedom_section.background_image) || '/images/placeholder.jpg'}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
              <h4 className="relative z-10 text-white inline-block after:content-[''] after:block after:h-[2px] after:w-0 after:bg-white after:mx-auto after:transition-all after:duration-300 group-hover:after:w-full">
                {data.freedom_section.cta_text || 'Explore More'}
              </h4>
            </div>
          </div>
        </section>
      )}

      {/* Related Packages Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-[16px] lg:px-[32px] gap-[8px] mb-[90px]">
        {relatedPackages.slice(0, 6).map((pkg) => (
          <ImageBox
            id={pkg.slug}
            key={pkg.slug}
            image={getStrapiMedia(pkg.image) || '/images/placeholder.jpg'}
            label={pkg.title || ''}
            subtitle={pkg.subtitle}
          />
        ))}
      </section>
    </main>
  );
}

export default Page;
