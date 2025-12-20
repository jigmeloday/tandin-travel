import BestSelling from '@/components/landing-component/best-selling';
import HeroSwapper from '@/components/landing-component/hero-swapper';
import SliderComponent from '@/components/landing-component/slider';
import ImageBox from '@/components/shared/image-box';
import LetsTalk from '@/components/shared/let-talk';
import { HOME_PAGE_DATA } from '@/lib/data/pages/home.data';
import { HERO_SLIDES, TOUR_TYPES, getPackageById, getImageBoxPackages } from '@/lib/data';
import { PackageCard, TourType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { introduction, tourTypes, flagshipSection, processSection, featuredPackages, parallaxSection, promiseSection, travelWithPurpose, blogSection, curatedBirding, letsTalk } = HOME_PAGE_DATA;

  // Get best selling packages for flagship section
  const bestSellingPackages = flagshipSection.packageIds.map(id => getPackageById(id)).filter((pkg): pkg is PackageCard => pkg !== undefined);

  // Get featured packages for the grid
  const primaryPackage = getPackageById(featuredPackages.primary);
  const gridPackages = featuredPackages.grid.map(id => getPackageById(id)).filter((pkg): pkg is PackageCard => pkg !== undefined);

  // Get image box packages
  const imageBoxes = getImageBoxPackages();

  // Get tour types
  const tourTypeItems = tourTypes.map(id => TOUR_TYPES.find(t => t.id === id)).filter((tour): tour is TourType => tour !== undefined);

  return (
    <main>
      <section className="h-screen w-full overflow-hidden">
        <HeroSwapper slides={HERO_SLIDES} />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{introduction.title}</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-center my-[24px]">
              {introduction.description}
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold">
              {introduction.tagline}
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
      <section className="px-[32px] mb-[90px]">
        <div className="grid lg:grid-cols-3 lg:gap-2 gap-3 w-full mb-5">
          {tourTypeItems.map((tourType, idx) => (
            <Link
              href={tourType.link}
              key={idx}
              className="relative w-full aspect-square text-center overflow-hidden group cursor-pointer"
            >
              <Image
                src={tourType.image.src}
                alt={tourType.image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
                <h4 className="relative inline-block text-white after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/80 after:transition-all after:duration-300 after:ease-out group-hover:after:left-0 group-hover:after:w-full">
                  {tourType.title}
                </h4>
                <span className="text-[14px] lg:text-[16px] text-white">
                  {tourType.subtitle}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-center mb-[90px]">
        <h1 className="mb-8">{flagshipSection.title}</h1>
        <BestSelling packages={bestSellingPackages} />
      </section>
      <section className="flex flex-col justify-center items-center text-center px-[16px] lg:px-[32px] scrollbar-hide mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <h1>{processSection.title}</h1>
        <div className="md:w-[840px]">
          <p>
            {processSection.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 items-start justify-center  my-[40px] gap-4">
          {processSection.steps.map(({ id, title, description, icon }) => {
            const IconComponent = icon;
            return (
              <div
                key={id}
                className="flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center size-[60px] rounded-full bg-primary">
                  <IconComponent className="text-white" />
                </div>
                <p className="mt-4 text-[16px] text-primary font-bold">
                  0{id}. {title}
                </p>
                <div className="md:w-[300px]">
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Link href={processSection.cta.href} className="px-[24px] py-[12px] bg-primary text-white text-2xl cursor-pointer">
          {processSection.cta.text}
        </Link>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
      <section className="px-[16px] lg:px-[32px] mb-[90px]">
        <div className="flex flex-col lg:flex-row w-full mt-[40px] mb-2 h-[550px]">
          <div className="lg:flex-3">
            <Image
              src={primaryPackage?.image.src || ''}
              alt={primaryPackage?.image.alt || 'img'}
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between flex-1 px-[24px] py-[42px] text-white bg-[#111820]">
            <div>
              <span className="font-extrabold text-[18px]">{primaryPackage?.title}</span>
              <h3>{primaryPackage?.subtitle}</h3>
              <span className="text-[14px] lg:text-[16px]">
                {primaryPackage?.description}
              </span>
            </div>
            <Link
              href={`/packages/${primaryPackage?.slug}`}
              className="bg-primary w-fit px-[16px] py-[8px] cursor-pointer"
            >
              VIEW DETAILS
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col lg:flex-row gap-2 items-stretch">
            {gridPackages.slice(0, 2).map((pkg: PackageCard, idx) => (
              <div key={pkg.id} className={`border w-full ${idx === 0 ? 'lg:flex-[1]' : 'lg:flex-[2]'} flex flex-col`}>
                <div className="h-[70vh]">
                  <Image
                    src={pkg.image.src}
                    alt={pkg.image.alt}
                    height={1000}
                    width={1000}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="bg-[#111820] text-white p-5 flex flex-col flex-1">
                  <p className="font-extrabold text-[18px]">{pkg.category}</p>
                  <h3>{pkg.subtitle || pkg.title}</h3>
                  <p className="text-[16px]">
                    {pkg.description}
                  </p>
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="py-2 px-4 bg-primary mt-6 w-fit"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-2 items-stretch">
            {gridPackages.slice(2, 4).map((pkg: PackageCard, idx) => (
              <div key={pkg.id} className={`border w-full ${idx === 0 ? 'lg:flex-[2]' : 'lg:flex-[1]'} flex flex-col`}>
                <div className="h-[70vh]">
                  <Image
                    src={pkg.image.src}
                    alt={pkg.image.alt}
                    height={1000}
                    width={1000}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="bg-[#111820] text-white p-5 flex flex-col flex-1">
                  <p className="font-extrabold text-[18px]">{pkg.category}</p>
                  <h3 className="text-2xl lg:text-3xl font-extrabold">
                    {pkg.subtitle || pkg.title}
                  </h3>
                  <p className="text-[16px]">
                    {pkg.description}
                  </p>
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="py-2 px-4 bg-primary mt-6 w-fit"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative w-full h-[80vh] hidden lg:block mb-[90px] border">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
          style={{
            backgroundImage: `url('${parallaxSection.backgroundImage}')`,
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Text content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
          <h1 className='text-white'>{parallaxSection.title}</h1>
          <p className='px-[112px] text-center font-bold'>{parallaxSection.description}</p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[780px]">
            <h1>{promiseSection.title}</h1>
          </div>
          <div className="lg:w-[900px]">
            <p className="text-[14px] lg:text-[16px] text-center my-[24px]">
              {promiseSection.description}
            </p>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
      <section className="grid lg:grid-cols-3 px-[16px] lg:px-[32px] gap-2 mb-[90px]">
        {imageBoxes.map((pkg) => (
          <ImageBox
            id={pkg.slug}
            key={pkg.id}
            image={pkg.image.src}
            label={pkg.title || ''}
            subtitle={pkg.subtitle}
          />
        ))}
      </section>
      <section className="flex flex-col lg:flex-row px-[16px] lg:px-[32px] mb-[90px] gap-2">
        {/* LEFT IMAGE SECTION */}
        <div className="w-full lg:w-[70%] min-h-[40vh] lg:min-h-[80vh] bg-black/70">
          <Image
            src={travelWithPurpose.image?.src || ''}
            alt={travelWithPurpose.image?.alt || 'img'}
            height={1000}
            width={1000}
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full lg:w-[34.5%] bg-[#111820] p-[24px] flex flex-col justify-between">
          <div>
            <h2>{travelWithPurpose.title}</h2>

            {travelWithPurpose.description.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-white text-[16px] mt-[32px]">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-[32px] flex">
            <Link
              className="bg-primary py-2 px-3 text-[20px] font-bold text-white"
              href={travelWithPurpose.cta?.href || '/travel-purpose'}
            >
              {travelWithPurpose.cta?.text || 'VIEW DETAILS'}
            </Link>
          </div>
        </div>
      </section>
      <section className="my-[42px] px-[16px] lg:px-[32px]">
        <SliderComponent />
      </section>
      <section className="flex flex-col items-center justify-center my-[90px] lg:px-[32px] px-[16px]">
        <h1 className="text-3xl font-bold">{blogSection.title}</h1>
        <p className="font-bold mt-2">
          {blogSection.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-2 mt-[40px]">
          {blogSection.posts.map((post) => (
            <div
              key={post.id}
              className="relative w-full aspect-square flex items-center justify-center overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `url(${post.image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
              <div className="relative text-center text-white">
                <h4 className="text-xl font-bold text-white relative inline-block after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary after:mx-auto after:transition-all after:duration-500 delay-75 group-hover:after:w-full">
                  {post.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
        <section className="flex flex-col lg:flex-row px-[16px] lg:px-[32px] mb-[90px] gap-2">
        {/* LEFT IMAGE SECTION */}
        <div className="w-full lg:w-[70%] min-h-[40vh] lg:min-h-[80vh] bg-black/70">
          <Image
            src={curatedBirding.image?.src || ''}
            alt={curatedBirding.image?.alt || 'img'}
            height={1000}
            width={1000}
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full lg:w-[34.5%] bg-[#111820] p-[24px] flex flex-col justify-between">
          <div>
            <h3 className='leading-[32px]'>{curatedBirding.title}</h3>

            {curatedBirding.description.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-white text-[16px] mt-[32px]">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-[32px] flex">
            <Link
              className="bg-primary py-2 px-3 text-[20px] font-bold text-white"
              href={curatedBirding.cta?.href || '/curated-bhutan-birding'}
            >
              {curatedBirding.cta?.text || 'VIEW DETAILS'}
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-[90px] px-[32px]">
        <div className="h-[70vh] ">
          <LetsTalk
            images={letsTalk.image}
            description={letsTalk.description}
          />
        </div>
      </section>
    </main>
  );
}
