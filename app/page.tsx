"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, Github, Linkedin, Mail, Code2, Smartphone, Layout, 
  FileText, GraduationCap, Award, Download 
} from "lucide-react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  tech: string;
  description: string;
  color: string;
  size: string;
  link: string;
}

// --- Configuration ---
const personalInfo = {
  name: "Chris Bartie",
  title: "Front-End & Mobile Developer",
  bio: "I specialize in building high-quality mobile applications and responsive web interfaces. With a strong foundation in JavaScript, React, and React Native, I focus on crafting intuitive user experiences and pixel-perfect designs.",
  socials: {
    github: "https://github.com/chrisbartie31",
    linkedin: "https://www.linkedin.com/in/chris-bartie-169260275",
    email: "mailto:chrisbartie31@gmail.com"
  }
};

const projects: Project[] = [
  {
    id: 1,
    title: "Brightsteps",
    category: "Mobile Engineering",
    tech: "React Native",
    description: "A cross-platform mobile application connecting tutors and students. Features a custom-built scheduling interface and real-time state management.",
    color: "bg-blue-600",
    size: "col-span-1 md:col-span-2",
    link: "https://github.com/chrisbartie31/BrightSteps",
  },
  {
    id: 2,
    title: "Recipe Manager",
    category: "UI Architecture",
    tech: "C# / WPF",
    description: "Designing complex desktop interfaces. This project focuses on efficient data binding and a clean, user-friendly visual layout.",
    color: "bg-emerald-600",
    size: "col-span-1",
    link: "https://github.com/chrisbartie31/recipe_manager",
  },
  {
    id: 3,
    title: "Municipal Services Portal",
    category: "Web Interface",
    tech: "C#",
    description: "A large-scale portal focusing on accessible web design and streamlined user flows for public services.",
    color: "bg-orange-600",
    size: "col-span-1 md:col-span-3",
    link: "https://github.com/chrisbartie31/municipality_portal", 
  },
];

// --- Components ---

const Navbar = () => (
  <nav className="flex justify-between items-center py-8 mb-12">
    <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
      <Code2 size={20} className="text-blue-500" />
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
      className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-medium tracking-wide text-blue-400 bg-blue-900/30 rounded-full border border-blue-800"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </span>
      Open to Frontend Roles
    </motion.div>
    
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 leading-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
    >
      {personalInfo.name}
    </motion.h1>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-2xl md:text-3xl font-medium text-neutral-300 mb-6"
    >
      Crafting experiences for <span className="text-blue-400">Web & Mobile.</span>
    </motion.h2>
    
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-xl text-neutral-400 max-w-2xl leading-relaxed mb-8"
    >
      {personalInfo.bio}
    </motion.p>

    {/* Buttons Row */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-wrap gap-4 mb-12"
    >
      <a href="#work" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2">
        <Smartphone size={18} /> View Work
      </a>
      <a href={personalInfo.socials.email} className="border border-neutral-700 text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-900 transition-colors">
        Contact Me
      </a>
    </motion.div>

    {/* Documents Section */}
    <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.6 }}
       className="border-t border-neutral-800 pt-8"
    >
        <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4">Credentials & Documents</h3>
        <div className="flex flex-wrap gap-3">
            
            {/* CV Button */}
            <a 
                href="/cv.pdf" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 hover:text-white hover:border-neutral-600 transition-all group"
            >
                <FileText size={16} className="text-blue-400 group-hover:text-blue-300" />
                <span>Curriculum Vitae</span>
                <Download size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
            </a>

            {/* Transcript Button */}
            <a 
                href="/transcript.pdf" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 hover:text-white hover:border-neutral-600 transition-all group"
            >
                <GraduationCap size={16} className="text-emerald-400 group-hover:text-emerald-300" />
                <span>Academic Transcript</span>
                <Download size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
            </a>

             {/* Testimonial Button */}
             <a 
                href="/testimonial.pdf" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 hover:text-white hover:border-neutral-600 transition-all group"
            >
                <Award size={16} className="text-orange-400 group-hover:text-orange-300" />
                <span>Matric Testimonial</span>
                <Download size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
            </a>

        </div>
    </motion.div>
  </section>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.a
    href={project.link}
    target={project.link === "#" ? "_self" : "_blank"}
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className={`${project.size} group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 cursor-pointer transition-all hover:border-neutral-600 block`}
  >
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
            {project.tech.includes("React") ? <Smartphone size={14} /> : <Layout size={14} />}
            {project.tech}
        </div>
      </div>
    </div>
  </motion.a>
);

const Footer = () => (
  <footer id="contact" className="mt-24 pt-12 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-neutral-500 gap-6">
    <div className="text-sm">© 2025 Chris Bartie. Built with React & Next.js.</div>
    <div className="flex gap-6">
      <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer">
        <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
      </a>
      <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
        <Linkedin size={20} className="hover:text-white cursor-pointer transition-colors" />
      </a>
      <a href={personalInfo.socials.email}>
        <Mail size={20} className="hover:text-white cursor-pointer transition-colors" />
      </a>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white font-sans">
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <Navbar />
        <Hero />
        
        <section id="work">
          <div className="flex items-center gap-2 mb-8">
            <Smartphone className="text-neutral-500" />
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