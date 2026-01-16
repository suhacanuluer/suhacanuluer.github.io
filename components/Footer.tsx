'use client';

import { profileData } from '@/data/profile';

export default function Footer() {
    const { profile } = profileData;

    return (
        <footer id="contact" className="section border-t border-[var(--border-subtle)] relative pb-24">
            <div className="container-main">
                {/* Section Title */}
                <h2 className="text-sm font-mono text-[var(--text-muted)] mb-12">
                    contact
                </h2>

                <div className="h-2"></div>

                {/* Contact Content */}
                <p className="text-lg text-[var(--text-primary)] mb-8 whitespace-nowrap">
                    Open to discussing new opportunities and interesting projects.
                </p>

                <div className="h-2"></div>

                {/* Links - all on same line */}
                <div className="flex flex-wrap items-center gap-6">
                    <a
                        href={`mailto:${profile.email}`}
                        className="text-sm text-[var(--accent-primary)] hover:underline underline-offset-4"
                    >
                        {profile.email}
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

            {/* Fixed Copyright at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 py-6">
                <div className="container-main">
                    <p className="text-xs text-[var(--text-muted)] text-center">
                        © {new Date().getFullYear()} {profile.name}
                    </p>
                </div>
            </div>
        </footer>
    );
}
