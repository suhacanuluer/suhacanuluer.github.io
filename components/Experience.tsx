'use client';

import { profileData } from '@/data/profile';

export default function Experience() {
    const { experience } = profileData;

    return (
        <section id="experience" className="section">
            <div className="container-main">
                {/* Section Title */}
                <h2 className="text-sm font-mono text-[var(--text-muted)] mb-16">
                    experience
                </h2>

                <div className="h-2"></div>

                {/* Experience List */}
                <div className="space-y-24">
                    {experience.map((exp, index) => (
                        <article key={index} className="group">
                            {/* Company & Date Row */}
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                                <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                    {exp.company}
                                </h3>
                                <span className="text-sm text-[var(--text-muted)] font-mono">
                                    {exp.date}
                                </span>
                            </div>

                            {/* Role */}
                            <p className="text-[var(--text-secondary)] mb-5">
                                {exp.role} · {exp.location}
                            </p>

                            {/* Description */}
                            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                                {exp.description}
                            </p>

                            <div className="h-2"></div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2.5">
                                {exp.tech_stack.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="tag text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="h-4"></div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
