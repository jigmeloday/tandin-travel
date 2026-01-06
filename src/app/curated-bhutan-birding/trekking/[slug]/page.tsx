import LetsTalk from '@/components/shared/let-talk';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import SideSelling from '../../components/slider';
import { fetchBySlug, fetchCollection, fetchAllSlugs, getStrapiMedia } from '@/lib/strapi';
import { Trek, Package } from '@/types/strapi';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await fetchAllSlugs('trek');
  return slugs.map((slug) => ({ slug }));
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params as { slug: string };

  // Fetch trek data from Strapi
  const trek = await fetchBySlug<Trek>('trek', slug, '*');

  if (!trek) {
    notFound();
  }

  // Fetch best-selling packages for the slider
  const bestSellingPackages = await fetchCollection<Package>('packages', {
    filters: { is_best_selling: true },
    populate: '*',
    pagination: { pageSize: 5 },
  });

  // Transform packages for SideSelling component
  const sliderPackages = bestSellingPackages.map((pkg) => ({
    id: pkg.slug,
    title: pkg.title,
    image: getStrapiMedia(pkg.image) || '/images/placeholder.jpg',
  }));

  // Fetch all other treks (excluding current)
  const allTreks = await fetchCollection<Trek>('treks', {
    populate: ['image'],
  });
  const otherTreks = allTreks.filter(t => t.slug !== slug).slice(0, 5);
  return (
    <main>
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden mb-[90px]">
        <Image
          src={getStrapiMedia(trek.image) || '/images/placeholder.jpg'}
          alt={trek.title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">
            {trek.title}
          </h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{trek.title}</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-center my-[24px]">
              {trek.description || `Explore the majestic ${trek.title} and discover Bhutan's pristine wilderness.`}
            </p>
          </div>
          {trek.subtitle && (
            <div className="lg:min-w-[250px]">
              <span className="font-bold uppercase">
                {trek.subtitle}
              </span>
            </div>
          )}
        </div>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center px-[16px] lg:px-[32px] mb-[90px] gap-2">
        <div className="flex-1 h-[362px] w-full md:w-[50%]">
          <SideSelling packages={sliderPackages} />
        </div>
        <div className="flex-1 w-full space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-2 border p-4 bg-primary text-white">
              <h3 className="text-white">Best Season</h3>
              <p className="text-white font-medium">
                {trek.best_season || 'Year-round'}
              </p>
            </div>
            <div className="flex-1 border p-4 bg-primary text-center text-white">
              <h3 className="text-white">Altitude</h3>
              {trek.altitude_high && (
                <p className="text-white font-medium">High: {trek.altitude_high}</p>
              )}
              {trek.altitude_low && (
                <p className="text-white font-medium">Low: {trek.altitude_low}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 border bg-primary py-6 px-4 text-center text-white">
              <h3 className="text-white">Duration</h3>
              <p className="text-white font-medium">{trek.duration || 'N/A'}</p>
            </div>
            <div className="flex-1 border bg-primary py-6 px-4 text-center text-white">
              <h3 className="text-white">Grade</h3>
              <p className="text-white font-medium">{trek.grade || 'Moderate'}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <h1 className="text-center">Essential Information</h1>
        <p className="lg:px-[240px] text-center font-medium my-6">
          {trek.description || `The ${trek.title} is one of Bhutan's most legendary high-altitude adventures. To help you prepare, here are the key things every traveler must know before embarking on this once-in-a-lifetime journey.`}
        </p>
        {trek.essential_info && trek.essential_info.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-6">
            {trek.essential_info.map((info, index) => (
              <div
                key={index}
                className="w-full border bg-primary p-4 lg:p-[24px] flex flex-col items-center justify-center text-white"
              >
                <h2 className="text-white text-center">{info.title}</h2>
                <p className="text-center font-medium lg:px-[46px] my-6">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="h-[84vh] w-full">
          <LetsTalk />
        </div>
      </section>
      <section className="relative w-full h-[80vh] hidden lg:block mb-[90px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${getStrapiMedia(trek.image) || '/images/placeholder.jpg'}')`,
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
      </section>
      <section className="flex flex-col lg:flex-row px-[16px] lg:px-[32px] gap-2 mb-[90px]">
        {/* LEFT IMAGE SECTION */}
        <div className="w-full lg:w-[70%] min-h-[40vh] lg:min-h-[80vh] relative">
          <Image
            src={getStrapiMedia(trek.image) || '/images/placeholder.jpg'}
            alt="Travel with Purpose"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full lg:w-[34.5%] bg-[#111820] p-[24px] flex flex-col justify-between">
          <div>
            <h2 className="text-white">Travel with Purpose</h2>
            <p className="text-white text-[16px] mt-[32px]">
              Every journey is crafted entirely around you, blending seamless planning with rare, meaningful encounters.
            </p>
            <p className="text-white text-[16px] mt-[32px]">
              Each experience unfolds with thoughtful detail—from the first welcome to the quiet moments in nature—creating memories that linger long after you return home.
            </p>
          </div>

          <div className="mt-[32px] flex">
            <Link
              className="bg-primary py-2 px-3 text-[20px] font-bold text-white"
              href="/travel-purpose"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col px-[16px] lg:px-[32px] items-center justify-center gap-2 mb-[90px]">
        <h2>Next-Level Adventures</h2>
        <p className="my-[24px] text-center px-4 md:px-[142px]">
          Discover more extraordinary treks through Bhutan&apos;s pristine landscapes. Each trek offers unique challenges, breathtaking views, and unforgettable experiences in the heart of the Himalayas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
          {otherTreks.slice(0, 3).map((otherTrek) => (
            <div key={otherTrek.slug} className="w-full flex flex-col h-full bg-primary overflow-hidden">
               <Link href={`/curated-bhutan-birding/trekking/${otherTrek.slug}`} className="w-full h-[400px] relative">
                <Image
                  src={getStrapiMedia(otherTrek.image) || '/images/placeholder.jpg'}
                  alt={otherTrek.title}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="p-[24px] flex-1 flex flex-col">
                <h3 className="text-white text-center">{otherTrek.title}</h3>
                <p className='my-4 text-center flex-1'>
                  {otherTrek.description || `Explore the majestic ${otherTrek.title} and discover Bhutan's pristine wilderness.`}
                </p>
                <div className="w-full flex justify-center mt-auto">
                  <Link href={`/curated-bhutan-birding/trekking/${otherTrek.slug}`}>
                    <Button className='bg-black rounded-none text-primary font-bold'>VIEW DETAILS</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-2">
          {otherTreks.slice(3, 5).map((otherTrek) => (
             <div key={otherTrek.slug} className="w-full flex flex-col h-full bg-primary overflow-hidden">
               <Link href={`/curated-bhutan-birding/trekking/${otherTrek.slug}`} className="w-full h-[400px] md:h-[540px] relative">
                <Image
                  src={getStrapiMedia(otherTrek.image) || '/images/placeholder.jpg'}
                  alt={otherTrek.title}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="p-[24px] flex-1 flex flex-col">
                <h3 className="text-white text-center">{otherTrek.title}</h3>
                <p className='my-4 text-center flex-1'>
                  {otherTrek.description || `Explore the majestic ${otherTrek.title} and discover Bhutan's pristine wilderness.`}
                </p>
                <div className="w-full flex justify-center mt-auto">
                  <Link href={`/curated-bhutan-birding/trekking/${otherTrek.slug}`}>
                    <Button className='bg-black rounded-none text-primary font-bold'>VIEW DETAILS</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Page;
