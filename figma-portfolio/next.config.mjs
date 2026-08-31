
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredBy: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.imgur.com", pathname: "/**" },
      { protocol: "https", hostname: "imgur.com", pathname: "/**" },
      { protocol: "https", hostname: "countdown-timer.vercel.app", pathname: "/**" },
      { protocol: "https", hostname: "giaic-student-card.vercel.app", pathname: "/**" },
      { protocol: "https", hostname: "weather-widget.vercel.app", pathname: "/**" },
      { protocol: "https", hostname: "birthday-wish-app.vercel.app", pathname: "/**" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
