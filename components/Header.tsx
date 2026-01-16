'use client';

import { profileData } from '@/data/profile';
import { useRef, useCallback } from 'react';

export default function Header() {
    const { profile } = profileData;
    const clickCountRef = useRef(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleLogoClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        clickCountRef.current += 1;

        // Clear existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // If 5 clicks, redirect to old design
        if (clickCountRef.current >= 5) {
            clickCountRef.current = 0;
            window.location.href = '/old/index.html';
            return;
        }

        // Reset counter after 2 seconds of no clicks
        timeoutRef.current = setTimeout(() => {
            clickCountRef.current = 0;
        }, 2000);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border-subtle)]">
            <div className="container-main">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={handleLogoClick}
                        className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors select-none"
                    >
                        suhacan
                        <span className="text-[var(--accent-primary)]">.</span>
                    </a>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['about', 'experience', 'skills', 'contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu */}
                    <button className="md:hidden p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
