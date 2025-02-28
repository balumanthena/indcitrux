"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";
import { TracingBeam } from "./ui/tracing-beam";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void; // Define scrollToServices function
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices, // Add scrollToServices to props
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
          <Image
             priority
             src="https://assets.citrux.in/images/citrux_dark_logo.svg"
             alt="Logo"
             width={200} // Increased width
             height={200} // Increased height
             className="w-20 h-20 md:w-32 md:h-32" // Adjusted tailwind classes
            />
            
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <div onClick={scrollToWebsiteDesign} className="hover:text-gray-50">
            Website Design
          </div>
          <div onClick={scrollToGraphicDesign} className="hover:text-gray-50">
            Graphic Design
          </div>

          <div onClick={scrollToShopifyStores} className="hover:text-gray-50">
            WooCommerce Stores
          </div>
          <div onClick={scrollToBrands} className="hover:text-gray-50">
            Brands
          </div>

          <Link href="/Careers" className="hover:text-gray-50">
            Careers
          
          </Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToServices={scrollToServices} // Pass scrollToServices
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
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
