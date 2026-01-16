'use client';

import { profileData } from '@/data/profile';

export default function Hero() {
    const { profile } = profileData;

    return (
        <section className="min-h-screen flex items-center">
            <div className="container-main py-32">
                {/* Intro */}
                <p className="text-[var(--text-muted)] text-sm font-mono mb-6 animate-fadeIn opacity-0">
                    hey, I&apos;m
                </p>

                <div className="h-2"></div>

                {/* Name */}
                <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-4 animate-fadeIn delay-1 opacity-0" style={{ animationFillMode: 'forwards' }}>
                    {profile.name}
                </h1>

                <div className="h-2"></div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 animate-fadeIn delay-2 opacity-0" style={{ animationFillMode: 'forwards' }}>
                    {profile.title}
                </h2>

                {/* Bio */}
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-lg mb-12 animate-fadeIn delay-3 opacity-0" style={{ animationFillMode: 'forwards' }}>
                    {profile.bio_short}
                </p>

                <div className="h-2"></div>

                {/* CTA Links */}
                <div className="flex flex-wrap items-center gap-6 animate-fadeIn delay-4 opacity-0" style={{ animationFillMode: 'forwards' }}>
                    <a
                        href={`mailto:${profile.email}`}
                        className="text-sm text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                    >
                        Get in touch →
                    </a>
                    <a
                        href={profile.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={profile.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
