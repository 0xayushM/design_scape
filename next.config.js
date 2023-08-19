/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com','res.cloudinary.com']
    },
    experimental: {
        serverComponentsExternalPackages: ['clouddinary','graphql-request']
    },
    typescript:{
        ignoreBuildErrors: true,

    }
}

module.exports = nextConfig
