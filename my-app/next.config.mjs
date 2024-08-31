/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.basePath ? process.env.basePath : "",
    assetPrefix: process.env.URL ? process.env.URL : undefined,

    images: {
        unoptimized: true, 
    },
};

export default nextConfig;
