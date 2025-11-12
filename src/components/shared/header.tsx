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
        {
          !scrolled ? <Image
          src="/logo/logo2.png"
          alt="logo"
          height={1000}
          width={1000}
          className="size-[50px] object-contain"
        /> : <Image
          src="/logo/logo1.png"
          alt="logo"
          height={1000}
          width={1000}
          className="size-[50px] object-contain"
        />
        }
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className='cursor-pointer'>
          <Menu size={40} className={scrolled ? "text-primary " : "text-white"} />
        </SheetTrigger>
        <SheetContent side='top' className='h-screen'>
          <SheetHeader>
            <SheetTitle/>
            <SheetDescription />
          </SheetHeader>

          <nav className="flex flex-col items-center justify-center w-full md:gap-8 mb-[50px]">
            <Link
              href="/"
              className="text-[32px] font-medium hover:text-primary transition"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-[32px] font-medium hover:text-primary transition"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/travel-purpose"
              className="text-[32px] font-medium hover:text-primary transition"
              onClick={handleLinkClick}
            >
              Travel purpose
            </Link>
            <Link
              href="/contact-us"
              className="text-[32px] font-medium hover:text-primary transition"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Header;
