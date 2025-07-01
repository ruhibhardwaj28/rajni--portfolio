import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-2xl bottom-0 -left-20 animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Terminal-like Header */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <Terminal size={16} className="text-teal-400" />
            <span className="text-sm font-mono text-teal-400">Namaste! My name is</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-2 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-teal-200 text-transparent bg-clip-text">
              Rajni Bhardwaj
          </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200/80 font-semibold">
              Software Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            Passionate Full Stack Developer specializing in crafting innovative digital solutions. 
            With expertise in React, Node.js, and cloud technologies, I transform complex problems into 
            elegant, user-centric applications. Currently exploring new opportunities to create impactful 
            solutions and contribute to meaningful projects.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex space-x-6 mb-10"
          >
            {[
              { icon: Mail, href: 'mailto:rajnibhardwaj.official@gmail.com', label: 'Email' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rajni-bhardwaj-6605761a9/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/rajnibhardwaj1', label: 'GitHub' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-7 h-7 text-teal-400 hover:text-white transition-colors" />
              </a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-teal-500 text-gray-900 rounded-full font-semibold 
                        hover:bg-teal-400 transform hover:scale-105 transition-all duration-200
                        shadow-lg shadow-teal-500/25"
            >
              View My Projects
            </a>
            <a
              href="/RajniResume_25.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-teal-400 text-teal-400 rounded-full font-semibold
                        hover:bg-teal-400/10 transform hover:scale-105 transition-all duration-200"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-teal-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
