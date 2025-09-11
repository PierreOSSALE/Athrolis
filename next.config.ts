// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // autoriser les images de Supabase Storage public
      { protocol: "https", hostname: "**.supabase.co", pathname: "/storage/v1/object/**" },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
};
export default nextConfig;
