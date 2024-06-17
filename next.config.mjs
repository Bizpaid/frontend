/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://api.bizpaid.ai/:path*/", // Proxy to Backend
            },
        ];
    },
};

export default nextConfig;
