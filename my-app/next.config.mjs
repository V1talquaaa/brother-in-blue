/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.basePath ? process.env.basePath : "",
    assetPrefix: process.env.URL? process.env.URL : undefined,
};

export default nextConfig;
