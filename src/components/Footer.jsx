import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Footer = () => {
    return (
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
    );
};

export default Footer;
