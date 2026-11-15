import React from 'react';
import { Landmark, FileText, HeartPulse, Telescope, ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';

// Project texts follow the CV (November 2026). Numbers come from the CV,
// the published paper, the research project report and the course project report.
const projects = [
    {
        title: 'AI platform for public-funding workflows',
        kind: 'Part-time job at ATTEC, code is private',
        desc: 'Aims to automate public-funding workflows for German SMEs and the funding experts who advise them. The first stage already works: it shows which programmes fit a company, with every checked condition and its official source. Code makes the decisions; the LLM must cite the words it used, and code verifies them. On three evaluation sets used for tuning (113 cases, no unseen data), it gave 0 invented or wrong answers.',
        tags: ['Python', 'FastAPI', 'LLM API'],
        icon: Landmark,
        links: [],
    },
    {
        title: 'Leakage-resilient diarization for clinical interviews',
        kind: 'Co-authored paper, CoDIT 2026, published by IEEE',
        desc: 'The paper describes the speaker-verified diarization and transcription pipeline from my research project, with a text filter for interviewer prompts. Interviewer contamination in participant transcripts fell from 14.18% to 1.09%.',
        tags: ['pyannote.audio', 'Faster-Whisper', 'SLURM'],
        icon: FileText,
        links: [{ label: 'Paper (DOI)', href: 'https://doi.org/10.1109/CoDIT70676.2026.11630977' }],
    },
    {
        title: 'Depression screening from speech and text',
        kind: 'Research project, University of Siegen, grade 1.0',
        desc: 'A gated fusion model on WavLM and Mental-RoBERTa embeddings with a session-level Transformer, for screening of elevated depressive symptoms (PHQ-8 of 10 or more). Held-out test on 56 participants: ROC-AUC 0.614 (95% CI 0.454 to 0.771), recall 88.2% at precision 41.7%.',
        tags: ['WavLM', 'Mental-RoBERTa', 'Transformer'],
        icon: HeartPulse,
        links: [],
    },
    {
        title: 'NAS-Bench-201 transfer to cosmic-ray detection',
        kind: 'Course project, University of Siegen, with one co-author',
        desc: 'Transferred NAS-Bench-201 architectures to cosmic-ray detection in telescope images. Thirty fine-tuned networks reached best validation AUROCs between 0.976 and 0.989.',
        tags: ['PyTorch', 'NAS', 'Transfer learning'],
        icon: Telescope,
        links: [],
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                    <span className="text-teal-400 font-mono">03.</span> Research and Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => {
                        const Icon = project.icon;
                        return (
                            <TiltCard key={project.title} className="group glass-card rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] transition-all flex flex-col">
                                <div className="h-32 relative overflow-hidden bg-gradient-to-br from-teal-500/20 via-blue-500/10 to-purple-500/20 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent" />
                                    <Icon className="relative w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform duration-700" aria-hidden="true" />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors mb-1">{project.title}</h3>
                                    <p className="text-sm font-mono text-teal-500/80 mb-3">{project.kind}</p>
                                    <p className="text-slate-400 text-sm mb-4">
                                        {project.desc}
                                    </p>
                                    {project.links.length > 0 && (
                                        <div className="flex flex-wrap gap-4 mb-4">
                                            {project.links.map((link) => (
                                                <a
                                                    key={link.href}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-sm text-teal-400 hover:text-white transition-colors"
                                                >
                                                    {link.label}
                                                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                    <div className="flex flex-wrap gap-2 pt-2 mt-auto border-t border-slate-700/50">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono text-teal-400">#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
