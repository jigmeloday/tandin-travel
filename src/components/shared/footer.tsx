import Image from 'next/image';

function Footer() {
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
      <div className="flex-1">
        <p className='text-white text-1xl font-[700] font-sans'>COMPANY</p>
      </div>
       <div className="flex-1">
        <p className='text-white text-1xl font-[700] font-sans'>SERVICES</p>
      </div>
    </div>
  );
}

export default Footer;
