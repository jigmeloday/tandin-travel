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
          <h1 className="text-white text-center px-4">Bespoke Journey</h1>
        </div>
      </section>
      <section className="flex flex-col gap-[50px] px-[16px] lg:px-[32px] my-[50px]">
        {[
          {
            id: 1,
            title: 'Her Bhutan; Her Story',
            img: '/images/dummy/img1.jpg',
            description:
              'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
          },
          {
            id: 2,
            title: 'Mystery of Gangkar Puensum',
            img: '/images/dummy/img2.jpg',
            description:
              'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
          },
          {
            id: 3,
            title: 'Her Bhutan; Her Story',
            img: '/images/dummy/img3.jpg',
            description:
              'Combine helicopter journeys with sustainable luxury lodges, curated local cuisine, and intimate cultural experiences for a fully bespoke Bhutanese exploration.',
          },
        ].map(({ title, description, id, img }, index) => (
          <div
            key={id}
            className={`flex flex-col lg:flex-row items-center gap-[32px] ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 h-[320px] lg:h-[420px]">
              <Image
                src={img}
                alt={title}
                width={620}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h1>{title}</h1>
              <div className="w-[80%]">
                <p className="text-base lg:text-[24px] text-gray-700 mb-6">
                  {description}
                </p>
              </div>
              <button className="w-[180px] cursor-pointer bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition">
                View Detail
              </button>
            </div>
          </div>
        ))}
      </section>
      <section className="px-[32px] mb-[142px]">
        <div className="grid lg:grid-cols-3 gap-8 w-full mb-5">
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
              className="bg-[#f7f7f7] flex flex-col items-center text-center shadow-sm"
            >
              {/* Image */}
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
      <section className="w-full flex flex-col lg:flex-row px-[32px] my-[82px]">
        <div className="flex">
          <div className="flex-3 h-[320px] lg:h-[580px] bg-[#2a2423] flex items-center justify-center">
            <Image
              src="/images/dummy/img11.jpg"
              alt="Travel with purpose"
              width={620}
              height={820}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 bg-[#111820] text-white p-8 lg:p-12 flex flex-col justify-center">
            <h2>Travel with purpose</h2>
            <div className="w-[60px] h-[2px] bg-white mb-6" />
            <p className="text-base leading-relaxed mb-4">
              At Born Explorer, we believe every journey should enrich both
              traveler and destination. By embracing sustainable practices,
              respecting local cultures, and supporting communities, we ensure
              your Bhutan experience leaves a positive footprint.
            </p>

            <p className="text-base leading-relaxed mb-6">
              Travel consciously, discover authentically, and create memories
              that honor the land, its people, and its timeless traditions.
            </p>

            {/* Button */}
            <button className="bg-[#7b1c32] text-white px-6 py-3 font-semibold hover:bg-[#611627] transition w-fit">
              VIEW DETAILS
            </button>
          </div>
        </div>
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
      <section className="px-[16px] lg:px-[32px] mb-[142px]">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="h-[400px] relative text-center overflow-hidden group cursor-pointer">
            <Image
              src="/images/dummy/img11.jpg"
              alt="Travel with purpose"
              width={620}
              height={820}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
              <h4 className="relative inline-block text-white after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/80 after:transition-all after:duration-300 after:ease-out group-hover:after:left-0 group-hover:after:w-full">
                Silent Monks
              </h4>
              <span className="text-[16px] lg:text-[18px] text-white">
                ABOVE THE ORDINARY
              </span>
            </div>
          </div>
          <div className="h-[400px] relative text-center overflow-hidden group cursor-pointer">
            <Image
              src="/images/dummy/img11.jpg"
              alt="Travel with purpose"
              width={620}
              height={820}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
              <h4 className="relative inline-block text-white after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/80 after:transition-all after:duration-300 after:ease-out group-hover:after:left-0 group-hover:after:w-full">
                Family Legacy Tour
              </h4>
              <span className="text-[16px] lg:text-[18px] text-white">
                CAPTURE THE EXTRAORDINARY
              </span>
            </div>
          </div>
          <div className="h-[400px] relative text-center overflow-hidden group cursor-pointer">
            <Image
              src="/images/dummy/img11.jpg"
              alt="Travel with purpose"
              width={620}
              height={820}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
              <h4 className="relative inline-block text-white after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/80 after:transition-all after:duration-300 after:ease-out group-hover:after:left-0 group-hover:after:w-full">
                Women Only Tour
              </h4>
              <span className="text-[16px] lg:text-[18px] text-white">
                SAVOR THE SUBLIME
              </span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          <div className="h-[400px] relative text-center overflow-hidden group cursor-pointer">
            <Image
              src="/images/dummy/img11.jpg"
              alt="Travel with purpose"
              width={620}
              height={820}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
              <h3 className="relative inline-block text-white after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/80 after:transition-all after:duration-300 after:ease-out group-hover:after:left-0 group-hover:after:w-full">
                Curated Adventure
              </h3>
              <span className="text-[16px] lg:text-[18px] text-white">
                SAVOR THE SUBLIME
              </span>
            </div>
          </div>
          <div className="h-[400px] relative text-center overflow-hidden group cursor-pointer">
            <Image
              src="/images/dummy/img11.jpg"
              alt="Travel with purpose"
              width={620}
              height={820}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
              <h3 className="relative inline-block text-white after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/80 after:transition-all after:duration-300 after:ease-out group-hover:after:left-0 group-hover:after:w-full">
                Wildside Bhutan
              </h3>
              <span className="text-[16px] lg:text-[18px] text-white">
                SAVOR THE SUBLIME
              </span>
            </div>
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
              backgroundImage: "url('/images/dummy/img10.jpg')",
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
    </main>
  );
}

export default Page;
