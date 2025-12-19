import React from 'react';
import { Terminal, Brain, Database, Layers } from 'lucide-react';
import TiltCard from './TiltCard';

const Skills = () => {
    return (
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
    );
};

export default Skills;
