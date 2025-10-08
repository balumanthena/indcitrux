"use client";

import Head from "next/head";
import { PiCheckCircleFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LampDemo from "@/components/ui/lamp";
import { UserPlus, ShieldCheck, Users } from "lucide-react";

// ------------------ EXISTING INTERNSHIP OPTIONS ------------------
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

// ------------------ TRAINING PATH ------------------
const programs = [
  {
    title: "Training",
    duration: "Flexible (1–3 Months)",
    description:
      "Learn Product Designing, UX, Web, and Mobile Development powered by AI-driven technology to become industry-ready.",
    features: [
      "Hands-on projects with AI tools",
      "Expert-led mentorship",
      "Real-world product & app case studies",
      "Flexible learning schedule",
    ],
    color: "from-teal-500 to-cyan-400",
  },
  {
    title: "Internship",
    duration: "3–6 Months",
    description:
      "Work on live UX, web, and mobile app projects to gain professional experience and exposure.",
    features: [
      "Real client & product projects",
      "Exposure to industry-standard AI tools",
      "Team collaboration",
      "Letter of recommendation",
    ],
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Placements",
    duration: "Post Training / Internship",
    description:
      "Get placed with top companies or join CitrUX Technologies if you’re passionate about our mission.",
    features: [
      "Job-ready portfolio creation",
      "Mock interviews & career guidance",
      "Placement assistance with partner companies",
      "Opportunity to get hired directly into CitrUX",
    ],
    color: "from-yellow-400 to-orange-500",
  },
];

// ------------------ HIRING ROLES ------------------
const roles = [
  {
    icon: <UserPlus className="w-10 h-10 text-pink-400" />,
    title: "Fresher – HCC Coder",
    tag: "Entry Level",
    description:
      "For certified coders (CPC/CRC) looking to break into the HCC domain. Work with real-world charts & receive mentorship.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-teal-400" />,
    title: "Quality Auditor – HCC",
    tag: "Mid Level",
    description:
      "Audit HCC-coded charts for compliance, documentation integrity & CMS guidelines. Accuracy is your superpower.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: <Users className="w-10 h-10 text-yellow-400" />,
    title: "Team Lead – HCC Coding",
    tag: "Leadership",
    description:
      "Lead coders, own quality, client updates & compliance. Great for experienced certified leaders in HCC projects.",
    color: "from-yellow-400 to-orange-500",
  },
];

// ------------------ FAQ ------------------
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

// ------------------ MAIN COMPONENT ------------------
const Careers = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  // Shared Card Component
  const Card = ({ title, duration, description, features, color, icon, tag }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 shadow-lg p-6 transition-all duration-300"
    >
      {/* Gradient Top Bar */}
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color} group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-300`}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && <div className="p-2 bg-white/10 rounded-lg">{icon}</div>}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        {duration && (
          <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white font-medium">
            {duration}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>

      {/* Feature List */}
      {features && (
        <ul className="text-sm text-gray-300 space-y-2">
          {features.map((f: string) => (
            <li key={f} className="flex items-start gap-2">
              <PiCheckCircleFill className="text-green-400 mt-1" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      {tag && (
        <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-white/10 text-white uppercase tracking-wider">
          {tag}
        </span>
      )}

      {/* CTA */}
      <motion.button
        onClick={() => setShowModal(true)}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.05 }}
        className="mt-6 w-full py-2 px-4 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg transition-all duration-300"
      >
        Apply Now
      </motion.button>
    </motion.div>
  );

  return (
    <div className="w-full min-h-screen bg-gray-950 text-white antialiased relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-indigo-600 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      <Head>
        <title>Join Our Internship Program | Citrux Technologies</title>
        <meta
          name="description"
          content="Apply for exciting internships, training, and HCC hiring roles at Citrux Technologies. Gain hands-on experience and kickstart your career!"
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
      <section className="relative z-10 px-6 md:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
            Explore Internship Opportunities
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the right internship based on your experience level and career goals.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {internships.map((i) => (
            <Card key={i.name} {...i} title={i.name} />
          ))}
        </div>
      </section>

      {/* Training → Internship → Placement Section */}
      <section className="relative z-10 px-6 md:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
            Learn, Intern & Get Placed
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Start with training, apply your skills in internships, and secure placements with us or partner companies.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* We're Hiring Section */}
      <section className="relative z-10 px-6 md:px-16 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-sky-400">
            We&apos;re Hiring – HCC Experts
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Be part of our fast-growing HCC medical coding team at Citrux. All roles require valid CPC/CRC certification.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((r, i) => (
            <Card key={i} {...r} />
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-12">
          All applicants must email their resume to{" "}
          <span className="text-pink-400 font-semibold">careers@citrux.in</span> with subject line:{" "}
          <code>HCC ROLE - [POSITION]</code>
        </p>
      </section>

      {/* Lamp Demo */}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
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
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              >
                ✕
              </button>

              <h3 className="text-2xl font-extrabold text-white mb-4 text-center">
                Apply Now
              </h3>
              <p className="text-gray-300 mb-6 text-center">
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
