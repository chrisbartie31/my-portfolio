"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Code2, Terminal } from "lucide-react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  tech: string; // Added a tech field to show languages
  description: string;
  color: string;
  size: string;
}

// --- Configuration ---
const personalInfo = {
  name: "Chris",
  title: "Junior Software Developer",
  // I expanded your bio to emphasize "Real World Problems"
  bio: "I build robust applications and websites designed to solve real-world problems. My focus is on creating practical, efficient software solutions using C#, .NET, and modern mobile frameworks.",
};

const projects: Project[] = [
  {
    id: 1,
    title: "Brightsteps",
    category: "Mobile Application",
    tech: "React Native",
    description: "My debut application. A comprehensive mobile platform designed to bridge the gap between tutors and students.",
    color: "bg-blue-600",
    size: "col-span-1 md:col-span-2", // Wide tile for your main project
  },
  {
    id: 2,
    title: "Recipe Manager",
    category: "Desktop Software",
    tech: "C# / WPF",
    description: "A centralized recipe storage system with a custom UI.",
    color: "bg-emerald-600",
    size: "col-span-1", // Small tile
  },
  {
    id: 3,
    title: "Municipal Services Portal",
    category: "System Architecture",
    tech: "C#",
    description: "A management portal streamlining city services and citizen reporting to solve community infrastructure challenges.",
    color: "bg-orange-600",
    size: "col-span-1 md:col-span-3", // Full width tile to show importance
  },
];

// --- Components ---

const Navbar = () => (
  <nav className="flex justify-between items-center py-8 mb-12">
    <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
      <Terminal size={20} />
      chris.dev
    </div>
    <div className="flex gap-4 text-sm text-neutral-400">
      <a href="#work" className="hover:text-white transition-colors">Work</a>
      <a href="#contact" className="hover:text-white transition-colors">Contact</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="mb-24">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wide text-emerald-400 bg-emerald-900/30 rounded-full border border-emerald-800"
    >
      Available for work
    </motion.div>
    
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight"
    >
      Building software for the <br />
      <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Real World.
      </span>
    </motion.h1>
    
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-xl text-neutral-400 max-w-2xl leading-relaxed"
    >
      {personalInfo.bio}
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex gap-4 mt-8"
    >
      <a href="#work" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
        View Projects
      </a>
      <a href="mailto:your-email@example.com" className="border border-neutral-700 text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-900 transition-colors">
        Contact Me
      </a>
    </motion.div>
  </section>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className={`${project.size} group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 cursor-pointer transition-all hover:border-neutral-600`}
  >
    {/* Abstract Background Gradient */}
    <div className={`absolute -right-20 -top-20 h-80 w-80 rounded-full blur-3xl opacity-20 ${project.color} group-hover:opacity-30 transition-opacity duration-500`} />
    
    <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
            <span className="w-fit text-xs font-mono uppercase tracking-widest text-neutral-400 border border-neutral-700 px-2 py-1 rounded-full bg-black/50 backdrop-blur-md">
            {project.category}
            </span>
        </div>
        <ArrowUpRight className="text-neutral-500 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
      </div>
      
      <div className="mt-8">
        <h3 className="text-3xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-neutral-400 text-sm mb-4 max-w-md">{project.description}</p>
        <div className="text-xs font-mono text-neutral-500 flex items-center gap-1">
            <Code2 size={14} />
            {project.tech}
        </div>
      </div>
    </div>
  </motion.div>
);

const Footer = () => (
  <footer id="contact" className="mt-24 pt-12 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-neutral-500 gap-6">
    <div className="text-sm">© 2025 Chris. Built with Next.js & Tailwind.</div>
    <div className="flex gap-6">
      {/* Note: Update these links when you have them! */}
      <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
      <Linkedin size={20} className="hover:text-white cursor-pointer transition-colors" />
      <Mail size={20} className="hover:text-white cursor-pointer transition-colors" />
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black font-sans">
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <Navbar />
        <Hero />
        
        {/* Bento Grid Section */}
        <section id="work">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-neutral-500" />
            <h2 className="text-sm font-mono uppercase tracking-widest text-neutral-500">Selected Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}