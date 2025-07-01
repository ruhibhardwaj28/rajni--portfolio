import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  const [showDetails, setShowDetails] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
      color: "from-teal-400 to-teal-600"
    }
  ];

  const timeline = [
    {
      icon: GraduationCap,
      title: "Web Developer",
      subtitle: "Self Employed",
      date: "2025 - Present",
      color: "bg-blue-500"
    },
    {
      icon: Briefcase,
      title: "Software Engineer Training",
      subtitle: "Techno Sapphire Research pvt itd",
      date: "June 2024 - Dec 2024",
      color: "bg-purple-500"
    },
    {
      icon: Award,
      title: "GLA University",
      subtitle: "Bachelor of Technology in Computer Science",
      date: "2018 - 2022",
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6 bg-gradient-to-r from-teal-400 via-blue-300 to-blue-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-blue-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Column - About Text */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              {/* Professional Summary */}
              <p className="text-blue-100 leading-relaxed mb-6">
                I'm a passionate Web Developer with a strong foundation in front-end technologies and a commitment to building responsive, accessible, and performance-optimized websites.<br /><br />
                With hands-on experience in React.js, Tailwind CSS, and JavaScript, I've developed and deployed dynamic websites for clients including an NGO and a Chartered Accountant firm. My expertise lies in creating modular, scalable interfaces that align with both user needs and business goals.<br /><br />
                I'm driven by the challenge of turning ideas into clean, functional code. I take pride in building digital experiences that not only look great but also perform seamlessly across devices and platforms.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl blur-xl transition-all duration-300 group-hover:scale-110 opacity-0 group-hover:opacity-100"></div>
                    <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                        <feature.icon className="text-white" size={24} />
                      </div>
                      <h4 className="text-lg font-semibold text-teal-300 mb-2">{feature.title}</h4>
                      <p className="text-sm text-blue-100">{feature.description}</p>
                  </div>
                  </motion.div>
                ))}
                </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline & Image */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl flex flex-col items-center border border-white/10">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-900 to-blue-800 mb-4 overflow-hidden border-4 border-teal-400 shadow-md flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    alt="Rajni Bhardwaj"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-teal-300 mb-2">Rajni Bhardwaj</h3>
                  <p className="text-blue-100">Software Developer</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 before:absolute before:left-[7px] before:top-[22px] before:h-full before:w-[2px] before:bg-blue-900/40 last:before:hidden"
                >
                  <div className="flex items-center mb-2">
                    <div className={`absolute left-0 w-4 h-4 rounded-full ${item.color} shadow-lg`}></div>
                    <div className={`ml-6 text-sm font-medium text-teal-300`}>
                      {item.date}
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-teal-300">{item.title}</h4>
                    <p className="text-blue-100">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
