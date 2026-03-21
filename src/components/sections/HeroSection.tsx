'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
};

const wordFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
};

const subtitleFade = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 0.85 },
    },
};

const ctaFade = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 1.2 },
    },
};

const scrollBounce = {
    animate: {
        y: [0, 8, 0],
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
};

export default function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            id="inicio"
            ref={containerRef}
            className="relative w-full overflow-hidden"
            style={{ height: '100svh', minHeight: '600px', background: 'var(--cide-cream)' }}
        >
            {/* Subtle radial glow background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(92,35,9,0.05) 0%, transparent 70%)',
                }}
            />

            {/* Horizontal rule top accent */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="absolute top-0 left-0 right-0 h-px origin-left"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(92,35,9,0.2), transparent)' }}
            />

            {/* Main image — right side, parallaxed */}
            <motion.div
                style={{ y: imageY, opacity: imageOpacity }}
                className="absolute right-0 top-0 bottom-0 w-[55%] md:w-[48%] pointer-events-none"
            >
                {/* Gradient mask over image */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background:
                            'linear-gradient(to right, var(--cide-cream) 0%, transparent 35%), linear-gradient(to top, var(--cide-cream) 0%, transparent 25%)',
                    }}
                />
                <div className="relative h-full w-full">
                    <Image
                        src="/images/sanacion energetica_sanacion energetica1.png"
                        alt="Energía espiritual — CIDE"
                        fill
                        priority
                        className="object-cover object-center"
                        style={{ objectPosition: 'center top', mixBlendMode: 'multiply', opacity: 0.55 }}
                    />
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ y: contentY, opacity: contentOpacity }}
                className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto"
            >
                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, letterSpacing: '0.1em' }}
                    animate={{ opacity: 1, letterSpacing: '0.28em' }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                    className="text-[10px] uppercase mb-8 md:mb-10"
                    style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.28em', color: 'rgba(92,35,9,0.6)' }}
                >
                    Centro de Investigación &nbsp;·&nbsp; Sur Austral de Chile
                </motion.p>

                {/* Main heading — staggered words */}
                <motion.h1
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="font-display font-light leading-[1.0] mb-6 md:mb-8"
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3.2rem, 7.5vw, 7.5rem)',
                        color: '#5C2309',
                    }}
                >
                    <motion.span variants={wordFadeUp} className="block">Camino</motion.span>
                    <motion.span
                        variants={wordFadeUp}
                        className="block italic text-gradient-gold"
                        style={{ lineHeight: '1.05' }}
                    >
                        interior.
                    </motion.span>
                    <motion.span variants={wordFadeUp} className="block">Mirada</motion.span>
                    <motion.span variants={wordFadeUp} className="block">abierta.</motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={subtitleFade}
                    initial="hidden"
                    animate="visible"
                    className="max-w-md leading-relaxed mb-10 md:mb-12"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                        color: '#7A6955',
                    }}
                >
                    Investigación, práctica y acompañamiento en el camino espiritual.
                    Un referente desde el sur de Chile hacia el mundo.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={ctaFade}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row items-start gap-4"
                >
                    <a
                        href="#cursos"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#cursos')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group inline-flex items-center gap-3 px-7 py-3.5 text-[10px] tracking-[0.22em] uppercase transition-all duration-500"
                        style={{
                            fontFamily: 'var(--font-body)',
                            background: '#5C2309',
                            color: '#F2ECD8',
                        }}
                    >
                        Explorar Cursos
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                    <a
                        href="#nosotros"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-3 px-7 py-3.5 text-[10px] tracking-[0.22em] uppercase transition-all duration-500"
                        style={{
                            fontFamily: 'var(--font-body)',
                            border: '1px solid rgba(92,35,9,0.25)',
                            color: 'rgba(92,35,9,0.6)',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(92,35,9,0.5)';
                            (e.currentTarget as HTMLElement).style.color = '#5C2309';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(92,35,9,0.25)';
                            (e.currentTarget as HTMLElement).style.color = 'rgba(92,35,9,0.6)';
                        }}
                    >
                        Nuestro propósito
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                {...scrollBounce}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2 }}
            >
                <div
                    className="w-px h-10"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(92,35,9,0.5), transparent)',
                    }}
                />
                <p
                    className="text-[9px] tracking-[0.25em] uppercase rotate-0"
                    style={{ fontFamily: 'var(--font-body)', color: 'rgba(92,35,9,0.45)' }}
                >
                    Scroll
                </p>
            </motion.div>

            {/* Bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
                style={{
                    background: 'linear-gradient(to bottom, transparent, var(--cide-cream))',
                }}
            />
        </section>
    );
}
