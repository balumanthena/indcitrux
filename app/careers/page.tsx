"use client";

import Head from "next/head";
import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const googleFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSd1wTtouug0gtOWF4pJ5mbL4jG7qVYKXGxE5sP9bCZNz_gVmA/viewform?usp=sharing";

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
    answer:
      "Yes, all interns receive a certificate upon successful completion of the internship.",
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
    <div className="w-full min-h-screen bg-gray-950 text-white antialiased relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-indigo-600 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

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

      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-16 px-6 md:px-16 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-700 text-center z-10 relative">
        <h4 className="uppercase text-sm tracking-wide text-purple-300">CAREERS</h4>
        <h1 className="text-3xl md:text-5xl font-bold mt-2 text-white">Careers</h1>
        <p className="max-w-2xl mx-auto mt-4 text-white/80 text-lg md:text-xl">
          Join our mission-driven team and grow your career with real-world experience, guidance, and innovation.
        </p>
      </section>

      {/* Internship Cards */}
      <section className="pt-10 z-10 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="container mx-auto grid md:grid-cols-3 gap-8 px-6"
        >
          {internships.map((internship, index) => (
            <motion.div
              key={internship.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="relative flex flex-col justify-between rounded-xl p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-purple-700/30 shadow-md backdrop-blur-xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-1 text-white">{internship.name}</h2>
                <p className="text-sm text-purple-400 mb-4">{internship.duration}</p>
                <p className="text-gray-300 mb-4 text-sm">{internship.description}</p>
                <ul className="space-y-2 text-sm text-gray-200 mb-4">
                  {internship.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <PiCheckCircleFill className="text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  className="inline-block w-full text-center py-2 rounded-md bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Apply Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* YouTube Section */}
      <div className="container mx-auto text-center py-16 px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Learn More About Our Internships
        </h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
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
      <div className="container mx-auto py-16 px-6 relative z-10">
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
                openFAQ === index ? "shadow-2xl border-purple-400" : ""
              }`}
              layout
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left text-xl font-bold text-white hover:bg-gray-800 transition-all"
              >
                {faq.question}
                <span className="text-2xl">{openFAQ === index ? "−" : "+"}</span>
              </button>

              <AnimatePresence initial={false}>
                {openFAQ === index && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-gray-300">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
