import LetsTalk from '@/components/shared/let-talk';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { fetchSingleType, getStrapiMedia } from '@/lib/strapi';
import { BirdingDetailPage } from '@/types/strapi';

export default async function Page() {
  // Fetch birding detail page data from Strapi
  const birdingData = await fetchSingleType<BirdingDetailPage>('birding-detail-page', '*');

  if (!birdingData) {
    return <div>Error loading birding page data</div>;
  }

  // Get hero background image
  const heroBackgroundImage = getStrapiMedia(birdingData.hero_background_image);

  // Get parallax background image
  const parallaxBackgroundImage = getStrapiMedia(birdingData.parallax_background_image);

  // Get travel purpose image
  const travelPurposeImage = getStrapiMedia(birdingData.travel_purpose_image);

  return (
    <main>
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden mb-[90px]">
        {heroBackgroundImage && (
          <Image
            src={heroBackgroundImage}
            alt={birdingData.hero_title || 'Birding in Bhutan'}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        )}
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{birdingData.hero_title}</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-center my-[24px]">
              {birdingData.main_description}
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold uppercase">
              {birdingData.hero_subtitle}
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <h1 className="text-center">{birdingData.main_title}</h1>
        <p className="lg:px-[240px] text-center font-medium my-6">
          {birdingData.main_description}
        </p>
        <div className="flex flex-col lg:flex-row w-full gap-2 mt-12">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-2">
            {birdingData.essential_info?.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex flex-col">
                {idx % 2 === 0 ? (
                  <div className="relative h-[540px] w-full">
                    {item.section_type === 'image' && item.content && (
                      <Image
                        src={getStrapiMedia({ data: { attributes: { url: item.content } } }) || ''}
                        alt={item.title || ''}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                ) : (
                  <div className="py-10 text-center md:text-left px-4">
                    <h2>{item.title}</h2>
                    <p className="mt-4">{item.description}</p>
                    {item.tagline_1 && (
                      <p className="font-bold text-primary pt-4 uppercase">
                        {item.tagline_1}
                      </p>
                    )}
                  </div>
                )}
                {idx % 2 !== 0 ? (
                  <div className="relative h-[540px] w-full">
                    {item.section_type === 'image' && item.content && (
                      <Image
                        src={getStrapiMedia({ data: { attributes: { url: item.content } } }) || ''}
                        alt={item.title || ''}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                ) : (
                  <div className="py-10 text-center md:text-left px-4">
                    <h2>{item.title}</h2>
                    <p className="mt-4">{item.description}</p>
                    {item.tagline_1 && (
                      <p className="font-bold text-primary pt-4 uppercase">
                        {item.tagline_1}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-2">
            {birdingData.essential_info?.slice(2, 4).map((item, idx) => (
              <div key={idx} className="flex flex-col">
                {idx % 2 !== 0 ? (
                  <div className="relative h-[540px] w-full">
                    {item.section_type === 'image' && item.content && (
                      <Image
                        src={getStrapiMedia({ data: { attributes: { url: item.content } } }) || ''}
                        alt={item.title || ''}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                ) : (
                  <div className="py-10 text-center md:text-left px-4">
                    <h2>{item.title}</h2>
                    <p className="mt-4">{item.description}</p>
                    {item.tagline_2 && (
                      <p className="font-bold text-primary pt-4 uppercase">
                        {item.tagline_2}
                      </p>
                    )}
                  </div>
                )}
                {idx % 2 === 0 ? (
                  <div className="relative h-[540px] w-full">
                    {item.section_type === 'image' && item.content && (
                      <Image
                        src={getStrapiMedia({ data: { attributes: { url: item.content } } }) || ''}
                        alt={item.title || ''}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                ) : (
                  <div className="py-10 text-center md:text-left px-4">
                    <h2>{item.title}</h2>
                    <p className="mt-4">{item.description}</p>
                    {item.tagline_2 && (
                      <p className="font-bold text-primary pt-4 uppercase">
                        {item.tagline_2}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="h-[84vh] w-full">
          <LetsTalk />
        </div>
      </section>

      {parallaxBackgroundImage && (
        <section className="relative w-full h-[80vh] hidden lg:block mb-[90px]">
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('${parallaxBackgroundImage}')`,
              backgroundAttachment: 'fixed',
            }}
          ></div>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
        </section>
      )}

      <section className="flex flex-col lg:flex-row px-[16px] lg:px-[32px] gap-2 mb-[90px] w-full">
        {/* LEFT IMAGE SECTION */}
        <div className="w-full lg:w-[70%] min-h-[40vh] lg:min-h-[80vh] relative">
          {travelPurposeImage && (
            <Image
              src={travelPurposeImage}
              alt={birdingData.travel_purpose_title || 'Travel with Purpose'}
              fill
              className="h-full w-full object-cover"
            />
          )}
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full lg:w-[34.5%] bg-[#111820] p-[24px] flex flex-col justify-between text-white">
          <div>
            <h2 className="uppercase text-white">{birdingData.travel_purpose_title}</h2>

            <div className="mt-[32px] text-[16px]">
              {birdingData.travel_purpose_description?.split('\n\n').map((para, idx) => (
                <p key={idx} className="mb-4 text-white">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-[32px] flex">
            <Link
              className="bg-primary py-2 px-3 text-[20px] font-bold text-white hover:bg-primary/80 transition"
              href={birdingData.travel_purpose_cta_href || '/travel-purpose'}
            >
              {birdingData.travel_purpose_cta_text || 'VIEW DETAILS'}
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-[16px] lg:px-[32px] items-center justify-center gap-2 mb-[90px] w-full">
        <h2 className="text-center">{birdingData.next_level_title}</h2>
        <p className="my-[24px] text-center max-w-4xl font-medium px-4">
          {birdingData.next_level_description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {birdingData.next_level_items?.map((item, idx) => (
            <div key={idx} className="w-full flex flex-col bg-primary overflow-hidden">
              <div className="w-full h-[300px] relative">
                {getStrapiMedia(item.image) && (
                  <Image
                    src={getStrapiMedia(item.image) || ''}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-[24px] text-center flex-1 flex flex-col justify-between items-center text-white">
                <h3 className="mb-4 text-white">{item.title}</h3>
                <p className="mb-6 opacity-90 text-[14px] md:text-[16px]">
                  {item.description}
                </p>
                <div className="w-full flex justify-center mt-auto">
                  <Button className="bg-black rounded-none text-primary font-bold hover:bg-black/90">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
