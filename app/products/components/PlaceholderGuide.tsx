export default function PlaceholderGuide({ categoryName }: { categoryName: string }) {
  // If the category is "All", usually we don't show a guide, so return null
  if (categoryName === "All") return null;

  return (
    <div className="mt-16 bg-zinc-800 rounded-lg p-8 mb-8 text-center opacity-70">
      <h3 className="text-2xl font-bold text-white mb-2">{categoryName} Guide</h3>
      <p className="text-gray-400">Detailed tips and guides for {categoryName} are coming soon!</p>
    </div>
  );
}
