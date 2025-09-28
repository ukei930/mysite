const withNextIntl = require('next-intl/plugin')('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    _next_intl_trailing_slash: 'false'
  },
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = withNextIntl(nextConfig);