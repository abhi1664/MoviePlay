/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.tmdb.org']
    },
    typescript: {
        // ❌ ignoreDevErrors removed
        // ✔ ignoreBuildErrors is still valid
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
