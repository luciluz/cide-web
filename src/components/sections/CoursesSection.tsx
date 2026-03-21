'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { COURSES } from '@/lib/constants';

const levelColors: Record<string, string> = {
    Introductorio: 'rgba(92,35,9,0.10)',
    Intermedio: 'rgba(92,35,9,0.18)',
    Avanzado: 'rgba(92,35,9,0.27)',
};

export default function CoursesSection() {
    return (
        <section
            id="cursos"
            className="relative"
            style={{ background: 'var(--cide-cream)' }}
        >
            {/* Top border */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(92,35,9,0.1), transparent)' }}
            />

            <div className="section-base">
                {/* Header */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p
                            className="text-[10px] tracking-[0.28em] uppercase mb-4"
                            style={{ fontFamily: 'var(--font-body)', color: 'rgba(92,35,9,0.55)' }}
                        >
                            Formación
                        </p>
                        <h2
                            className="font-display font-light leading-tight"
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                                color: '#5C2309',
                            }}
                        >
                            Cursos de<br />
                            <em className="text-gradient-gold not-italic">desarrollo</em><br />
                            espiritual.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-end"
                    >
                        <p
                            className="text-sm leading-loose mb-6"
                            style={{ fontFamily: 'var(--font-body)', color: '#7A6955' }}
                        >
                            Programas diseñados desde la investigación situada, integrando práctica,
                            reflexión y acompañamiento personalizado en cada etapa del proceso.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative meditator image — background */}
                <div className="relative">
                    <div
                        className="absolute -top-10 right-0 w-48 md:w-64 h-64 md:h-96 pointer-events-none -z-0 opacity-10"
                    >
                        <Image
                            src="/images/canto sanador_canto sanador 1.png"
                            alt=""
                            fill
                            className="object-contain object-right-top"
                            style={{ mixBlendMode: 'multiply' }}
                        />
                    </div>

                    {/* Course cards grid */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {COURSES.map((course, i) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative flex flex-col border cursor-pointer"
                                style={{
                                    borderColor: 'rgba(92,35,9,0.12)',
                                    background: 'rgba(92,35,9,0.02)',
                                }}
                            >
                                {/* Hover overlay */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ background: 'rgba(92,35,9,0.03)' }}
                                />

                                <div className="p-7 flex flex-col flex-1 gap-5">
                                    {/* Top row: category + coming soon badge */}
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="text-[10px] tracking-[0.2em] uppercase"
                                            style={{ fontFamily: 'var(--font-body)', color: 'rgba(92,35,9,0.45)' }}
                                        >
                                            {course.category}
                                        </span>
                                        {course.comingSoon && (
                                            <span
                                                className="text-[8px] tracking-[0.15em] uppercase px-2 py-0.5 border"
                                                style={{
                                                    borderColor: 'rgba(92,35,9,0.25)',
                                                    color: 'rgba(92,35,9,0.55)',
                                                    fontFamily: 'var(--font-body)',
                                                }}
                                            >
                                                Próximamente
                                            </span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="font-display font-medium leading-tight transition-colors duration-400"
                                        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', color: '#5C2309' }}
                                        onMouseEnter={e => (e.currentTarget.style.color = '#8C4A20')}
                                        onMouseLeave={e => (e.currentTarget.style.color = '#5C2309')}
                                    >
                                        {course.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-[13px] leading-loose flex-1"
                                        style={{ fontFamily: 'var(--font-body)', color: '#7A6955' }}
                                    >
                                        {course.description}
                                    </p>

                                    {/* Bottom meta */}
                                    <div
                                        className="flex items-center justify-between pt-5 mt-auto"
                                        style={{ borderTop: '1px solid rgba(92,35,9,0.08)' }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="text-[10px] px-2 py-0.5"
                                                style={{
                                                    fontFamily: 'var(--font-body)',
                                                    background: levelColors[course.level] || levelColors.Introductorio,
                                                    color: 'rgba(92,35,9,0.8)',
                                                }}
                                            >
                                                {course.level}
                                            </span>
                                            <span
                                                className="text-[10px]"
                                                style={{ fontFamily: 'var(--font-body)', color: 'rgba(122,105,85,0.6)' }}
                                            >
                                                {course.duration}
                                            </span>
                                        </div>

                                        <span
                                            className="text-[11px] group-hover:translate-x-1 transition-all duration-300"
                                            style={{ fontFamily: 'var(--font-body)', color: 'rgba(92,35,9,0.5)' }}
                                        >
                                            →
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-12 flex justify-center"
                    >
                        <a
                            href="#cursos"
                            className="text-[10px] tracking-[0.22em] uppercase px-8 py-3.5 border transition-all duration-400"
                            style={{
                                fontFamily: 'var(--font-body)',
                                borderColor: 'rgba(92,35,9,0.28)',
                                color: '#5C2309',
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(92,35,9,0.06)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                        >
                            Ver todos los cursos
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
