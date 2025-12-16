import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <main>
      {/* Hero Section */}
      <section className="h-screen w-full overflow-hidden relative mb-[90px]">
        <Image
          src="/images/dummy/img5.jpg"
          alt="Bespoke Journey"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
          <h1 className="text-white text-center text-3xl md:text-5xl">
            Culture & Wellness
          </h1>
        </div>
      </section>

      {/* Bhutan From Above Section */}
      <section className="flex flex-col items-center justify-center px-4 md:px-8 mb-[90px]">
        <div className="border-[0.5px] border-primary h-20 mb-10" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full md:w-[740px]">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Bhutan From Above
            </h1>
          </div>
          <div className="w-full md:w-[920px]">
            <p className="text-[14px] md:text-[16px] my-6">
              Experience Bhutan like never before with premium helicopter
              journeys. Soar above sacred valleys, majestic mountains, and
              hidden monasteries in unrivaled luxury. Each flight blends
              adventure, comfort, and breathtaking discovery, turning travel
              into a transformative, mindful experience where nature, culture,
              and serenity converge seamlessly.
            </p>
          </div>
          <div className="md:min-w-[250px]">
            <span className="font-bold text-lg md:text-xl">
              SKIP THE ROADS, CATCH THE VIEWS
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-20 mt-10" />
      </section>

      {/* Grid Cards Section */}
      <section className="px-4 md:px-8 bg-[#111820] py-8 mb-[90px]">
        <div className="text-center mb-6">
          <h1 className="text-white text-3xl md:text-4xl">Bhutan From Above</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full my-6">
          {[
            {
              id: 1,
              img: 'img1',
              title: 'Unique Culture',
              subtitle:
                'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
              link: '/bespoke-journey',
            },
            {
              id: 2,
              img: 'img2',
              title: 'Wellness in the Himalayas',
              subtitle:
                'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
              link: '/culture-wellness',
            },
            {
              id: 3,
              img: 'img3',
              title: 'Culunary Tapestary',
              subtitle:
                'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
              link: '/culture-wellness',
            },
          ].map(({ img, title, subtitle, link }, idx) => (
            <div
              key={idx}
              className="bg-primary/40 text-white flex flex-col items-center text-center"
            >
              <div className="w-full h-64 md:h-72 relative">
                <Image
                  src={`/images/dummy/${img}.jpg`}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col items-center">
                <h3 className="relative text-xl md:text-2xl font-semibold after:content-[''] after:block after:w-2/5 after:h-[3px] after:bg-white after:mx-auto after:mt-2">
                  {title}
                </h3>
                <p className="text-[14px] md:text-[16px] my-4">{subtitle}</p>
                <Link
                  href={link}
                  className="w-[160px] text-white font-semibold py-2 md:py-3 text-center hover:bg-gray-800 transition"
                >
                  SAVOR THE SUBLIME
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Images Section */}
      <section className="w-full bg-[#111820] mb-[90px] flex flex-col md:flex-row h-auto md:h-[70vh]">
        {/* Images */}
        <div className="flex flex-col md:flex-row flex-1 items-center justify-center gap-4 mb-6 md:mb-0">
          <div className="transform translate-y-0 md:translate-y-6 w-48 md:w-60 h-[260px] md:h-[430px]">
            <Image
              src="/images/dummy/img2.jpg"
              alt="Exquisite Stays"
              width={800}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="transform translate-y-0 md:-translate-y-6 w-48 md:w-60 h-[260px] md:h-[430px]">
            <Image
              src="/images/dummy/img1.jpg"
              alt="Exquisite Stays"
              width={800}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-between gap-4 md:gap-6 p-4 md:p-16 flex-1 text-center md:text-left">
          <div>
            <h1 className="mb-0 leading-[1.2] text-2xl md:text-4xl">
              Luxury Experience You’ll
            </h1>
            <h1 className="leading-[1.2] border-b-4 border-white pb-2 w-fit mx-auto md:mx-0 text-2xl md:text-4xl">
              Remember
            </h1>
          </div>
          <p className="text-white text-[14px] md:text-[16px]">
            Combine helicopter journeys with sustainable luxury lodges, curated
            local cuisine, and intimate cultural experiences for a fully bespoke
            Bhutanese exploration.
          </p>
          <p className="text-white font-bold text-base md:text-[18px]">
            YOU ARE BHUTANA AND OTES EHTE
          </p>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="relative w-full h-[80vh] hidden lg:block mb-[90px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/dummy/img8.jpg')",
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
      </section>

      {/* Signature Tours Section */}
      <section className="flex flex-col items-center justify-center px-4 md:px-8 mb-12 md:mb-[90px]">
        <div className="flex flex-col items-center text-center">
          <div className="w-full md:w-[740px]">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Signature Tours
            </h1>
          </div>
          <div className="w-full md:w-[920px]">
            <p className="text-[14px] md:text-[16px] text-center my-6">
              Experience Bhutan like never before with premium helicopter
              journeys. Soar above sacred valleys, majestic mountains, and
              hidden monasteries in unrivaled luxury. Each flight blends
              adventure, comfort, and breathtaking discovery, turning travel
              into a transformative, mindful experience where nature, culture,
              and serenity converge seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="px-4 md:px-8 mb-[90px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-2 w-full mb-5">
          {[
            {
              id: 1,
              img: 'img1',
              title: 'Her Bhutan; Her Story',
              subtitle:
                'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
              link: '/bespoke-journey',
            },
            {
              id: 2,
              img: 'img2',
              title: 'Bhutan Soul Walk',
              subtitle:
                'Tailored flight routes and timing cater to your preferences, weather, and comfort, ensuring a seamless, personalized, and indulgent adventure.',
              link: '/culture-wellness',
            },
            {
              id: 3,
              img: 'img3',
              title: 'Her Bhutan; Her Story',
              subtitle:
                'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
              link: '/culture-wellness',
            },
            {
              id: 4,
              img: 'img1',
              title: 'Her Bhutan; Her Story',
              subtitle:
                'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
              link: '/bespoke-journey',
            },
            {
              id: 5,
              img: 'img2',
              title: 'Her Bhutan; Her Story',
              subtitle:
                'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
              link: '/culture-wellness',
            },
            {
              id: 6,
              img: 'img3',
              title: 'Her Bhutan; Her Story',
              subtitle:
                'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
              link: '/culture-wellness',
            },
          ].map(({ img, title, subtitle, link }, idx) => (
            <div
              key={idx}
              className="bg-gray-400/20 flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-full aspect-square relative">
                <Image
                  src={`/images/dummy/${img}.jpg`}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col items-center">
                <h3 className="text-lg md:text-xl">{title}</h3>
                <p className="text-[14px] md:text-[16px] mb-4">{subtitle}</p>
                <Link
                  href={link}
                  className="w-[160px] bg-[#111820] text-white font-semibold py-2 md:py-3 text-center hover:bg-gray-800 transition"
                >
                  View Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Freedom Section */}
      <section className="flex flex-col items-center justify-center mb-[90px] md:px-8 px-4">
        <div className="bg-[#111820] w-full p-6 md:p-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-3">
              <h1 className="text-2xl md:text-4xl">Freedom and Independence</h1>
            </div>
            <div className="flex-2">
              <p className="text-white text-[14px] md:text-[16px]">
                Combine helicopter journeys with sustainable luxury lodges,
                curated local cuisine, and intimate cultural experiences for a
                fully bespoke Bhutanese exploration.
              </p>
            </div>
          </div>
          <div
            className="w-full mt-8 h-[420px] md:h-[540px] flex items-center justify-center relative group cursor-pointer overflow-hidden"
            style={{
              backgroundImage: "url('/images/dummy/img10.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
            <h2 className="relative z-10 text-white inline-block after:content-[''] after:block after:h-[2px] after:w-0 after:bg-white after:mx-auto after:transition-all after:duration-300 group-hover:after:w-full text-xl md:text-2xl">
              Talk To Our Expert
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
