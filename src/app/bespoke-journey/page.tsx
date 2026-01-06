import LetsTalk from '@/components/shared/let-talk';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { fetchSingleType, getStrapiMedia } from '@/lib/strapi';
import { BespokeJourneyPage, Package } from '@/types/strapi';

async function Page() {
  // Fetch bespoke journey page data from Strapi
  const data = await fetchSingleType<BespokeJourneyPage>('bespoke-journey-page', '*');

  if (!data) {
    return <div>Error loading page data</div>;
  }

  // Extract packages from relations (Strapi v5 format)
  const featuredPackages = Array.isArray(data.packages)
    ? data.packages
    : [];

  const otherAdventures = Array.isArray(data.related_packages)
    ? data.related_packages
    : [];

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden mb-[90px]">
        <Image
          src={getStrapiMedia(data.hero_background_image) || ''}
          alt={data.hero_title || 'Bespoke Journey'}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">{data.hero_title}</h1>
        </div>
      </section>

      {/* Packages */}
      <section className="flex flex-col gap-[50px] px-[16px] lg:px-[32px] mb-[90px]">
        {featuredPackages.map((pkg: Package, index: number) => (
          <div
            key={pkg.id}
            className={`flex flex-col lg:flex-row items-center gap-[32px] ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 h-[240px] sm:h-[320px] lg:h-[480px]">
              <Image
                src={getStrapiMedia(pkg.image) || ''}
                alt={pkg.title}
                width={620}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
              <h1>{pkg.title}</h1>
              <div className="w-full lg:w-[80%] mx-auto lg:mx-0">
                <p className="text-base lg:text-[16px] text-gray-700 mb-6 mt-4">
                  {pkg.description}
                </p>
              </div>
              <Link href={`/packages/${pkg.slug}`}>
                <Button className="mx-auto lg:mx-0 w-[180px] cursor-pointer bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition rounded-none">
                  View Detail
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Grid Cards */}
      <section className="px-[16px] lg:px-[32px] mb-[90px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full mb-5">
          {data.grid_cards?.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f7] flex flex-col items-center text-center shadow-sm"
            >
              {/* Image */}
              <div className="w-full h-[280px] sm:h-[350px] relative">
                <Image
                  src={getStrapiMedia(card.image) || ''}
                  alt={card.title}
                  fill
                  className="object-cover h-full w-full"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col items-center">
                <h3>{card.title}</h3>
                <p className="text-[14px] lg:text-[16px] mb-4 text-center">
                  {card.description}
                </p>
                <Link
                  href={card.link || '/bespoke-journey'}
                  className="w-[160px] bg-black text-white font-semibold py-3 text-center hover:bg-gray-800 transition"
                >
                  View Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parallax */}
      <section className="relative w-full h-[50vh] lg:h-[80vh] hidden md:block mb-[90px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${getStrapiMedia(data.parallax_background_image)}')`,
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
      </section>

      {/* Split Section */}
      <section className="w-full flex flex-col lg:flex-row px-[16px] lg:px-[32px] mb-[90px] gap-6">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Image */}
          <div className="flex-1 h-[260px] sm:h-[320px] lg:h-[580px] bg-[#2a2423] relative">
            <Image
              src={getStrapiMedia(data.travel_purpose_image) || ''}
              alt={data.travel_purpose_title || 'Travel With Purpose'}
              fill
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex-1 bg-[#111820] text-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-white">{data.travel_purpose_title}</h2>
            <div className="w-[60px] h-[2px] bg-white mb-6" />
            {data.travel_purpose_description?.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-base text-white mb-4">
                {para}
              </p>
            ))}
            {data.travel_purpose_cta_text && (
              <Link href={data.travel_purpose_cta_href || '#'}>
                <Button className="bg-[#7b1c32] text-white px-6 py-3 font-semibold hover:bg-[#611627] transition w-fit rounded-none">
                  {data.travel_purpose_cta_text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{data.related_title}</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-center my-[24px]">
              {data.related_description}
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold uppercase">{data.related_tagline}</span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>

      <section className="flex flex-col px-4 md:px-8 mb-[90px] md:mb-20 gap-2">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto md:max-w-[99%] gap-2">
          {otherAdventures.slice(0, 3).map((pkg: Package) => (
            <div className="bg-gray-100 flex flex-col" key={pkg.id}>
              <div className="h-[400px] relative">
                <Image
                  src={getStrapiMedia(pkg.image) || ''}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-[20px] text-center flex-1">
                <h4>{pkg.title}</h4>
                <p className="mb-[18px] text-[18px] line-clamp-3">
                  {pkg.description}
                </p>
                <Link href={`/packages/${pkg.slug}`}>
                  <Button className="rounded-none bg-black text-white px-4 py-2 hover:bg-neutral-800 transition">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:max-w-[99%] gap-2 mb-4">
          {otherAdventures.slice(3, 5).map((pkg: Package) => (
            <div className="bg-gray-100 flex flex-col" key={pkg.id}>
              <div className="h-[500px] relative">
                <Image
                  src={getStrapiMedia(pkg.image) || ''}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-[20px] text-center flex-1">
                <h4>{pkg.title}</h4>
                <p className="text-[18px] mb-[18px] line-clamp-3">
                  {pkg.description}
                </p>
                <Link href={`/packages/${pkg.slug}`}>
                  <Button className="rounded-none bg-black text-white px-4 py-2 hover:bg-neutral-800 transition">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="flex flex-col items-center justify-center mb-[90px] px-[16px] lg:px-[32px]">
        <div className="h-[84vh] w-full">
          <LetsTalk />
        </div>
      </section>
    </main>
  );
}

export default Page;
