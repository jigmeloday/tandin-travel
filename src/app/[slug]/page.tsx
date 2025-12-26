import ImageBox from '@/components/shared/image-box';
import LetsTalk from '@/components/shared/let-talk';
import { fetchBySlug, fetchCollection, fetchAllSlugs, getStrapiMedia } from '@/lib/strapi';
import { Package } from '@/types/strapi';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await fetchAllSlugs('package');
  return slugs.map((slug) => ({ slug }));
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = (await params) as { slug: string };

  // Fetch package data from Strapi
  const data = await fetchBySlug<Package>('package', slug, '*');

  if (!data) {
    notFound();
  }

  // Fetch other packages (with is_other = true or all packages)
  const otherPackages = await fetchCollection<Package>('package', {
    populate: '*',
    pagination: { pageSize: 3 },
  });

  const imageBoxPackages = await fetchCollection<Package>('package', {
    populate: '*',
    pagination: { pageSize: 6 },
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="h-[60vh] lg:h-screen w-full relative overflow-hidden">
        <Image
          src={getStrapiMedia(data.image) || '/images/placeholder.jpg'}
          alt={data.title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">{data.title}</h1>
        </div>
      </section>

      {/* Detailed Sections Grid - Show detailed_sections if available */}
      {data.detailed_sections && data.detailed_sections.length >= 4 && (
        <section className="grid grid-cols-1 md:grid-cols-4">
          {data.detailed_sections.slice(0, 4).map((section, index) => (
            <div
              key={index}
              className={`${
                (index + 1) % 2 === 0 ? 'bg-black text-white' : 'bg-primary'
              } h-[350px] flex flex-col items-center justify-center px-8 font-medium`}
            >
              <p className="font-bold text-[20px] text-center">
                {section.title}
              </p>
              <div
                className={`${
                  (index + 1) % 2 === 0 ? 'border border-primary' : ' border border-black'
                }  w-[40%] my-4`}
              />
              <p className="text-center">
                {section.description}
              </p>
            </div>
          ))}
        </section>
      )}
      <section className="flex flex-col px-[16px] lg:px-[120px] my-[150px] py-[80px] bg-black">
        <div className="flex lg:flex-row flex-col text-start space-x-8">
          <div className="flex-1 relative flex lg:flex-row flex-col space-y-4 lg:space-x-4 w-full">
            <div className="bg-primary lg:h-[520px] h-[240px] w-full lg:w-[50%] lg:absolute lg:-top-40 lg:-left-20">Image</div>
            <div className="bg-primary lg:h-[520px] h-[240px] w-full lg:w-[50%] lg:absolute lg:-bottom-40 lg:right-12">Image</div>
          </div>
          <div className="flex-1 px-4">
            <h2 className="leading-[52px] text-start">
              Where every vista unfolds in comfort, wonder, and timeless beauty
            </h2>
            <div className="border border-white w-[58%] my-4" />
            <p className="text-white text-[18px] font-medium">
              Marvel at Bhutan’s towering peaks, emerald valleys, and sacred
              monasteries from the comfort of a spacious, private aircraft,{' '}
            </p>
            <p className="text-white mt-[32px] font-bold text-[20px]">
              Discover Bhutan from Above Today
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[302px] my-[50px] text-center">
        <h1 className="text-center leading-[50px]">
          See Bhutan from the Skies in Unmatched <br /> Luxury and Wonder
        </h1>
        <p className="mt-[24px]">
          Every journey is crafted entirely around you, blending seamless
          planning with rare, meaningful encounters. Each experience unfolds
          with thoughtful detail—from the first welcome to the quiet moments in
          nature—creating memories that linger long after you return home and
          leaving a gentle, positive imprint on the places you visit.
        </p>
      </section>

      {/* Other Packages */}
      <section className="flex flex-col lg:px-[32px] px-[16px] my-[30px] lg:my-[50px] gap-2">
        {otherPackages.map((pkg, index) => (
          <div
            className={`flex flex-col lg:flex-row gap-2 ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
            key={pkg.slug}
          >
            {/* Left Content */}
            <div className="flex flex-col justify-center items-center w-full lg:w-[50%] bg-[#111820] p-[20px]">
              <h1>{pkg.title}</h1>
              {pkg.subtitle && (
                <p className="text-white font-bold text-[14px] lg:text-[16px] mt-2">
                  {pkg.subtitle}
                </p>
              )}
              <div className="px-[20px] lg:px-[60px] mt-[16px] lg:mt-[24px] pb-[20px] lg:pb-[32px]">
                <p className="text-white text-center text-[14px] lg:text-[16px]">
                  {pkg.description}
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[50%] relative h-[240px] lg:h-[420px] overflow-hidden">
              <Image
                src={getStrapiMedia(pkg.image) || '/images/placeholder.jpg'}
                alt={pkg.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </section>
      {/* Intro Section */}
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px]">
        <div className="border-[0.5px] border-primary h-[40px] lg:h-[80px] mb-[20px] lg:mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>Additional Getaways Crafted For You</h1>
          </div>
          <div className="w-full lg:w-[920px]">
            <p className="text-[14px] lg:text-[16px] text-center my-[16px] lg:my-[24px]">
              Explore a selection of exclusive travel packages designed to
              complement your journey. Each experience offers unique adventures,
              cultural encounters, and premium comfort, ensuring memorable
              holidays that inspire, delight, and leave you eager for your next
              exploration.
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold text-sm lg:text-lg">
              EXPAND YOUR HORIZONS
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[40px] lg:h-[80px] mt-[20px] lg:mt-[40px]" />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-[16px] lg:px-[32px] gap-[8px] my-[24px] lg:my-[50px]">
        {imageBoxPackages.map((pkg) => (
            <ImageBox
              id={pkg.slug}
              key={pkg.slug}
              image={getStrapiMedia(pkg.image) || '/images/placeholder.jpg'}
              label={pkg.title || ''}
              subtitle={pkg.subtitle}
            />
          )
        )}
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px]">
        <div className="border-[0.5px] border-primary h-[40px] lg:h-[80px] mb-[20px] lg:mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>Trails & Feathers of Bhutan</h1>
          </div>
          <div className="w-full lg:w-[920px]">
            <p className="text-[14px] lg:text-[16px] text-center my-[16px] lg:my-[24px]">
              Embark on an extraordinary journey through Bhutan’s pristine
              landscapes, combining invigorating treks with immersive
              birdwatching experiences. Discover rare species, scenic trails,
              and cultural encounters, creating unforgettable memories for
              nature lovers, adventurers, and birding enthusiasts alike.
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold text-sm lg:text-lg">
              WHERE NATURE INSPIRES ADVENTURE
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[40px] lg:h-[80px] mt-[20px] lg:mt-[40px]" />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px]">
        <div className="h-[84vh]">
          <LetsTalk />
        </div>
      </section>
    </main>
  );
}

export default Page;
