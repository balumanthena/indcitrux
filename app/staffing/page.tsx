// app/staffing/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ChevronUp } from "lucide-react";

/* ========================================================================
   Small inline SVG icons
   ======================================================================== */

function IconGear() {
  return (
    <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4 15a7 7 0 0 0 .1-1 7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4.6a7 7 0 0 0-1.7-1L14.4 3h-4.8L8.6 6.6a7 7 0 0 0-1.7 1L4.5 7.1 2.5 10.5l2 1.6a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-.6a7 7 0 0 0 1.7 1L9.6 21h4.8l1.2-3.6a7 7 0 0 0 1.7-1l2.4.6 2-3.4-2-1.6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconDollar() {
  return (
    <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 1v22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M17 5H9.5a2 2 0 0 0 0 4H15a2 2 0 0 1 0 4H7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconFactory() {
  return (
    <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 21h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M3 14v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M7 10v11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M11 12v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M15 9v12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M3 14l5-4 5 4 4-3 4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconBriefcase() {
  return (
    <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 7h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconBank() {
  return (
    <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 10l9-6 9 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 10v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M9 10v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M13 10v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M17 10v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M21 10v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function IconCar() {
  return (
    <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 13h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M5 13l1.5-4h11L19 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="16.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}

/* ========================================================================
   Process icons
   ======================================================================== */

function IconDiscover() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="M12 3v3" />
      <path d="M12 18v3" />
    </svg>
  );
}
function IconSource() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 6h18" />
      <path d="M6 12h12" />
      <path d="M9 18h6" />
    </svg>
  );
}
function IconScreen() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 13h8" />
    </svg>
  );
}
function IconInterview() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="2" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h5" />
      <path d="M16 11l4 4" />
      <path d="M20 11l-4 4" />
    </svg>
  );
}
function IconOnboard() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3 6 6 .5-4.5 4 1 6L12 16l-5.5 3.5 1-6L3 8.5 9 8z" />
    </svg>
  );
}
function IconSupport() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a10 10 0 0 0-10 10" />
      <path d="M12 22a10 10 0 0 0 10-10" />
      <path d="M6 12h.01" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

/* ========================================================================
   Industry section
   ======================================================================== */

function IndustrySection() {
  const industryImg = "/images/Gemini_Generated_Image_qi0wzeqi0wzeqi0w.png";

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: illustration */}
        <div className="order-2 lg:order-1">
          {/* Outer frame */}
          <div className="rounded-2xl p-3 group">
            {/* inner stroke/frame (will get ring on hover) */}
            <div className="rounded-2xl border-2 border-white/20 p-4 bg-transparent shadow-sm group-hover:ring-2 group-hover:ring-slate-700/50 transition">
              {/* content box with overflow-hidden */}
              <div className="rounded-xl overflow-hidden bg-white/3 transition-transform transform group-hover:scale-[1.01]">
                <div className="relative w-full aspect-[4/3]">
                  <Image src={industryImg} alt="Staffing illustration" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 leading-tight">
            Talent No Bar. Domain No Bar.
          </h2>

          <p className="mt-6 text-slate-300 max-w-lg">
            With our multi-domain expertise, we deliver high-quality staffing solutions across industries and sectors.
            As a leading staffing partner in India, we provide expertise, experience and resources to connect you with top talent.
          </p>

          {/* Industry list */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-200">
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="mt-1"><IconGear /></span> Technology / Digital</li>
              <li className="flex items-start gap-3"><span className="mt-1"><IconDollar /></span> Finance / HR Shared Services</li>
              <li className="flex items-start gap-3"><span className="mt-1"><IconFactory /></span> Engineering & Manufacturing</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="mt-1"><IconBriefcase /></span> Global Captive Centres (GCC)</li>
              <li className="flex items-start gap-3"><span className="mt-1"><IconBank /></span> BFSI</li>
              <li className="flex items-start gap-3"><span className="mt-1"><IconCar /></span> Automotive</li>
            </ul>
          </div>

          <div className="mt-8">
            <Link href="/contact#industry" className="inline-flex items-center gap-3 rounded-full border border-slate-300/10 px-5 py-3 text-sm font-medium bg-transparent hover:bg-white/5">
              Industry Specific Hiring
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   Process section
   ======================================================================== */

function ProcessSection() {
  const steps = [
    { id: "discover", title: "Getting familiar", desc: "We begin by understanding your business, culture, and role requirements to set the foundation.", icon: <IconDiscover /> },
    { id: "source", title: "Know your role", desc: "We identify the right channels and source candidates who align with your skills and industry needs.", icon: <IconSource /> },
    { id: "screen", title: "Mapping is key to hiring", desc: "Through technical and behavioral screening, we map the best-fit candidates for your role.", icon: <IconScreen /> },
    { id: "interview", title: "Unlocking the right candidates", desc: "We coordinate structured interviews and evaluations to ensure the right talent is shortlisted.", icon: <IconInterview /> },
    { id: "onboard", title: "Evaluation and shortlist", desc: "Candidates are assessed, shortlisted, and prepared for the final selection stage.", icon: <IconOnboard /> },
    { id: "support", title: "Getting the right point of view with an interview", desc: "We align candidate perspectives with employer expectations to build strong mutual trust.", icon: <IconSupport /> },
    { id: "onboard2", title: "Making the dream offer", desc: "We extend the offer and manage negotiations to secure top talent effectively.", icon: <IconOnboard /> },
    { id: "support2", title: "Welcome onboard", desc: "We ensure smooth onboarding, followed by post-hire support for long-term retention.", icon: <IconSupport /> },
  ];

  const processImg = "/images/Gemini_Generated_Image_gqh7lggqh7lggqh7.png";

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Illustration */}
        <div className="order-2 lg:order-1">
          {/* Outer frame */}
          <div className="rounded-2xl p-3 group">
            {/* inner stroke/frame (will get ring on hover) */}
            <div className="rounded-2xl border-2 border-white/20 p-4 bg-transparent shadow-sm group-hover:ring-2 group-hover:ring-slate-700/50 transition">
              {/* content box with overflow-hidden */}
              <div className="rounded-xl overflow-hidden bg-white/3 transition-transform transform group-hover:scale-[1.01]">
                <div className="relative w-full aspect-[4/3]">
                  <Image src={processImg} alt="Staffing process illustration" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="order-1 lg:order-2">
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-100">Our Staffing Process</h3>
          <p className="mt-3 text-slate-300 max-w-lg">
            A transparent, structured approach — built to move fast while ensuring quality and fit.
          </p>

          <div className="mt-10 relative">
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 rounded" />
            <ul className="space-y-10 relative z-10">
              {steps.map((s, i) => (
                <li key={s.id} className="flex items-start gap-6 group">
                  <div className="relative">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-md">
                      {s.icon}
                    </div>
                    <div className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-slate-900 border border-white/10" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition">
                      {i + 1}. {s.title}
                    </h4>
                    <p className="text-sm text-slate-300 mt-1">{s.desc}</p>
                    {i === 1 && (
                      <div className="mt-3 flex gap-2">
                        <span className="text-xs bg-white/6 text-white rounded-full px-2 py-1">+ Sourcing pool</span>
                        <span className="text-xs bg-white/6 text-white rounded-full px-2 py-1">+ Passive outreach</span>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link href="/contact#process" className="inline-flex items-center gap-3 rounded-full border border-slate-300/10 px-5 py-3 text-sm font-medium bg-transparent hover:bg-white/5">
              Let’s Discuss Hiring
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   Main Staffing page
   ======================================================================== */

export default function StaffingPage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const SERVICES = [
    { id: "tailor", title: "Tailor made hiring solutions", desc: "Custom hiring strategies, volume hiring and niche searches.", icon: "briefcase" },
    { id: "permanent", title: "Permanent Recruitment", desc: "End-to-end permanent recruitment and onboarding.", icon: "users" },
    { id: "temporary", title: "Temporary Staffing", desc: "Agile contract staffing for seasonal needs.", icon: "clock" },
    { id: "it", title: "IT Staffing", desc: "Specialized IT staffing to match your tech stack.", icon: "cpu" },
    { id: "rpo", title: "RPO", desc: "Embedded RPO service for scalable hiring.", icon: "settings" },
    { id: "exec", title: "Executive Search", desc: "Leadership and executive-level recruitment.", icon: "search" },
  ];

  const ServiceIcon = ({ name }: { name: string }) => {
    switch (name) {
      case "briefcase":
        return (<svg viewBox="0 0 24 24" className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>);
      case "users":
        return (<svg viewBox="0 0 24 24" className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="7" r="4" /><path d="M17 11a4 4 0 1 0-3-6" /><path d="M2 21v-2a4 4 0 0 1 4-4h3" /></svg>);
      case "clock":
        return (<svg viewBox="0 0 24 24" className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>);
      case "cpu":
        return (<svg viewBox="0 0 24 24" className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="9" y="9" width="6" height="6" /><path d="M3 9h2M3 15h2M19 9h2M19 15h2M9 3v2M15 3v2M9 19v2M15 19v2" /></svg>);
      case "settings":
        return (<svg viewBox="0 0 24 24" className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a7 7 0 0 0 .1-1 7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4.6a7 7 0 0 0-1.7-1L14.4 3h-4.8L8.6 6.6a7 7 0 0 0-1.7 1L4.5 7.1 2.5 10.5l2 1.6a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-.6a7 7 0 0 0 1.7 1L9.6 21h4.8l1.2-3.6a7 7 0 0 0 1.7-1l2.4.6 2-3.4-2-1.6z" /></svg>);
      case "search":
      default:
        return (<svg viewBox="0 0 24 24" className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Head>
        <title>Staffing • CitrUX</title>
        <meta name="description" content="CitrUX Staffing — Permanent, Temporary, IT Staffing and RPO. We staff domestic and international." />
      </Head>

      <Navbar />

      {/* HERO */}
      <header className="relative pt-28 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-xs text-slate-300">
                Trusted partner — Staffing &amp; RPO
              </span>

              <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                CitrUX —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Seamless Talent.
                </span>{" "}
                Limitless Domains
              </h1>

              <p className="mt-4 text-slate-300">
                CitrUX Staffing connects businesses to skilled professionals for short-term and long-term needs.
                <br />
                <strong className="text-white">We staff domestic and international</strong> — local expertise, global reach.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-3 text-sm font-semibold shadow">
                  Contact CitrUX
                </Link>
                <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-3 text-sm hover:bg-white/7">
                  Explore services
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="rounded-2xl bg-white/6 border border-white/8 p-4 w-72 shadow-lg">
                <div className="text-sm font-semibold">Staffing coverage</div>
                <div className="mt-3 space-y-2 text-sm text-slate-200">
                  <div>Permanent Recruitment</div>
                  <div>Temporary & Contract</div>
                  <div>IT Staffing & RPO</div>
                </div>
                <div className="mt-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-medium text-orange-400">
                   
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sections */}
      <IndustrySection />
      <div className="max-w-6xl mx-auto px-6 -mt-6">
        <ProcessSection />
      </div>

      {/* Services grid */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <section id="services" className="mt-10">
          <h2 className="text-3xl font-extrabold text-white mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <article
                key={s.id}
                className="group relative bg-white text-slate-900 rounded-xl p-8 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-transform duration-200 h-full flex flex-col hover:ring-2 hover:ring-slate-700/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-none w-16 h-16 rounded-lg flex items-center justify-center bg-white">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-slate-900">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-600 group-hover:text-slate-700 flex-grow">{s.desc}</p>
                <div className="mt-4">
                  <Link href="/contact" className="text-sm font-medium text-orange-600 hover:underline">
                  
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12">
          <div className="rounded-2xl border border-white/6 bg-gradient-to-r from-purple-900/10 to-pink-900/8 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="text-2xl font-bold text-white">We staff domestic and international</h4>
              <p className="text-sm text-slate-300 mt-1">Local screening • Global reach • Flexible engagement models</p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="rounded-full px-5 py-2 bg-slate-900 text-sm font-semibold">
                Contact CitrUX
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Back to top */}
    
    </div>
  );
}
