export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/confirmation", "/privacy"],
        allow: "/"
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
  };
}
