/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config) => {
      // Esto evita errores con los módulos que solo funcionan en Node.js
      config.resolve.alias.canvas = false;
      config.resolve.alias.encoding = false;
      
      return config;
    },
  };
  
  export default nextConfig;