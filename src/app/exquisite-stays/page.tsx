import BestSelling from '@/components/landing-component/best-selling';
import LetsTalk from '@/components/shared/let-talk';
import { EXQUISITE_STAYS_PAGE_DATA } from '@/lib/data/pages/exquisite-stays.data';
import { getPackageById } from '@/lib/data';
import { PackageCard } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  const {
    hero,
    twoSquareImages,
    horizontalSection,
    luxuryExperience,
    letsTalk,
    parallaxSection,
    natureSection,
    imageBoxPackageIds,
    flagshipSection,
  } = EXQUISITE_STAYS_PAGE_DATA;

  // Get image box packages
  const imageBoxPackages = imageBoxPackageIds
    .map((id) => getPackageById(id))
    .filter((pkg): pkg is PackageCard => pkg !== undefined && !pkg.isBestSelling && !pkg.isOther);

  // Get flagship packages
  const flagshipPackages = flagshipSection.packageIds
    .map((id) => getPackageById(id))
    .filter((pkg): pkg is PackageCard => pkg !== undefined);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden mb-[90px]">
        <Image
          src={hero.backgroundImage}
          alt={hero.title}
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
                {hero.title}
              </h1>
            </div>
            <div className="flex flex-col flex-1 items-center md:items-end justify-center md:justify-end text-center md:text-right">
              {hero.subtitle.split(', ').map((line, idx) => (
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
          {twoSquareImages.map((img) => (
            <div key={img.id} className="aspect-square bg-gray-200">
              <Image
                src={img.src}
                alt={img.alt}
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
            {horizontalSection.images.map((img, idx) => (
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
                  {horizontalSection.title}
                </h1>
                <p className="text-[14px] md:text-[16px] mt-2">
                  {horizontalSection.description}
                </p>
              </div>
              <div>
                <p className="text-sm md:text-[18px] font-bold mt-2">
                  {horizontalSection.tagline}
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
            {luxuryExperience.images.map((img, idx) => (
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
              {luxuryExperience.title.split(', ').map((line, idx) => (
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
              {luxuryExperience.description}
            </p>
            <p className="text-white font-bold font-sans text-base md:text-[18px]">
              {luxuryExperience.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="flex flex-col items-center justify-center my-12 px-4 md:px-[16px] mb-[90px]">
        <div className="h-[84vh] w-full">
          <LetsTalk
            description={letsTalk.description}
            images={letsTalk.image}
          />
        </div>
      </section>

      {/* Parallax Section */}
      <section className="relative w-full h-[80vh] hidden lg:block mb-[90px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${parallaxSection.backgroundImage}')`,
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
            <h1>{natureSection.title}</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-[14px] md:text-[16px] text-center my-[24px]">
              {natureSection.description}
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold">{natureSection.tagline}</span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>

      {/* Grid Section */}
      <section className="px-4 lg:px-[32px] mb-[90px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {imageBoxPackages.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/packages/${pkg.slug}`}
              className="relative flex flex-col items-center justify-center w-full aspect-square text-center overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition duration-300"
                style={{ backgroundImage: `url('${pkg.image.src}')` }}
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
        <h1 className="mb-10">{flagshipSection.title}</h1>
        <BestSelling packages={flagshipPackages} />
      </section>
    </main>
  );
}

export default Page;
