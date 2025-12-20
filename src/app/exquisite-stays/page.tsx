import BestSelling from '@/components/landing-component/best-selling';
import LetsTalk from '@/components/shared/let-talk';
import { EXQUISITE_STAYS_PAGE_DATA, getPackageById } from '@/lib/data';
import { PackageCard } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const {
    hero,
    imageGrid,
    horizontalSection,
    luxuryExperience,
    imageBoxPackageIds,
    flagshipPackageIds,
    letsTalk,
  } = EXQUISITE_STAYS_PAGE_DATA;

  const imageBoxPackages = imageBoxPackageIds
    .map((id) => getPackageById(id))
    .filter((pkg): pkg is PackageCard => pkg !== undefined);

  const flagshipPackages = flagshipPackageIds
    .map((id) => getPackageById(id))
    .filter((pkg): pkg is PackageCard => pkg !== undefined);

  return (
    <main>
      <section className="h-[60vh] lg:h-screen w-full relative overflow-hidden mb-[90px]">
        <Image
          src={hero.backgroundImage}
          alt={hero.title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full h-full px-4 md:px-[50px] pb-4 md:pb-[40px]">
            <div className="flex flex-1 items-center justify-center md:justify-start mb-4 md:mb-0">
              <h1 className="text-4xl md:text-[80px] font-bold drop-shadow-lg text-center md:text-left text-white">
                {hero.title}
              </h1>
            </div>
            <div className="flex flex-col flex-1 items-center md:items-end justify-center md:justify-end text-center md:text-right text-white">
              <p className="text-xl md:text-[40px] font-sans">
                {hero.subtitle.split(',')[0]}
              </p>
              <p className="text-xl md:text-[40px] font-sans">
                {hero.subtitle.split(',')[1] || ''}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-[32px] mb-[90px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {imageGrid.map((item) => (
            <div key={item.id} className="relative aspect-square">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 lg:px-[32px] mb-[90px]">
        <div className="bg-[#111820] w-full p-6 md:p-12 text-white">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="flex-1">
              <h2 className="text-white text-3xl md:text-4xl">
                {horizontalSection.title}
              </h2>
              <div className="w-[60px] h-1 bg-primary my-6" />
              <p className="text-primary font-bold uppercase">
                {horizontalSection.tagline}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-white text-[14px] md:text-[16px]">
                {horizontalSection.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {horizontalSection.images.map((img, idx) => (
              <div key={idx} className="relative h-[250px] md:h-[350px]">
                <Image
                  src={img}
                  alt="Luxury Stay"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-[32px] mb-[90px]">
        <div className="flex flex-col lg:flex-row gap-2">
          {luxuryExperience.images.slice(0, 2).map((img, idx) => (
            <div key={idx} className="flex-1 relative h-[400px] lg:h-[600px]">
              <Image
                src={img}
                alt="Luxury Experience"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="bg-[#111820] p-8 lg:p-16 text-center text-white mt-2">
          <p className="max-w-4xl mx-auto text-lg md:text-xl font-medium">
            {luxuryExperience.description}
          </p>
        </div>
      </section>

      <section className="px-4 lg:px-[32px] mb-[90px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {imageBoxPackages.map((pkg) => (
            <div key={pkg.id} className="relative aspect-square group overflow-hidden">
              <Image
                src={pkg.image.src}
                alt={pkg.image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white mb-2">{pkg.title}</h3>
                <p className="text-white text-sm line-clamp-2">{pkg.description}</p>
                <Link
                  href={`/packages/${pkg.slug}`}
                  className="mt-6 bg-primary px-6 py-2 text-white font-bold hover:bg-primary/80 transition"
                >
                  VIEW DETAIL
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship Section */}
      <section className="flex flex-col justify-center items-center text-center mb-[90px]">
        <h1 className="mb-10">Flagship Signature Journey</h1>
        <BestSelling packages={flagshipPackages} />
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
