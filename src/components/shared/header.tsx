'use client';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { ScrollArea } from '../ui/scroll-area';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false); // <-- Sheet open state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 100);

      if (currentScrollY > lastScrollY && currentScrollY > 750) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // function to close Sheet on link click
  const handleLinkClick = () => setOpen(false);

  return (
    <div
      className={`fixed w-full px-[16px] py-[24px] flex justify-between items-center 
        transition-all duration-300 z-50 bg-transparent 
        ${scrolled ? 'shadow-2xl bg-white' : 'bg-transparent'}
        ${hidden ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <Link
        href="/"
        className="flex lg:justify-center items-center w-full text-white h-full cursor-pointer"
      >
        {!scrolled ? (
          <Image
            src="/logo/logo2.png"
            alt="logo"
            height={1000}
            width={1000}
            className="size-[50px] object-contain"
          />
        ) : (
          <Image
            src="/logo/logo1.png"
            alt="logo"
            height={1000}
            width={1000}
            className="size-[50px] object-contain"
          />
        )}
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="cursor-pointer">
          <Menu
            size={40}
            className={scrolled ? 'text-primary ' : 'text-white'}
          />
        </SheetTrigger>
        <SheetContent side="top" className="h-screen">
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>
          <ScrollArea className='h-full overflow-scroll'>
              <div className="flex-1 overflow-y-auto  flex flex-col items-center justify-center h-full w-full">
            <div className="flex flex-col items-center max-w-[550px] h-full">
             <Link onClick={handleLinkClick} href="/" className='flex flex-col items-center justify-center mb-8'>
               <Image
                src="/logo/logo1.png"
                alt="logo"
                height={1000}
                width={1000}
                className="size-[80px] object-contain "
              />
              <span className='playfair-sans'>Born Explorer</span>
             </Link>
              <div className="flex flex-col items-center">
                <Link
                  href="/about-us"
                  className="text-[26px] font-medium hover:text-primary transition playfair-sans mb-[5px] py-2"
                  onClick={handleLinkClick}
                >
                  About us
                </Link>
                <p className="text-[26px] playfair-sans mb-[5px] py-2">
                  Our platforms
                </p>
                <div className="text-[16px] font-[500] flex flex-col items-center justify-center playfair-sans">
                  <Link
                    href="/bespoke-journey"
                    className="hover:text-primary transition"
                    onClick={handleLinkClick}
                  >
                    Bespoke Journeys
                  </Link>
                  <Link
                    href="/exquisite-stays"
                    className="hover:text-primary transition"
                    onClick={handleLinkClick}
                  >
                    Exquisite Stays
                  </Link>
                  <Link
                    href="/culture-wellness"
                    className="hover:text-primary transition"
                    onClick={handleLinkClick}
                  >
                    Culture & Wellness
                  </Link>
                </div>
                <p className="text-[26px] playfair-sans my-[5px] py-2">
                  Trip types
                </p>
                <div className="text-[16px] gap-2 font-[500] grid md:grid-cols-3 text-center items-center justify-items-center playfair-sans my-[5px]">
                  <Link
                    href="/packages/silent-monks"
                    className="hover:text-primary transition px-4 md:leading-[20px] md:border-r-[2.5px] flex items-center"
                    onClick={handleLinkClick}
                  >
                    Silent Monks
                  </Link>
                  <Link
                   href="/packages/family-legacy-tour"
                    className="hover:text-primary transition px-4 md:leading-[20px] md:border-r-[2.5px] flex items-center"
                    onClick={handleLinkClick}
                  >
                    Family Legacy Tour
                  </Link>
                  <Link
                    href="/packages/curated-adventure"
                    className="hover:text-primary transition px-4 md:leading-[20px] flex items-center"
                    onClick={handleLinkClick}
                  >
                    Curated Adventure
                  </Link>
                  <Link
                    href="/packages/wildside-bhutan"
                    className="hover:text-primary transition px-4 md:leading-[20px] md:border-r-[2.5px] flex items-center"
                    onClick={handleLinkClick}
                  >
                    Wildside Bhutan
                  </Link>
                  <Link
                    href="/packages/her-bhutan-her-story"
                    className="hover:text-primary transition px-4 md:leading-[20px] md:border-r-[2.5px] flex items-center"
                    onClick={handleLinkClick}
                  >
                    Women Only Tour
                  </Link>
                </div>
                <Link
                  href="/curated-bhutan-birding"
                  className="text-[26px] font-medium hover:text-primary transition playfair-sans mt-[18px] py-2"
                  onClick={handleLinkClick}
                >
                  Curated Adventure & Bhutan Birding
                </Link>
                 <Link
                  href="/travel-purpose"
                  className="text-[26px] font-medium hover:text-primary transition playfair-sans mt-[18px] py-2"
                  onClick={handleLinkClick}
                >
                  Travel With Purpose
                </Link>
                <Link
                  href="/contact-us"
                  className="text-[26px] font-medium hover:text-primary transition playfair-sans mb-[5px] py-2"
                  onClick={handleLinkClick}
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Header;
