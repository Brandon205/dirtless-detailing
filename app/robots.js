export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/confirmation", "/privacy"],
        allow: "/"
      }
    ],
    sitemap: "https://www.dirtlessdetailing.com/sitemap.xml"
  };
}
