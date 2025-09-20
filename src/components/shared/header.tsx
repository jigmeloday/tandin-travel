"use client";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Image from 'next/image';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full px-[16px] py-[24px] flex justify-between items-center transition-all duration-300 z-50 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex lg:justify-center items-center w-full text-white h-full">
        <Image src='/logo/logo.webp' alt='logo' height={1000} width={1000} className='size-[50px] object-contain' />
      </div>
      <div>
        <Menu size={40} className="text-white cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
