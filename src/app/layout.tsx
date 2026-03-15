import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

// ─────────────────────────────────────────────────────────────
// Fonts
// ─────────────────────────────────────────────────────────────

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

// ─────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'CIDE — Centro de Investigación para el Desarrollo Espiritual',
  description:
    'Facilitamos el desarrollo espiritual a través de la investigación y experimentación. Un referente desde el sur austral de Chile en meditación, conocimiento, creación y sanación.',
  keywords: [
    'desarrollo espiritual',
    'meditación',
    'investigación espiritual',
    'Chile',
    'sanación',
    'cursos espirituales',
    'CIDE',
  ],
  openGraph: {
    title: 'CIDE — Centro de Investigación para el Desarrollo Espiritual',
    description:
      'Un espacio de investigación, práctica y acompañamiento en el camino interior. Sur austral de Chile.',
    type: 'website',
    locale: 'es_CL',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─────────────────────────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="grain-overlay antialiased">
        {children}
      </body>
    </html>
  );
}
