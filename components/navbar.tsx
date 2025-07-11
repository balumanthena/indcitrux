"use client";

import { useState, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {
  scrollToWebsiteDesign?: () => void;
  scrollToGraphicDesign?: () => void;
  scrollToShopifyStores?: () => void;
  scrollToBrands?: () => void;
  scrollToServices?: () => void;
};

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices,
}: NavbarProps) => {
  const pathname = usePathname();
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropDown = () => setIsDropDownVisible(!isDropDownVisible);
  const closeDropDown = () => setIsDropDownVisible(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="cursor-pointer">
          <Image
            priority
            src="https://assets.citrux.in/images/citrux_dark_logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="h-auto w-[120px] md:w-[140px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center text-slate-300 text-center">
          {[
            { href: "/", label: "Explore" },
            { href: "/services", label: "What we do" },
            { href: "/careers", label: "Careers" },
            { href: "/about", label: "Who we are" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative transition-colors duration-300 px-1 ${
                isActive(item.href)
                  ? "text-white after:scale-x-100"
                  : "text-slate-300 after:scale-x-0 hover:after:scale-x-100"
              } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:origin-center after:transition-transform after:duration-300`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Icon */}
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <X
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
              aria-label="Close menu"
            />
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
              aria-label="Open menu"
            />
          )}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-slate-800 
              bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors
              focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isDropDownVisible && (
        <div className="md:hidden bg-black text-slate-300 px-4 py-3 space-y-3">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/careers", label: "Careers" },
            { href: "/about", label: "About" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeDropDown}
              className={`block hover:text-white ${
                isActive(item.href) ? "text-white font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={closeDropDown}
            className="inline-block mt-3 border border-slate-800 rounded-md px-4 py-2 text-slate-400 hover:text-white"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
