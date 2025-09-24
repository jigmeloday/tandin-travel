import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  const COMAPNY_LINK = [
    {
      link: '/',
      label: 'About Us'
    },
    {
      link: '/',
      label: 'Terms & Conditions'
    },
    {
      link: '/',
      label: 'Privacy Policy'
    },
    {
      link: '/',
      label: 'Testimonial'
    },
    {
      link: '/',
      label: 'Responsible Travel'
    },
    {
      link: '/',
      label: 'Our Blogs'
    }
  ]
  const SERVICES_LINK = [
    {
      link: '/',
      label: 'About Us'
    },
    {
      link: '/',
      label: 'Terms & Conditions'
    },
    {
      link: '/',
      label: 'Privacy Policy'
    },
    {
      link: '/',
      label: 'Testimonial'
    },
    {
      link: '/',
      label: 'Responsible Travel'
    },
    {
      link: '/',
      label: 'Our Blogs'
    }
  ]
  return (
    <div className="flex space-x-8 w-full bg-black py-[32px] px-[112px]">
      <div className="flex flex-1 space-x-6">
        <div className='h-[100px] w-[100px]'>
          <Image
            src="/logo/logo.webp"
            alt="logo"
            height={500}
            width={500}
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <p className="text-white font-bold font-sans">
            JOIN OUR TRAVEL CIRCLE
          </p>
          <p className="text-primary font-bold mt-4 text-[22px] leading-tight">
            Born Explorer’s newsletter brings you curated inspiration for your
            next unforgettable journey.
          </p>
        </div>
      </div>
      <div className='flex flex-2 w-full justify-end'>
        <div className="flex-1 flex flex-col items-center">
       <div>
         <p className='text-white text-1xl font-[700] font-sans'>COMPANY</p>
        <div className='flex flex-col text-white space-y-1'>
          {
            COMAPNY_LINK.map(({ link, label }) => (
              <Link key={label} href={link}>{label}</Link>
            ))
          }
        </div>
       </div>
      </div>
       <div className="flex flex-col items-center flex-1">
        <div><p className='text-white text-1xl font-[700] font-sans'>SERVICES</p>
        <div className='flex flex-col text-white space-y-1'>
          {
            SERVICES_LINK.map(({ link, label }) => (
              <Link key={label} href={link}>{label}</Link>
            ))
          }
        </div></div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
