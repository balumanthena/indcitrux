"use client";

import Head from "next/head";
import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/navbar";

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
    description:
      "Perfect for students and freshers looking to gain initial experience in the industry.",
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
    description:
      "Best for those who have prior knowledge and want deeper involvement in real-world projects.",
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
    description:
      "Ideal for those interested in deep research and innovation in their field.",
    color: "from-yellow-500 to-orange-400",
  },
];

const faqs = [
  {
    question: "Who can apply for the internship?",
    answer:
      "Anyone with a passion for learning and relevant skills can apply, including students and professionals looking for hands-on experience.",
  },
  {
    question: "Is the internship paid?",
    answer:
      "Currently, our internships are unpaid but offer valuable experience and networking opportunities.",
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
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white antialiased">
      <Head>
        <title>Join Our Internship Program | Balu Tech Crop</title>
        <meta
          name="description"
          content="Apply for exciting internships at Balu Tech Crop. Gain hands-on experience and kickstart your career!"
        />
        <meta
          name="keywords"
          content="internship, careers, Balu Tech Crop, tech jobs, student internships"
        />
      </Head>

      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />

      {/* Header Section */}
      <div className="text-center pt-48 py-16 px-6">
        <h1 className="text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse">
          Join Our Internship Program 🚀
        </h1>
        <p className="text-xl text-gray-400 tracking-wide">
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
            className={`relative flex flex-col justify-between rounded-3xl p-6 bg-opacity-50 backdrop-blur-2xl border border-white/30 shadow-xl transition-all duration-300
                        bg-gradient-to-br ${internship.color} hover:shadow-2xl hover:border-cyan-400 hover:from-green-400 hover:to-blue-500`}
          >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black/30 rounded-3xl z-0 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold mb-2 tracking-wide">
                {internship.name}
              </h2>
              <p className="text-lg text-gray-200 font-semibold">
                {internship.duration}
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                {internship.description}
              </p>
              <ul className="mt-4">
                {internship.features.map((feature) => (
                  <li key={feature} className="flex items-center text-lg py-1">
                    <PiCheckCircleFill className="text-green-400 mr-2" />
                    <span className="text-gray-100 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block py-3 text-lg text-center bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 rounded-full text-white shadow-lg transition-all duration-300"
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

      {/* FAQ Section */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl border border-gray-700 backdrop-blur-xl transition-all duration-300 ${
                openFAQ === index ? "shadow-2xl border-cyan-400" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left text-xl font-bold text-white hover:bg-gray-800 transition-all"
              >
                {faq.question}
                <span className="text-2xl">
                  {openFAQ === index ? "−" : "+"}
                </span>
              </button>
              {openFAQ === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 text-gray-300">{faq.answer}</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;




