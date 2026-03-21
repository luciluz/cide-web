'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SITE_META } from '@/lib/constants';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        setTimeout(() => {
            const el = document.querySelector(href);
            el?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                style={{
                    background: scrolled
                        ? 'rgba(242,236,216,0.92)'
                        : 'transparent',
                    backdropFilter: scrolled ? 'blur(16px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(92,35,9,0.12)' : 'none',
                }}
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#inicio"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
                        className="flex flex-col leading-none group"
                    >
                        <span
                            className="text-2xl md:text-3xl font-display font-light tracking-[0.18em] text-gradient-gold"
                            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.18em' }}
                        >
                            CIDE
                        </span>
                        <span
                            className="text-[9px] tracking-[0.22em] uppercase hidden md:block mt-0.5"
                            style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.22em', color: '#7A6955' }}
                        >
                            {SITE_META.location}
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                className="text-[11px] tracking-[0.2em] uppercase transition-colors duration-300"
                                style={{ fontFamily: 'var(--font-body)', color: '#7A6955' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#5C2309')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#7A6955')}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Desktop */}
                    <div className="hidden md:block">
                        <a
                            href="#cursos"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#cursos'); }}
                            className="text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300"
                            style={{
                                fontFamily: 'var(--font-body)',
                                borderColor: 'rgba(92,35,9,0.35)',
                                color: '#5C2309',
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(92,35,9,0.08)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                        >
                            Explorar Cursos
                        </a>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        className="flex flex-col gap-[5px] md:hidden cursor-pointer"
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            className="block w-6 h-px"
                            style={{ background: '#5C2309' }}
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                            className="block w-4 h-px"
                            style={{ background: 'rgba(92,35,9,0.5)' }}
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            className="block w-6 h-px"
                            style={{ background: '#5C2309' }}
                        />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Overlay Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="fixed inset-0 z-40 flex flex-col"
                        style={{ background: 'rgba(242,236,216,0.97)' }}
                    >
                        <div className="h-16" />

                        <nav className="flex flex-col items-center justify-center flex-1 gap-10 px-8">
                            {NAV_LINKS.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 16 }}
                                    transition={{ delay: i * 0.07 + 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                    className="text-4xl font-display font-light tracking-[0.12em] transition-colors duration-300 text-center"
                                    style={{ fontFamily: 'var(--font-display)', color: '#5C2309' }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            <motion.a
                                href="#cursos"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                onClick={(e) => { e.preventDefault(); handleNavClick('#cursos'); }}
                                className="mt-6 text-[11px] tracking-[0.25em] uppercase px-8 py-3 border"
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    borderColor: 'rgba(92,35,9,0.4)',
                                    color: '#5C2309',
                                }}
                            >
                                Explorar Cursos
                            </motion.a>
                        </nav>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.45 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-center text-[10px] tracking-[0.2em] uppercase pb-8"
                            style={{ fontFamily: 'var(--font-body)', color: '#7A6955' }}
                        >
                            {SITE_META.domain}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
