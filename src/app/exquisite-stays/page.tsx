import BestSelling from '@/components/landing-component/best-selling';
import LetsTalk from '@/components/shared/let-talk';
import { fetchSingleType, fetchCollection, getStrapiMedia, getStrapiMediaArray } from '@/lib/strapi';
import { ExquisiteStaysPage } from '@/types/strapi';
import Image from 'next/image';
import Link from 'next/link';

// Revalidate this page every 60 seconds
export const revalidate = 60;

export default async function Page() {
  // Fetch exquisite stays page data from Strapi
  const exquisiteStaysData = await fetchSingleType<ExquisiteStaysPage>('exquisite-stays-page', '*');

  if (!exquisiteStaysData) {
    return <div>Error loading exquisite stays page data</div>;
  }

  // Extract packages from relations (Strapi v5 format)
  const imageBoxPackages = Array.isArray(exquisiteStaysData.image_box_packages)
    ? exquisiteStaysData.image_box_packages
    : [];

  // Fetch flagship tours directly from the flagship-tours collection
  const flagshipTours = await fetchCollection('flagship-tours', {
    populate: '*',
    pagination: { pageSize: 10 },
  });

  // Map flagship tours to package format for BestSelling component
  const flagshipPackages = flagshipTours.map((tour: any) => ({
    id: tour.id,
    slug: tour.slug,
    title: tour.title,
    subtitle: tour.subtitle,
    description: tour.description,
    category: tour.subtitle || 'FLAGSHIP TOUR',
    image: tour.hero_images?.[0] || tour.hero_images,
  }));

  // Get image arrays
  const squareImages = getStrapiMediaArray(exquisiteStaysData.square_images);
  const horizontalImages = getStrapiMediaArray(exquisiteStaysData.horizontal_images);
  const luxuryImages = getStrapiMediaArray(exquisiteStaysData.luxury_images);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden mb-[90px]">
        <Image
          src={getStrapiMedia(exquisiteStaysData.hero_background_image) || ''}
          alt={exquisiteStaysData.hero_title || 'Exquisite Stays'}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/12 via-white/14 to-black/90"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full h-full px-4 md:px-[50px] pb-4 md:pb-[40px]">
            <div className="flex flex-1 items-center justify-center md:justify-start mb-4 md:mb-0">
              <h1 className="text-4xl md:text-[80px] font-bold drop-shadow-lg text-center md:text-left">
                {exquisiteStaysData.hero_title}
              </h1>
            </div>
            <div className="flex flex-col flex-1 items-center md:items-end justify-center md:justify-end text-center md:text-right">
              {exquisiteStaysData.hero_subtitle?.split(', ').map((line, idx) => (
                <p key={idx} className="text-xl md:text-[40px] font-sans">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Square Images */}
      <section className="px-4 lg:px-[32px] mb-[90px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {squareImages.map((img, idx) => (
            <div key={idx} className="aspect-square bg-gray-200">
              <Image
                src={img}
                alt="Exquisite Stays"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Horizontal Image Section */}
        <div className="flex flex-col md:flex-row w-full mt-3 md:mt-[12px] gap-4 md:gap-2">
          <div className="flex flex-1 gap-2 flex-col md:flex-row">
            {horizontalImages.map((img, idx) => (
              <div key={idx} className="w-full h-64 md:h-[440px] bg-gray-200">
                <Image
                  src={img}
                  alt="Exquisite Stays"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="relative flex-1 mt-4 md:mt-0">
            <div className="flex flex-col justify-between h-full p-2 md:p-4">
              <div className="w-full md:w-[80%]">
                <h1 className="text-xl md:text-2xl lg:text-3xl">
                  {exquisiteStaysData.horizontal_title}
                </h1>
                <p className="text-[14px] md:text-[16px] mt-2">
                  {exquisiteStaysData.horizontal_description}
                </p>
              </div>
              <div>
                <p className="text-sm md:text-[18px] font-bold mt-2">
                  {exquisiteStaysData.horizontal_tagline}
                </p>
              </div>
            </div>
            <div className="absolute -bottom-2 right-0 w-[64%] border-b-4 border-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Luxury Experience Section */}
      <section className="w-full h-auto md:h-[70vh] bg-[#111820] mb-[90px]">
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 flex items-center justify-center gap-2 mb-6 md:mb-0">
            {luxuryImages.map((img, idx) => (
              <div
                key={idx}
                className={`${
                  idx === 0
                    ? 'transform translate-y-0 md:translate-y-6'
                    : 'transform translate-y-0 md:-translate-y-6'
                } w-48 md:w-60 h-64 md:h-[430px] relative`}
              >
                <Image
                  src={img}
                  alt="Exquisite Stays"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between gap-4 md:gap-6 p-4 md:p-[64px] flex-1 text-center md:text-left">
            <div>
              {exquisiteStaysData.luxury_title?.split(', ').map((line, idx) => (
                <h1
                  key={idx}
                  className={`mb-0 leading-[1.2] text-2xl md:text-4xl ${
                    idx === 1 ? 'border-b-4 border-white pb-2 w-fit mx-auto md:mx-0' : ''
                  }`}
                >
                  {line}
                </h1>
              ))}
            </div>
            <p className="text-white text-[14px] md:text-[16px]">
              {exquisiteStaysData.luxury_description}
            </p>
            <p className="text-white font-bold font-sans text-base md:text-[18px]">
              {exquisiteStaysData.luxury_tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="flex flex-col items-center justify-center my-12 px-4 md:px-[16px] mb-[90px]">
        <div className="h-[84vh] w-full">
          <LetsTalk />
        </div>
      </section>

      {/* Parallax Section */}
      <section className="relative w-full h-[80vh] hidden lg:block mb-[90px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${getStrapiMedia(exquisiteStaysData.parallax_background_image)}')`,
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
      </section>

      {/* Nature Section */}
      <section className="flex flex-col items-center justify-center px-4 lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{exquisiteStaysData.nature_title}</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-[14px] md:text-[16px] text-center my-[24px]">
              {exquisiteStaysData.nature_description}
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold">{exquisiteStaysData.nature_tagline}</span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>

      {/* Grid Section */}
      <section className="px-4 lg:px-[32px] mb-[90px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {imageBoxPackages.map((pkg: any) => (
            <Link
              key={pkg.id}
              href={`/packages/${pkg.slug}`}
              className="relative flex flex-col items-center justify-center w-full aspect-square text-center overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition duration-300"
                style={{ backgroundImage: `url('${getStrapiMedia(pkg.image)}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/60"></div>
              <h3 className="relative z-10 text-white text-lg md:text-xl font-semibold after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:mx-auto after:transition-all after:duration-300 group-hover:after:w-full after:origin-center">
                {pkg.title}
              </h3>
              <p className="relative z-10 text-white text-sm md:text-base">
                {pkg.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Flagship Section */}
      <section className="flex flex-col justify-center items-center text-center mb-[90px]">
        <h1 className="mb-10">{exquisiteStaysData.flagship_title || 'Flagship Signature Journey'}</h1>
        {flagshipPackages.length > 0 ? (
          <BestSelling packages={flagshipPackages} basePath="/flagship" />
        ) : (
          <p className="text-gray-500">No flagship tours available</p>
        )}
      </section>
    </main>
  );
}
