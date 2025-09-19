import BestSelling from '@/components/landing-component/best-selling';
import SliderComponent from '@/components/landing-component/slider';

export default function Home() {
  return (
    <main>
      <section className="h-screen w-full overflow-hidden">
        <SliderComponent />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px]">
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
      <section className="flex flex-col justify-center items-center text-center my-[42px] px-[16px]">
        <div className="border-2 border-black h-[80px] w-0 my-[40px]" />

        <h3 className="font-extrabold text-[24px] lg:text-[32px]">OUR BOOKING PROCESS</h3>
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
      <section className="px-[24px] my-[42px]">
        <div className="flex border w-full my-[40px] h-[420px]"></div>
        <div className="space-y-[32px]">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="border w-full lg:flex-1 h-[320px]"></div>
            <div className="border w-full lg:flex-4"></div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="border w-full lg:flex-4 h-[320px]"></div>
            <div className="border lg:flex-1 w-full h-[320px]"></div>
          </div>
        </div>
      </section>
      <section className="w-full h-[80vh]">
        <div className="h-full w-full bg-[url('/images/slide.jpg')] bg-fixed bg-center bg-cover bg-no-repeat">
          <div className="h-full w-full flex items-center justify-center bg-black/40 text-3xl" />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px]">
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
    </main>
  );
}
