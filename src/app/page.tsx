import BestSelling from '@/components/landing-component/best-selling';
import SliderComponent from '@/components/landing-component/slider';
import Image from 'next/image';

export default function Home() {
  const ImageBox = [
    { id: 1, image: '/images/dummy/img6.jpg', label: 'BHUTAN IN THE CLOUD' },
    {
      id: 2,
      image: '/images/dummy/img5.jpg',
      label: 'BHUTAN THROUGH THE LENS',
    },
    { id: 3, image: '/images/dummy/img3.jpg', label: 'CULINARY TAPESTRY' },
    { id: 4, image: '/images/dummy/img11.jpg', label: 'RIVER RAFTING' },
    { id: 5, image: '/images/dummy/img2.jpg', label: 'EDUCATION TOUR' },
    { id: 6, image: '/images/dummy/img7.jpg', label: 'FUTURE TRAVEL' },
  ];
  return (
    <main>
      <section className="h-screen w-full overflow-hidden bg-[url('/images/slide.jpg')] bg-cover bg-center bg-no-repeat"></section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px]">
        <div className="border-2 border-black h-[80px] my-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h2 className="font-extrabold text-[32px] lg:text-[48px]">
              Best banner Description on this page for travel
            </h2>
          </div>
          <div className="lg:w-[900px]">
            <p className="text-[18px] lg:text-[32px] text-center my-[24px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad
            </p>
          </div>
          <div className="lg:w-[250px]">
            <span className="font-bold">
              Best banner Description on this page for travel
            </span>
          </div>
        </div>
        <div className="border-2 border-black h-[80px] my-[40px]" />
        <div className="grid lg:grid-cols-3 gap-8 w-full mb-5">
          {['img6', 'img7', 'img8'].map((img, idx) => (
            <div
              key={idx}
              className="relative h-[300px] lg:h-[450px] w-full text-center overflow-hidden"
            >
              <Image
                src={`/images/dummy/${img}.jpg`}
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 lg:bg-black/40 flex flex-col items-center justify-center">
                <span className="text-white text-lg font-extrabold lg:text-xl">
                  ROYAL PATHWAYS
                </span>
                <span className="text-[16px] lg:text-[18px] text-white">
                  Luxury and Boutique Stays
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-center my-[42px]">
        <h3 className="font-extrabold text-[32px]">
          Our best selling signature tour
        </h3>
        <BestSelling />
      </section>
      <section className="flex flex-col justify-center items-center text-center my-[42px] px-[16px] lg:px-[32px] scrollbar-hide">
        <div className="border-2 border-black h-[80px] w-0 my-[40px]" />

        <h3 className="font-extrabold text-[24px] lg:text-[32px]">
          OUR BOOKING PROCESS
        </h3>
        <div className="flex flex-col lg:flex-row my-[40px] gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex flex-col items-center justify-center"
            >
              <div className="size-[80px] rounded-full bg-black"></div>
              <p className="mt-4 text-[24px] text-primary">
                01. MAKE AN ENQUIRY
              </p>
              <div className="w-[180px]">
                <p className="text-[18px]">
                  Submit a holiday enquiry online or by phone
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="px-[24px] py-[12px] bg-black text-white text-2xl">
          ENQUIRE NOW
        </button>
        <div className="border-2 border-black h-[80px] w-0 my-[40px]" />
      </section>
      <section className="px-[16px] lg:px-[32px] my-[42px]">
        <div className="flex flex-col lg:flex-row w-full my-[40px] h-[550px]">
          <div className="lg:flex-3">
            <Image
              src="/images/slide.jpg"
              alt="img"
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between flex-1 px-[24px] py-[42px] text-white bg-black">
            <div>
              <span className="font-extrabold">WOMEN ONLY TOUR</span>
              <h2 className="mt-[32px] mb-[12px] font-extrabold text-[24px] lg:text-[42px] text-primary">
                HER BHUTAN, HER STORY
              </h2>
              <span className="text-[18px] lg:text-[24px] font-thin">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              </span>
            </div>
            <div className="bg-primary w-fit px-[16px] py-[8px] cursor-pointer">
              VIEW DETAILS
            </div>
          </div>
        </div>
        <div className="space-y-[32px]">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="border w-full lg:flex-[1] flex flex-col">
              <div className="h-[70vh]">
                <Image
                  src="/images/dummy/img1.jpg"
                  alt="img"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-black text-white p-5 flex flex-col flex-1">
                <p className="font-extrabold">WOMEN ONLY TOUR</p>
                <h3 className="text-2xl lg:text-3xl font-extrabold">
                  Her Bhutan, Her Story
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <button className="py-2 px-4 bg-primary mt-6 w-fit">
                  VIEW DETAILS
                </button>
              </div>
            </div>
            <div className="border w-full lg:flex-[2] flex flex-col">
              <div className="h-[70vh]">
                <Image
                  src="/images/dummy/img2.jpg"
                  alt="img"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-black text-white p-5 flex flex-col flex-1">
                <p className="font-extrabold">WOMEN ONLY TOUR</p>
                <h3 className="text-2xl lg:text-4xl font-extrabold leading-snug">
                  Her Bhutan, <br /> Her Story
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <button className="py-2 px-4 bg-primary mt-6 w-fit">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="border w-full lg:flex-[2] flex flex-col">
              <div className="h-[70vh]">
                <Image
                  src="/images/dummy/img1.jpg"
                  alt="img"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-black text-white p-5 flex flex-col flex-1">
                <p className="font-extrabold">WOMEN ONLY TOUR</p>
                <h3 className="text-2xl lg:text-3xl font-extrabold">
                  Her Bhutan, Her Story
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <button className="py-2 px-4 bg-primary mt-6 w-fit">
                  VIEW DETAILS
                </button>
              </div>
            </div>
            <div className="border w-full lg:flex-[1] flex flex-col">
              <div className="h-[70vh]">
                <Image
                  src="/images/dummy/img2.jpg"
                  alt="img"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-black text-white p-5 flex flex-col flex-1">
                <p className="font-extrabold">WOMEN ONLY TOUR</p>
                <h3 className="text-2xl lg:text-4xl font-extrabold leading-snug">
                  Her Bhutan, <br /> Her Story
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <button className="py-2 px-4 bg-primary mt-6 w-fit">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[80vh] hidden lg:block">
        {/* Background */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/slide.jpg')",
            backgroundAttachment: 'fixed', // fixed for desktop
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center"/>
      </section>

      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px]">
        <div className="border-2 border-black h-[80px] my-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h2 className="font-extrabold text-[32px] lg:text-[48px]">
              Best banner Description on this page for travel
            </h2>
          </div>
          <div className="lg:w-[900px]">
            <p className="text-[18px] lg:text-[32px] text-center my-[24px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad
            </p>
          </div>
          <div className="lg:w-[250px]">
            <span className="font-bold">
              Best banner Description on this page for travel
            </span>
          </div>
        </div>
        <div className="border-2 border-black h-[80px] my-[40px]" />
      </section>
      <section className="grid lg:grid-cols-3 px-[16px] lg:px-[32px] gap-[24px] lg:gap-[32px]">
        {ImageBox.map(({ id, image, label }) => (
          <div key={id} className="relative border h-[370px] overflow-hidden">
            {/* Image */}
            <Image
              src={image}
              alt="image"
              height={500}
              width={500}
              className="object-cover h-full w-full"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <div className="border-b-2 border-primary">
                <span className="text-white text-lg font-bold">{label}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="my-[42px] px-[16px] lg:px-[32px]">
        <SliderComponent />
      </section>
    </main>
  );
}
