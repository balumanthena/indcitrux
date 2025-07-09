"use client";
import { useState, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

const Navbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <div className="flex items-center">
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
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center text-slate-300 text-center">
          <div onClick={() => scrollToSection("website-design")} className="hover:text-gray-50 cursor-pointer">
            Product Design
          </div>
          <div onClick={() => scrollToSection("graphic-design")} className="hover:text-gray-50 cursor-pointer">
            Artificial Intelligence
          </div>
          <div onClick={() => scrollToSection("shopify-stores")} className="hover:text-gray-50 cursor-pointer">
            Quick Commerce
          </div>
          <div onClick={() => scrollToSection("brands")} className="hover:text-gray-50 cursor-pointer">
            Brands
          </div>

          {/* ✅ Link to Services Page */}
          <Link href="/services" className="hover:text-gray-50">
            Services
          </Link>

          <Link href="/Careers" className="hover:text-gray-50">
            Careers
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div onClick={toggleDropDown} className="w-8 h-8 text-slate-300 cursor-pointer">
              <X />
              <DropDownMenu onClose={closeDropDown} scrollToservices={() => scrollToSection("services")} />
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
            className="inline-flex h-10 items-center justify-center rounded-md border border-slate-800 
              bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors
              focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


