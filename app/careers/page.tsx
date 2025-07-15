"use client";

import Head from "next/head";
import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import LampDemo from "@/components/ui/lamp";

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
    answer: "You can apply by sending your CV to careers@citrux.in",
  },
];

const Careers = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <div className="w-full min-h-screen bg-gray-950 text-white antialiased relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-indigo-600 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      <Head>
        <title>Join Our Internship Program | Balu Tech Crop</title>
        <meta
          name="description"
          content="Apply for exciting internships at Balu Tech Crop. Gain hands-on experience and kickstart your career!"
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-24 pb-12 px-6 md:px-16 text-center z-10">
        <motion.h4 className="uppercase text-sm tracking-wide text-purple-300" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          Careers
        </motion.h4>
        <motion.h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          Your Future Starts Here
        </motion.h1>
        <motion.p className="max-w-2xl mx-auto mt-4 text-gray-300 text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Join our mission-driven team and advance your career where innovation begins.
        </motion.p>
      </header>
{/* Internship Cards */}
<section className="relative z-10 px-6 md:px-16 py-20 bg-gray-950">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
      Explore Internship Opportunities
    </h2>
    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
      Choose the right internship based on your experience level and career goals.
    </p>
  </div>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
    className="grid md:grid-cols-3 gap-8"
  >
    {internships.map((internship, index) => (
      <motion.div
        key={internship.name}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileHover={{ scale: 1.02 }}
        className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 shadow-lg p-6 transition-all duration-300"
      >
        {/* Top Gradient Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-300" />

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">{internship.name}</h3>
          <span className="px-3 py-1 text-xs rounded-full bg-purple-700/20 text-purple-300 font-medium">
            {internship.duration}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{internship.description}</p>

        {/* Feature List */}
        <ul className="text-sm text-gray-300 space-y-2">
          {internship.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <PiCheckCircleFill className="text-green-400 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          onClick={() => setShowModal(true)}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.03 }}
          className="mt-6 w-full py-2 px-4 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-lg transition-all duration-300 group-hover:shadow-purple-500/40"
        >
          Apply Now
        </motion.button>
      </motion.div>
    ))}
  </motion.div>
</section>
<LampDemo></LampDemo>

      <section className="container mx-auto text-center py-16 px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Inside Our Internship Culture
        </h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl border border-purple-700"
        >
          <iframe
            className="w-full h-64 sm:h-80 md:h-96"
            src="https://www.youtube.com/embed/keeda8x98TU?si=z67QFKJN2Lp5VHja"
            title="Internship Introduction"
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-16 px-6 relative z-10">
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
              className={`rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl border border-gray-700 transition-all duration-300 ${openFAQ === index ? "shadow-2xl border-purple-400" : ""}`}
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
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16 px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Begin?</h2>
        <p className="mb-8 text-lg text-gray-200">Jumpstart your career with guidance and real-world projects.</p>
        <button
          onClick={() => setShowModal(true)}
          className="inline-block px-8 py-3 bg-white text-purple-800 font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
        >
          Apply for Internship
        </button>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gray-900 text-white rounded-2xl p-8 w-[90%] max-w-md shadow-2xl border border-purple-600 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-white text-2xl hover:text-red-400 transition"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Apply via Email</h3>
              <p className="text-gray-300">
                Please send your updated CV to{" "}
                <span className="text-pink-400 font-medium">careers@citrux.in</span> to apply for this role.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Careers;
