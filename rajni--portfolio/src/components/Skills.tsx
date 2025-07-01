import React, { useRef, useEffect, useState } from 'react';

// Custom hook to detect if an element is in the viewport
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, inView] as const;
}

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "SQL", level: 85 },
      ]
    },
    {
      title: "Frameworks / Libraries",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: ".NET", level: 70 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "PHP", level: 75 },
        { name: "WordPress", level: 80 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "IntelliJ IDEA", level: 80 },
        { name: "Visual Studio 2022", level: 75 },
        { name: "VS Code", level: 95 },
      ]
    },
    {
      title: "Concepts",
      skills: [
        { name: "OOPs", level: 90 },
        { name: "Responsive Design", level: 90 },
        { name: "REST APIs", level: 85 },
        { name: "CRUD Operations", level: 90 },
        { name: "Component-Based Architecture", level: 85 },
        { name: "MVC", level: 80 },
      ]
    },
  ];

  // Refs and state for each card
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [inViewArr, setInViewArr] = useState(skillCategories.map(() => false));

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
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6 bg-gradient-to-r from-teal-400 via-blue-300 to-blue-500 text-transparent bg-clip-text">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-white/10"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <h3 className="text-2xl font-bold text-teal-300 mb-6 text-center tracking-wide">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-blue-100 font-medium">{skill.name}</span>
                      <span className="text-teal-300 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-blue-900/40 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-teal-400 via-blue-400 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out shadow-lg"
                        style={{
                          width: inViewArr[index] ? `${skill.level}%` : '0%',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
