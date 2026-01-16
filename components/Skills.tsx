'use client';

import { profileData } from '@/data/profile';

export default function Skills() {
    const { skills } = profileData;

    const skillCategories = [
        { label: 'languages', skills: skills.languages },
        { label: 'backend', skills: skills.backend },
        { label: 'databases', skills: skills.databases },
        { label: 'infrastructure', skills: skills.infrastructure },
        { label: 'architecture', skills: skills.architecture },
    ];

    return (
        <section id="skills" className="section">
            <div className="container-main">
                {/* Section Title */}
                <h2 className="text-sm font-mono text-[var(--text-muted)] mb-16">
                    skills
                </h2>

                <div className="h-2"></div>

                {/* Skills Grid */}
                <div className="space-y-14">
                    {skillCategories.map((category, index) => (
                        <div key={index}>
                            <h3 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-5">
                                {category.label}
                            </h3>
                            <div className="h-1"></div>
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="tag"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="h-2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
