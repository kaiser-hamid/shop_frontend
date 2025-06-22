/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'picsum.photos',
            'images.unsplash.com',
            'res.cloudinary.com',
            'localhost',
            '127.0.0.1',
            'localhost:8000',
            '127.0.0.1:8000'
        ],
    },
};

export default nextConfig;
