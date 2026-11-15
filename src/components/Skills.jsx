import React from 'react';
import { Brain, Server, PanelsTopLeft, FlaskConical, Cpu, Bot } from 'lucide-react';
import TiltCard from './TiltCard';

// Same skill groups as the CV (November 2026).
const skillGroups = [
    {
        icon: <Brain className="w-6 h-6" />,
        title: 'AI and ML',
        skills: ['PyTorch', 'Hugging Face Transformers', 'WavLM', 'Whisper', 'pyannote.audio', 'LLM APIs with structured output', 'Evaluation sets'],
    },
    {
        icon: <Server className="w-6 h-6" />,
        title: 'Backend',
        skills: ['Python', 'FastAPI', 'pydantic', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'REST', 'JWT authentication'],
    },
    {
        icon: <PanelsTopLeft className="w-6 h-6" />,
        title: 'Front end',
        skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
        icon: <FlaskConical className="w-6 h-6" />,
        title: 'Engineering practice',
        skills: ['pytest', 'Vitest', 'Playwright', 'GitHub Actions', 'Docker Compose', 'Ruff', 'mypy', 'Git'],
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: 'Compute',
        skills: ['SLURM', 'HPC cluster with A100 GPUs'],
    },
    {
        icon: <Bot className="w-6 h-6" />,
        title: 'AI coding agents',
        skills: ['Claude Code', 'Antigravity'],
        note: 'Controlled by tests, evaluation sets and decision records.',
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-[#0f1623]/50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                    <span className="text-teal-400 font-mono">02.</span> Skills
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((category) => (
                        <TiltCard key={category.title} className="glass-card p-6 rounded-xl border border-slate-700/50 h-full">
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
                            {category.note && (
                                <p className="text-sm text-slate-400 mt-4">{category.note}</p>
                            )}
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
