const withPWA = require('next-pwa')({
    dest: 'public',
    register: true
  })

  const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self';
    child-src example.com;
    style-src 'self' example.com;
    font-src 'self';  
  `

  const securityHeaders = [
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN'
    },
    {
      key: 'Referrer-Policy',
      value: 'strict-origin-when-cross-origin'
    },
    {
      key: 'Content-Security-Policy',
      value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
    }
  ]
  
  module.exports = withPWA({
    async headers() {
      return [
        {
          source: '/:path*',
          headers: securityHeaders,
        },
      ]
    },
  })
