"use client";
import { useEffect, useState } from "react";
import { ChevronDown, ShoppingCart, Star, Filter } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import products from "../../utils/products.js";

// Categories - can easily be updated when needed
const categories = ["All", "Ceramic", "Equipment", "Exterior", "Interior", "Wheels", "Glass"];

export default function ProductsPageWrapper() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen text-gray-500">Loading...</div>}>
      <ProductsPage />
    </Suspense>
  );
}

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const searchParams = useSearchParams();

  const urlCategory = searchParams.get("category");

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  const filteredProducts = products.filter((product) => selectedCategory === "All" || product.category.includes(selectedCategory));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "featured") {
      return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    } else if (sortOption === "priceAsc") {
      return a.price - b.price;
    } else if (sortOption === "priceDesc") {
      return b.price - a.price;
    } else if (sortOption === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero section */}
      <div className="relative h-96 bg-zinc-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/assets/images/showcase/worktruckSunrise.jpg" alt="Auto detailing products" layout="fill" objectFit="cover" className="opacity-40" />
        </div>
        <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Professional Detailing Products</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            See some of the products and equipment we use, and what we recommend for you to keep your car as clean as the day you picked it up from us! Some
            links here are affiliate links, we may receive a small commission at no extra cost to you.
          </p>
        </div>
      </div>

      {/* Products section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category filter buttons */}
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, id) => (
              <button
                key={id}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md transition ${
                  selectedCategory === category ? "bg-amber-500 text-black font-medium" : "bg-zinc-800 hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar for sort options */}
          <div className="lg:w-64 space-y-6">
            {/* Mobile filter toggle */}
            <div className="lg:hidden mb-6">
              <button onClick={() => setShowFilters(!showFilters)} className="flex items-center space-x-2 bg-zinc-800 p-3 rounded-lg w-full">
                <Filter size={20} />
                <span>Sort Options</span>
                <ChevronDown size={16} className={`ml-auto transform ${showFilters ? "rotate-180" : ""}`} />
              </button>
            </div>

            <div className={`${showFilters ? "block" : "hidden"} lg:block bg-zinc-800 p-6 rounded-lg`}>
              <h3 className="text-lg font-medium mb-4">Sort By</h3>
              <div className="space-y-2">
                {[
                  { value: "featured", label: "Featured" },
                  { value: "priceAsc", label: "Price: Low to High" },
                  { value: "priceDesc", label: "Price: High to Low" },
                  { value: "rating", label: "Highest Rated" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortOption(option.value)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition ${
                      sortOption === option.value ? "bg-amber-500 text-black font-medium" : "hover:bg-zinc-700"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map((product, id) => (
                <div key={id} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl">
                  <div className="h-48 bg-white relative">
                    <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-full object-contain" />
                    {product.featured && (
                      <div className="absolute top-2 right-2 bg-[#fea41c] text-black px-2 py-1 rounded-md text-xs font-medium">Featured</div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-medium">{product.name}</h3>
                      <span className="font-semibold text-[#fea41c]">${product.price}</span>
                    </div>
                    <div className="flex items-center flex-wrap text-sm text-gray-300 mb-3 gap-2">
                      {product.category.map((cat, i) => (
                        <span className="bg-gray-700 px-2 py-1 rounded" key={i}>
                          {cat}
                        </span>
                      ))}
                      <div className="flex items-center ml-auto">
                        <Star size={16} className="text-[#fea41c] mr-1" fill="#fea41c" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#fea41c] hover:bg-[#e89210] text-black font-medium py-2 rounded-md flex items-center justify-center gap-2 transition-colors"
                    >
                      <ShoppingCart size={18} />
                      View on Amazon
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="bg-[#181b21] p-8 rounded-lg text-center">
                <p className="text-lg">No products found matching your criteria.</p>
                <button onClick={() => setSelectedCategory("All")} className="mt-4 text-[#fea41c] hover:underline">
                  View all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Ceramic Maintenance Section - only shows when "Ceramic" category is selected */}
      {selectedCategory === "Ceramic" && (
        <div className="mt-16 bg-zinc-800 rounded-lg p-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Ceramic Coating Maintenance Guide</h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
              Follow these steps to properly maintain your ceramic coating and keep your vehicle looking pristine without causing damage or scratches.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-3">Step 1: Pre-Wash Preparation</h3>
                <p className="text-gray-300 mb-4">
                  Before touching your vehicle, remove any heavy contamination like bugs, tar, or sap. This prevents dragging these contaminants across your
                  ceramic coating during the wash process, which could cause scratches or marring.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                    Bug Remover
                  </a>
                  <a href="#" className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                    Tar and Sap Remover
                  </a>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-3">Step 2: Wheel and Tire Cleaning</h3>
                <p className="text-gray-300 mb-4">
                  Clean your wheels and tires first to avoid splashing dirty water onto your freshly washed paint. Use a dedicated wheel brush to safely clean
                  intricate wheel designs without scratching the finish.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                    Wheel & Tire Cleaner
                  </a>
                  <a href="#" className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                    Wheel Brush
                  </a>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-3">Step 3: Rinseless Wash Application</h3>
                <p className="text-gray-300 mb-4">
                  Mix your Gyeon Eco Wash according to the manufacturer's instructions. This product serves as both a rinseless wash and waterless wash, making
                  it perfect for ceramic coating maintenance. Work panel by panel, using the proper technique to avoid introducing scratches.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                    Gyeon Eco Wash
                  </a>
                </div>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-3">Step 4: Drying Process</h3>
                <p className="text-gray-300 mb-4">
                  Use a high-quality drying towel to safely remove moisture without scratching your ceramic coating. If washing in direct sunlight, consider
                  using a dedicated drying aid to prevent streaking, as the Gyeon Eco Wash can be prone to streaking in hot conditions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                    Drying Towel
                  </a>
                  <a href="#" className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                    Drying Aid
                  </a>
                </div>
              </div>

              {/* Pro Tips */}
              <div className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="bg-amber-500 text-black px-2 py-1 rounded text-sm font-medium mr-3">PRO TIPS</span>
                  Additional Maintenance Tips
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Always work in shade when possible to prevent products from drying too quickly
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    If you need to work in the sun:
                  </li>
                  <li className="ml-8 list-disc">
                    Rinseless washes will dry but they don't leave water spots like traditional washes - you can wipe off any dried areas by getting it wet
                    again
                  </li>
                  <li className="ml-8 list-disc">Go panel by panel - you won't have to worry about areas drying at all!</li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Regular maintenance washing every 2-4 weeks will keep your ceramic coating performing at its best
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
