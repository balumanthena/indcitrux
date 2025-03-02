'use client'

import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Cpu, Bot, Code, Palette, Smartphone, Database, BrainCircuit } from "lucide-react";

const AIPoweredDesign = () => {
  return (
    <div className="p-6 mx-auto relative z-10 w-full min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-90">
      {/* AI-Powered Design Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl md:text-7xl  text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        AI-Powered <br /> Innovation
      </motion.h1>

      {/* AI Design Section Description */}
      <p className="mt-6 text-xl text-neutral-300 max-w-2xl text-center tracking-wide leading-relaxed">
        Explore the limitless possibilities of AI in UI/UX, automation, and intelligent design. Witness the future of digital evolution.
      </p>

      {/* AI Features Cards with Hover Effects */}
      <div className="max-w-6xl w-full mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {aiProjects.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="relative bg-black bg-opacity-60 border border-gray-800 rounded-2xl p-6 shadow-lg backdrop-blur-xl hover:shadow-blue-500/50 hover:-translate-y-2 transition-all duration-500">
            {project.icon}
            <h3 className="mt-6 text-2xl font-bold text-white tracking-wide">{project.title}</h3>
            <p className="mt-2 text-gray-400 text-sm leading-relaxed">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const aiProjects = [
  {
    icon: <Cpu className="w-16 h-16 text-blue-400" />, 
    title: "AI-Powered UI/UX",
    description: "Create interfaces that adapt to user behavior using AI-driven insights.",
  },
  {
    icon: <Code className="w-16 h-16 text-green-400" />, 
    title: "AI-Generated Code",
    description: "Speed up development with AI-assisted coding, debugging, and optimization.",
  },
  {
    icon: <Bot className="w-16 h-16 text-purple-400" />, 
    title: "Smart AI Assistants",
    description: "Develop AI chatbots and virtual assistants for seamless interactions.",
  },
  {
    icon: <BrainCircuit className="w-16 h-16 text-pink-400" />, 
    title: "Neural AI Automation",
    description: "Automate complex tasks with AI-driven logic and adaptive learning.",
  },
  {
    icon: <Database className="w-16 h-16 text-yellow-400" />, 
    title: "AI Data Processing",
    description: "Harness AI to analyze, process, and optimize big data insights.",
  },
  {
    icon: <Palette className="w-16 h-16 text-teal-400" />, 
    title: "AI Creative Design",
    description: "AI-powered tools that generate stunning visuals, branding, and graphics.",
  }
];

export default AIPoweredDesign;
