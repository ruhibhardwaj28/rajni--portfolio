import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Radhe Krishna SS Trust – Official Website (June 2025)",
      description: "Developed and deployed a responsive NGO website to showcase the trust's mission, events, and enable online donations. Built with React.js and Tailwind CSS for a modern, accessible user experience. Live at radhekrishnasstrust.com.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500&h=300&fit=crop",
      tech: ["React.js", "HTML5", "Tailwind CSS", "JavaScript"],
      github: "#",
      demo: "https://radhekrishnasstrust.com"
    },
    {
      title: "Chartered Accountant Firm – Official Website (April 2025)",
      description: "Designed and developed a professional, responsive website for a CA firm to highlight services and expertise. Utilized React.js and Tailwind CSS for a clean UI and optimal SEO. Live at kpssquare.in.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
      tech: ["React.js", "HTML5", "Tailwind CSS", "JavaScript"],
      github: "#",
      demo: "https://kpssquare.in"
    },
    {
      title: "Test Centre Audit Project (March 2022)",
      description: "Contributed to a web-based platform for test center auditing, focusing on database connectivity and user-friendly design. Built with HTML, CSS, JavaScript, and PHP.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Analytics",
      description: "An analytics dashboard for social media managers to track performance across multiple platforms with detailed insights and reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tech: ["Next.js", "D3.js", "MongoDB"],
      github: "#",
      demo: "#"
    }
  ];

  // Refs and state for each card
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [inViewArr, setInViewArr] = useState(projects.map(() => false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInViewArr(prev => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          } else {
            setInViewArr(prev => {
              const updated = [...prev];
              updated[idx] = false;
              return updated;
            });
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6 bg-gradient-to-r from-teal-400 via-blue-300 to-blue-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            A selection of my recent work, demonstrating my skills in modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10"
              style={{
                opacity: inViewArr[index] ? 1 : 0,
                transform: inViewArr[index]
                  ? 'translateY(0)'
                  : 'translateY(40px)',
                transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
                transitionDelay: inViewArr[index] ? `${index * 0.15 + 0.2}s` : '0s',
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-900/40 text-teal-200 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 text-teal-300 hover:text-white transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center space-x-2 text-teal-300 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
