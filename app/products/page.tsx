"use client";
import { useState } from "react";
import { ChevronDown, ShoppingCart, Star, Filter } from "lucide-react";

// Sample product data - can be easily replaced with real data later
const products = [
  {
    id: 1,
    name: "Premium Ceramic Coating",
    price: 129.99,
    category: "Exterior",
    rating: 4.8,
    description: "Long-lasting ceramic protection for your vehicle's paint with up to 5 years of hydrophobic properties.",
    featured: true
  },
  {
    id: 2,
    name: "Interior Detailing Kit",
    price: 89.99,
    category: "Interior",
    rating: 4.7,
    description: "Complete kit for restoring and protecting your vehicle's interior surfaces.",
    featured: true
  },
  {
    id: 3,
    name: "Wheel & Tire Cleaner",
    price: 24.99,
    category: "Wheels",
    rating: 4.5,
    description: "Professional-grade cleaner that removes brake dust and road grime from wheels and tires.",
    featured: false
  },
  {
    id: 4,
    name: "Microfiber Towel Set",
    price: 19.99,
    category: "Accessories",
    rating: 4.9,
    description: "Ultra-soft, lint-free microfiber towels for streak-free cleaning and drying.",
    featured: false
  },
  {
    id: 5,
    name: "Clay Bar Kit",
    price: 34.99,
    category: "Exterior",
    rating: 4.6,
    description: "Remove embedded contaminants from your paint for a glass-smooth finish.",
    featured: true
  },
  {
    id: 6,
    name: "Leather Conditioner",
    price: 27.99,
    category: "Interior",
    rating: 4.8,
    description: "Restore and protect leather surfaces while preventing cracking and UV damage.",
    featured: false
  },
  {
    id: 7,
    name: "Quick Detailer Spray",
    price: 18.99,
    category: "Exterior",
    rating: 4.7,
    description: "Perfect for spot cleaning and maintaining your vehicle between washes.",
    featured: false
  },
  {
    id: 8,
    name: "Glass Cleaner",
    price: 15.99,
    category: "Glass",
    rating: 4.8,
    description: "Streak-free formula for crystal clear windows and mirrors.",
    featured: false
  }
];

// Categories - can easily be updated when needed
const categories = ["All", "Exterior", "Interior", "Wheels", "Glass", "Accessories"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Tailwind colors - using slate instead of custom colors for better compatibility
  // bg-slate-900 is close to #07080b (main background)
  // bg-slate-800 is close to #181b21 (secondary background)
  // bg-amber-500 is close to #fea41c (accent color)

  const filteredProducts = products.filter((product) => selectedCategory === "All" || product.category === selectedCategory);

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
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero section */}
      <div className="relative h-64 bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/api/placeholder/1200/400" alt="Auto detailing products" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Professional Detailing Products</h1>
          <p className="text-lg text-gray-300 max-w-2xl">Everything you need to keep your vehicle looking showroom-ready</p>
        </div>
      </div>

      {/* Products section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category filter buttons */}
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md transition ${
                  selectedCategory === category ? "bg-amber-500 text-black font-medium" : "bg-slate-800 hover:bg-slate-700"
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
              <button onClick={() => setShowFilters(!showFilters)} className="flex items-center space-x-2 bg-slate-800 p-3 rounded-lg w-full">
                <Filter size={20} />
                <span>Sort Options</span>
                <ChevronDown size={16} className={`ml-auto transform ${showFilters ? "rotate-180" : ""}`} />
              </button>
            </div>

            <div className={`${showFilters ? "block" : "hidden"} lg:block bg-slate-800 p-6 rounded-lg`}>
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
                      sortOption === option.value ? "bg-amber-500 text-black font-medium" : "hover:bg-slate-700"
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
              {sortedProducts.map((product) => (
                <div key={product.id} className="bg-[#181b21] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl">
                  <div className="h-48 bg-gray-700 relative">
                    <img src={`/api/placeholder/400/300?text=${encodeURIComponent(product.name)}`} alt={product.name} className="w-full h-full object-cover" />
                    {product.featured && (
                      <div className="absolute top-2 right-2 bg-[#fea41c] text-black px-2 py-1 rounded-md text-xs font-medium">Featured</div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-medium">{product.name}</h3>
                      <span className="font-semibold text-[#fea41c]">${product.price}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300 mb-3">
                      <span className="bg-gray-700 px-2 py-1 rounded">{product.category}</span>
                      <div className="flex items-center ml-auto">
                        <Star size={16} className="text-[#fea41c] mr-1" fill="#fea41c" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                    <a
                      href="#"
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
    </div>
  );
}
