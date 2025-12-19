import React from 'react';
import { GraduationCap, Activity } from 'lucide-react';

const About = () => {
    return (
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
                                src="/images/coding-setup.jpg"
                                alt="Coding Setup"
                                className="rounded-lg object-cover h-64 w-full shadow-2xl border border-slate-700 hover:scale-105 transition-transform"
                            />
                            <img
                                src="/images/cyberpunk-city.jpg"
                                alt="Cyberpunk City"
                                className="rounded-lg object-cover h-64 w-full shadow-2xl border border-slate-700 hover:scale-105 transition-transform mt-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
