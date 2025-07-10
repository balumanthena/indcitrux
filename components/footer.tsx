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
import { motion } from "framer-motion";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLinks, setShowLinks] = useState(true);
  const [showServices, setShowServices] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setShowLinks(!mobile);
      setShowServices(!mobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <footer className="relative z-10 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300 pt-16 pb-10 px-6 md:px-20">
      <div className="grid md:grid-cols-5 gap-12 mb-16">
        {/* Logo & Description */}
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="inline-block">
            <Image
              src="https://assets.citrux.in/images/citrux_dark_logo.svg"
              alt="CitrUX Logo"
              width={140}
              height={40}
              className="hover:opacity-90 transition-opacity"
            />
          </Link>
          <p className="text-sm text-gray-400">
            Empowering businesses with cutting-edge digital solutions. From startups to enterprise — CitrUX builds for the future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
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
            <ul className="space-y-3 mt-4 text-sm text-gray-400">
              {['Home', 'Services', 'Careers', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 200 }}>
                    <Link href={`/${link.toLowerCase()}`} className="hover:text-white transition">
                      {link}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Services */}
        <div>
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
            <ul className="space-y-3 mt-4 text-sm text-gray-400">
              {[
                'Web Design & Development',
                'App Development',
                'UI/UX Design',
                'Automation & AI',
                'Branding & Strategy'
              ].map((service) => (
                <li key={service} className="hover:text-white transition">{service}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-sm">
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <MapPin className="w-4 h-4 mt-1 mr-2 text-gray-500" />
              <span>2nd Floor, IT Tower, Siddipet, Telangana, India</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-gray-500" />
              <a href="mailto:info@citrux.in" className="hover:text-white">info@citrux.in</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-gray-500" />
              <a href="tel:+918555954798" className="hover:text-white">+91 85559 54798</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Connect with Us</h4>
          <div className="flex space-x-4">
            {[{
              icon: <Facebook size={20} />,
              href: 'https://facebook.com'
            }, {
              icon: <Twitter size={20} />,
              href: 'https://twitter.com'
            }, {
              icon: <Linkedin size={20} />,
              href: 'https://www.linkedin.com/company/citrux-technologies/'
            }, {
              icon: <Instagram size={20} />,
              href: 'https://www.instagram.com/citrux_technologies/profilecard/?igsh=MWw0cTl2YzVpeHA5cw%3D%3D'
            }].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-white transition"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} IND CITRUX PVT LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
