import React from 'react';
import { Github, Linkedin, FileText, Brain, Database, ChevronDown } from 'lucide-react';
import NeuralBackground from './NeuralBackground';
import Typewriter from './Typewriter';

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
    );
};

export default Hero;
