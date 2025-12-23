'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { FaFacebookF, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa6';
import { FaLinkedinIn, FaTiktok } from 'react-icons/fa';

function Footer() {
  const COMAPNY_LINK = [
    {
      link: '/about-us',
      label: 'About Us',
    },
    {
      link: '/',
      label: 'Terms & Conditions',
    },
    {
      link: '/',
      label: 'Privacy Policy',
    },
    {
      link: '/about-us#testimonials',
      label: 'Testimonial',
    },
    {
      link: '/travel-purpose',
      label: 'Responsible Travel',
    },
    {
      link: '/',
      label: 'Our Blogs',
    },
  ];
  const SERVICES_LINK = [
    {
      link: '/about-us',
      label: 'About Us',
    },
    {
      link: '/',
      label: 'Terms & Conditions',
    },
    {
      link: '/',
      label: 'Privacy Policy',
    },
    {
      link: '/about-us#testimonials',
      label: 'Testimonial',
    },
    {
      link: '/travel-purpose',
      label: 'Responsible Travel',
    },
    {
      link: '/',
      label: 'Our Blogs',
    },
  ];

  const handleRedirect = (url: string) => {
   window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-col md:flex-row md:space-x-8 w-full bg-black py-[32px] px-[16px] md:px-[112px]">
      <div className="flex flex-col md:flex-col md:flex-1 md:space-x-6">
        <div className="size-[100px]">
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
          <p className="text-primary font-bold mt-4 text-[18px] md:text-[22px] leading-tight">
            Born Explorer’s newsletter brings you curated inspiration for your
            next unforgettable journey.
          </p>
          <div className="gap-3">
            <div className="flex gap-2 my-3">
              <Input />
              <Input />
            </div>
            <Input />
          </div>
          <p className="text-white">
            LOVE TRAVEL? SUBSCRIBE FOR TIPS & UPDATES
          </p>
          <p className="text-white">
            Subscribe to Born Explorer&apos;s newsletter and receive curated
            inspiration, insider tips, and exclusive ideas to plan your next
            unforgettable journey through Bhutan and beyond.
          </p>
          <div className="w-full flex justify-end">
            <Button className="rounded-none text-[18px] font-bold">
              SUBSCRIBE NOW
            </Button>
          </div>
          <div className="flex my-[24px] gap-2">
            {/* <div className="size-[32px] md:size-[42px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <FaWhatsapp />
            </div> */}
            {/* <div className="size-[32px] md:size-[42px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <FaTelegram />
            </div> */}
            <div onClick={() => handleRedirect('https://www.facebook.com/profile.php?id=61572859044377')} className="size-[32px] md:size-[42px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <FaFacebookF />
            </div>
            <div onClick={() => handleRedirect('https://www.instagram.com/bornexplorer0/')} className="size-[32px] md:size-[42px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <FaInstagram />
            </div>
            <div onClick={() => handleRedirect('https://www.linkedin.com/company/bornexplorer/?viewAsMember=true')} className="size-[32px] md:size-[42px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div onClick={() => handleRedirect('https://www.youtube.com/@tandin4905')} className="size-[32px] md:size-[42px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <FaYoutube />
            </div>
            <div onClick={() => handleRedirect('https://www.pinterest.com/bornexplorer0')} className="size-[32px] md:size-[42px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <FaPinterest />
            </div>
            <div onClick={() => handleRedirect('https://www.tiktok.com/@bornexplorer0')} className="size-[32px] md:size-[42px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-2 w-full md:justify-end">
        <div className="flex-1 flex flex-col md:items-center my-[20px] md:my-0">
          <div>
            <p className="text-white text-1xl font-[700] font-sans">COMPANY</p>
            <div className="flex flex-col text-white space-y-1">
              {COMAPNY_LINK.map(({ link, label }) => (
                <Link className='text-[20px]' key={label} href={link}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:items-center flex-1 my-[20px] md:my-0">
          <div>
            <p className="text-white text-1xl font-[700] font-sans">SERVICES</p>
            <div className="flex flex-col text-white space-y-1">
              {SERVICES_LINK.map(({ link, label }) => (
                <Link className='text-[20px]' key={label} href={link}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
