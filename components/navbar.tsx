"use client";
import { useState, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void;
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        {/* Logo */}
        <div>
          <Link href="/" className="cursor-pointer">
            <Image
              priority
              src="https://assets.citrux.in/images/citrux_dark_logo.svg"
              alt="Logo"
              width={170}
              height={170}
              className="w-18 h-18 md:w-26 md:h-26"
            />
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8 items-center text-slate-300 text-center">
          <div onClick={scrollToWebsiteDesign} className="hover:text-gray-50 cursor-pointer">
          Product Design
          </div>
          <div onClick={scrollToGraphicDesign} className="hover:text-gray-50 cursor-pointer">
            Artificial Intelligence
          </div>
          <div onClick={scrollToShopifyStores} className="hover:text-gray-50 cursor-pointer">
            Quick Commerce
          </div>
          <div onClick={scrollToBrands} className="hover:text-gray-50 cursor-pointer">
            Brands
          </div>
          <Link href="/Careers" className="hover:text-gray-50">
            Careers
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div onClick={toggleDropDown} className="w-8 h-8 text-slate-300 cursor-pointer">
              <X />
              <DropDownMenu onClose={closeDropDown} scrollToServices={scrollToServices} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
              inline-flex h-10 items-center justify-center 
              rounded-md border border-slate-800 
              bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors
              focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50
            "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


