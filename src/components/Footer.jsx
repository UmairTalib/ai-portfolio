import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050914] border-t border-slate-800/50 py-8 text-center text-slate-500 text-sm relative z-10">
            <div className="flex justify-center gap-8 mb-4">
                <a href="https://github.com/UmairTalib" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-teal-400 hover:-translate-y-1 transition-all"><Github className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/umairtalib/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-teal-400 hover:-translate-y-1 transition-all"><Linkedin className="w-5 h-5" /></a>
                <a href="mailto:umair.talib99@gmail.com" aria-label="E-mail" className="hover:text-teal-400 hover:-translate-y-1 transition-all"><Mail className="w-5 h-5" /></a>
            </div>
            <p className="font-mono">
                <span className="text-teal-400">Umair Talib</span> · Siegen, Germany · Last updated November 2026
            </p>
        </footer>
    );
};

export default Footer;
