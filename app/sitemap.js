export default function sitemap() {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date("October 20, 2024 12:00:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date("October 20, 2024 12:00:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date("October 20, 2024 12:00:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/ceramic-coating`,
      lastModified: new Date("June 2, 2024 10:05:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/exterior`,
      lastModified: new Date("October 20, 2024 12:00:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/recreational`,
      lastModified: new Date("June 4, 2024 12:24:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/exterior-correct`,
      lastModified: new Date("October 20, 2024 12:00:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/exterior-seal`,
      lastModified: new Date("October 20, 2024 12:00:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/interior`,
      lastModified: new Date("October 20, 2024 12:00:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/interior-spill`,
      lastModified: new Date("October 20, 2024 12:00:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/interior-swift`,
      lastModified: new Date("October 20, 2024 12:00:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery/interior`,
      lastModified: new Date("October 20, 2024 12:00:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery/exterior`,
      lastModified: new Date("October 20, 2024 12:00:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery/seal`,
      lastModified: new Date("October 20, 2024 12:00:00")
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery/correct`,
      lastModified: new Date("October 20, 2024 12:00:00")
    }
  ];
}
