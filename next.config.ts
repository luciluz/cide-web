import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Desactiva la optimización de imágenes basada en servidor de Next.js.
  // Es obligatorio desactivarla para exportaciones puramente estáticas sin un servidor de imágenes dedicado.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;