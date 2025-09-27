import BestSelling from '@/components/landing-component/best-selling';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <main>
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/hotel/h5.jpg"
          alt="Bespoke Journey"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        {/* White → Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/12 via-white/14 to-black/90"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex w-full h-full px-[50px] pb-[40px]">
            <div className="flex flex-1 items-center">
              <h1 className="text-[80px] font-bold drop-shadow-lg">
                Six Sense
              </h1>
            </div>
            <div className="flex flex-col flex-1 items-end justify-end">
              <p className="text-white text-[40px] font-sans">
                Exclusive Journeys, Inspired by
              </p>
              <p className="text-white text-[40px] font-sans">
                Bhutan’s Spirit
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[16px] lg:px-[32px] my-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          <div className="aspect-square bg-gray-200">
            <Image
              src="/images/hotel/h2.jpg"
              alt="Exquisite Stays"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-gray-200">
            <Image
              src="/images/hotel/h1.jpg"
              alt="Exquisite Stays"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex w-full mt-[12px] gap-[24px]">
          <div className="flex flex-1 gap-4">
            <div className="w-full h-[440px] bg-gray-200">
              <Image
                src="/images/hotel/h4.jpg"
                alt="Exquisite Stays"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[440px] bg-gray-200">
              <Image
                src="/images/hotel/h3.jpg"
                alt="Exquisite Stays"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="relative flex-1">
            <div className="flex flex-col justify-between h-full p-2">
              <div className="w-[80%]">
                <h1>Enjoy Your Dream Vacation</h1>
                <p className="text-[24px]">
                  Nestled in Bhutan’s serene landscapes, Six Senses invites you
                  to relax, explore, and savor every moment of luxurious,
                  mindful living.
                </p>
              </div>
              <div>
                <p className="text-[18px] font-bold">
                  ESCAPE ORDINARY, ENTER EXTRAORDINARY
                </p>
              </div>
            </div>
            <div className="absolute -bottom-2 right-0 w-[64%] border-b-4 border-primary rounded-full" />
          </div>
        </div>
      </section>
      <section className="w-full h-[70vh] bg-black">
        <div className="flex h-full">
          <div className="flex-1 h-full">
            <div className="relative w-full h-full flex items-center justify-center gap-4">
              <div className="transform translate-y-6">
                <Image
                  src="/images/hotel/h4.jpg"
                  alt="Exquisite Stays"
                  width={800}
                  height={1080}
                  className="w-[240px] h-[430px] object-cover"
                />
              </div>

              {/* Right Image - slightly down */}
              <div className="transform -translate-y-6">
                <Image
                  src="/images/hotel/h3.jpg"
                  alt="Exquisite Stays"
                  width={800}
                  height={1080}
                  className="w-[240px] h-[430px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 p-[32px] lg:p-[64px] flex-1">
            <div>
              <h1 className="mb-0 leading-[1.2]">Luxury Experience You’ll</h1>
              <h1 className="leading-[1.2] border-b-4 border-white pb-2 w-fit">
                Remember
              </h1>
            </div>
            <p className="text-white text-[32px]">
              Combine helicopter journeys with sustainable luxury lodges,
              curated local cuisine, and intimate cultural experiences for a
              fully bespoke Bhutanese exploration.
            </p>
            <p className="text-white font-bold font-sans text-[20px]">
              YOU ARE BHUTANA AND OTES EHTE
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center my-[80px] lg:px-[32px] px-[16px]">
        <div className="bg-black w-full p-[24px]">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-3">
              <h1>Let’s Talk</h1>
            </div>
            <div className="flex-2">
              <p className="text-white text-[24px] leading-relaxed">
                We love challenges big and small—what’s yours? Let’s craft
                unique journeys that turn bold ideas into unforgettable travel
                experiences.
              </p>
            </div>
          </div>
          <div
            className="w-full mt-[32px] h-[540px] flex items-center justify-center relative group cursor-pointer overflow-hidden"
            style={{
              backgroundImage: "url('/images/dummy/img8.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
            <h4 className="relative z-10 text-white inline-block after:content-[''] after:block after:h-[2px] after:w-0 after:bg-white after:mx-auto after:transition-all after:duration-300 group-hover:after:w-full">
              Connect Now – We’ll throw in enlightenment
            </h4>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[80vh] hidden lg:block">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/dummy/img1.jpg')",
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>Where Nature Meets Nirvana</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-[18px] lg:text-[32px] text-center my-[24px]">
              Every journey is crafted entirely around you, blending seamless
              planning with rare, meaningful encounters. Each experience unfolds
              with thoughtful detail—from the first welcome to the quiet moments
              in nature—creating memories that linger long after you return home
              and leaving a gentle, positive imprint on the places you visit.
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold">
              EVERY JOURNEY TELLS A STORY – FIND THE ONE THAT’S YOURS
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>
      <section className="px-[16px] lg:px-[32px] my-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {[
            {
              id: 1,
              img: 'img1',
              title: 'BESPOKE JOURNEY',
              subtitle: 'Your story, perfectly tailored',
              link: '/bespoke-journey',
            },
            {
              id: 2,
              img: 'img2',
              title: 'EXQUISITE STAYS',
              subtitle: 'Where elegance feels effortless',
              link: '/exquisite-stays',
            },
            {
              id: 3,
              img: 'img3',
              title: 'CULTURE & WELLNESS',
              subtitle: 'Revive, connect, and awaken',
              link: '/culture-wellness',
            },
            {
              id: 1,
              img: 'img1',
              title: 'BESPOKE JOURNEY',
              subtitle: '(Your story, your way)',
              link: '/bespoke-journey',
            },
            {
              id: 2,
              img: 'img2',
              title: 'EXQUISITE STAYS',
              subtitle: '(Where elegance feels effortless) ',
              link: '/exquisite-stays',
            },
            {
              id: 3,
              img: 'img3',
              title: 'CULTURE & WELLNESS',
              subtitle: '(Revive, connect, and awaken)',
              link: '/culture-wellness',
            },
            {
              id: 1,
              img: 'img1',
              title: 'BESPOKE JOURNEY',
              subtitle: '(Your story, your way)',
              link: '/bespoke-journey',
            },
            {
              id: 2,
              img: 'img2',
              title: 'EXQUISITE STAYS',
              subtitle: '(Where elegance feels effortless) ',
              link: '/exquisite-stays',
            },
            {
              id: 3,
              img: 'img3',
              title: 'CULTURE & WELLNESS',
              subtitle: '(Revive, connect, and awaken)',
              link: '/culture-wellness',
            },
          ].map(({ img, title, subtitle, link }, idx) => (
            <Link
              key={idx}
              href={link}
              className="relative flex flex-col items-center justify-center w-full aspect-square text-center overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition duration-300 "
                style={{ backgroundImage: `url('/images/dummy/${img}.jpg')` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/60"></div>
              <h3 className="relative z-10 text-white text-lg font-semibold after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:mx-auto after:transition-all after:duration-300 group-hover:after:w-full after:origin-center">
                {title}
              </h3>
              <p className="relative z-10 text-white">{subtitle}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-center my-[42px]">
        <h1>Flagship Signature Journey</h1>
        <BestSelling />
      </section>
    </main>
  );
}

export default Page;
