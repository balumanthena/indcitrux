// components/navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
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

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const scrolled = (scrollTop / docHeight) * 100;

      setIsScrolled(scrollTop > 50);
      setScrollProgress(Number.isFinite(scrolled) ? scrolled : 0);
      setShowScrollBar(true);
      setShowCTA(scrolled > 80);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        setShowScrollBar(false);
        timeoutRef.current = null;
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  const isActive = (path: string) => pathname === path;
  const toggleDropDown = () => setIsDropDownVisible((s) => !s);
  const closeDropDown = () => setIsDropDownVisible(false);

  // Desktop and mobile nav arrays (Staffing added)
  const desktopNav = [
    { href: "/", label: "Explore" },
    { href: "/services", label: "What we do" },
    { href: "/staffing", label: "Staffing" }, // <-- added
    { href: "/careers", label: "Careers" },
    { href: "/about", label: "Who we are" },
  ];

  const mobileNav = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/staffing", label: "Staffing" }, // <-- added
    { href: "/careers", label: "Careers" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <AnimatePresence>
        {showScrollBar && (
          <motion.div
            className="hidden md:block fixed top-0 left-0 h-[4px] z-[9999] bg-gradient-to-r from-purple-500 to-pink-500"
            style={{ width: `${scrollProgress}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </AnimatePresence>

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
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-semibold text-white backdrop-blur-3xl z-10 relative">
                Let’s Talk →
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

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

      <div
        className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
          isScrolled ? "bg-black shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="cursor-pointer">
            <Image
              priority
              src="/logo/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-auto w-[120px] md:w-[140px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center text-slate-300">
            {desktopNav.map((item) => (
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
            <Link
              href="/contact"
              className="px-4 py-2 border rounded-md text-slate-400 border-slate-700 bg-slate-900 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isDropDownVisible && (
          <div className="md:hidden bg-black text-slate-300 px-4 py-3 space-y-3">
            {mobileNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeDropDown}
                className={`block hover:text-white ${isActive(item.href) ? "text-white font-medium" : ""}`}
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
