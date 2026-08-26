import ProductsPage from "./components/ProductsPage";
import { Suspense } from "react";

export default function ProductsPageWrapper() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen text-gray-500">Loading...</div>}>
      <ProductsPage />
    </Suspense>
  );
}
