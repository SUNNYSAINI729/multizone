/** @type {import('next').NextConfig} */
const SDS_URL = "http://localhost:3001";
const nextConfig = {
    async rewrites() {
        return {
            afterFiles: [
                {
                    source: '/:path*',
                    destination: `/:path*`,
                },
                // {
                //     source: '/blog',
                //     destination: `${SDS_URL}/blog`,
                // },
                {
                    source: '/blog/:path*',
                    destination: `${SDS_URL}/blog/:path*`,
                },
            ],
        };
    },
}

module.exports = nextConfig
