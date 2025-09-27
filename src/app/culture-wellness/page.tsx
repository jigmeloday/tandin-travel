import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <main>
      <section className="h-screen w-full overflow-hidden">
        <Image
          src="/images/dummy/img5.jpg"
          alt="Bespoke Journey"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">Culture & Wellness</h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>Bhutan From Above</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-[18px] lg:text-[32px] text-center my-[24px]">
              Experience Bhutan like never before with premium helicopter
              journeys. Soar above sacred valleys, majestic mountains, and
              hidden monasteries in unrivaled luxury. Each flight blends
              adventure, comfort, and breathtaking discovery, turning travel
              into a transformative, mindful experience where nature, culture,
              and serenity converge seamlessly.
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold">SKIP THE ROADS, CATCH THE VIEWS</span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>
      <section className="px-[32px] mb-[142px] bg-black py-[32px]">
       <div className='text-center'>
        <h1 className='text-white'> Bhutan From Above</h1>
       </div>
        <div className="grid lg:grid-cols-3 gap-2 w-full my-6">
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
              <div className="w-full h-[280px] relative">
                <Image
                  src={`/images/dummy/${img}.jpg`}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col items-center">
                <h3 className="relative text-2xl font-semibold after:content-[''] after:block after:w-2/5 after:h-[3px] after:bg-white after:mx-auto after:mt-2">
                  {title}
                </h3>
                <p className="text-[20px] my-4">{subtitle}</p>

                {/* Button */}
                <Link
                  href={link}
                  className="w-[160px] text-white font-semibold py-3 text-center hover:bg-gray-800 transition"
                >
                  SAVOR THE SUBLIME
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative w-full h-[80vh] hidden lg:block">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/dummy/img8.jpg')",
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px]">
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>Signature Tours</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-[18px] lg:text-[32px] text-center my-[24px]">
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
        <section className="px-[32px] mb-[142px]">
        <div className="grid lg:grid-cols-2 gap-8 w-full mb-5">
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
              title: 'Her Bhutan; Her Story',
              subtitle:
                'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
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
          ].map(({ img, title, subtitle, link }, idx) => (
            <div
              key={idx}
              className="bg-gray-400/20 flex flex-col items-center text-center shadow-sm"
            >
              {/* Image */}
              <div className="w-full h-[480px] relative">
                <Image
                  src={`/images/dummy/${img}.jpg`}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col items-center">
                <h3>{title}</h3>
                <p className="text-[20px] mb-4">{subtitle}</p>

                {/* Button */}
                <Link
                  href={link}
                  className="w-[160px] bg-black text-white font-semibold py-3 text-center hover:bg-gray-800 transition"
                >
                  View Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center my-[80px] lg:px-[32px] px-[16px]">
        <div className="bg-black w-full p-[24px]">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-3">
              <h1>Freedom and Independence</h1>
            </div>
            <div className="flex-2">
              <p className="text-white text-[24px] leading-relaxed">
                Combine helicopter journeys with sustainable luxury lodges,
                curated local cuisine, and intimate cultural experiences for a
                fully bespoke Bhutanese exploration.
              </p>
            </div>
          </div>
          <div
            className="w-full mt-[32px] h-[540px] flex items-center justify-center relative group cursor-pointer overflow-hidden"
            style={{
              backgroundImage: "url('/images/dummy/img10.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
            <h2 className="relative z-10 text-white inline-block after:content-[''] after:block after:h-[2px] after:w-0 after:bg-white after:mx-auto after:transition-all after:duration-300 group-hover:after:w-full">
              Talk To Our Expert
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
