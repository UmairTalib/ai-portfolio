import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Code2,
  Brain,
  Database,
  Terminal,
  Cpu,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  MapPin,
  GraduationCap,
  BookOpen,
  Award,
  Layers,
  Zap,
  Activity
} from 'lucide-react';

// --- Components ---

// 1. Neural Network Background Animation
const NeuralBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Particle Config
    const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive count
    const connectionDistance = 150;
    const mouseDistance = 200;

    let mouse = { x: null, y: null };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouseDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseDistance - distance) / mouseDistance;
            const directionX = forceDirectionX * force * 0.5;
            const directionY = forceDirectionY * force * 0.5;
            this.vx += directionX;
            this.vy += directionY;
          }
        }
      }

      draw() {
        ctx.fillStyle = 'rgba(45, 212, 191, 0.5)'; // Teal-400
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Draw connections
        for (let j = i; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(45, 212, 191, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20 pointer-events-none" />;
};

// 2. 3D Tilt Card Component
const TiltCard = ({ children, className = "" }) => {
  const [transform, setTransform] = useState("");
  const [transition, setTransition] = useState("transform 0.1s ease-out");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    const centerX = box.width / 2;
    const centerY = box.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
    setTransition("transform 0.1s ease-out");
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    setTransition("transform 0.5s ease-out");
  };

  return (
    <div
      className={`transform-style-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition }}
    >
      {children}
    </div>
  );
};

// 3. Typing Effect Component
const Typewriter = ({ text, delay = 100, infinite = true, className = "" }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
    } else if (infinite) {
      // Optional: Reset logic could go here, for now just static after type
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span className={className}>{currentText}</span>;
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">

      {/* Glitch Keyframes Style Injection */}
      <style>{`
        @keyframes Float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
        .glitch-hover:hover {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
          color: #2dd4bf;
        }
        .glass-card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1c]/80 backdrop-blur-md shadow-lg border-b border-teal-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold flex items-center gap-2 group">
              <div className="relative">
                <Brain className="w-8 h-8 text-teal-400 relative z-10 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-teal-500/50 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-mono bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent glitch-hover">Dev.AI_</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-mono tracking-wide transition-all duration-300 hover:text-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] ${activeSection === link.href.substring(1) ? 'text-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.3)]' : 'text-slate-400'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0f1c] border-b border-slate-700">
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-300 hover:text-teal-400 font-mono"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
        <NeuralBackground />

        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/5 border border-teal-500/20 text-teal-400 text-sm font-mono backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Based in Germany
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              <span className="block text-slate-400 text-3xl md:text-4xl mb-2 font-normal">I am a</span>
              <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                <Typewriter text="Machine Learning Engineer" delay={100} className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent" />
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              M.Sc. Student architecting <span className="text-teal-400">Intelligent Systems</span>.
              Translating mathematical theory into scalable AI solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="group relative px-6 py-3 bg-teal-500/10 overflow-hidden rounded-lg border border-teal-500/50 text-teal-400 font-medium transition-all hover:bg-teal-500 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]">
                <span className="relative z-10">Explore Neural Nets</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-teal-500 transition-transform duration-300 ease-out z-0" />
              </a>
              <a href="#contact" className="px-6 py-3 border border-slate-700 hover:border-white text-slate-400 hover:text-white rounded-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Initialize Contact
              </a>
            </div>

            <div className="flex gap-6 pt-8 text-slate-500">
              <a href="#" className="hover:text-teal-400 hover:scale-110 transition-all"><Github className="w-6 h-6" /></a>
              <a href="#" className="hover:text-teal-400 hover:scale-110 transition-all"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-teal-400 hover:scale-110 transition-all"><FileText className="w-6 h-6" /></a>
            </div>
          </div>

          <div className="relative hidden md:block perspective-1000">
            {/* 3D Floating Tech Block */}
            <div className="relative w-full aspect-square max-w-[500px] animate-[float_6s_ease-in-out_infinite]">
              {/* Glass Terminal */}
              <div className="absolute inset-0 bg-[#0f1623]/80 backdrop-blur-xl border border-teal-500/20 rounded-xl p-6 shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4 border-b border-slate-700/50 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-auto text-xs text-slate-500 font-mono">inference_engine.py</span>
                </div>
                <div className="font-mono text-sm space-y-3">
                  <div className="text-slate-500"># Loading Pre-trained Weights</div>
                  <div><span className="text-purple-400">model</span> = <span className="text-blue-400">AutoModel</span>.from_pretrained(<span className="text-green-400">"bert-base-german"</span>)</div>
                  <div><span className="text-purple-400">device</span> = <span className="text-yellow-200">torch.device</span>(<span className="text-green-400">"cuda"</span>)</div>
                  <br />
                  <div className="text-slate-500"># Processing Input Tensor</div>
                  <div className="flex items-center gap-2">
                    <span className="text-teal-400">❯</span>
                    <span className="text-slate-300">Optimizing gradients...</span>
                    <span className="text-teal-500 text-xs px-2 py-0.5 bg-teal-500/10 rounded">Done</span>
                  </div>
                  {/* Simulated Graph */}
                  <div className="mt-6 p-4 bg-black/20 rounded border border-slate-700/50">
                    <div className="flex justify-between items-end h-24 gap-2">
                      {[40, 65, 34, 78, 56, 92, 88].map((h, i) => (
                        <div key={i} className="w-full bg-teal-500/20 hover:bg-teal-400 transition-colors rounded-t" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                    <div className="text-center text-xs text-slate-500 mt-2 font-mono">Loss Convergence</div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-6 -right-6 p-4 bg-slate-800 rounded-lg border border-slate-700 shadow-xl animate-bounce delay-100">
                <Brain className="w-8 h-8 text-teal-400" />
              </div>
              <div className="absolute bottom-10 -left-6 p-4 bg-slate-800 rounded-lg border border-slate-700 shadow-xl animate-bounce delay-700">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-teal-400 font-mono">01.</span> About Me
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                <p>
                  <span className="text-teal-400 font-mono text-xl mr-2">&gt;</span>
                  Hallo! I am a Master's student specializing in <span className="text-white font-medium">Artificial Intelligence</span> at a leading technical university in Germany.
                </p>
                <p>
                  My research interests lie at the intersection of <span className="text-teal-400">Computer Vision</span> and <span className="text-teal-400">Generative Models</span>. I build systems that can see, understand, and create.
                </p>
                <p>
                  Currently, I am working on <span className="text-white underline decoration-teal-500/50 underline-offset-4">Self-Supervised Learning</span> techniques to reduce data dependency in medical imaging diagnosis.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-lg hover:border-teal-500/30 transition-colors">
                  <GraduationCap className="w-8 h-8 text-teal-400 mb-3" />
                  <h3 className="text-white font-medium">M.Sc. AI/Data Science</h3>
                  <p className="text-sm text-slate-500">Current Student (Germany)</p>
                </div>
                <div className="glass-card p-6 rounded-lg hover:border-teal-500/30 transition-colors">
                  <Activity className="w-8 h-8 text-teal-400 mb-3" />
                  <h3 className="text-white font-medium">Research Focus</h3>
                  <p className="text-sm text-slate-500">CV, NLP, & RL</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full" />
              <div className="relative z-10 grid grid-cols-2 gap-4 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Coding Setup"
                  className="rounded-lg object-cover h-64 w-full shadow-2xl border border-slate-700 hover:scale-105 transition-transform"
                />
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Cyberpunk City"
                  className="rounded-lg object-cover h-64 w-full shadow-2xl border border-slate-700 hover:scale-105 transition-transform mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#0f1623]/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="text-teal-400 font-mono">02.</span> Technical Arsenal
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Terminal className="w-6 h-6" />,
                title: "Languages",
                skills: ['Python', 'C++', 'SQL', 'JavaScript', 'Rust']
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "ML / DL",
                skills: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face', 'OpenCV']
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Data Eng",
                skills: ['Pandas', 'Spark', 'Docker', 'MongoDB', 'AWS', 'Airflow']
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Tools",
                skills: ['Git', 'Linux', 'Latex', 'MLflow', 'WandB', 'CI/CD']
              }
            ].map((category, idx) => (
              <TiltCard key={idx} className="glass-card p-6 rounded-xl border border-slate-700/50 h-full">
                <div className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                  <span className="text-teal-400 bg-teal-400/10 p-2 rounded-lg">{category.icon}</span>
                  {category.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded text-sm border border-slate-700 hover:border-teal-500 hover:text-teal-400 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="text-teal-400 font-mono">03.</span> Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Neural Style Transfer",
                desc: "Custom pipeline optimizing content and style loss functions to generate high-resolution artistic images.",
                tags: ["PyTorch", "CV", "CNN"],
                img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                link: "#"
              },
              {
                title: "Stock Market Transformer",
                desc: "Time-series forecasting model using Attention mechanisms. Analyzed historical DAX data with 78% accuracy.",
                tags: ["TensorFlow", "Transformers", "Finance"],
                img: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                link: "#"
              },
              {
                title: "German Sentiment BERT",
                desc: "Fine-tuned transformer model on German Twitter data. Deployed as a scalable REST API using FastAPI.",
                tags: ["Hugging Face", "NLP", "FastAPI"],
                img: "https://images.unsplash.com/photo-1527474305487-2074ad0a3a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                link: "#"
              }
            ].map((project, idx) => (
              <TiltCard key={idx} className="group glass-card rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] transition-all">
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent z-10" />
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <a href={project.link} className="p-2 bg-slate-900/80 rounded-full text-white hover:text-teal-400 hover:bg-black"><Github className="w-5 h-5" /></a>
                    <a href={project.link} className="p-2 bg-slate-900/80 rounded-full text-white hover:text-teal-400 hover:bg-black"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-700/50">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-teal-400">#{tag}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#0f1623]/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="text-teal-400 font-mono">04.</span> Experience & Education
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-500/20 before:to-transparent">

            {[
              {
                icon: <GraduationCap className="w-5 h-5" />,
                title: "M.Sc. Artificial Intelligence",
                org: "Technical University (Germany)",
                year: "2023 - Present",
                desc: "Focusing on Deep Learning and Computer Vision. Thesis: 'Self-Supervised Learning for Medical Imaging'.",
                active: true
              },
              {
                icon: <Code2 className="w-5 h-5" />,
                title: "Research Assistant (HiWi)",
                org: "University Lab, Berlin",
                year: "2023 - 2024",
                desc: "Assisted in developing reinforcement learning agents for robotics simulations. Optimized data pipelines reducing training time by 20%.",
                active: false
              },
              {
                icon: <Award className="w-5 h-5" />,
                title: "B.Tech Computer Science",
                org: "Previous University",
                year: "2019 - 2023",
                desc: "Graduated with honors. Capstone Project: Automated Traffic Sign Recognition using CNNs.",
                active: false
              }
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border ${item.active ? 'border-teal-500 bg-teal-500/10 text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.5)]' : 'border-slate-700 bg-slate-900 text-slate-500'} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-500 group-hover:scale-110`}>
                  {item.icon}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                    <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2 py-1 rounded">{item.year}</span>
                  </div>
                  <div className="text-slate-300 text-sm mb-3 font-medium">{item.org}</div>
                  <p className="text-slate-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block p-4 rounded-full bg-teal-500/10 text-teal-400 mb-8 animate-[pulse_3s_infinite]">
            <Mail className="w-10 h-10" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-8">Ready to Collaborate?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently looking for <span className="text-teal-400 font-medium">Master Thesis</span> opportunities or <span className="text-teal-400 font-medium">Working Student</span> positions in AI/ML.
          </p>

          <a href="mailto:your.email@example.com" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-teal-500 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]">
            <span className="relative z-10">Send Transmission</span>
            <Zap className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/20 transition-transform duration-300 ease-out" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050914] border-t border-slate-800/50 py-8 text-center text-slate-500 text-sm relative z-10">
        <div className="flex justify-center gap-8 mb-4">
          <a href="#" className="hover:text-teal-400 hover:-translate-y-1 transition-all"><Github className="w-5 h-5" /></a>
          <a href="#" className="hover:text-teal-400 hover:-translate-y-1 transition-all"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="hover:text-teal-400 hover:-translate-y-1 transition-all"><FileText className="w-5 h-5" /></a>
        </div>
        <p className="font-mono">
          System Status: <span className="text-green-500">Operational</span> | Built by <span className="text-teal-400">Dev.AI</span>
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
