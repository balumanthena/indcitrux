'use client';

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { LazyMotion, domAnimation, m, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { useSwipeable } from 'react-swipeable';

/* -------------------------------------------------------------------------- */
/* ---------------------- FUTURISTIC SERVICES PAGE (FAST) -------------------- */
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
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'E-commerce Store',
    description: 'Fast, scalable stores that sell',
    details:
      'From headless storefronts to conversion-first UX, we build e-commerce platforms that scale. Cart flows, subscriptions, B2B pricing — we cover it with analytics & A/B testing baked in.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'UI / UX',
    description: 'Human-centered, delightful product design',
    details:
      'We design flows, interactions and systems that feel simple and magical. Research-backed prototypes, design systems, and component libraries help your product scale consistently.',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Health Service',
    description: 'R1 & RCM with privacy-first operations',
    details:
      'Reliable revenue cycle management services with precision, comprehensive audit trails, and automation—helping healthcare providers accelerate payments and streamline operations while ensuring compliance.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'App Development',
    description: 'Native & cross-platform apps built to delight',
    details:
      'End-to-end mobile apps with delightful performance, offline-first UX, and crisp animations. We deliver maintainable code and ship fast without sacrificing quality.',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80',
  },
];

export default function ServicesClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryService = searchParams?.get('service') ?? '';
  const defaultIndex = Math.max(
    0,
    services.findIndex((s) => queryService && s.name.toLowerCase().includes(queryService.toLowerCase()))
  );

  const [index, setIndex] = useState<number>(defaultIndex >= 0 ? defaultIndex : 0);
  const selected = useMemo(() => services[index], [index]);

  const handleNext = useCallback(() => setIndex((i) => (i + 1) % services.length), []);
  const handlePrev = useCallback(() => setIndex((i) => (i - 1 + services.length) % services.length), []);

  // Write URL without causing layout trashing on every keystroke / render
  useEffect(() => {
    const name = encodeURIComponent(selected.name.toLowerCase().split(' ')[0]);
    router.replace(`?service=${name}`, { scroll: false });
  }, [selected.name, router]);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Home':
          setIndex(0);
          break;
        case 'End':
          setIndex(services.length - 1);
          break;
      }
    };
    window.addEventListener('keydown', onKey, { passive: true });
    return () => window.removeEventListener('keydown', onKey);
  }, [handleNext, handlePrev]);

  // Stable swipe handler object to avoid re-binding
  const swipeHandlers = useMemo(
    () => ({
      onSwipedLeft: handleNext,
      onSwipedRight: handlePrev,
      preventScrollOnSwipe: true,
      trackMouse: true,
    }),
    [handleNext, handlePrev]
  );
  const handlers = useSwipeable(swipeHandlers);

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#07070c] via-slate-950 to-black text-white overflow-hidden">
      <Navbar />

      {/* Meta */}
      <Head>
        <title>Services • CitrUX — Futuristic</title>
        <meta
          name="description"
          content="Futuristic services UI for CitrUX — animated, accessible and conversion-focused."
        />
      </Head>

      <AmbientBackground />
      <NoiseOverlay />

      {/* HERO */}
      <header className="relative z-20 px-4 sm:px-6  lg:px-12 pt-28 pb-4">
        <div className="max-w-6xl">
          <div className="inline-flex items-center gap-2  rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <DotPulse aria-hidden /> New — 2025 lineup
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl pt-7 font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
            Services that feel like the future.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-2xl">
            Thoughtfully crafted digital services — performance-first, human-centered, engineered for scale.
          </p>
        </div>

        {/* Mobile chips nav */}
        <div className="mt-6 block lg:hidden">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {services.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setIndex(i)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-sm transition-all backdrop-blur ${
                  i === index
                    ? 'border-purple-400/40 bg-purple-500/10 text-white shadow-[0_0_0_2px_rgba(168,85,247,0.15)_inset]'
                    : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="relative z-20 flex-1 px-4 sm:px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-start">
          {/* Sidebar list */}
          <aside className="hidden lg:block">
            <LazyMotion features={domAnimation} strict>
              <m.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
                <nav aria-label="Services" className="space-y-3 sticky top-28">
                  {services.map((s, i) => (
                    <MemoServiceNavItem key={s.name} service={s} active={i === index} onClick={() => setIndex(i)} index={i} />
                  ))}
                </nav>
                <div className="mt-6 text-xs text-gray-400">
                  Tip: use <span className="text-white">←</span> <span className="text-white">→</span> to navigate.
                </div>
              </m.div>
            </LazyMotion>
          </aside>

          {/* Content card */}
          <section className="lg:col-span-2" {...handlers}>
            <LazyMotion features={domAnimation} strict>
              <AnimatePresence mode="wait">
                <m.article
                  key={selected.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-transparent p-5 sm:p-6 lg:p-8 shadow-[0_8px_30px_rgba(99,102,241,0.15)] overflow-hidden"
                  aria-live="polite"
                >
                  <Shine />
                  <div className="flex flex-col xl:flex-row gap-6 items-stretch xl:items-center">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                        <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                          {selected.name}
                        </span>
                        <span className="text-sm text-gray-400 ml-2 block sm:inline">— {selected.description}</span>
                      </h2>

                      <p className="mt-4 text-gray-300 leading-relaxed max-w-2xl">{selected.details}</p>

                      <div className="mt-6 flex flex-wrap gap-3 items-center">
                        <NeonButton onClick={() => router.push('/book')}>Schedule Free Consultation</NeonButton>
                      </div>
                    </div>

                    <div className="w-full xl:w-[28rem]">
                      <ParallaxImage src={selected.image} alt={selected.name} priority={index === 0} />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2 sm:gap-0">
                    <div className="text-center sm:text-left">Quality-assured • Performance-first • Accessible</div>
                    <div className="flex items-center gap-3 mt-2 sm:mt-0">
                      <div className="text-xs text-purple-300">{index + 1}/{services.length}</div>
                      <MemoProgressDots length={services.length} active={index} onSelect={setIndex} />
                    </div>
                  </div>
                </m.article>
              </AnimatePresence>
            </LazyMotion>
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
      {/* Soft moving blobs (lighter for GPU) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 will-change-transform">
        <LazyMotion features={domAnimation} strict>
          <m.div
            className="absolute -left-40 -top-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 opacity-20 blur-3xl"
            animate={{ x: [0, 32, 0], y: [0, -32, 0] }}
            transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />
          <m.div
            className="absolute -right-40 -bottom-28 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-700 opacity-20 blur-3xl"
            animate={{ x: [0, -24, 0], y: [0, 24, 0] }}
            transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />
        </LazyMotion>

        {/* Subtle radial glow */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g1)" />
        </svg>
      </div>
    </>
  );
}

function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-soft-light"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1200\" height=\"800\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.55\"/></svg>')",
      }}
    />
  );
}

