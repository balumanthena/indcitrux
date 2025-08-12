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
import { UserPlus, ShieldCheck, Users } from "lucide-react";

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
        <title>Join Our Internship Program | Citrux Technologies</title>
        <meta
          name="description"
          content="Apply for exciting internships at Balu Tech Crop. Gain hands-on experience and kickstart your career!"
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-24 pb-12 px-6 md:px-16 text-center z-10">
        <motion.h4
          className="uppercase text-sm tracking-wide text-purple-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Careers
        </motion.h4>
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Your Future Starts Here
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mt-4 text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
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

      <span className="flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></span>

        <span className="shrink-0 px-4 text-gray-900 dark:text-white"></span>

        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
      </span>

      {/* We're Hiring Section */}
      <section className="relative z-10 px-6 md:px-16 py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-sky-400 animate-text-glow">
            We&apos;re Hiring – HCC Experts
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Be part of our fast-growing HCC medical coding team at Citrux. All roles require valid CPC/CRC certification.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <UserPlus className="w-12 h-12 text-pink-400" />,
              title: "Fresher – HCC Coder",
              tag: "Entry Level",
              description:
                "For certified coders (CPC/CRC) looking to break into the HCC domain. Work with real-world charts & receive mentorship.",
              color: "from-pink-500 to-purple-500",
            },
            {
              icon: <ShieldCheck className="w-12 h-12 text-teal-400" />,
              title: "Quality Auditor – HCC",
              tag: "Mid Level",
              description:
                "Audit HCC-coded charts for compliance, documentation integrity & CMS guidelines. Accuracy is your superpower.",
              color: "from-teal-500 to-cyan-500",
            },
            {
              icon: <Users className="w-12 h-12 text-yellow-400" />,
              title: "Team Lead – HCC Coding",
              tag: "Leadership",
              description:
                "Lead coders, own quality, client updates & compliance. Great for experienced certified leaders in HCC projects.",
              color: "from-yellow-400 to-orange-500",
            },
          ].map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className={`group p-6 rounded-2xl border border-gray-800 shadow-xl bg-gradient-to-br ${role.color} hover:shadow-${role.color.split(" ")[1]}/60 transition-all`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-xl">{role.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{role.title}</h3>
                  <span className="inline-block mt-1 text-xs px-3 py-1 rounded-full bg-white/10 text-white uppercase tracking-wider">
                    {role.tag}
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/90 mb-6 leading-relaxed">{role.description}</p>
              <motion.button
                onClick={() => setShowModal(true)}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.05 }}
                className="w-full py-2 px-4 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          All applicants must email their resume to{" "}
          <span className="text-pink-400 font-semibold">careers@citrux.in</span> with subject line:{" "}
          <code>HCC ROLE - [POSITION]</code>
        </p>
      </section>

      <LampDemo />

      {/* FAQ Section */}
      <section className="container mx-auto py-16 px-6 relative z-10">
        <h2 className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full flex justify-between items-center p-6 text-left text-xl font-bold text-white hover:bg-gray-800 transition-all"
              >
                {faq.question}
                <span className="text-2xl" aria-hidden="true">
                  {openFAQ === index ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openFAQ === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-gray-900 px-6 pb-6 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-lg w-full bg-gray-900 rounded-xl shadow-xl p-8 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                aria-label="Close application modal"
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3
                id="modal-title"
                className="text-2xl font-extrabold text-white mb-4 text-center"
              >
                Apply for Internship
              </h3>
              <p
                id="modal-description"
                className="text-gray-300 mb-6 text-center"
              >
                Please send your CV and a brief cover letter to{" "}
                <a
                  href="mailto:careers@citrux.in"
                  className="text-purple-400 underline"
                >
                  careers@citrux.in
                </a>
              </p>
              <p className="text-sm text-gray-500 text-center">
                We&apos;ll get back to you as soon as possible.
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
