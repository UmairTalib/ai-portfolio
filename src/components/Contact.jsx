import React from 'react';
import { Mail, Zap } from 'lucide-react';

const Contact = () => {
    return (
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
    );
};

export default Contact;
