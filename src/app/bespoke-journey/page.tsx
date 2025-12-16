import LetsTalk from '@/components/shared/let-talk';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden mb-[90px]">
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

      {/* Packages */}
      <section className="flex flex-col gap-[50px] px-[16px] lg:px-[32px] mb-[90px]">
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
            <div className="w-full lg:w-1/2 h-[240px] sm:h-[320px] lg:h-[420px]">
              <Image
                src={img}
                alt={title}
                width={620}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
              <h1>{title}</h1>
              <div className="w-full lg:w-[80%] mx-auto lg:mx-0">
                <p className="text-base lg:text-[16px] text-gray-700 mb-6">
                  {description}
                </p>
              </div>
              <button className="mx-auto lg:mx-0 w-[180px] cursor-pointer bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition">
                View Detail
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Grid Cards */}
      <section className="px-[16px] lg:px-[32px] mb-[90px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full mb-5">
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
              <div className="w-full h-[280px] sm:h-[280px] relative">
                <Image
                  src={`/images/dummy/${img}.jpg`}
                  alt={title}
                  fill
                  className="object-cover h-full w-full"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col items-center">
                <h3>{title}</h3>
                <p className="text-[14px] lg:text-[16px] mb-4">{subtitle}</p>
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

      {/* Parallax */}
      <section className="relative w-full h-[50vh] lg:h-[80vh] hidden md:block mb-[90px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/dummy/img8.jpg')",
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
      </section>

      {/* Split Section */}
      <section className="w-full flex flex-col lg:flex-row px-[16px] lg:px-[32px] mb-[90px] gap-6">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Image */}
          <div className="flex-1 h-[260px] sm:h-[320px] lg:h-[580px] bg-[#2a2423]">
            <Image
              src="/images/dummy/img11.jpg"
              alt="Travel with purpose"
              width={620}
              height={820}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex-1 bg-[#111820] text-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
            <h2>Travel with purpose</h2>
            <div className="w-[60px] h-[2px] bg-white mb-6" />
            <p className="text-base mb-4">
              At Born Explorer, we believe every journey should enrich both
              traveler and destination. By embracing sustainable practices,
              respecting local cultures, and supporting communities, we ensure
              your Bhutan experience leaves a positive footprint.
            </p>
            <p className="text-base mb-6">
              Travel consciously, discover authentically, and create memories
              that honor the land, its people, and its timeless traditions.
            </p>
            <button className="bg-[#7b1c32] text-white px-6 py-3 font-semibold hover:bg-[#611627] transition w-fit">
              VIEW DETAILS
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>Other Related Adventures</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-center my-[24px]">
              Experience Bhutan like never before with premium helicopter
              journeys. Soar above sacred valleys, majestic mountains, and
              hidden monasteries in unrivaled luxury. Each flight blends
              adventure, comfort, and breathtaking discovery, turning travel
              into a transformative, mindful experience where nature, culture,
              and serenity converge seamlessly
            </p>
          </div>
          <div className="lg:min-w-[250px]">
            <span className="font-bold">
              SKIP THE ROADS, CATCH THE VIEWS 
            </span>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
       <section className="flex flex-col items-center justify-center px-4 md:px-8 mb-[90px] md:mb-20 gap-2">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto md:max-w-[99%] gap-2">
          {[1, 2, 3].map((item) => (
            <div className="bg-gray-100" key={item}>
              <div className="bg-primary h-[400px]"></div>
              <div className="flex flex-col items-center justify-center p-[20px] text-center">
                <h4>Her Bhutan; Her Story</h4>
                <p className="mb-[18px] text-[18px]">
                  Combine helicopter journeys with sustainable luxury lodges,
                  curated local cuisine, and intimate cultural experiences for a
                  fully bespoke Bhutanese exploration.
                </p>
                <Button className="rounded-none bg-black text-[24px]">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:max-w-[99%] gap-2 mb-4">
          {[1, 2].map((item) => (
            <div className="bg-gray-100" key={item}>
              <div className="bg-primary h-[500px]"></div>
              <div className="flex flex-col items-center justify-center p-[20px] text-center">
                <h4>Her Bhutan; Her Story</h4>
                <p className="text-[18px] mb-[18px]">
                  Combine helicopter journeys with sustainable luxury lodges,
                  curated local cuisine, and intimate cultural experiences for a
                  fully bespoke Bhutanese exploration.
                </p>
                <Button className="rounded-none bg-black text-[24px]">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Final CTA */}
      <section className="flex flex-col items-center justify-center mb-[90px] px-[16px] lg:px-[32px]">
        <div className="h-[60vh]">
          <LetsTalk
            images="/images/dummy/img2.jpg"
            description="For decades, our team has been crafting journeys that go beyond the
                  ordinary. Share your dream destination and your passions with us, and
                  we’ll design a one-of-a-kind adventure that’s truly yours—a journey
                  you’ll remember for a lifetime."
          />
        </div>
      </section>
    </main>
  );
}

export default Page;
