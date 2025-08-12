'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

/* -------------------------------------------------------------------------- */
/* ------------------------- FUTURISTIC SERVICES PAGE ------------------------ */
/* -------------------------------------------------------------------------- */

type Service = {
  name: string;
  description: string;
  details: string;
  image: string;
};

const services: Service[] = [
  {
    name: 'Website Design',
    description: 'Responsive, fast & beautiful brand websites',
    details:
      'Pixel-perfect responsive websites, optimized for speed, accessibility and conversion. We pair design systems with performance engineering to deliver an unforgettable first impression that actually converts visitors into customers.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'E-commerce Store',
    description: 'Fast, scalable stores that sell',
    details:
      'From headless storefronts to conversion-first UX, we build e-commerce platforms that scale. Cart flows, subscriptions, B2B pricing — we cover it with analytics & A/B testing baked in.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'UI / UX',
    description: 'Human-centered, delightful product design',
    details:
      "We design flows, interactions and systems that feel simple and magical. Research-backed prototypes, design systems, and component libraries help your product scale consistently.",
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Health Service',
    description: 'R1 & RCM with privacy-first operations',
    details:
      'Reliable revenue cycle management services with precision, comprehensive audit trails, and automation—helping healthcare providers accelerate payments and streamline operations while ensuring compliance.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'App Development',
    description: 'Native & cross-platform apps built to delight',
    details:
      'End-to-end mobile apps with delightful performance, offline-first UX, and crisp animations. We deliver maintainable code and ship fast without sacrificing quality.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function ServicesClient() {
  const searchParams = useSearchParams();
  const queryService = searchParams?.get('service') ?? '';
  const router = useRouter();

  const defaultIndex = Math.max(
    0,
    services.findIndex((s) => queryService && s.name.toLowerCase().includes(queryService.toLowerCase()))
  );

  const [index, setIndex] = useState<number>(defaultIndex >= 0 ? defaultIndex : 0);
  const selected = services[index];

  useEffect(() => {
    try {
      const name = encodeURIComponent(selected.name.toLowerCase().split(' ')[0]);
      const newUrl = `${window.location.pathname}?service=${name}`;
      window.history.replaceState({}, '', newUrl);
    } catch {
      // noop for SSR or environments without window
    }
  }, [index, selected.name]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + services.length) % services.length);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % services.length);
      if (e.key === 'Home') setIndex(0);
      if (e.key === 'End') setIndex(services.length - 1);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white overflow-hidden">
      <Navbar />

      <Head>
        <title>Services • CitrUX — Futuristic</title>
        <meta name="description" content="Futuristic services UI for CitrUX — animated, accessible and conversion-focused." />
      </Head>

      <AmbientBackground />

      <header className="relative z-20 px-6 md:px-12 pt-12 pb-6">
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white pt-10">
            Services that feel like the future.
          </h1>
          <p className="mt-3 text-lg text-gray-300 max-w-2xl">
            A collection of thoughtfully crafted digital products and services — performance-first, human-centered and engineered for scale.
          </p>
        </div>
      </header>

      <main className="relative z-20 flex-1 px-4 md:px-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 items-start">
          <aside className="col-span-1">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div role="listbox" aria-label="Services" className="space-y-4 sticky top-28">
                {services.map((s, i) => (
                  <ServiceNavItem key={s.name} service={s} active={i === index} onClick={() => setIndex(i)} index={i} />
                ))}
              </div>
              <div className="mt-8 text-xs text-gray-400">
                Tip: use <span className="text-white">←</span> <span className="text-white">→</span> to quickly navigate, or click a service.
              </div>
            </motion.div>
          </aside>

          <section className="col-span-2">
            <AnimatePresence mode="wait">
              <motion.article
                key={selected.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
                className="relative rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/3 via-white/2 to-transparent border border-white/6 p-6 shadow-2xl overflow-hidden"
                aria-live="polite"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">{selected.name}</span>
                      <span className="text-sm text-gray-400 ml-3">— {selected.description}</span>
                    </h2>

                    <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed">{selected.details}</p>

                    <div className="mt-6 flex flex-wrap gap-3 items-center">
                      <NeonButton onClick={() => router.push('/book')}>Schedule Free Consultation</NeonButton>

                     

                      
                    </div>
                  </div>

                  <div className="w-full md:w-96 flex-shrink-0">
                    <ParallaxImage src={selected.image} alt={selected.name} />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs text-gray-400">
                  <div>Quality-assured • Performance-first • Accessible</div>

                  <div className="flex items-center gap-3">
                    <div className="text-xs text-purple-300">
                      {index + 1}/{services.length}
                    </div>
                    <ProgressDots length={services.length} active={index} onSelect={(i) => setIndex(i)} />
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ---------------------------- Helper Components --------------------------- */

function AmbientBackground() {
  return (
    <>
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" initial={false} animate={{}}>
        <motion.div
          className="absolute -left-40 -top-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 opacity-20 filter blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute -right-40 -bottom-28 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-700 opacity-18 filter blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />

        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g1)" />
        </svg>
      </motion.div>
    </>
  );
}

