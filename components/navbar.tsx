"use client";

import { useState, useEffect } from "react";
import { AlignJustify, X, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollBar, setShowScrollBar] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setIsScrolled(scrollTop > 50);
      setScrollProgress(scrolled);
      setShowScrollBar(true);
      setShowCTA(scrolled > 80);

      clearTimeout(timeout);
      timeout = setTimeout(() => setShowScrollBar(false), 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;
  const toggleDropDown = () => setIsDropDownVisible(!isDropDownVisible);
  const closeDropDown = () => setIsDropDownVisible(false);

  return (
    <>
      {/* Scroll Progress Bar */}
      <AnimatePresence>
        {showScrollBar && (
          <motion.div
            className="hidden md:block fixed top-0 left-0 h-[4px] z-[9999] bg-gradient-to-r from-purple-500 to-pink-500"
            style={{ width: `${scrollProgress}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Floating CTA */}
      <AnimatePresence>
        {showCTA && (
          <motion.div
            className="fixed bottom-6 right-6 z-[9999] md:flex hidden"
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-br from-[#689bf5] to-[#827ef6] text-white font-semibold tracking-wide shadow-[0_0_20px_rgba(130,126,246,0.5)] 
              hover:shadow-[0_0_30px_rgba(130,126,246,0.8)] hover:scale-105 transition duration-300"
            >
              Let’s Talk →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top */}
      <AnimatePresence>
        {scrollProgress > 50 && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-[9999] md:flex hidden items-center justify-center w-10 h-10 rounded-full bg-black/70 text-white hover:bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.4 }}
            aria-label="Back to top"
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <div className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${isScrolled ? "bg-black shadow-md" : "bg-transparent"}`}>
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
          <div className="hidden md:flex space-x-6 items-center text-slate-300">
            <button onClick={scrollToWebsiteDesign} className="hover:text-white transition">Website Design</button>
            <button onClick={scrollToGraphicDesign} className="hover:text-white transition">Graphic Design</button>
            <button onClick={scrollToShopifyStores} className="hover:text-white transition">Shopify Stores</button>
            <button onClick={scrollToBrands} className="hover:text-white transition">Brand Strategy</button>
            <button onClick={scrollToServices} className="hover:text-white transition">All Services</button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            {isDropDownVisible ? (
              <X onClick={toggleDropDown} className="w-8 h-8 text-white cursor-pointer" />
            ) : (
              <AlignJustify onClick={toggleDropDown} className="w-8 h-8 text-white cursor-pointer" />
            )}
          </div>

          {/* Desktop Contact */}
          <div className="hidden md:flex">
            <Link href="/contact" className="px-4 py-2 border rounded-md text-slate-400 border-slate-700 bg-slate-900 hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isDropDownVisible && (
          <div className="md:hidden bg-black text-slate-300 px-4 py-3 space-y-3">
            <button onClick={scrollToWebsiteDesign} className="block hover:text-white">Website Design</button>
            <button onClick={scrollToGraphicDesign} className="block hover:text-white">Graphic Design</button>
            <button onClick={scrollToShopifyStores} className="block hover:text-white">Shopify Stores</button>
            <button onClick={scrollToBrands} className="block hover:text-white">Brand Strategy</button>
            <button onClick={scrollToServices} className="block hover:text-white">All Services</button>
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
    </>
  );
};

export default Navbar;
