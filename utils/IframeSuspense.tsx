import React, { useState } from "react";

const IframeSuspense = ({ src, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <iframe src={src} title={title} onLoad={handleLoad} style={{ display: isLoading ? "none" : "block", width: "100%", height: "500px" }} />
    </div>
  );
};

export default IframeSuspense;
