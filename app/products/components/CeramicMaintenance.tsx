export default function CeramicMaintenance() {
  return (
    <div className="mt-16 bg-zinc-800 rounded-lg p-8 mb-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Ceramic Coating Maintenance Guide</h2>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Follow these steps to properly wash your vehicle after getting a ceramic coating. Or use this as a guide for our simple wash procedure that we
          recommend to everyone.
        </p>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="text-xl font-semibold text-white mb-3">Step 1: Pre-Wash Preparation</h3>
            <p className="text-gray-300 mb-4">
              Before touching your vehicle, remove any heavy contamination like bugs, tar, or sap. Typically a pressure washer is very helpful here but a hose
              can suffice if needed. This prevents dragging these contaminants across your paint.
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
              Clean your wheels and tires first to avoid splashing dirty water onto your freshly washed paint. Use a dedicated wheel brush and a pressure
              washer/hose to safely clean intricate wheel designs without scratching the finish.
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
              Mix your Gyeon Eco Wash according to the manufacturer's instructions. This product serves as both a rinseless wash and waterless wash, making it
              perfect for ceramic coating maintenance. Work panel by panel, using the proper technique to avoid introducing scratches.
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
              Use a high-quality drying towel to safely remove moisture without scratching your ceramic coating. If washing in direct sunlight, consider using a
              dedicated drying aid to prevent streaking, as the Gyeon Eco Wash can be prone to streaking in hot conditions.
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
              <span className="bg-accent text-black px-2 py-1 rounded text-sm font-medium mr-3">PRO TIPS</span>
              Additional Maintenance Tips
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Always work in shade when possible to prevent products from drying too quickly
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                If you need to work in the sun:
              </li>
              <li className="ml-8 list-disc">
                Rinseless washes will dry but they don't leave water spots like traditional washes - you can wipe off any dried areas by getting it wet again
              </li>
              <li className="ml-8 list-disc">Go panel by panel - you won't have to worry about areas drying at all!</li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Regular maintenance washing every 2-4 weeks will keep your ceramic coating performing at its best
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