function Shine() {
  return (
    <div aria-hidden className="absolute -top-24 -left-24 w-72 h-72 rotate-12 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-3xl" />
  );
}

const ServiceNavItem = ({ service, active, onClick, index }: { service: Service; active: boolean; onClick: () => void; index: number }) => {
  return (
    <button
      onClick={onClick}
      role="option"
      aria-selected={active}
      tabIndex={0}
      className={`w-full group text-left rounded-xl p-3 pr-6 flex items-center gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 ${
        active
          ? 'bg-gradient-to-r from-white/10 via-purple-600/10 to-indigo-500/10 ring-1 ring-white/10 shadow-[0_8px_30px_rgba(99,102,241,0.15)]'
          : 'hover:bg-white/5'
      }`}
    >
      <div className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all ${active ? 'bg-gradient-to-br from-purple-400 to-indigo-500 text-white' : 'bg-white/5 text-white/80'}`}>
        <IconFor name={service.name} />
      </div>

      <div className="flex-1 min-w-0">
        <div className={`text-sm font-semibold ${active ? 'text-white' : 'text-gray-200'}`}>{service.name}</div>
        <div className="text-xs text-gray-400 mt-1 truncate">{service.description}</div>
      </div>

      <div className="w-6 text-right text-xs text-gray-400">{index + 1}</div>
    </button>
  );
};

const MemoServiceNavItem = React.memo(ServiceNavItem);

function IconFor({ name }: { name: string }) {
  if (name.includes('Website'))
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" opacity="0.95" />
        <path d="M7 9h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
      </svg>
    );

  if (name.includes('E-commerce'))
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden>
        <path d="M7 7h14l-1.5 8.5a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.5L5 4H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="19" r="1" fill="currentColor" />
        <circle cx="18" cy="19" r="1" fill="currentColor" />
      </svg>
    );

  if (name.includes('UI') || name.includes('UX'))
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden>
        <rect x="3" y="4" width="18" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3" y="14" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );

  if (name.includes('Health'))
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden>
        <path d="M12 21V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 7h6M7 9h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2" opacity="0.9" />
      </svg>
    );

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden>
      <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 6v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const ProgressDots = ({ length, active, onSelect }: { length: number; active: number; onSelect: (i: number) => void }) => {
  const buttons = useMemo(() => Array.from({ length }), [length]);
  return (
    <div className="flex items-center gap-2">
      {buttons.map((_, i) => (
        <button
          key={i}
          aria-label={`Go to ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`w-2.5 h-2.5 rounded-full transition-transform ${i === active ? 'scale-[1.35] bg-purple-300' : 'bg-white/15 hover:bg-white/25'}`}
        />
      ))}
    </div>
  );
};

