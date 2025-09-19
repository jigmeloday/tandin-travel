import BestSelling from '@/components/landing-component/best-selling';
import SliderComponent from '@/components/landing-component/slider';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="h-screen w-full overflow-hidden">
        <SliderComponent />
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
        <div className="grid lg:grid-cols-3 gap-8 w-full h-[500px] lg:h-[230px] mb-[20px]">
          <div className="border text-center h-full">1</div>
          <div className="border text-center h-full">2</div>
          <div className="border text-center h-full">3</div>
        </div>
      </section>
      {/* <section className="flex flex-col justify-center items-center text-center my-[42px]">
        <h3 className="font-extrabold text-[32px]">
          Our best selling signature tour
        </h3>
        <BestSelling />
      </section> */}
      <section className="flex flex-col justify-center items-center text-center my-[42px] px-[16px] lg:px-[32px]">
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
        <div className="flex flex-col lg:flex-row border w-full my-[40px] lg:h-[520px]">
          <div className="lg:flex-3">
            <Image
              src="/images/slide.jpg"
              alt="img"
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between lg:flex-1 px-[24px] py-[42px] text-white bg-black">
            <div>
              <span className="font-extrabold">WOMEN ONLY TOUR</span>
              <h2 className="mt-[32px] mb-[12px] font-extrabold text-[42px] text-primary">
                HER BHUTAN, HER STORY
              </h2>
              <span className="text-[24px] font-thin">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              </span>
            </div>
            <div className="bg-primary w-fit px-[16px] py-[8px] cursor-pointer">
              VIEW DETAILS
            </div>
          </div>
        </div>
        <div className="space-y-[32px]">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="border w-full lg:flex-1 h-fit">
              <div className="h-[70vh]">
                <Image
                  src="/images/dummy/img1.jpg"
                  alt="img"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-black min-h-[30%] text-white p-[20px] ">
                <p className="font-extrabold"> WOMEN ONLY TOUR</p>

                <h3 className="text-[28px] font-extrabold">
                  Her Bhutan, Her Story
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <div className='py-[8px] px-[16px] bg-primary mt-[24px] w-fit'>VIEW DETAILS</div>
              </div>
            </div>
            <div className="border w-full lg:flex-4 h-full">
              <div className="h-[70vh]">
                <Image
                  src="/images/dummy/img2.jpg"
                  alt="img"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
               <div className="bg-black min-h-[30%] text-white p-[20px] ">
                <p className="font-extrabold"> WOMEN ONLY TOUR</p>

                <h3 className="text-[32px] font-extrabold">
                  Her Bhutan, <br/> Her Story
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <div className='py-[8px] px-[16px] bg-primary mt-[24px] w-fit'>VIEW DETAILS</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="border w-full lg:flex-4">
              <div className="h-[70vh]">
                <Image
                  src="/images/dummy/img3.jpg"
                  alt="img"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
               <div className="bg-black min-h-[30%] text-white p-[20px] ">
                <p className="font-extrabold"> WOMEN ONLY TOUR</p>

                <h3 className="text-[32px] font-extrabold">
                  Her Bhutan, <br/> Her Story
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <div className='py-[8px] px-[16px] bg-primary mt-[24px] w-fit'>VIEW DETAILS</div>
              </div>
            </div>
            <div className="border lg:flex-1 w-full h-[720px]">
              <div className="h-[70%]">
                <Image
                  src="/images/dummy/img2.jpg"
                  alt="img"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-black min-h-[30%] text-white p-[20px] ">
                <p className="font-extrabold"> WOMEN ONLY TOUR</p>

                <h3 className="text-[28px] font-extrabold">
                  Her Bhutan, Her Story
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <div className='py-[8px] px-[16px] bg-primary mt-[24px] w-fit'>VIEW DETAILS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[80vh]">
        <div className="h-full w-full bg-[url('/images/slide.jpg')] bg-fixed bg-center bg-cover bg-no-repeat">
          <div className="h-full w-full flex items-center justify-center bg-black/40 text-3xl" />
        </div>
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
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="border h-[240px]">
            hello
          </div>
        ))}
      </section>
    </main>
  );
}
