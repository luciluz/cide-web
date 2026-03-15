// ─────────────────────────────────────────────────────────────────────────────
// CIDE — Core Types
// ─────────────────────────────────────────────────────────────────────────────

export interface NavLink {
    label: string;
    href: string;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    category: string;
    duration: string;
    level: 'Introductorio' | 'Intermedio' | 'Avanzado';
    price?: number;
    image?: string;
    comingSoon?: boolean;
}

export interface Resource {
    id: string;
    title: string;
    excerpt: string;
    category: 'Artículo' | 'Investigación' | 'Noticia' | 'Reflexión';
    date: string;
    readTime: string;
    slug: string;
}

export interface SectionProps {
    className?: string;
}
