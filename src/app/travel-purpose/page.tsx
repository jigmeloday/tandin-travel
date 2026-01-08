import Image from 'next/image';
import { fetchSingleType, getStrapiMedia } from '@/lib/strapi';
import { TravelPurposePage } from '@/types/strapi';

export default async function Page() {
  // Fetch travel purpose page data from Strapi
  const travelPurposeData = await fetchSingleType<TravelPurposePage>('travel-purpose-page', '*');

  if (!travelPurposeData) {
    return <div>Error loading travel purpose page data</div>;
  }

  // Parse movement_items from string to array
  const movementItems = travelPurposeData.movement_items
    ? travelPurposeData.movement_items.split('\n').filter(item => item.trim())
    : [];

  return (
    <div>
      {/* Hero Section */}
      {travelPurposeData.hero_background_image && (
        <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden mb-[90px]">
          <Image
            src={getStrapiMedia(travelPurposeData.hero_background_image) || ''}
            alt="Travel with Purpose"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/12 via-white/14 to-black/90"></div>
        </section>
      )}

      {/* Main Section */}
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{travelPurposeData.main_title}</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-[14px] lg:text-[16px] text-center my-[24px]">
              {travelPurposeData.main_description}
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold">
              {travelPurposeData.main_subtitle}
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>

      {/* Alternating Sections */}
      {travelPurposeData.alternating_sections && travelPurposeData.alternating_sections.length > 0 && (
        <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px] gap-4">
          {travelPurposeData.alternating_sections.map((item, idx) => (
            <div key={idx} className={`flex md:flex-row flex-col w-full justify-center gap-2 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="border w-full h-[550px]">
                <Image
                  src={getStrapiMedia(item.image) || ''}
                  alt={item.title}
                  className="object-cover h-full w-full"
                  height={500}
                  width={500}
                />
              </div>
              <div className="flex flex-col justify-center md:px-4 md:h-[500px] md:w-full aspect-square">
                <h1>{item.title}</h1>
                <p className='text-[14px] md:text-[16px]'>
                  {item.description}
                </p>
                {item.tagline && (
                  <p className='font-bold mt-4 italic text-[16px] text-primary'>{item.tagline}</p>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Movement Section */}
      {travelPurposeData.movement_title && (
        <section className='px-[16px] lg:px-[32px] mb-[90px]'>
          <div className='flex flex-col items-center justify-center bg-primary w-full py-[24px] md:py-[52px] text-white'>
            <h2 className='text-white uppercase'>{travelPurposeData.movement_title}</h2>
            {movementItems.map((text, idx) => (
              <p key={idx} className='text-[14px] md:text-[16px]'>{text}</p>
            ))}
            {travelPurposeData.movement_tagline && (
              <p className='mt-4 font-bold md:text-[16px] text-black'>{travelPurposeData.movement_tagline}</p>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
