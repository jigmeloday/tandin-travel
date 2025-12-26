import LetsTalk from '@/components/shared/let-talk';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import SideSelling from './components/slider';
import { fetchSingleType, fetchCollection, getStrapiMedia } from '@/lib/strapi';
import { CuratedBirdingPage, Trek, Package } from '@/types/strapi';

export default async function Page() {
  // Fetch curated birding page data from Strapi
  const birdingData = await fetchSingleType<CuratedBirdingPage>('curated-birding-page', '*');

  if (!birdingData) {
    return <div>Error loading page data</div>;
  }

  // Fetch best-selling packages for the slider
  const bestSellingPackages = await fetchCollection<Package>('package', {
    filters: { is_best_selling: true },
    populate: '*',
    pagination: { pageSize: 5 },
  });

  // Extract treks from relations (Strapi v5 format)
  const getawayTreks = Array.isArray(birdingData.treks)
    ? birdingData.treks
    : [];

  // Transform packages for SideSelling component
  const sliderPackages = bestSellingPackages.map((pkg) => ({
    id: pkg.slug,
    title: pkg.title,
    image: getStrapiMedia(pkg.image) || '/images/placeholder.jpg',
  }));

  return (
    <main>
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden">
        <Image
          src={getStrapiMedia(birdingData.hero_background_image) || '/images/placeholder.jpg'}
          alt={birdingData.hero_title || 'Curated Birding'}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">
            {birdingData.hero_title || 'Curated Bhutan Birding'}
          </h1>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-[24px] px-[16px] lg:px-[32px] mt-[90px]">
        <div className="flex-2">
          <h1 className="leading-[52px]">
            {birdingData.main_title || 'Discover Rare Avian Wonders'}
          </h1>
          <p className="my-[24px] font-medium">
            {birdingData.main_subtitle || 'Explore Bhutan\'s pristine birding destinations'}
          </p>
          <Button className="rounded-none">{birdingData.main_cta_text || 'EXPLORE MORE'}</Button>
        </div>
        <div className="flex-1 w-full !h-[400px] lg:w-[422px] lg:h-[500px]">
          <SideSelling packages={sliderPackages} />
        </div>
      </section>

      <section className="gap-[50px] px-[16px] lg:px-[32px] mt-[90px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {birdingData.grid_boxes?.map((item, idx) => (
            <div
              key={idx}
              className={`aspect-square border flex flex-col items-center justify-center px-[42px] text-center ${
                idx % 2 === 0 ? 'bg-primary ' : 'bg-black text-white'
              }`}
            >
              <h1
                className={`leading-[52px] ${
                  idx % 2 === 0 ? 'text-black' : 'text-white'
                }`}
              >
                {item.title}
              </h1>
              <div
                className={`border w-[50%] my-[24px] ${
                  idx % 2 === 0 ? 'border-black' : 'border-white'
                }`}
              />
              <p className="font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {birdingData.grid_boxes && birdingData.grid_boxes.length >= 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-2">
            {birdingData.grid_boxes.slice(0, 2).map((item, idx) => (
              <div key={idx} className="relative h-[400px] lg:aspect-square border">
                <Image
                  src={getStrapiMedia(item.image) || '/images/placeholder.jpg'}
                  alt={item.title}
                  fill
                  className="h-full w-full object-cover opacity-[0.8]"
                />
                <div className="absolute bottom-0 px-[24px] text-white p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                  <h3 className="text-white">{item.title}</h3>
                  <p className="text-white text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex flex-col items-center justify-center lg:px-4 text-center">
              <h1 className="leading-[52px]">
                {birdingData.main_title || 'Discover Rare Avian Wonders'}
              </h1>
              <p className="my-6 text-[18px] font-medium">
                {birdingData.main_subtitle || 'Explore Bhutan\'s pristine birding destinations'}
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mt-[90px]">
        <h1 className='text-center'>{birdingData.getaways_title || 'Trekking Getaways'}</h1>
        <p className="lg:px-[240px] text-center font-medium my-6">
          {birdingData.getaways_description || 'Explore our curated trekking experiences'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-6">
          {getawayTreks.map((trek: any) => (
            <Link href={`/curated-bhutan-birding/trekking/${trek.slug}`} key={trek.slug} className="w-full border group">
              <div className="h-[560px] relative overflow-hidden">
                <Image
                  src={getStrapiMedia(trek.image) || '/images/placeholder.jpg'}
                  fill
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={trek.title}
                />
              </div>
              <div className="bg-primary p-4 lg:p-[24px] flex flex-col items-center justify-center">
                <h2 className="text-white text-center">{trek.title}</h2>
                <p className='text-center font-medium lg:px-[46px] my-6 text-white'>
                  {trek.description || `Explore the ${trek.title}`}
                </p>
                <Button className='bg-black rounded-none text-primary font-bold hover:bg-black/80 transition-colors'>View Details</Button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col lg:flex-row px-[16px] lg:px-[32px] mt-[90px] gap-2">
        {/* LEFT IMAGE SECTION */}
        <div className="w-full lg:w-[70%] min-h-[40vh] lg:min-h-[80vh] relative">
          <Image
            src={getStrapiMedia(birdingData.travel_purpose_image) || '/images/placeholder.jpg'}
            alt={birdingData.travel_purpose_title || 'Travel with Purpose'}
            fill
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full lg:w-[34.5%] bg-[#111820] p-[24px] flex flex-col justify-between">
          <div>
            <h2 className="text-white uppercase">{birdingData.travel_purpose_title || 'Travel with Purpose'}</h2>

            <p className="text-white text-[16px] mt-[32px]">
              {birdingData.travel_purpose_description || 'Every journey is crafted with intention and care.'}
            </p>
          </div>

          <div className="mt-[32px] flex">
            <Link
              className="bg-primary py-2 px-3 text-[20px] font-bold text-white hover:bg-primary/80 transition-colors"
              href={birdingData.travel_purpose_cta_href || '/travel-purpose'}
            >
              {birdingData.travel_purpose_cta_text || 'LEARN MORE'}
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center my-[90px] px-[16px] lg:px-[32px]">
        <div className="h-[84vh] w-full">
          <LetsTalk />
        </div>
      </section>
    </main>
  );
}
