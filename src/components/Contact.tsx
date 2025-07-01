import React, { useRef, useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Refs and state for the two columns
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [inViewArr, setInViewArr] = useState([false, false]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    colRefs.current.forEach((ref, idx) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6 bg-gradient-to-r from-teal-400 via-blue-300 to-blue-500 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          {/* Contact Info */}
          <div
            ref={el => (colRefs.current[0] = el)}
            style={{
              opacity: inViewArr[0] ? 1 : 0,
              transform: inViewArr[0] ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
              transitionDelay: inViewArr[0] ? '0.2s' : '0s',
            }}
            className="space-y-8 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-teal-300 mb-6">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-900/40 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-teal-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Email</h4>
                  <p className="text-blue-100">rajnibhardwaj4535@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-900/40 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-teal-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Phone</h4>
                  <p className="text-blue-100">+91 63986 13387</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-900/40 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-teal-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-teal-300">Location</h4>
                  <p className="text-blue-100">Kosi Kalan, Mathura, Uttar Pradesh, 281403</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <h4 className="font-semibold text-teal-300 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-900/40 hover:bg-blue-900/60 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200">
                  <Github size={20} className="text-teal-300" />
                </a>
                <a href="#" className="bg-blue-900/40 hover:bg-blue-900/60 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200">
                  <Linkedin size={20} className="text-teal-300" />
                </a>
                <a href="#" className="bg-blue-900/40 hover:bg-blue-900/60 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200">
                  <Twitter size={20} className="text-teal-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={el => (colRefs.current[1] = el)}
            style={{
              opacity: inViewArr[1] ? 1 : 0,
              transform: inViewArr[1] ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
              transitionDelay: inViewArr[1] ? '0.35s' : '0s',
            }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-teal-300 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-teal-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-900/40 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder-blue-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-teal-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-900/40 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder-blue-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-teal-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-blue-900/40 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder-blue-200 resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-teal-500/25"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-200" data-aos="fade-up" data-aos-delay="400">
          <p className="text-blue-100">
            © 2024 Rajni Bhardwaj. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
        {/* Footer */}
        <footer className="mt-12 border-t border-blue-900/40 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-2">
            <div className="text-blue-100 text-sm">© {new Date().getFullYear()} Rajni Bhardwaj. All rights reserved.</div>
            <div className="flex space-x-4">
              <a href="mailto:rajnibhardwaj4535@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-teal-300 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rajni-bhardwaj-6605761a9/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-teal-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/rajnibhardwaj1" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-teal-300 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
