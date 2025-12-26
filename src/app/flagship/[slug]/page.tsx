import BestSelling from '@/components/landing-component/best-selling';
import HeroSwapper from '@/components/landing-component/hero-swapper';
import LetsTalk from '@/components/shared/let-talk';
import { Button } from '@/components/ui/button';
import { fetchBySlug, fetchCollection, fetchAllSlugs, getStrapiMedia, getStrapiMediaArray, fetchSingleType } from '@/lib/strapi';
import { FlagshipTour, Package, SiteSettings } from '@/types/strapi';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = await fetchAllSlugs('flagship-tour');
  return slugs.map((slug) => ({ slug }));
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch flagship tour data from Strapi
  const flagshipTour = await fetchBySlug<FlagshipTour>('flagship-tour', slug, '*');

  if (!flagshipTour) {
    notFound();
  }

  // Fetch best selling packages
  const bestSelling = await fetchCollection<Package>('package', {
    filters: { is_best_selling: true },
    populate: '*'
  });

  // Fetch other packages
  const otherPackages = await fetchCollection<Package>('package', {
    filters: { is_other: true },
    populate: '*',
    pagination: { pageSize: 5 }
  });

  // Fetch recurring content from site-settings
  const siteSettings = await fetchSingleType<SiteSettings>('site-settings', '*');

  // Get "Where Nature Meets Nirvana" section
  const whereNatureMeetsNirvana = siteSettings?.recurring_sections?.find(
    (section) => section.section_key === 'where-nature-meets-nirvana'
  );

  // Map hero images for HeroSwapper component
  const heroImages = getStrapiMediaArray(flagshipTour.hero_images);
  const heroSlides = heroImages.map((img, idx) => ({
    id: idx + 1,
    image: img,
    title: flagshipTour.title
  }));

  return (
    <main>
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden mb-[90px]">
        <Image
          src={heroImages[0] || '/images/placeholder.jpg'}
          alt={flagshipTour.title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">{flagshipTour.title}</h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-4 md:px-8 mb-12 md:mb-[90px]">
        <div className="border-[0.5px] border-primary h-20 mb-10" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full md:w-[740px]">
            <h1 className="text-2xl md:text-4xl font-semibold">
              {whereNatureMeetsNirvana?.title || 'Where Nature Meets Nirvana'}
            </h1>
          </div>
          <div className="w-full px-0 md:px-[200px]">
            <p className="text-[14px] md:text-[16px] my-6 text-center">
              {whereNatureMeetsNirvana?.description || ''}
            </p>
          </div>
          <div className="md:min-w-[250px]">
            <span className="font-bold text-lg md:text-xl uppercase">
              {whereNatureMeetsNirvana?.cta_text || ''}
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-20 my-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center px-4 md:px-[100px] lg:px-[200px] w-full">
          <div className="w-full bg-gray-100">
            <div className="bg-primary text-white px-[20px] text-center">
              <h4 className="text-white">WHEN</h4>
            </div>
            <div className="p-[20px] font-bold text-center">
              <p>{flagshipTour.info_when || 'N/A'}</p>
            </div>
          </div>
          <div className="w-full bg-gray-100">
            <div className="bg-primary px-[20px] text-center">
              <h4 className="text-white">PRICE</h4>
            </div>
            <div className="p-[20px] font-bold text-center">
              <p>{flagshipTour.info_price || 'N/A'}</p>
            </div>
          </div>
          <div className="w-full bg-gray-100">
            <div className="bg-primary px-[20px] text-center">
              <h4 className="text-white">HOW LONG</h4>
            </div>
            <div className="p-[20px] font-bold text-center">
              <p>{flagshipTour.info_duration || 'N/A'}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[90px]">
        <HeroSwapper slides={heroSlides} />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px] gap-4">
        <div className="w-full py-[50px] bg-primary h-auto md:h-[420px] flex flex-col md:flex-row items-center justify-center md:space-x-6 px-4">
          <div className="md:w-[70%] text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-white">MAKE THIS ITINERARY YOURS</h3>
            <p className="text-[14px] md:text-[16px] mt-[14px] text-white">
              Each and every Born Explorer trip is tailored exactly to who you
              are and what you want to do. So tell us about yourself and we’ll
              create something that’s entirely you.
            </p>
          </div>
          <div className="flex flex-col space-y-4 w-full md:w-auto">
            <Button className="bg-black rounded-none text-white font-bold text-[18px] md:text-[24px] py-[20px] md:py-[24px]">
              {' '}
              ENQUIRE NOW
            </Button>
            <Button className="bg-black rounded-none text-white font-bold text-[18px] md:text-[24px] py-[20px] md:py-[24px]">
              DOWNLOAD ITINERARY
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px] gap-4">
        {flagshipTour.cultural_connections && flagshipTour.cultural_connections.length > 0 && flagshipTour.cultural_connections.map((connection, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row w-full justify-center md:space-x-12 px-4 mb-12 ${
              index % 2 !== 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2 h-[300px] md:h-[500px]">
              <Image
                src={getStrapiMedia(connection.image) || '/images/placeholder.jpg'}
                alt={connection.title}
                className="object-cover h-full w-full"
                height={500}
                width={500}
              />
            </div>
            <div className="flex flex-col justify-center w-full md:w-1/2 mt-6 md:mt-0">
              <h1>{connection.title}</h1>
              <p className="text-[14px] md:text-[16px]">
                {connection.description}
              </p>
              {connection.tagline && (
                <p className="font-bold mt-4 italic text-[18px] text-primary">
                  {connection.tagline}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px] gap-4">
        <h2>Boutique Hotels</h2>
        <div className="my-[32px] flex flex-col md:flex-row gap-2 w-full h-auto md:h-[520px]">
          <div className="bg-primary flex-1 p-8 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-white">BESPOKE JOURNEYS</h1>
            <p className="text-[20px] md:text-[24px] font-bold">
              Your story, perfectly tailored
            </p>
          </div>
          <div className="bg-primary flex-1 p-8 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-white">EXQUISITE STAYS</h1>
            <p className="text-[20px] md:text-[24px] font-bold">
              Where elegance feels effortless
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Link href="/bespoke-journey">
            <Button className="rounded-none bg-black text-[20px] md:text-[24px] py-6 md:py-8 px-8 md:px-[32px]">
              VIEW ALL
            </Button>
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-4 md:px-8 mb-[90px]">
        <div className="border-[0.5px] border-primary h-20 mb-10" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full md:w-[740px]">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Other Holidays
            </h1>
          </div>
          <div className="w-full md:px-4 lg:px-12">
            <p className="text-[14px] md:text-[16px] my-6">
              {whereNatureMeetsNirvana?.description || ''}
            </p>
          </div>
          <div className="md:min-w-[250px]">
            <span className="font-bold text-lg md:text-xl uppercase">
              {whereNatureMeetsNirvana?.cta_text || ''}
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-20 mt-10" />
      </section>
      <section className="flex flex-col items-center justify-center px-4 md:px-8 mb-[90px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {otherPackages.slice(0, 3).map((pkg) => (
            <div className="bg-gray-100 flex flex-col h-full" key={pkg.slug}>
              <div className="w-full h-[250px] md:h-[350px] relative">
                <Image
                  src={getStrapiMedia(pkg.image) || '/images/placeholder.jpg'}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-6 text-center flex-1">
                <h4 className="mb-4">{pkg.title}</h4>
                <p className="mb-6 text-[14px] md:text-[16px] line-clamp-3">
                  {pkg.description}
                </p>
                <Link href={`/packages/${pkg.slug}`} className="mt-auto">
                  <Button className="rounded-none bg-black text-[18px] md:text-[24px] py-4 px-6">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 w-full">
          {otherPackages.slice(3, 5).map((pkg) => (
            <div className="bg-gray-100 flex flex-col h-full" key={pkg.slug}>
              <div className="w-full h-[300px] md:h-[520px] relative">
                <Image
                  src={getStrapiMedia(pkg.image) || '/images/placeholder.jpg'}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-6 text-center flex-1">
                <h4 className="mb-4">{pkg.title}</h4>
                <p className="text-[14px] md:text-[16px] mb-6 line-clamp-3">
                  {pkg.description}
                </p>
                <Link href={`/packages/${pkg.slug}`} className="mt-auto">
                  <Button className="rounded-none bg-black text-[18px] md:text-[24px] py-4 px-6">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-4 md:px-8 mb-[90px] w-full">
        <BestSelling packages={bestSelling} />
      </section>
      <div className="h-[84vh] mb-24 px-4 md:px-[32px]">
        <LetsTalk />
      </div>
    </main>
  );
}

export default Page;
