'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <Head>
        <title>About Us | CitrUX</title>
        <meta
          name="description"
          content="Learn about CitrUX, our mission, values, and the team that powers innovation."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0e0e0e] to-[#121212] text-white flex items-center justify-center px-6 md:px-16">
        <div className="absolute w-[600px] h-[600px] bg-purple-800 opacity-20 rounded-full blur-[100px] top-[-100px] left-[-200px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-700 opacity-20 rounded-full blur-[100px] bottom-[-150px] right-[-200px] animate-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Shaping the Future of Digital Innovation
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mt-6 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            We are CitrUX — combining creativity, strategy, and technology to power the next generation of businesses.
          </motion.p>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="relative z-10 px-6 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center">
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
      Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Vision</span>
    </h2>

    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
      <p>
        CitrUX exists to transform bold ideas into scalable, human-centered digital products that drive measurable outcomes. We’re not just a digital agency—we are strategic partners for innovation, growth, and meaningful change.
      </p>
      <p>
        Our process starts with empathy. We deeply understand the problems, needs, and behaviors of the people who will use the solutions we build. From startups to global enterprises, we collaborate closely with our clients to craft intuitive digital experiences that are both elegant and efficient.
      </p>
      <p>
        At the heart of CitrUX is a belief in clarity through design. Every interaction, layout, and visual element is intentional—aimed at reducing complexity and enhancing user engagement. We pair that design-first mindset with cutting-edge technologies to move quickly and scale effectively, without ever compromising on quality.
      </p>
      <p>
        Whether it’s developing next-gen platforms, reimagining customer experiences, or streamlining operations with AI-powered tools, our goal is to create impact. And that impact is measured not just in metrics, but in the lasting value we bring to our partners and the communities they serve.
      </p>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Image
      src="/images/image-business.jpeg"
      alt="Vision"
      width={600}
      height={400}
      className="rounded-xl shadow-2xl object-cover"
      priority
    />
  </motion.div>
</section>


      {/* Core Values Section */}
      <section className="relative z-10 px-6 md:px-16 py-20 bg-gradient-to-br from-gray-900 to-gray-950">
        <motion.h2
          className="text-center text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Core Pillars
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: 'Innovation', desc: 'Pushing boundaries to build what matters most.' },
            { title: 'Transparency', desc: 'Open dialogue, honest process, ethical choices.' },
            { title: 'Growth', desc: 'We grow with our partners—together and intentionally.' },
            { title: 'Design Thinking', desc: 'Human-centered problem-solving across every touchpoint.' },
            { title: 'Speed', desc: 'Fast delivery without sacrificing quality or clarity.' },
            { title: 'Collaboration', desc: 'We build with—not just for—our clients.' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur-md text-center shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 md:px-16 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Collaborate?
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Whether you&apos;re launching something new or leveling up, CitrUX is your partner in design, development, and digital transformation.
        </p>
        <Link
          href="/book"
          className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          Book a Free Consultation
        </Link>
      </section>

      <Footer />
    </div>
  );
}
