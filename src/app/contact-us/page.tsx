import Image from 'next/image';
import ContactForm from './components/form';
import { fetchSingleType, getStrapiMedia } from '@/lib/strapi';
import { ContactPage } from '@/types/strapi';
import * as LucideIcons from 'lucide-react';

async function Page() {
  // Fetch contact page data from Strapi
  const contactData = await fetchSingleType<ContactPage>('contact-page', '*');

  if (!contactData) {
    return <div>Error loading contact page data</div>;
  }

  return (
    <main>
      <section className="h-[calc(100vh-20vh)] w-full overflow-hidden relative mb-[90px]">
        <Image
          src={getStrapiMedia(contactData.hero_background_image) || '/images/placeholder.jpg'}
          alt={contactData.hero_title || 'Contact Us'}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
          <h1 className="text-white text-center text-3xl md:text-5xl">
            {contactData.hero_title || 'Contact Us'}
          </h1>
        </div>
      </section>
      <section className="flex flex-col md:flex-row px-[16px] md:px-[32px] mb-[90px] justify-center w-full">
        <div className="bg-[#111820] md:w-[40%] p-[32px]">
          <h2>{contactData.form_title || 'Get in Touch'}</h2>
          <p className='text-white text-[14px] lg:text-[16px]'>
            {contactData.form_description || 'We would love to hear from you'}
          </p>
          <div>
            <ContactForm />
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={getStrapiMedia(contactData.form_image) || '/images/placeholder.jpg'}
            alt="Contact"
            height={400}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center gap-[54px] mb-[90px]">
        {contactData.contact_info?.map((info, index) => {
          const IconComponent = LucideIcons[
            info.icon_name as keyof typeof LucideIcons
          ] as React.ComponentType<{ size?: number }>;

          return (
            <div className="flex flex-col items-center md:w-[220px]" key={index}>
              <div className="size-[80px] rounded-full flex items-center justify-center bg-primary text-white">
                {IconComponent && <IconComponent size={32} />}
              </div>
              <p className="text-[32px] my-[32px] font-sans text-black/70">
                {info.title}
              </p>
              <p className="text-[18px] text-center font-sans">{info.description}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Page;