const MemoProgressDots = React.memo(ProgressDots);

function NeonButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-white/95 outline-none focus-visible:ring-4 focus-visible:ring-purple-500/30"
      type="button"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full blur-lg opacity-60"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(139,92,246,0.18), rgba(99,102,241,0.12), rgba(139,92,246,0.18))',
          animation: 'spin 6s linear infinite',
        }}
      />
      <span className="relative z-10 px-4 py-2 rounded-full bg-gradient-to-br from-slate-900/70 to-slate-950/60 border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
        {children}
      </span>
      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </button>
  );
}

function ParallaxImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue<number>(0);
  const y = useMotionValue<number>(0);
  const rotateY = useTransform(x, [-100, 100], [12, -12]);
  const rotateX = useTransform(y, [-100, 100], [-12, 12]);

  // rAF-throttled pointer move for smoother, cheaper updates
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isTouch = 'ontouchstart' in window || (navigator as any).maxTouchPoints > 0;
    if (isTouch) {
      x.set(0);
      y.set(0);
      return;
    }

    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const px = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const py = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        x.set(px * 40);
        y.set(py * 40);
      });
    };
    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      x.set(0);
      y.set(0);
    };

    node.addEventListener('pointermove', onMove, { passive: true });
    node.addEventListener('pointerleave', onLeave, { passive: true });

    return () => {
      node.removeEventListener('pointermove', onMove as any);
      node.removeEventListener('pointerleave', onLeave as any);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [x, y]);

  return (
    <div ref={ref} className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-2xl will-change-transform">
      <LazyMotion features={domAnimation} strict>
        <m.div style={{ rotateX, rotateY, perspective: 800 }} whileTap={{ scale: 0.985 }} className="transform-gpu">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={900}
            priority={priority}
            className="w-full aspect-[4/3] object-cover"
          />
        </m.div>
      </LazyMotion>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
  );
}

function DotPulse(props: React.HTMLAttributes<HTMLSpanElement>) {
  return <span {...props} className={`inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ${props.className ?? ''}`} />;
}
