import Image from 'next/image';
import Testimonial from './components/testimonial';
import Link from 'next/link';

function Page() {
  const steps = [
    {
      id: 1,
      title: 'Enquiry',
      description:
        'From global event planners to submersible specialists, our in-house team of experts make authoritative recommendations and facilitate your interests from the first conversation.',
      icon: '/icons/search.svg', // replace with your image path
    },
    {
      id: 2,
      title: 'Planning stage',
      description:
        'After identifying a project together, an initial deposit lets us mobilise the resources for a dedicated project manager and the consultation of world-leading authorities to conceptualise your perfect trip with you.',
      icon: '/icons/chat.svg',
    },
    {
      id: 3,
      title: 'Recce and detailing',
      description:
        'Dance floors in the African bush, desert-island access and world-first wildlife encounters – on-the-ground recces and the engagement of global or local bodies let us fine-tune truly unique experiences, all tailored to you.',
      icon: '/icons/map.svg',
    },
    {
      id: 4,
      title: 'On-trip',
      description:
        'Backed by our full support team in London, on-the-ground experts and specialist guides will guarantee the seamless delivery of your project, able to adapt on the fly to your preferences.',
      icon: '/icons/helicopter.svg',
    },
  ];

  return (
    <main>
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/dummy/img5.jpg"
          alt="Bespoke Journey"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">About Us</h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>Genuinely next-level travel & events</h1>
          </div>
          <div className="lg:w-[920px]">
            <p className="text-[14px] lg:text-[16px] text-center my-[24px]">
              We deliver truly next-level travel experiences, from discovering
              unknown Roman shipwrecks and a new species of orca as part of
              family yacht trips to organising epic celebrations in bespoke
              luxury camps and thought leadership events focused on
              transformative wellness.
            </p>
            <p className="text-[14px] lg:text-[16px] text-center my-[24px]">
              Founded by polar explorer Henry Cookson, we apply the same
              standards of expedition excellence and innovation that saw him
              break Antarctic world records to every trip we deliver. Everything
              is hyper-personalised to you, built from the ground up by our team
              of in-house experts and their network of global experts, from
              regional authorities and leading scientists to international DJs.
            </p>
            <p className="text-[14px] lg:text-[16px] text-center my-[24px]">
              We only work on a small volume of projects each year, which means
              we can dedicate unrivalled attention and resources to every trip.
            </p>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>
      <section className="flex flex-col items-center justify-center bg-[#d3cecd] px-[16px] lg:px-[32px] my-[50px] w-full py-[100px]">
        <h2 className="text-black/70 font-light">
          We create stories that are talked about
        </h2>
        <div className="md:w-[40%] h-fit">
          <Testimonial />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center px-[16px] lg:px-[32px] my-[50px] gap-2">
        <div className="flex-1 flex justify-center md:w-[60%] h-full">
          <Image
            src="/images/dummy/img1.jpg"
            height={500}
            width={500}
            alt="profile"
            className="h-[70vh] w-[80%] object-cover"
          />
        </div>
        <div className="flex flex-col items-start md:w-[40%]">
          <p className="text-[32px] md:text-[42px] text-black/70 font-sans">Founder Name</p>
          <p className="text-primary text-[24px] font-bold mt-[16px]">
            Founder & Chairman
          </p>
          <p className="text-[14px] md:text-[16px] mt-[32px]">
            After a past life guiding horseback safaris in Kenya, Henry’s start
            in polar exploration began in 2005, winning the Polar Challenge race
            to the Magnetic North Pole.
          </p>
          <p className="text-[14px] md:text-[16px] mt-[16px]">
            Since then, he’s set a world record as part of the very first team
            to reach the South Pole of Inaccessibility without mechanical means
            and gone on to guide the Walking With The Wounded charity expedition
            to the North Pole with HRH Prince Harry.
          </p>
          <p className="text-[14px] md:text-[16px] mt-[16px]">
            It’s these expeditions that served as inspiration in founding
            Cookson Adventures, bringing the same standards of ground-breaking
            excellence to the world of private travel. That’s whether working
            with remote tribes in Africa or organising Alaska’s most complex
            charter operations.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <p className="text-[32px] md:text-[52px] text-black/70 font-sans">
              A few of the team
            </p>
          </div>
          <div className="lg:w-[920px] mt-[42px]">
            <p className="text-[18px] md:text-[24px]">
              Our in-house experts build all of our adventures from the ground
              up, drawing on a global network of contacts – from biologists and
              conservationists to archaeologists.
            </p>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px]">
        <div className="grid grid-col-1 md:grid-cols-3 gap-2">
          {[1, 2, 3,4,5,6].map((item) => (
            <div key={item} className="flex flex-col items-center w-full">
              <Image
                src="/images/dummy/img1.jpg"
                alt="img"
                height={400}
                width={500}
                className="w-full h-[450px]"
              />
              <div className="flex flex-col text-center items-center my-[32px] space-y-[16px]">
                <p className="text-[42px] font-sans">Full Name</p>
                <p className="text-[28px] font-bold text-primary">Job Title</p>
                <p className="text-center text-[16px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl font-semibold text-gray-700 mb-16">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {steps.map((step) => (
              <div key={step.id} className={`flex items-start gap-6`}>
                <div>
                  <h3 className="text-gray-700">
                    {step.id}. {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed text-[18px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="h-screen bg-[#111820] p-[16px] md:p-[50px] flex flex-col items-center justify-center">
        <h2 className="text-center text-white font-sans text-2xl mb-8">
          Footage shot entirely on our adventures
        </h2>

        <div className="w-full h-full overflow-hidden shadow-lg border border-gray-700">
          <video className="w-full h-full object-cover" controls>
            <source
              src="https://www.youtube.com/embed/Scxs7L0vhZ4?autoplay=0&mute=0&rel=0"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] my-[50px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="lg:w-[920px] mt-[42px]">
            <p className="text-[42px] leading-[70px] font-sans text-black/60">
              Contact our expert team today <br /> and see where it takes you.
            </p>
            <div className="mt-2">
              <Link
                href="/"
                className="relative text-primary font-bold text-[18px] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
              >
                BEGIN YOUR ADVENTURE
              </Link>
            </div>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] my-[40px]" />
      </section>
       <section className="flex flex-col items-center justify-center my-[80px] px-[16px] lg:px-[32px]">
        <div className="bg-[#111820] w-full p-[24px]">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <h1>Let’s Talk</h1>
            </div>
            <div className="flex-1">
              <p className="text-white text-[14px] lg:text-[16px]">
                We love challenges big and small—what’s yours? Let’s craft
                unique journeys that turn bold ideas into unforgettable travel
                experiences.
              </p>
            </div>
          </div>
          <div
            className="w-full mt-[32px] h-[300px] sm:h-[400px] lg:h-[540px] flex items-center justify-center relative group cursor-pointer overflow-hidden"
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
