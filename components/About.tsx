'use client';

import { profileData } from '@/data/profile';

export default function About() {
    const { profile } = profileData;

    return (
        <section id="about" className="section">
            <div className="container-main">
                {/* Section Title */}
                <h2 className="text-sm font-mono text-[var(--text-muted)] mb-12">
                    about
                </h2>

                <div className="h-2"></div>

                {/* About Content */}
                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-[var(--text-primary)] leading-relaxed">
                        {profile.about_me}
                    </p>

                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        Currently based in {profile.location}, I focus on building systems that can handle
                        scale while maintaining reliability and clean architecture.
                    </p>
                </div>
            </div>
        </section>
    );
}
