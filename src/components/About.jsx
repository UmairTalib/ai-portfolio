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
                                Hello! I am an applied AI engineer and an M.Sc. Computer Science student at the <span className="text-white font-medium">University of Siegen</span>.
                            </p>
                            <p>
                                Alongside my studies, I'm developing <span className="text-teal-400">AI products</span> part-time: an AI platform for public-funding workflows at <span className="text-white font-medium">ATTEC</span>, as its only developer, and an AI-assisted planning tool for municipal citizen participation in the research project <span className="text-white font-medium">FUSION</span> at the University of Siegen.
                            </p>
                            <p>
                                I make the design decisions and write the specs, AI coding agents implement, and I review and test every change. I care about <span className="text-white underline decoration-teal-500/50 underline-offset-4">results that can be checked</span>: code makes the decisions where it can, and a language model has to quote its evidence, which code then checks.
                            </p>
                            <p>
                                Before my master's, I worked for over 1.5 years as a software engineer, building web applications with React, Next.js and Node.js. In my master's research project, I worked on screening for elevated depressive symptoms from speech and text; a paper from this project was published by IEEE (CoDIT 2026).
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="glass-card p-6 rounded-lg hover:border-teal-500/30 transition-colors">
                                <GraduationCap className="w-8 h-8 text-teal-400 mb-3" />
                                <h3 className="text-white font-medium">M.Sc. Computer Science</h3>
                                <p className="text-sm text-slate-500">University of Siegen</p>
                            </div>
                            <div className="glass-card p-6 rounded-lg hover:border-teal-500/30 transition-colors">
                                <Activity className="w-8 h-8 text-teal-400 mb-3" />
                                <h3 className="text-white font-medium">Focus</h3>
                                <p className="text-sm text-slate-500">LLM and speech systems</p>
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
