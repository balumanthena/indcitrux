"use client";

import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";





const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSd1wTtouug0gtOWF4pJ5mbL4jG7qVYKXGxE5sP9bCZNz_gVmA/viewform?usp=sharing";

const internships = [
  {
    name: "Beginner Internship",
    duration: "1-3 Months",
    features: [
      "Hands-on experience",
      "Guidance from mentors",
      "Basic project work",
      "Flexible working hours",
    ],
    description: "Perfect for students and freshers looking to gain initial experience in the industry.",
    color: "from-blue-500 to-green-400",
  },
  {
    name: "Advanced Internship",
    duration: "3-6 Months",
    features: [
      "Work on real-world projects",
      "Exposure to industry tools",
      "Team collaboration",
      "Letter of recommendation",
    ],
    description: "Best for those who have prior knowledge and want deeper involvement in real-world projects.",
    color: "from-purple-500 to-pink-400",
  },
  {
    name: "Research Internship",
    duration: "6+ Months",
    features: [
      "Innovative problem-solving",
      "Collaborate with experts",
      "Access to premium resources",
      "Potential for full-time role",
    ],
    description: "Ideal for those interested in deep research and innovation in their field.",
    color: "from-yellow-500 to-orange-400",
  },
];
const faqs = [
  {
    question: "Who can apply for the internship?",
    answer: "Anyone with a passion for learning and relevant skills can apply, including students and professionals looking for hands-on experience.",
  },
  {
    question: "Is the internship paid?",
    answer: "Currently, our internships are unpaid but offer valuable experience and networking opportunities.",
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes, all interns receive a certificate upon successful completion of the internship.",
  },
  {
    question: "How can I apply?",
    answer: "You can apply by filling out the application form linked above.",
  },
];

const Careers = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Navbar scrollToWebsiteDesign={() => {}}
              scrollToGraphicDesign={() => {}}
              scrollToShopifyStores={() => {}}
              scrollToBrands={() => {}}
              scrollToServices={() => {}} />

      {/* Header Section */}
      <div className="text-center pt-48 py-16 px-6">
  <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
    Join Our Internship Program 🚀
  </h1>
  <p className="text-lg text-gray-300">
    Gain hands-on experience, work with industry experts, and kickstart your career!
  </p>
</div>


      {/* Internship Cards Section */}
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        {internships.map((internship) => (
          <motion.div
            key={internship.name}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`relative flex flex-col justify-between border border-white/10 rounded-3xl p-6 bg-[#1a1a1a] shadow-xl transition-all duration-300
                        before:absolute before:inset-0 before:bg-gradient-to-br ${internship.color} before:opacity-10 before:transition-all before:duration-300 
                        hover:before:opacity-30 hover:shadow-2xl`}
          >
            <h2 className="text-3xl font-semibold relative z-10">{internship.name}</h2>
            <p className="text-lg text-gray-400 mt-2 relative z-10">{internship.duration}</p>
            <p className="mt-4 relative z-10">{internship.description}</p>
            <ul className="mt-4 text-left relative z-10">
              {internship.features.map((feature) => (
                <li key={feature} className="flex items-center text-lg py-1">
                  <PiCheckCircleFill className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-lg text-center bg-green-500 hover:bg-green-600 rounded-lg text-white transition-all relative z-10"
                aria-label="Apply for Internship"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* YouTube Video Section */}
      <div className="container mx-auto text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          Learn More About Our Internships
        </h2>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            className="w-full h-64 sm:h-80 md:h-96 rounded-lg"
            src="https://www.youtube.com/embed/keeda8x98TU?si=z67QFKJN2Lp5VHja"
            title="Internship Introduction"
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>

      {/* FAQ Accordion */}
      <div className="container mx-auto text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          Frequently Asked Questions
        </h2>
        <div className="text-left max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 border-b border-gray-700 pb-4">
              <h3 className="text-2xl font-semibold cursor-pointer" onClick={() => toggleFAQ(index)}>
                {faq.question}
              </h3>
              {openFAQ === index && <p className="text-lg text-gray-300 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
