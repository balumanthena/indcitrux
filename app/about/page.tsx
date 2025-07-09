'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/navbar"; // ✅ Make sure path is correct
import Footer from '@/components/footer';


export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <Navbar /> {/* ✅ Navbar now visible */}

      <Head>
        <title>About Us | CitrUX</title>
        <meta
          name="description"
          content="Learn about CitrUX, our mission, values, and the team that powers innovation."
        />
      </Head>

      {/* Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-700 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-600 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      {/* Hero Section */}
      <header className="relative z-10 text-center pt-32 pb-12 px-6 md:px-16 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-700">
        <motion.h4
          className="uppercase text-sm tracking-widest text-purple-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Us
        </motion.h4>
        <motion.h1
          className="text-3xl md:text-5xl font-bold mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          We Are CitrUX
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mt-4 text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Empowering businesses with cutting-edge digital solutions—from web design and app development to AI and automation.
        </motion.p>
      </header>

      {/* Mission Section */}
      <section className="relative z-10 px-6 md:px-16 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">Mission</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At CitrUX, our mission is to empower startups, enterprises, and entrepreneurs by transforming ideas into scalable digital products. We believe in collaboration, transparency, and building solutions that last.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Mission illustration"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl object-cover"
          />
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 px-6 md:px-16 py-16 bg-gradient-to-br from-gray-900 to-gray-950">
        <motion.h2
          className="text-center text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {['Innovation', 'Transparency', 'Growth'].map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur-md text-center shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{value}</h3>
              <p className="text-gray-300 text-sm">
                {value === 'Innovation' &&
                  'We embrace creativity and cutting-edge technology to solve real-world problems.'}
                {value === 'Transparency' &&
                  'We build trust through open communication and honest collaboration.'}
                {value === 'Growth' &&
                  'We believe in continuous learning and uplifting every team member and client.'}
              </p>
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
          Whether you're launching a new venture or scaling your business, CitrUX is here to support your vision with powerful digital solutions.
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
