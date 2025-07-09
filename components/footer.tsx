'use client';

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLinks, setShowLinks] = useState(true);
  const [showServices, setShowServices] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setShowLinks(!mobile); // Expand by default on desktop
      setShowServices(!mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 px-6 md:px-16 relative z-10">
      <div className="space-y-10 md:grid md:grid-cols-5 md:space-y-0 gap-10 mb-12">
        {/* Logo & Description */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="https://assets.citrux.in/images/citrux_dark_logo.svg"
              alt="CitrUX Logo"
              width={140}
              height={40}
            />
          </Link>
          <p className="text-sm leading-relaxed">
            Empowering businesses with cutting-edge digital solutions. From startups to enterprise — CitrUX builds for the future.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <button
            onClick={() => isMobile && setShowLinks(!showLinks)}
            className="flex items-center justify-between w-full text-left md:cursor-default"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            {isMobile && (
              <ChevronDown
                className={`transition-transform ${showLinks ? 'rotate-180' : ''}`}
                size={18}
              />
            )}
          </button>
          {showLinks && (
            <ul className="space-y-2 mt-4 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          )}
        </div>

        {/* Services */}
        <div className="md:col-span-1">
          <button
            onClick={() => isMobile && setShowServices(!showServices)}
            className="flex items-center justify-between w-full text-left md:cursor-default"
          >
            <h4 className="text-lg font-semibold text-white">Services</h4>
            {isMobile && (
              <ChevronDown
                className={`transition-transform ${showServices ? 'rotate-180' : ''}`}
                size={18}
              />
            )}
          </button>
          {showServices && (
            <ul className="space-y-2 mt-4 text-sm">
              <li>Web Design & Development</li>
              <li>App Development</li>
              <li>UI/UX Design</li>
              <li>Automation & AI</li>
              <li>Branding & Strategy</li>
            </ul>
          )}
        </div>

        {/* Contact */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <MapPin className="w-4 h-4 mt-1 mr-2 text-gray-400" />
              <span>2nd Floor, IT Tower, Siddipet, Telangana, India</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-gray-400" />
              <a href="mailto:info@citrux.in" className="hover:text-white">info@citrux.in</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-gray-400" />
              <a href="tel:+918555954798" className="hover:text-white">+91 85559 54798</a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold mb-4 text-white">Connect with Us</h4>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-white">
              <Facebook size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-white">
              <Twitter size={20} />
            </Link>
            <Link href="https://www.linkedin.com/company/citrux-technologies/" target="_blank" className="hover:text-white">
              <Linkedin size={20} />
            </Link>
            <Link href="https://www.instagram.com/citrux_technologies/profilecard/?igsh=MWw0cTl2YzVpeHA5cw%3D%3D" target="_blank" className="hover:text-white">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} IND CITRUX PVT LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
