import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    distDir: 'out',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
    /* config options here */

};

export default nextConfig;
