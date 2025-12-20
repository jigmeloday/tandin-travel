import Image from 'next/image';
import Testimonial from './components/testimonial';
import Link from 'next/link';
import LetsTalk from '@/components/shared/let-talk';
import { ABOUT_PAGE_DATA, getTestimonialById } from '@/lib/data';

function Page() {
  const { hero, introduction, testimonialSection, founder, team, process, video, cta, letsTalk } = ABOUT_PAGE_DATA;
  
  // Fetch testimonials based on IDs
  const testimonials = testimonialSection.testimonialIds
    .map(id => getTestimonialById(id))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  return (
    <main>
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden mb-[90px]">
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">{hero.title}</h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{introduction.title}</h1>
          </div>
          <div className="lg:w-[920px]">
            {introduction.paragraphs.map((para, idx) => (
              <p key={idx} className="text-[14px] lg:text-[16px] text-center my-[24px]">
                {para}
              </p>
            ))}
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
      <section className="flex flex-col items-center justify-center bg-[#d3cecd] px-[16px] lg:px-[32px] w-full py-[100px] mb-[90px]">
        <h2 className="text-black/70 font-light">
          {testimonialSection.title}
        </h2>
        <div className="md:w-[40%] h-fit">
          <Testimonial testimonials={testimonials} />
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center px-[16px] lg:px-[32px] mb-[90px] gap-4">
        <div className="flex-1 flex justify-start md:w-[50%] h-full px-[10px]">
          <Image
            src={founder.image.src}
            height={500}
            width={500}
            alt={founder.image.alt}
            className="h-[70vh] w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start md:w-[50%] px-[10px]">
          <p className="text-[32px] md:text-[42px] text-black/70 font-sans">{founder.name}</p>
          <p className="text-primary text-[24px] font-bold mt-[16px]">
            {founder.role}
          </p>
          {founder.bio.map((para, idx) => (
            <p key={idx} className="text-[14px] md:text-[16px] mt-[16px]">
              {para}
            </p>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <p className="text-[32px] md:text-[52px] text-black/70 font-sans">
              {team.title}
            </p>
          </div>
          <div className="lg:w-[920px] mt-[42px]">
            <p className="text-[18px] md:text-[24px]">
              {team.subtitle}
            </p>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="grid grid-col-1 md:grid-cols-3 gap-2">
          {team.members.map((member) => (
            <div key={member.id} className="flex flex-col items-center w-full">
              <Image
                src={member.image.src}
                alt={member.image.alt}
                height={400}
                width={500}
                className="w-full h-[430px]"
              />
              <div className="flex flex-col text-center items-center my-[32px] space-y-[16px]">
                <p className="text-[42px] font-sans">{member.name}</p>
                <p className="text-[28px] font-bold text-primary">{member.role}</p>
                <p className="text-center text-[16px]">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white mb-[90px]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl font-semibold text-gray-700 mb-16">
            {process.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {process.steps.map((step) => (
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
      <section className="h-screen bg-[#111820] p-[16px] md:p-[50px] flex flex-col items-center justify-center mb-[90px]">
        <h2 className="text-center text-white font-sans text-2xl mb-8">
          {video.title}
        </h2>

        <div className="w-full h-full overflow-hidden shadow-lg border border-gray-700">
          <video className="w-full h-full object-cover" controls>
            <source
              src={video.url}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="lg:w-[920px]">
            <p className="text-[42px] leading-[70px] font-sans text-black/60">
              {cta.title}
            </p>
            <div className="mt-2">
              <Link
                href={cta.href}
                className="relative text-primary font-bold text-[18px] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
              >
                {cta.linkText}
              </Link>
            </div>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
       <section className="flex flex-col items-center justify-center mb-[90px] px-[16px] lg:px-[32px] h-[60vh]">
        <LetsTalk
          images={letsTalk.image}
          description={letsTalk.description}
        />
      </section>
    </main>
  );
}

export default Page;
