import { hostname } from 'os';

/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        
        // domains: ['https://img.daisyui.com'],
        remotePatterns:[
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    },
};

export default nextConfig;
