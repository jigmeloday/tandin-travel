import BestSelling from '@/components/landing-component/best-selling';
import LetsTalk from '@/components/shared/let-talk';
import { CULTURE_WELLNESS_PAGE_DATA, getPackageById } from '@/lib/data';
import { PackageCard } from '@/lib/types';
import Image from 'next/image';

function Page() {
  const {
    hero,
    bhutanFromAbove,
    gridCards,
    heroImages,
    parallax,
    signatureTours,
    freedomSection,
    letsTalk,
  } = CULTURE_WELLNESS_PAGE_DATA;

  const signaturePackages = signatureTours.packageIds
    .map((id) => getPackageById(id))
    .filter((pkg) => pkg !== undefined);

  return (
    <main>
      {/* Hero Section */}
      <section className="h-screen w-full overflow-hidden relative mb-[90px]">
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt || hero.title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full h-full px-4 md:px-[50px] pb-4 md:pb-[40px]">
            <div className="flex flex-1 items-center justify-center md:justify-start mb-4 md:mb-0">
              <h1 className="text-4xl md:text-[80px] font-bold drop-shadow-lg text-center md:text-left text-white">
                {hero.title}
              </h1>
            </div>
            <div className="flex flex-col flex-1 items-center md:items-end justify-center md:justify-end text-center md:text-right text-white">
              <p className="text-xl md:text-[40px] font-sans">
                {(hero.subtitle || '').split(',')[0]}
              </p>
              <p className="text-xl md:text-[40px] font-sans">
                {(hero.subtitle || '').split(',')[1] || ''}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="flex flex-col items-center justify-center px-4 md:px-8 mb-[90px]">
        <div className="border-[0.5px] border-primary h-20 mb-10" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1 className="text-2xl md:text-4xl font-semibold">
              {bhutanFromAbove.title}
            </h1>
          </div>
          <div className="w-full px-4 md:px-[100px] lg:px-[200px]">
            <p className="text-[14px] md:text-[16px] my-6">
              {bhutanFromAbove.description}
            </p>
          </div>
          <div className="md:min-w-[250px]">
            <span className="font-bold text-lg md:text-xl uppercase">
              {bhutanFromAbove.tagline}
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-20 mt-10" />
      </section>

      {/* Grid Cards Section */}
      <section className="px-4 md:px-8 mb-[90px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {gridCards.map((card) => (
            <div
              key={card.id}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white text-xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-sm">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 h-auto md:h-[60vh]">
          {heroImages.map((img, idx) => (
            <div key={idx} className="relative h-[300px] md:h-full">
              <Image
                src={img}
                alt="Culture & Wellness"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Parallax Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] hidden lg:block mb-[90px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${parallax.backgroundImage}')`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-white text-center px-4 w-full md:w-[800px]">
            <h1 className="text-white mb-6 font-bold">{parallax.title}</h1>
            <p className="text-white text-lg md:text-xl font-medium">
              {parallax.description}
            </p>
          </div>
        </div>
      </section>

      {/* Signature Journeys */}
      <section className="flex flex-col items-center justify-center mb-[90px] px-4 md:px-8">
        <h1 className="mb-10 text-center">{signatureTours.title}</h1>
        <BestSelling
          packages={signaturePackages.filter((p): p is PackageCard => p !== undefined)}
        />
      </section>

      {/* Freedom Section */}
      <section className="px-4 lg:px-[32px] mb-[90px]">
        <div className="bg-[#111820] w-full p-6 md:p-12 text-white">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="flex-1">
              <h2 className="text-white text-3xl md:text-4xl leading-tight">
                {freedomSection.title.split(' ').slice(0, 2).join(' ')} <br />{' '}
                {freedomSection.title.split(' ').slice(2).join(' ')}
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-white text-[14px] md:text-[16px]">
                {freedomSection.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {freedomSection.images.map((img, idx) => (
              <div key={idx} className="relative h-[250px] md:h-[350px]">
                <Image
                  src={img}
                  alt="Freedom and Independence"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="px-4 lg:px-[32px] mb-[90px]">
        <div className="h-auto md:h-[70vh] w-full">
          <LetsTalk
            description={letsTalk.description}
            images={letsTalk.image}
          />
        </div>
      </section>
    </main>
  );
}

export default Page;
