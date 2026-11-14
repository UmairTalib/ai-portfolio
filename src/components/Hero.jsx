import React from 'react';
import { Github, Linkedin, Mail, Brain, AudioLines, ChevronDown } from 'lucide-react';
import NeuralBackground from './NeuralBackground';
import Typewriter from './Typewriter';

// The three versions of each participant's speech in the master's thesis
// (see https://github.com/UmairTalib/listening-beyond-the-words).
const thesisViews = [
    { id: 'x0', name: 'original', content: 'words and voice' },
    { id: 'x1', name: 're-voiced', content: 'same words, neutral voice' },
    { id: 'x2', name: 'low-pass', content: 'mostly the voice' },
];

// Interviewer contamination in participant transcripts, as reported in the
// CoDIT 2026 paper (doi:10.1109/CoDIT70676.2026.11630977).
const contamination = [
    { label: 'raw', value: 14.18 },
    { label: 'filtered', value: 1.09 },
];
const maxContamination = Math.max(...contamination.map((bar) => bar.value));

const Hero = () => {
    return (
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
                        Siegen, Germany
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                        <span className="block text-slate-400 text-3xl md:text-4xl mb-2 font-normal">Hi, I'm Umair Talib</span>
                        <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                            <Typewriter text="Applied AI Engineer" delay={100} className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent" />
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                        LLM and speech systems <span className="text-teal-400">whose results can be checked</span>.
                        I am an M.Sc. Computer Science student at the University of Siegen and co-author of a
                        conference paper published by IEEE (CoDIT 2026).
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#projects" className="group relative px-6 py-3 bg-teal-500/10 overflow-hidden rounded-lg border border-teal-500/50 text-teal-400 font-medium transition-all hover:bg-teal-500 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]">
                            <span className="relative z-10">View projects</span>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-teal-500 transition-transform duration-300 ease-out z-0" />
                        </a>
                        <a href="#contact" className="px-6 py-3 border border-slate-700 hover:border-white text-slate-400 hover:text-white rounded-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            Get in touch
                        </a>
                    </div>

                    <div className="flex gap-6 pt-8 text-slate-500">
                        <a href="https://github.com/UmairTalib" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-teal-400 hover:scale-110 transition-all"><Github className="w-6 h-6" /></a>
                        <a href="https://www.linkedin.com/in/umairtalib/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-teal-400 hover:scale-110 transition-all"><Linkedin className="w-6 h-6" /></a>
                        <a href="mailto:umair.talib99@gmail.com" aria-label="E-mail" className="hover:text-teal-400 hover:scale-110 transition-all"><Mail className="w-6 h-6" /></a>
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
                                <span className="ml-auto text-xs text-slate-500 font-mono">thesis/three_views.md</span>
                            </div>
                            <div className="font-mono text-sm space-y-3">
                                <div className="text-slate-500"># Master's thesis: one interview, three versions</div>
                                {thesisViews.map((view) => (
                                    <div key={view.id} className="flex gap-3">
                                        <span className="text-purple-400">{view.id}</span>
                                        <span className="text-blue-400 w-20 shrink-0">{view.name}</span>
                                        <span className="text-slate-300">{view.content}</span>
                                    </div>
                                ))}
                                <div className="flex items-center gap-2">
                                    <span className="text-teal-400">❯</span>
                                    <span className="text-slate-300">Pilot from November 2026</span>
                                    <span className="text-teal-500 text-xs px-2 py-0.5 bg-teal-500/10 rounded">No results yet</span>
                                </div>
                                {/* Result from the published paper */}
                                <div className="mt-6 p-4 bg-black/20 rounded border border-slate-700/50">
                                    <div className="flex justify-around items-end h-24 gap-6">
                                        {contamination.map((bar) => (
                                            <div key={bar.label} className="flex flex-col items-center justify-end h-full w-20">
                                                <span className="text-xs text-teal-300 mb-1">{bar.value.toFixed(2)}%</span>
                                                <div
                                                    className="w-full min-h-[2px] bg-teal-500/30 hover:bg-teal-400 transition-colors rounded-t"
                                                    style={{ height: `${(bar.value / maxContamination) * 70}%` }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-around gap-6 text-xs text-slate-500 mt-1">
                                        {contamination.map((bar) => (
                                            <span key={bar.label} className="w-20 text-center">{bar.label}</span>
                                        ))}
                                    </div>
                                    <div className="text-center text-xs text-slate-500 mt-2">Interviewer contamination in participant transcripts (CoDIT 2026 paper)</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Icons */}
                        <div className="absolute -top-6 -right-6 p-4 bg-slate-800 rounded-lg border border-slate-700 shadow-xl animate-bounce delay-100">
                            <Brain className="w-8 h-8 text-teal-400" />
                        </div>
                        <div className="absolute bottom-10 -left-6 p-4 bg-slate-800 rounded-lg border border-slate-700 shadow-xl animate-bounce delay-700">
                            <AudioLines className="w-8 h-8 text-blue-400" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
                <ChevronDown className="w-6 h-6" />
            </div>
        </section>
    );
};

export default Hero;
