'use client'

import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Cpu, Bot, Code, Palette, Database, BrainCircuit } from "lucide-react";

const AIPoweredDesign = () => {
  return (
    <div className="p-8 mx-auto relative z-10 w-full min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden">

      {/* Optional background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/20 via-purple-800/10 to-transparent blur-3xl z-0 pointer-events-none" />

      {/* AI-Powered Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg z-10"
      >
        AI-Powered <br /> Innovation
      </motion.h1>

      {/* Description */}
      <p className="mt-6 text-xl text-gray-300 max-w-3xl text-center tracking-wide leading-relaxed z-10">
        Explore the limitless possibilities of AI in UI/UX, automation, and intelligent design. Witness the future of digital evolution.
      </p>

      {/* Feature Cards */}
      <div className="max-w-7xl w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {aiProjects.map((project, index) => (
          <FeatureCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, index }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: "0px 0px 40px rgba(0, 255, 255, 0.8)"
      }}
      className="group relative overflow-hidden bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] border border-[#3a3a3a] rounded-3xl p-8 shadow-xl backdrop-blur-xl transition-all duration-500"
    >
      {/* Glow on Hover */}
      <div className="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-r from-transparent to-blue-500 opacity-20 group-hover:opacity-80 transition-all duration-500 pointer-events-none" />

      {/* Icon */}
      <div className="p-4 rounded-full bg-black bg-opacity-30 backdrop-blur-md border border-gray-700 shadow-inner">
        {icon}
      </div>

      {/* Title and Description */}
      <h3 className="mt-6 text-2xl font-bold text-white tracking-wide">
        {title}
      </h3>
      <p className="mt-2 text-gray-400 text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export const aiProjects = [
  {
    icon: <Cpu className="w-16 h-16 text-blue-400 animate-pulse-slow" aria-hidden="true" />,
    title: "AI-Powered UI/UX",
    description: "Create interfaces that adapt to user behavior using AI-driven insights.",
  },
  {
    icon: <Code className="w-16 h-16 text-green-400 animate-spin-slow" aria-hidden="true" />,
    title: "AI-Generated Code",
    description: "Speed up development with AI-assisted coding, debugging, and optimization.",
  },
  {
    icon: <Bot className="w-16 h-16 text-purple-400 animate-bounce-slow" aria-hidden="true" />,
    title: "Smart AI Assistants",
    description: "Develop AI chatbots and virtual assistants for seamless interactions.",
  },
  {
    icon: <BrainCircuit className="w-16 h-16 text-pink-400 animate-pulse-slow" aria-hidden="true" />,
    title: "Neural AI Automation",
    description: "Automate complex tasks with AI-driven logic and adaptive learning.",
  },
  {
    icon: <Database className="w-16 h-16 text-yellow-400 animate-spin-slow" aria-hidden="true" />,
    title: "AI Data Processing",
    description: "Harness AI to analyze, process, and optimize big data insights.",
  },
  {
    icon: <Palette className="w-16 h-16 text-teal-400 animate-bounce-slow" aria-hidden="true" />,
    title: "AI Creative Design",
    description: "AI-powered tools that generate stunning visuals, branding, and graphics.",
  }
];

export default AIPoweredDesign;
