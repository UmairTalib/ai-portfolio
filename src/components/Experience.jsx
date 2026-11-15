import React from 'react';
import { GraduationCap, Briefcase, Users, Microscope, Code2, Award, Brain } from 'lucide-react';

// Same entries and dates as the CV (November 2026); current entries first,
// then by end date, newest first.
const timeline = [
    {
        icon: <Briefcase className="w-5 h-5" />,
        title: 'Software Engineer, AI Product (part-time)',
        org: 'ATTEC UG (haftungsbeschränkt), Siegen',
        year: '06/2026 – present',
        desc: "I'm the only developer of an AI platform that aims to automate public-funding workflows for German SMEs and the funding experts who advise them. Its first stage, finding the programmes that fit a company, already works. I write the specs, AI coding agents implement, and I review every change, backed by about 3,700 automated tests and CI.",
        active: true,
    },
    {
        icon: <Users className="w-5 h-5" />,
        title: 'Student Research Assistant (WHB), Full-Stack Development (part-time)',
        org: 'University of Siegen, research project FUSION',
        year: '07/2026 – present',
        desc: "I'm developing the FUSION toolbox, an AI-assisted planning tool for municipal citizen participation: it recommends participation formats and turns the choice into a roadmap with budget, tasks and calendar. It is built with AI coding agents in a spec, plan, build and review cycle, with about 9,000 automated tests and CI.",
        active: true,
    },
    {
        icon: <GraduationCap className="w-5 h-5" />,
        title: 'M.Sc. Computer Science',
        org: 'University of Siegen',
        year: '10/2023 – present',
        desc: 'Current average 2.1 (German scale, 1.0 is best).',
        active: true,
    },
    {
        icon: <Microscope className="w-5 h-5" />,
        title: 'Research project (Project Work, grade 1.0)',
        org: 'University of Siegen, Chair for Embedded Systems',
        year: '04/2025 – 03/2026',
        desc: 'Screening for elevated depressive symptoms from clinical interview recordings, with speech and text models. A paper from this project, on its diarization pipeline, was published by IEEE (CoDIT 2026).',
        active: false,
    },
    {
        icon: <Code2 className="w-5 h-5" />,
        title: 'Software Engineer',
        org: 'ZweiDevs',
        year: '02/2022 – 09/2023',
        desc: 'Built React and Next.js front ends and Node.js and Express back ends for several projects, including an EdTech platform with Stripe payments, JWT-based login and role-based access, deployed on AWS (EC2, S3).',
        active: false,
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: 'B.Sc. (Hons) Computer Science',
        org: 'University of Central Punjab, Lahore',
        year: '10/2017 – 03/2022',
        desc: 'Final-year project: multi-level classification of hate speech in Urdu and Roman Urdu, in a team of four.',
        active: false,
    },
    {
        icon: <Brain className="w-5 h-5" />,
        title: 'Artificial Intelligence course',
        org: 'Samsung Innovation Campus, Lahore',
        year: '10/2021 – 12/2021',
        desc: "Further training alongside my bachelor's degree.",
        active: false,
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-[#0f1623]/50">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                    <span className="text-teal-400 font-mono">04.</span> Experience & Education
                </h2>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-500/20 before:to-transparent">

                    {timeline.map((item) => (
                        <div key={item.title} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border ${item.active ? 'border-teal-500 bg-teal-500/10 text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.5)]' : 'border-slate-700 bg-slate-900 text-slate-500'} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-500 group-hover:scale-110`}>
                                {item.icon}
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                                    <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2 py-1 rounded whitespace-nowrap">{item.year}</span>
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
