import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                    <span className="text-teal-400 font-mono">03.</span> Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Neural Style Transfer",
                            desc: "Custom pipeline optimizing content and style loss functions to generate high-resolution artistic images.",
                            tags: ["PyTorch", "CV", "CNN"],
                            img: "/images/neural-style.jpg",
                            link: "#"
                        },
                        {
                            title: "Stock Market Transformer",
                            desc: "Time-series forecasting model using Attention mechanisms. Analyzed historical DAX data with 78% accuracy.",
                            tags: ["TensorFlow", "Transformers", "Finance"],
                            img: "/images/stock-market.jpg",
                            link: "#"
                        },
                        {
                            title: "German Sentiment BERT",
                            desc: "Fine-tuned transformer model on German Twitter data. Deployed as a scalable REST API using FastAPI.",
                            tags: ["Hugging Face", "NLP", "FastAPI"],
                            img: "/images/sentiment-bert.jpg",
                            link: "#"
                        }
                    ].map((project, idx) => (
                        <TiltCard key={idx} className="group glass-card rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] transition-all">
                            <div className="h-48 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent z-10" />
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                    <a href={project.link} className="p-2 bg-slate-900/80 rounded-full text-white hover:text-teal-400 hover:bg-black"><Github className="w-5 h-5" /></a>
                                    <a href={project.link} className="p-2 bg-slate-900/80 rounded-full text-white hover:text-teal-400 hover:bg-black"><ExternalLink className="w-5 h-5" /></a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-700/50">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono text-teal-400">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
