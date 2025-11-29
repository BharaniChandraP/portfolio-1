'use client';

import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "UAV Task Offloading using Deep Reinforcement Learning",
      description: "DRL framework using PPO for joint task offloading in UAV-assisted Mobile Edge Computing. Achieved 60% improvement over baseline algorithms with statistical significance and 66.4% energy reduction.",
      tech: ["Python", "PyTorch", "PPO", "Machine Learning"],
      period: "May 2025 – Present",
      highlights: ["Hybrid actor-critic network", "60% performance improvement", "p < 0.0001 significance"]
    },
    {
      title: "Gym & Swimming Pool Registration Site",
      description: "Full-stack facility management portal serving 6,000+ students, eliminating paper-based workflows. Achieved 99.9% uptime with optimized database performance.",
      tech: ["NextJS", "Golang", "MySQL", "Docker"],
      period: "Aug 2024 – May 2025",
      highlights: ["6,000+ users", "90% registration time reduction", "99.9% uptime"]
    },
    {
      title: "Quiz Hub",
      description: "Real-time quiz platform supporting multi-user sessions with custom quiz creation and scalable search algorithm.",
      tech: ["Node.js", "MongoDB", "JavaScript", "EJS"],
      period: "Nov 2023 – May 2024",
      highlights: ["Multi-user sessions", "Sub-100ms response times", "Scalable search"]
    }
  ];

  const experiences = [
    {
      company: "Uber",
      role: "Software Engineering Intern",
      period: "May 2024 – Jul 2024",
      type: "Hybrid",
      achievements: [
        "Automated document verification for driver onboarding, reducing manual review time by 40%",
        "Engineered CLI tool for rule creation with 50% reduction in configuration time"
      ]
    }
  ];

  const skills = {
    "Programming": ["C", "C++", "JavaScript", "Python"],
    "Web Stack": ["ReactJS", "NodeJS", "ExpressJS", "NextJS"],
    "Databases": ["MongoDB", "MySQL"],
    "Tools": ["Git", "Docker", "PyTorch"],
    "Backend": ["Golang", "gRPC", "GORM"]
  };

  const achievements = [
    { title: "Uber Star Intern '24", detail: "1 of 36 candidates selected from 100 finalists" },
    { title: "Flipkart GRiD 7.0 Semi-finalist", detail: "Top 5% among 1.6 Lakh+ applicants" },
    { title: "Uber She++ 2024 Winner", detail: "Top 100 from 3,700+ applicants across 19 colleges" },
    { title: "SIH '23 Winner", detail: "Data compression solution for backbone networks" },
    { title: "Multiple Scholarships", detail: "Reliance Foundation, FFE, and RECAL" },
    { title: "FIDE Rated Chess Player", detail: "Official rating: 1459" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80">
              BC
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'projects', 'experience', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['home', 'about', 'projects', 'experience', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize hover:text-blue-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-0.5">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-3xl font-bold">
                BCP
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Bharani Chandra P
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Full-Stack Developer & AI/ML Enthusiast
          </p>
          
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            NIT Trichy | Uber Intern | Building elegant solutions with cutting-edge technology
          </p>

          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-all"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-6 justify-center text-slate-400">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:bharanichandraprabhu@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Education</h3>
              <p className="text-slate-300 mb-4">
                B.Tech in Instrumentation and Control Engineering (Minor in CSE) from NIT Trichy
              </p>
              <p className="text-slate-400">Expected May 2026 | GPA: 8.37/10</p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 text-blue-400">Location</h3>
              <p className="text-slate-300">Tamil Nadu, India</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Core Competencies</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-sm font-semibold text-cyan-400 mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm hover:border-blue-400 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
          
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/50 border border-slate-700/50 hover:border-blue-400/50 rounded-xl p-8 transition-all hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400">{project.period}</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-cyan-400 mb-3">Key Highlights</p>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-lg text-xs font-semibold text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-blue-400 pl-8 mb-12 relative">
              <div className="absolute -left-3 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
              
              <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
              <p className="text-blue-400 font-semibold mb-1">{exp.company}</p>
              <p className="text-slate-400 text-sm mb-6">{exp.period} • {exp.type}</p>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-slate-300 flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Achievements & Awards</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-400/50 rounded-lg p-6 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <p className="text-blue-400 font-bold mb-2">★ {achievement.title}</p>
                <p className="text-slate-300 text-sm">{achievement.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-slate-300 text-lg mb-12">
            I'm always interested in discussing interesting projects and opportunities.
          </p>
          
          <div className="space-y-4">
            <a
              href="mailto:bharanichandraprabhu@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <Mail size={20} />
              Email Me
            </a>
          </div>

          <div className="flex gap-6 justify-center mt-12 text-slate-400">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <p>© 2025 Bharani Chandra P. All rights reserved.</p>
      </footer>
    </div>
  );
}