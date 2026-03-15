'use client';

import { motion } from 'framer-motion';
import { RESOURCES } from '@/lib/constants';
import type { Resource } from '@/types';

const categoryColors: Record<Resource['category'], string> = {
    Artículo: 'rgba(201,169,110,0.7)',
    Investigación: 'rgba(180,180,255,0.6)',
    Noticia: 'rgba(120,200,160,0.6)',
    Reflexión: 'rgba(220,150,180,0.6)',
};

export default function ResourcesSection() {
    return (
        <section
            id="recursos"
            className="relative"
            style={{ background: 'var(--cide-black)' }}
        >
            {/* Top border */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.12), transparent)' }}
            />

            <div className="section-base">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1"
                    >
                        <p
                            className="text-[10px] tracking-[0.28em] uppercase text-[#C9A96E]/60 mb-4"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Archivo Vivo
                        </p>
                        <h2
                            className="font-display font-light text-[#F5F0E8] leading-tight"
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            }}
                        >
                            Investigación<br />
                            <em className="text-gradient-gold not-italic">y reflexión</em><br />
                            en movimiento.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="md:max-w-[300px]"
                    >
                        <p
                            className="text-sm text-[#A89E90] leading-loose mb-6"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Artículos, noticias y reflexiones desde el corazón de la investigación espiritual.
                            Un espacio vivo de conocimiento compartido.
                        </p>
                        <a
                            href="#recursos"
                            className="text-[10px] tracking-[0.2em] uppercase text-[#C9A96E]/70 hover:text-[#C9A96E] transition-colors duration-300 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Ver archivo completo <span>→</span>
                        </a>
                    </motion.div>
                </div>

                {/* Articles — editorial list */}
                <div className="flex flex-col">
                    {RESOURCES.map((resource, i) => (
                        <motion.article
                            key={resource.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative py-8 cursor-pointer"
                            style={{ borderBottom: '1px solid rgba(201,169,110,0.08)' }}
                        >
                            {/* Hover background */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{ background: 'rgba(201,169,110,0.025)' }}
                            />

                            <div className="relative grid grid-cols-12 gap-6 items-start">
                                {/* Number */}
                                <div className="col-span-1 hidden md:flex items-start pt-1">
                                    <span
                                        className="text-[11px] text-[#A89E90]/30"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {resource.id}
                                    </span>
                                </div>

                                {/* Category + Date */}
                                <div className="col-span-12 md:col-span-2 flex md:flex-col gap-3 md:gap-2">
                                    <span
                                        className="text-[9px] tracking-[0.18em] uppercase px-2 py-0.5 inline-block"
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            color: categoryColors[resource.category],
                                            background: `${categoryColors[resource.category].replace('0.6)', '0.08)').replace('0.7)', '0.08)')}`,
                                            opacity: 1,
                                        }}
                                    >
                                        {resource.category}
                                    </span>
                                    <span
                                        className="text-[10px] text-[#A89E90]/40"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {resource.date}
                                    </span>
                                </div>

                                {/* Title + Excerpt */}
                                <div className="col-span-12 md:col-span-7 flex flex-col gap-2">
                                    <h3
                                        className="font-display font-medium text-[#F5F0E8] leading-snug group-hover:text-[#C9A96E] transition-colors duration-400"
                                        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
                                    >
                                        {resource.title}
                                    </h3>
                                    <p
                                        className="text-[13px] text-[#A89E90] leading-relaxed"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {resource.excerpt}
                                    </p>
                                </div>

                                {/* Read time + arrow */}
                                <div className="col-span-12 md:col-span-2 flex md:flex-col items-center md:items-end justify-between md:justify-start gap-3 pt-1">
                                    <span
                                        className="text-[10px] text-[#A89E90]/40"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {resource.readTime} lectura
                                    </span>
                                    <span
                                        className="text-[#C9A96E]/40 group-hover:text-[#C9A96E] group-hover:translate-x-1 transition-all duration-300 text-sm"
                                    >
                                        →
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
