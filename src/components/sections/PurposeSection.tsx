'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const pillars = [
    {
        number: '01',
        title: 'Propósito',
        text: 'Facilitar el desarrollo espiritual a través de la investigación y experimentación, generando conocimiento que integra la dimensión espiritual en la diversidad biológica, corporal, psicológica, cultural y social.',
    },
    {
        number: '02',
        title: 'Visión',
        text: 'Constituir desde el sur austral de Chile un referente local, nacional e internacional en la facilitación del desarrollo espiritual, articulando investigación, práctica, formación y acompañamiento.',
    },
    {
        number: '03',
        title: 'Misión',
        text: 'Articular la indagación de la experiencia interior con el estudio de los contextos socioculturales y biológicos, mediante metodologías que integran práctica, reflexión e investigación situada.',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const pillarVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
};

export default function PurposeSection() {
    return (
        <section
            id="nosotros"
            className="relative overflow-hidden"
            style={{ background: 'var(--cide-black)' }}
        >
            {/* Subtle top border accent */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.15), transparent)' }}
            />

            <div className="section-base">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p
                            className="text-[10px] tracking-[0.28em] uppercase text-[#C9A96E]/60 mb-4"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Quiénes somos
                        </p>
                        <h2
                            className="font-display font-light text-[#F5F0E8] leading-tight"
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            }}
                        >
                            Un espacio para<br />
                            <em className="text-gradient-gold not-italic">la experiencia</em><br />
                            interior.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="md:max-w-[340px]"
                    >
                        <p
                            className="text-sm text-[#A89E90] leading-loose"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Desde el sur austral de Chile, el CIDE articula investigación y
                            práctica espiritual en un diálogo activo con diversas tradiciones
                            y disciplinas del conocimiento humano.
                        </p>
                    </motion.div>
                </div>

                {/* Main grid: pillars + image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Pillars */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="flex flex-col gap-12"
                    >
                        {pillars.map((pillar) => (
                            <motion.div
                                key={pillar.number}
                                variants={pillarVariant}
                                className="group flex gap-7"
                            >
                                {/* Number */}
                                <span
                                    className="text-[10px] tracking-[0.15em] text-[#C9A96E]/40 mt-1 flex-shrink-0 w-6"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {pillar.number}
                                </span>

                                <div className="flex flex-col gap-3">
                                    {/* Divider */}
                                    <div
                                        className="h-px w-10 transition-all duration-500 group-hover:w-16"
                                        style={{ background: 'rgba(201,169,110,0.4)' }}
                                    />
                                    <h3
                                        className="font-display font-medium text-[#F5F0E8] text-xl md:text-2xl"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {pillar.title}
                                    </h3>
                                    <p
                                        className="text-sm text-[#A89E90] leading-loose"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {pillar.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Image — Tibetan bowl */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Glow behind image */}
                        <div
                            className="absolute inset-0 -z-10 rounded-full blur-3xl scale-75"
                            style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)' }}
                        />

                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <Image
                                src="/images/sanacion con sonido_sanacion con sonido 1.png"
                                alt="Cuenco tibetano — Sanación con sonido"
                                fill
                                className="object-contain"
                                style={{ mixBlendMode: 'luminosity' }}
                            />
                            {/* Vignette rim */}
                            <div
                                className="absolute inset-0 rounded-full pointer-events-none"
                                style={{
                                    boxShadow: 'inset 0 0 60px 40px var(--cide-black)',
                                }}
                            />
                        </div>

                        {/* Floating quote */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute -bottom-4 -left-4 md:-left-10 bg-[#111111] border border-[rgba(201,169,110,0.1)] p-5 max-w-[220px]"
                        >
                            <p
                                className="text-sm font-display italic text-[#C9A96E]/80 leading-snug"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                &ldquo;Prosperidad integral<br />de la vida en el planeta.&rdquo;
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
