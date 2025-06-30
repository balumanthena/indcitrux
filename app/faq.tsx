import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className="p-10 md:p-4 md:px-20">
        {/* Heading Section */}
        <div className="text-3xl md:text-7xl font-bold text-black hover:text-[#6e76ff] transition-colors duration-300">
          Have questions?
        </div>
        <div className="font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-[#6e76ff] to-blue-300 bg-clip-text text-transparent hover:text-[#6e76ff] transition-colors duration-300">
          Get answers.
        </div>

        {/* Accordion Section */}
        <Accordion type="single" collapsible className="mt-8">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:text-[#6e76ff] transition-colors duration-300">
              What is Citrux?
            </AccordionTrigger>
            <AccordionContent>
              Citrux is a full-fledged marketing agency that specializes in
              branding, web design, and digital marketing, and health services including medical coding and RCM solutions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:text-[#6e76ff] transition-colors duration-300">
              How to start?
            </AccordionTrigger>
            <AccordionContent>
              You can start by contacting us. We will get back to you within 24
              hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:text-[#6e76ff] transition-colors duration-300">
              Pricing?
            </AccordionTrigger>
            <AccordionContent>
              We offer custom-tailored solutions for your business. Contact us
              to get a quote.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:text-[#6e76ff] transition-colors duration-300">
              Support?
            </AccordionTrigger>
            <AccordionContent>
              We offer Monday-Friday support for all our clients.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Horizontal Footer Section */}
      <footer className="bg-[#1a1a1a] text-white py-10 mt-10 rounded-b-3xl">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-center md:text-left">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                priority
                src="https://assets.citrux.in/images/citrux_dark_logo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="h-auto w-[120px] md:w-[140px]"
              />
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold text-[#6e76ff] mb-2">IND CITRUX PVT LTD</h3>
              <p className="leading-relaxed">
                2nd Floor, IT Tower, Siddipet<br />
                Siddipet, Telangana, India
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-[#6e76ff] mb-2">Contact</h3>
              <p>Email: <a href="mailto:info@citrux.in" className="text-[#6e76ff] hover:underline">info@citrux.in</a></p>
              <p>Phone: <a href="tel:+918555954798" className="text-[#6e76ff] hover:underline">+91 8555 954 798</a></p>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 mt-8">
            © {new Date().getFullYear()} IND CITRUX PVT LTD. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQS;

