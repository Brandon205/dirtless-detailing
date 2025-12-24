// app/products/_components/CategoryManager.tsx
import CeramicGuide from "./CeramicMaintenance";
import PlaceholderGuide from "./PlaceholderGuide";

// If you create more specific guides later, import them here:
// import InteriorGuide from "./InteriorGuide";
// import ExteriorGuide from "./ExteriorGuide";

interface CategoryManagerProps {
  category: string;
}

export default function CategoryManager({ category }: CategoryManagerProps) {
  switch (category) {
    case "Ceramic Maintenance":
      return <CeramicGuide />;

    // Future cases:
    // case "Interior":
    //   return <InteriorGuide />;

    // case "Exterior":
    //   return <ExteriorGuide />;

    // Default case: Show nothing (null) or a generic placeholder for tabs you haven't built yet
    default:
      return <PlaceholderGuide categoryName={category} />;
  }
}
