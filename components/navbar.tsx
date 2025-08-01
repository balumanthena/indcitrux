"use client";

import { useState, useEffect } from "react";
import { AlignJustify, X, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
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
      {/* Scroll Progress Bar (Desktop only) */}
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

      {/* Floating CTA (Desktop only) */}
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
         className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-950 mt-4"
       >
         {/* Spinning gradient border */}
         <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
         
         {/* Inner content */}
         <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-semibold text-white backdrop-blur-3xl z-10 relative">
           Let’s Talk →
         </span>
      </Link>
    </motion.div>
  )}
</AnimatePresence>


      {/* Back to Top Button (Desktop only) */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center text-slate-300">
            {[
              { href: "/", label: "Explore" },
              { href: "/services", label: "What we do" },
              { href: "/careers", label: "Careers" },
              { href: "/about", label: "Who we are" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition px-1 ${
                  isActive(item.href)
                    ? "text-white after:scale-x-100"
                    : "text-slate-300 after:scale-x-0 hover:after:scale-x-100"
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:origin-center after:transition-transform after:duration-300`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            {isDropDownVisible ? (
              <X onClick={toggleDropDown} className="w-8 h-8 text-white cursor-pointer" />
            ) : (
              <AlignJustify onClick={toggleDropDown} className="w-8 h-8 text-white cursor-pointer" />
            )}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex">
            <Link href="/contact" className="px-4 py-2 border rounded-md text-slate-400 border-slate-700 bg-slate-900 hover:text-white">
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
    </>
  );
};

export default Navbar;