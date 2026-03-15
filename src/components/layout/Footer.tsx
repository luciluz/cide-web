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
                borderColor: 'rgba(201,169,110,0.1)',
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
                            className="text-[10px] tracking-[0.2em] uppercase text-[#A89E90] mb-4"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            {SITE_META.fullName}
                        </p>
                        <p
                            className="text-sm text-[#A89E90] leading-relaxed max-w-xs"
                            style={{ fontFamily: 'var(--font-body)' }}
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
                            className="text-[9px] tracking-[0.25em] uppercase text-[#C9A96E]/60 mb-5"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Navegación
                        </p>
                        <ul className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-[#A89E90] hover:text-[#C9A96E] transition-colors duration-300"
                                        style={{ fontFamily: 'var(--font-body)' }}
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
                            className="text-[9px] tracking-[0.25em] uppercase text-[#C9A96E]/60 mb-5"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Contacto
                        </p>
                        <div className="flex flex-col gap-2">
                            <a
                                href={`https://${SITE_META.domain}`}
                                className="text-sm text-[#A89E90] hover:text-[#C9A96E] transition-colors duration-300"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {SITE_META.domain}
                            </a>
                            <p
                                className="text-sm text-[#A89E90]"
                                style={{ fontFamily: 'var(--font-body)' }}
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
                    style={{ borderTop: '1px solid rgba(201,169,110,0.08)' }}
                >
                    <p
                        className="text-[10px] tracking-[0.15em] text-[#A89E90]/50"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        © {year} CIDE — Todos los derechos reservados
                    </p>
                    <p
                        className="text-[10px] tracking-[0.15em] text-[#A89E90]/30 italic"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Desde el sur del mundo, hacia adentro.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
