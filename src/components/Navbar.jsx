import React from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, isMenuOpen, setIsMenuOpen, scrolled }) => {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
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
                                className={`text-sm font-mono tracking-wide px-4 py-2 rounded-full transition-all duration-300 ${activeSection === link.href.substring(1)
                                        ? 'bg-teal-500/10 text-teal-400 border border-teal-500/50 shadow-[0_0_15px_rgba(45,212,191,0.2)]'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
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
    );
};

export default Navbar;
