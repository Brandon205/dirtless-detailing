import ProductsPage from "./components/ProductsPage";
import { Suspense } from "react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  return {
    alternates: {
      canonical: `${baseUrl}/products`
    }
  };
}

export default function ProductsPageWrapper() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen text-gray-500">Loading...</div>}>
      <ProductsPage />
    </Suspense>
  );
}
