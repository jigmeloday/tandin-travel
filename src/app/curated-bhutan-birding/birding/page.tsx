import LetsTalk from '@/components/shared/let-talk';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { BIRDING_PAGE_DATA } from '@/lib/data';

export default function Page() {
  const {
    hero,
    mainContent,
    essentialInfo,
    parallax,
    travelWithPurpose,
    nextLevelBirding,
    letsTalk,
  } = BIRDING_PAGE_DATA;

  return (
    <main>
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden mb-[90px]">
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt || hero.title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{hero.title}</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-center my-[24px]">
              {mainContent.description}
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold uppercase">
              {hero.subtitle}
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <h1 className="text-center">{mainContent.title}</h1>
        <p className="lg:px-[240px] text-center font-medium my-6">
          {mainContent.description}
        </p>
        <div className="flex flex-col lg:flex-row w-full gap-2 mt-12">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-2">
            {essentialInfo.sections.slice(0, 2).map((item, idx) => (
              <div key={item.id} className="flex flex-col">
                {idx % 2 === 0 ? (
                  <div className="relative h-[540px] w-full">
                    <Image
                      src={item.content}
                      alt={item.title || ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="py-10 text-center md:text-left px-4">
                    <h2>{item.title}</h2>
                    <p className="mt-4">{item.description}</p>
                    <p className="font-bold text-primary pt-4 uppercase">
                      Part of our curated birding experience
                    </p>
                  </div>
                )}
                {idx % 2 !== 0 ? (
                  <div className="relative h-[540px] w-full">
                    <Image
                      src={item.content}
                      alt={item.title || ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="py-10 text-center md:text-left px-4">
                    <h2>{item.title}</h2>
                    <p className="mt-4">{item.description}</p>
                    <p className="font-bold text-primary pt-4 uppercase">
                      Part of our curated birding experience
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-2">
            {essentialInfo.sections.slice(2, 4).map((item, idx) => (
              <div key={item.id} className="flex flex-col">
                {idx % 2 !== 0 ? (
                  <div className="relative h-[540px] w-full">
                    <Image
                      src={item.content}
                      alt={item.title || ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="py-10 text-center md:text-left px-4">
                    <h2>{item.title}</h2>
                    <p className="mt-4">{item.description}</p>
                    <p className="font-bold text-primary pt-4 uppercase">
                      Expert guidance provided
                    </p>
                  </div>
                )}
                {idx % 2 === 0 ? (
                  <div className="relative h-[540px] w-full">
                    <Image
                      src={item.content}
                      alt={item.title || ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="py-10 text-center md:text-left px-4">
                    <h2>{item.title}</h2>
                    <p className="mt-4">{item.description}</p>
                    <p className="font-bold text-primary pt-4 uppercase">
                      Expert guidance provided
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="h-auto md:h-[60vh] w-full">
          <LetsTalk
            images={letsTalk.image}
            description={letsTalk.description}
          />
        </div>
      </section>

      <section className="relative w-full h-[80vh] hidden lg:block mb-[90px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${parallax.backgroundImage}')`,
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
      </section>

      <section className="flex flex-col lg:flex-row px-[16px] lg:px-[32px] gap-2 mb-[90px] w-full">
        {/* LEFT IMAGE SECTION */}
        <div className="w-full lg:w-[70%] min-h-[40vh] lg:min-h-[80vh] relative">
          <Image
            src={travelWithPurpose.image?.src || ''}
            alt={travelWithPurpose.image?.alt || ''}
            fill
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full lg:w-[34.5%] bg-[#111820] p-[24px] flex flex-col justify-between text-white">
          <div>
            <h2 className="uppercase text-white">{travelWithPurpose.title}</h2>

            <div className="mt-[32px] text-[16px]">
              {travelWithPurpose.description.split('\n\n').map((para, idx) => (
                <p key={idx} className="mb-4 text-white">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-[32px] flex">
            <Link
              className="bg-primary py-2 px-3 text-[20px] font-bold text-white hover:bg-primary/80 transition"
              href={travelWithPurpose.cta?.href || '/travel-purpose'}
            >
              {travelWithPurpose.cta?.text || 'VIEW DETAILS'}
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-[16px] lg:px-[32px] items-center justify-center gap-2 mb-[90px] w-full">
        <h2 className="text-center">{nextLevelBirding.title}</h2>
        <p className="my-[24px] text-center max-w-4xl font-medium px-4">
          Continue your exploration with our other related adventures, each
          crafted to showcase Bhutan’s rugged beauty, cultural depth, and
          pristine wilderness—perfect for birders seeking powerful experiences,
          breathtaking landscapes, and meaningful moments beyond the main
          journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {nextLevelBirding.items.map((item) => (
            <div key={item.id} className="w-full flex flex-col bg-primary overflow-hidden">
              <div className="w-full h-[300px] relative">
                 <Image
                  src={item.image || ''}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
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
