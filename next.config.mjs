/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cv', 
        destination: 'https://drive.google.com/file/d/1XdBiJZclIiPWjkiNhE2fZK-mIj4fgoF5/view?usp=sharing', 
        permanent: true, },
       {
        source: '/resume', 
        destination: 'https://drive.google.com/file/d/1XdBiJZclIiPWjkiNhE2fZK-mIj4fgoF5/view?usp=sharing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
