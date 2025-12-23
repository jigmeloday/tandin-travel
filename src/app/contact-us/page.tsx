import Image from 'next/image';
import ContactForm from './components/form';
import { CONTACT_PAGE_DATA } from '@/lib/data';

function Page() {
  const { hero, form, contactInfo } = CONTACT_PAGE_DATA;
  return (
    <main>
      <section className="h-[calc(100vh-20vh)] w-full overflow-hidden relative mb-[90px]">
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
          <h1 className="text-white text-center text-3xl md:text-5xl">
            {hero.title}
          </h1>
        </div>
      </section>
      <section className="flex flex-col md:flex-row px-[16px] md:px-[32px] mb-[90px] justify-center w-full">
        <div className="bg-[#111820] md:w-[40%] p-[32px]">
          <h2>{form.title}</h2>
          <p className='text-white text-[14px] lg:text-[16px]'>
            {form.description}
          </p>
          <div>
            <ContactForm />
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={form.image.src}
            alt={form.image.alt}
            height={400}
            width={500}
            className="w-full h-full"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center gap-[54px] mb-[90px]">
        {contactInfo.map(({ title, description, icon }) => {
          const Icon = icon;
          return (
            <div className="flex flex-col items-center md:w-[220px]" key={title}>
              <div className="size-[80px] rounded-full flex items-center justify-center bg-primary text-white">
                <Icon size={32} />
              </div>
              <p className="text-[32px] my-[32px] font-sans text-black/70">
                {title}
              </p>
              <p className="text-[18px] text-center font-sans">{description}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Page;
