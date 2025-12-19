import React from 'react';
import { GraduationCap, Code2, Award } from 'lucide-react';

const Experience = () => {
    return (
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
    );
};

export default Experience;
