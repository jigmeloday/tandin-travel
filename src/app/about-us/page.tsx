import Image from 'next/image';
import Testimonial from './components/testimonial';
import Link from 'next/link';
import LetsTalk from '@/components/shared/let-talk';
import { fetchSingleType, getStrapiMedia } from '@/lib/strapi';
import { AboutPage, Testimonial as TestimonialType, TeamMember } from '@/types/strapi';

async function Page() {
  // Fetch about page data from Strapi with all relations populated
  const aboutData = await fetchSingleType<AboutPage>('about-page', '*');

  if (!aboutData) {
    return <div>Error loading about page data</div>;
  }

  // Extract testimonials and team members from relations (Strapi v5 format)
  const testimonials = Array.isArray(aboutData.testimonials)
    ? aboutData.testimonials
    : [];

  const teamMembers = Array.isArray(aboutData.team_members)
    ? aboutData.team_members
    : [];

  return (
    <main>
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden mb-[90px]">
        <Image
          src={getStrapiMedia(aboutData.hero_background_image) || '/images/placeholder.jpg'}
          alt={aboutData.hero_title || 'About Us'}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-center px-4">{aboutData.hero_title || 'About Us'}</h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <h1>{aboutData.intro_title || 'Our Story'}</h1>
          </div>
          <div className="lg:w-[920px]">
            {aboutData.intro_paragraphs?.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-[14px] lg:text-[16px] text-center my-[24px]">
                {para}
              </p>
            )) || (
              <p className="text-[14px] lg:text-[16px] text-center my-[24px]">
                {aboutData.intro_paragraphs}
              </p>
            )}
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
      <section id="testimonials" className="flex flex-col items-center justify-center bg-[#d3cecd] px-[16px] lg:px-[32px] w-full py-[100px] mb-[90px]">
        <h2 className="text-black/70 font-light">
          {aboutData.testimonial_title || 'What Our Guests Say'}
        </h2>
        {testimonials.length > 0 && (
          <div className="md:w-[40%] h-fit">
            <Testimonial testimonials={testimonials} />
          </div>
        )}
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center px-[16px] lg:px-[32px] mb-[90px] gap-4">
        <div className="flex-1 flex justify-start md:w-[50%] h-full px-[10px]">
          <Image
            src={getStrapiMedia(aboutData.founder_image) || '/images/placeholder.jpg'}
            height={500}
            width={500}
            alt={aboutData.founder_name || 'Founder'}
            className="h-[70vh] w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start md:w-[50%] px-[10px]">
          <p className="text-[32px] md:text-[42px] text-black/70 font-sans">{aboutData.founder_name || 'Founder'}</p>
          <p className="text-primary text-[24px] font-bold mt-[16px]">
            {aboutData.founder_role || 'Founder & CEO'}
          </p>
          {aboutData.founder_bio?.split('\n\n').map((para, idx) => (
            <p key={idx} className="text-[14px] md:text-[16px] mt-[16px]">
              {para}
            </p>
          )) || (
            <p className="text-[14px] md:text-[16px] mt-[16px]">
              {aboutData.founder_bio}
            </p>
          )}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-[740px]">
            <p className="text-[32px] md:text-[52px] text-black/70 font-sans">
              {aboutData.team_title || 'Meet Our Team'}
            </p>
          </div>
          {aboutData.team_subtitle && (
            <div className="lg:w-[920px] mt-[42px]">
              <p className="text-[18px] md:text-[24px]">
                {aboutData.team_subtitle}
              </p>
            </div>
          )}
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="grid grid-col-1 md:grid-cols-3 gap-2">
          {teamMembers.map((member: any) => (
            <div key={member.id} className="flex flex-col items-center w-full">
              <Image
                src={getStrapiMedia(member.image) || '/images/placeholder.jpg'}
                alt={member.full_name}
                height={400}
                width={500}
                className="w-full h-[430px] object-cover"
              />
              <div className="flex flex-col text-center items-center my-[32px] space-y-[16px]">
                <p className="text-[42px] font-sans">{member.full_name}</p>
                <p className="text-[28px] font-bold text-primary">{member.position}</p>
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
            {aboutData.process_title || 'Our Process'}
          </h2>

          {aboutData.process_steps && aboutData.process_steps.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {aboutData.process_steps.map((step, index) => (
                <div key={index} className={`flex items-start gap-6`}>
                  <div>
                    <h3 className="text-gray-700">
                      {step.step_number}. {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed text-[18px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {aboutData.video_url && (
        <section className="h-screen bg-[#111820] p-[16px] md:p-[50px] flex flex-col items-center justify-center mb-[90px]">
          <h2 className="text-center text-white font-sans text-2xl mb-8">
            {aboutData.video_title || 'Our Story'}
          </h2>

          <div className="w-full h-full overflow-hidden shadow-lg border border-gray-700">
            <video className="w-full h-full object-cover" controls>
              <source
                src={aboutData.video_url}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      )}
      <section className="flex flex-col items-center justify-center px-[16px] lg:px-[32px] mb-[90px]">
        <div className="border-[0.5px] border-primary h-[80px] mb-[40px]" />
        <div className="flex flex-col items-center text-center">
          <div className="lg:w-[920px]">
            <p className="text-[42px] leading-[70px] font-sans text-black/60">
              {aboutData.cta_title || 'Ready to explore Bhutan with us?'}
            </p>
            <div className="mt-2">
              <Link
                href={aboutData.cta_link_href || '/contact-us'}
                className="relative text-primary font-bold text-[18px] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
              >
                {aboutData.cta_link_text || 'GET IN TOUCH'}
              </Link>
            </div>
          </div>
        </div>
        <div className="border-[0.5px] border-primary h-[80px] mt-[40px]" />
      </section>
       <section className="flex flex-col items-center justify-center mb-[90px] px-[16px] lg:px-[32px]">
        <div className="h-[84vh] w-full">
          <LetsTalk />
        </div>
      </section>
    </main>
  );
}

export default Page;
