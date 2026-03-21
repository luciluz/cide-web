'use client';

import { motion } from 'framer-motion';
import { NAV_LINKS, SITE_META } from '@/lib/constants';

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.07, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }),
};

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            className="border-t"
            style={{
                borderColor: 'rgba(92,35,9,0.1)',
                background: 'var(--cide-dark)',
            }}
        >
            <div className="section-base">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16">
                    {/* Brand */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        custom={0}
                        variants={fadeUp}
                        className="md:col-span-1"
                    >
                        <p
                            className="text-4xl font-display font-light tracking-[0.18em] text-gradient-gold mb-3"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            CIDE
                        </p>
                        <p
                            className="text-[10px] tracking-[0.2em] uppercase mb-4"
                            style={{ fontFamily: 'var(--font-body)', color: '#7A6955' }}
                        >
                            {SITE_META.fullName}
                        </p>
                        <p
                            className="text-sm leading-relaxed max-w-xs"
                            style={{ fontFamily: 'var(--font-body)', color: '#7A6955' }}
                        >
                            {SITE_META.tagline}
                        </p>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        custom={1}
                        variants={fadeUp}
                    >
                        <p
                            className="text-[9px] tracking-[0.25em] uppercase mb-5"
                            style={{ fontFamily: 'var(--font-body)', color: 'rgba(92,35,9,0.5)' }}
                        >
                            Navegación
                        </p>
                        <ul className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm transition-colors duration-300"
                                        style={{ fontFamily: 'var(--font-body)', color: '#7A6955' }}
                                        onMouseEnter={e => (e.currentTarget.style.color = '#5C2309')}
                                        onMouseLeave={e => (e.currentTarget.style.color = '#7A6955')}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        custom={2}
                        variants={fadeUp}
                    >
                        <p
                            className="text-[9px] tracking-[0.25em] uppercase mb-5"
                            style={{ fontFamily: 'var(--font-body)', color: 'rgba(92,35,9,0.5)' }}
                        >
                            Contacto
                        </p>
                        <div className="flex flex-col gap-2">
                            <a
                                href={`https://${SITE_META.domain}`}
                                className="text-sm transition-colors duration-300"
                                style={{ fontFamily: 'var(--font-body)', color: '#7A6955' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#5C2309')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#7A6955')}
                            >
                                {SITE_META.domain}
                            </a>
                            <p
                                className="text-sm"
                                style={{ fontFamily: 'var(--font-body)', color: '#7A6955' }}
                            >
                                {SITE_META.location}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{ borderTop: '1px solid rgba(92,35,9,0.08)' }}
                >
                    <p
                        className="text-[10px] tracking-[0.15em]"
                        style={{ fontFamily: 'var(--font-body)', color: 'rgba(122,105,85,0.5)' }}
                    >
                        © {year} CIDE — Todos los derechos reservados
                    </p>
                    <p
                        className="text-[10px] tracking-[0.15em] italic"
                        style={{ fontFamily: 'var(--font-display)', color: 'rgba(122,105,85,0.35)' }}
                    >
                        Desde el sur del mundo, hacia adentro.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