function ServiceNavItem({ service, active, onClick, index }: { service: Service; active: boolean; onClick: () => void; index: number }) {
  return (
    <button
      onClick={onClick}
      role="option"
      aria-selected={active}
      tabIndex={0}
      className={`w-full group text-left rounded-xl p-3 pr-6 flex items-center gap-3 transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 ${
        active
          ? 'bg-gradient-to-r from-white/6 via-purple-600/10 to-indigo-500/6 ring-1 ring-white/6 shadow-[0_8px_30px_rgba(99,102,241,0.08)]'
          : 'hover:bg-white/3'
      }`}
    >
      <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${active ? 'bg-gradient-to-br from-purple-400 to-indigo-500' : 'bg-white/5'}`}>
        <IconFor name={service.name} />
      </div>

      <div className="flex-1">
        <div className={`text-sm font-semibold ${active ? 'text-white' : 'text-gray-200'}`}>{service.name}</div>
        <div className="text-xs text-gray-400 mt-1 truncate">{service.description}</div>
      </div>

      <div className="w-6 text-right text-xs text-gray-400">{index + 1}</div>
    </button>
  );
}

function IconFor({ name }: { name: string }) {
  if (name.includes('Website'))
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/90" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" opacity="0.95" />
        <path d="M7 9h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
      </svg>
    );

  if (name.includes('E-commerce'))
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/90" aria-hidden>
        <path d="M7 7h14l-1.5 8.5a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.5L5 4H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="19" r="1" fill="currentColor" />
        <circle cx="18" cy="19" r="1" fill="currentColor" />
      </svg>
    );

  if (name.includes('UI') || name.includes('UX'))
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/90" aria-hidden>
        <rect x="3" y="4" width="18" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3" y="14" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );

  if (name.includes('Health'))
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/90" aria-hidden>
        <path d="M12 21V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 7h6M7 9h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2" opacity="0.9" />
      </svg>
    );

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/90" aria-hidden>
      <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 6v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ProgressDots({ length, active, onSelect }: { length: number; active: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length }).map((_, i) => (
        <button
          key={i}
          aria-label={`Go to ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`w-2 h-2 rounded-full transition-all ${i === active ? 'scale-125 bg-purple-300' : 'bg-white/10'}`}
        />
      ))}
    </div>
  );
}

function NeonButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold text-white/95 outline-none focus-visible:ring-4 focus-visible:ring-purple-500/30"
      type="button"
    >
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full blur-lg opacity-60"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        style={{ background: 'conic-gradient(from 0deg, rgba(139,92,246,0.18), rgba(99,102,241,0.12), rgba(139,92,246,0.18))' }}
      />
      <span className="relative z-10 px-4 py-2 rounded-full bg-gradient-to-br from-slate-900/70 to-slate-950/60 border border-white/8">{children}</span>
    </button>
  );
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue<number>(0);
  const y = useMotionValue<number>(0);
  const rotateY = useTransform(x, [-100, 100], [12, -12]);
  const rotateX = useTransform(y, [-100, 100], [-12, 12]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e: PointerEvent) {
      const rect = el!.getBoundingClientRect(); // non-null assertion to satisfy typescript
      const px = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const py = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      x.set(px * 40);
      y.set(py * 40);
    }

    function onLeave() {
      x.set(0);
      y.set(0);
    }

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);

    return () => {
      el!.removeEventListener('pointermove', onMove);
      el!.removeEventListener('pointerleave', onLeave);
    };
  }, [x, y]);

  return (
    <div ref={ref} className="relative rounded-xl overflow-hidden bg-gradient-to-br from-white/3 to-white/1 border border-white/6 shadow-2xl">
      <motion.div style={{ rotateX, rotateY, perspective: 800 }} whileTap={{ scale: 0.98 }} className="transform-gpu will-change-transform">
        <Image src={src} alt={alt} width={900} height={700} className="w-full h-64 md:h-80 object-cover" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
  );
}
