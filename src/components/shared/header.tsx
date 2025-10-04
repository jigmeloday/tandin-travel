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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // background toggle
      setScrolled(currentScrollY > 100);

      // hide on scroll down, show on scroll up
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

  return (
    <div
      className={`fixed w-full px-[16px] py-[24px] flex justify-between items-center 
        transition-all duration-300 z-50
        ${scrolled ? 'bg-white shadow-2xl border-b' : 'bg-transparent'}
        ${hidden ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <Link
        href="/"
        className="flex lg:justify-center items-center w-full text-white h-full cursor-pointer"
      >
        <Image
          src="/logo/logo.webp"
          alt="logo"
          height={1000}
          width={1000}
          className="size-[50px] object-contain"
        />
      </Link>
      <Sheet>
        <SheetTrigger>
          <Menu size={40} className="text-primary cursor-pointer" />
        </SheetTrigger>
        <SheetContent side='top'>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Header;
