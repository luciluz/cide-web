import type { NavLink, Course, Resource } from '@/types';

// ─────────────────────────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Recursos', href: '#recursos' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Site Metadata
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_META = {
    name: 'CIDE',
    fullName: 'Centro de Investigación para el Desarrollo Espiritual',
    tagline: 'Investigación, práctica y acompañamiento en el camino interior.',
    domain: 'naturalezacreativa.cl',
    location: 'Sur Austral de Chile',
};

// ─────────────────────────────────────────────────────────────────────────────
// Courses (placeholder data)
// ─────────────────────────────────────────────────────────────────────────────

export const COURSES: Course[] = [
    {
        id: 'meditacion-situar',
        title: 'Meditación Situada',
        description:
            'Un viaje hacia el interior a través de prácticas contemplativas arraigadas en el contexto austral. Metodología que integra cuerpo, silencio y territorio.',
        category: 'Meditación',
        duration: '8 semanas',
        level: 'Introductorio',
        comingSoon: false,
    },
    {
        id: 'sanacion-sonido',
        title: 'Sanación con Sonido',
        description:
            'Exploración de las frecuencias sanadoras a través de cuencos tibetanos, voz y armonía. Un camino de integración entre cuerpo y espíritu.',
        category: 'Sonido',
        duration: '5 semanas',
        level: 'Introductorio',
        comingSoon: false,
    },
    {
        id: 'espiritualidad-ciencia',
        title: 'Espiritualidad y Ciencia',
        description:
            'Diálogo interdisciplinario entre tradiciones espirituales y neurociencia. Investigación situada desde el sur de Chile hacia el mundo.',
        category: 'Investigación',
        duration: '10 semanas',
        level: 'Intermedio',
        comingSoon: true,
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// Resources / Archive (placeholder data)
// ─────────────────────────────────────────────────────────────────────────────

export const RESOURCES: Resource[] = [
    {
        id: '01',
        title: 'La dimensión espiritual en la diversidad biológica y cultural',
        excerpt:
            'Una exploración de cómo la espiritualidad se manifiesta a través de la diversidad de formas de vida y expresión cultural en el planeta.',
        category: 'Investigación',
        date: 'Marzo 2026',
        readTime: '8 min',
        slug: 'dimension-espiritual-diversidad',
    },
    {
        id: '02',
        title: 'Meditación situada: El cuerpo como territorio de investigación',
        excerpt:
            'Reflexiones sobre la práctica meditativa como metodología de investigación encarnada, en diálogo con el pensamiento contemporáneo.',
        category: 'Artículo',
        date: 'Febrero 2026',
        readTime: '5 min',
        slug: 'meditacion-situada-cuerpo',
    },
    {
        id: '03',
        title: 'CIDE se integra a red internacional de investigación espiritual',
        excerpt:
            'El Centro inicia colaboraciones con instituciones de investigación en Europa y Latinoamérica para fortalecer el diálogo sur-norte.',
        category: 'Noticia',
        date: 'Enero 2026',
        readTime: '3 min',
        slug: 'red-internacional-investigacion',
    },
];
