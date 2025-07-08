"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

interface DropDownMenuProps {
  onClose: () => void;
  scrollToservices: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose, scrollToservices }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleservicesClick = () => {
    if (pathname === "/") {
      scrollToservices(); // Scroll on homepage
    } else {
      // Force navigation with hash to trigger scroll on home page
      window.location.href = "/#services";
    }
    onClose();
  };

  return (
    <motion.div
      className="
        absolute top-28 left-0 right-0 z-50
        w-screen h-screen
        bg-gradient-to-b from-neutral-50 to-neutral-400
        p-6 space-y-4 rounded-t-3xl
        text-slate-300
      "
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col space-y-10">
        {/* Homepage scroll trigger */}
        <div
          onClick={handleservicesClick}
          className="cursor-pointer text-black text-2xl"
        >
          Home
        </div>
        <Link href="/Careers" className="text-black text-2xl" onClick={onClose}>
          Careers
        </Link>
        <Link href="/contact" className="text-black text-2xl" onClick={onClose}>
          Contact
        </Link>
        <Link href="/book" className="text-black text-2xl" onClick={onClose}>
          Book a Call
        </Link>

        

        {/* ✅ New Direct Services Page Link */}
        <Link href="/services" className="text-black text-2xl" onClick={onClose}>
          Services
        </Link>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
