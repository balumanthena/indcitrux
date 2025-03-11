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
              branding, web design, and digital marketing.
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

      {/* Footer Section */}
      <footer className="bg-[#e0e0e0] text-black py-6 mt-10 rounded-b-3xl">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <div className="text-sm hover:text-[#6e76ff] transition-colors duration-300">
            © {new Date().getFullYear()} Citrux. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQS;

