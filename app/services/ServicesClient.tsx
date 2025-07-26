'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import { Rocket } from 'lucide-react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

type Service = {
  name: string;
  description: string;
  details: string;
  image: string;
};

const services: Service[] = [
  {
    name: 'Website Design',
    description: 'We build fully responsive websites that look great on all devices...',
    details:
      'At Citrux Technologies, we design and develop fully responsive websites that scale beautifully across all screen sizes. From bold visuals to fluid user interactions, we create digital experiences that engage your audience on any device—whether it’s a mobile phone, tablet, or desktop. Built with performance, design, and strategy in mind, our responsive websites don’t just look good—they work hard for your business 24/7',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'E-commerce Store',
    description: 'From small stores to large online retailers...',
    details:
      'Whether you are on Shopify, WooCommerce, or a custom headless platform, we craft e-commerce experiences that are as scalable and performant as they are visually stunning—backed by best practices in UX, SEO, and CRO.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'UI / UX',
    description: 'We design intuitive, user-friendly interfaces...',
    details:
      'At Citrux Technologies, our UI/UX specialists blend design thinking with modern technology to deliver digital experiences that are beautiful, functional, and human-centered. We prioritize simplicity, clarity, and responsiveness—ensuring that users not only understand your product, but love using it.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Health Service',
    description: 'We provide all R1 and RCM service with excellent output.',
    details:
      'We offer comprehensive, end-to-end R1 and Revenue Cycle Management (RCM) solutions—including medical billing, claims processing, and accurate medical coding—to help healthcare providers streamline operations, maximize reimbursements, and maintain compliance across the revenue cycle.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'App Development',
    description: 'We build custom mobile apps for iOS and Android...',
    details:
      'We design and develop custom mobile applications tailored to your unique business needs—combining user-centric design, robust functionality, and seamless performance. From concept to launch, we create intuitive, scalable apps for both iOS and Android that deliver real value and engage users every step of the way.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ServicesPage() {
  const searchParams = useSearchParams();
  const queryService = searchParams.get('service');
  const [selectedService, setSelectedService] = useState<Service>(services[0]);

  useEffect(() => {
    if (queryService) {
      const target = services.find((s) =>
        queryService.toLowerCase().includes(s.name.toLowerCase().split(' ')[0].toLowerCase())
      );
      if (target) setSelectedService(target);
    }
  }, [queryService]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <Head>
        <title>Our Services | CitrUX</title>
        <meta name="description" content="Explore services like Cloud, AI, Software Development, and more from CitrUX." />
      </Head>

      <Navbar />

      {/* Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-indigo-600 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      {/* Header */}
      <header className="relative pt-24 pb-12 px-4 md:px-16 text-center z-10">
        <motion.h4
          className="uppercase text-sm tracking-wide text-purple-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Services
        </motion.h4>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          What We Do
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mt-4 text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          From website design to social media management, we offer a wide range of services to help you grow your business.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 mt-8"
        >
          {services.map((service) => (
            <motion.div key={service.name} variants={itemVariants}>
              <ServiceButton service={service} isSelected={selectedService.name === service.name} onClick={() => setSelectedService(service)} />
            </motion.div>
          ))}
        </motion.div>
      </header>

      <ScrollingText selectedServiceName={selectedService.name} />

      <section className="relative z-10 px-4 md:px-16 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <ServiceDetails service={selectedService} />
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
}

function ServiceButton({ service, isSelected, onClick }: { service: Service; isSelected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isSelected}
      className={`w-full sm:w-auto text-center px-6 py-2 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg ${
        isSelected
          ? 'bg-white text-gray-900 font-semibold shadow-purple-500/50'
          : 'border-white text-white hover:bg-white hover:text-gray-900 hover:shadow-lg hover:shadow-purple-500/40'
      }`}
    >
      {service.name}
    </button>
  );
}

function ServiceDetails({ service }: { service: Service }) {
  const router = useRouter();

  return (
    <>
      <motion.div
        key={service.name + '-text'}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Transform Your Business with  <br />{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
            {service.name}
          </span>
        </h2>
        <p className="text-purple-300 font-medium mb-4">{service.description}</p>
        <p className="mb-6 leading-relaxed text-gray-300">{service.details}</p>
        <button
  onClick={() => router.push('/book')}
  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4"
>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-semibold text-white backdrop-blur-3xl">
    Schedule Free Consultation →
  </span>
</button>

      </motion.div>

      <motion.div
        key={service.name + '-image'}
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.98 }}
      >
        <Image src={service.image} alt={service.name} width={500} height={500} className="rounded-xl shadow-2xl object-cover" />
      </motion.div>
    </>
  );
}

function ScrollingText({ selectedServiceName }: { selectedServiceName: string }) {
  return (
    <div className="relative overflow-hidden py-4 bg-gradient-to-r from-purple-800/30 via-indigo-700/30 to-blue-700/30 z-10 group">
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-950 to-transparent z-20 pointer-events-none" />

      <div className="relative z-10 whitespace-nowrap overflow-hidden">
        <div className="inline-flex animate-marquee group-hover:[animation-play-state:paused]">
          {services.concat(services).map((service, index) => {
            const isSelected = service.name === selectedServiceName;
            return (
              <div
                key={`${service.name}-${index}`}
                className={`flex items-center gap-2 px-6 text-lg ${
                  isSelected
                    ? 'text-white font-semibold bg-purple-600/30 rounded-full px-4 py-1 shadow-md'
                    : 'text-purple-300'
                }`}
              >
                <Rocket size={18} className={isSelected ? 'text-white' : 'text-purple-400'} />
                {service.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
