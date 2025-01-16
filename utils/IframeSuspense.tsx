import React, { useState, useEffect } from "react";

const IframeSuspense = ({ src, title }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.onload = () => setLoading(false);
    document.body.appendChild(iframe);

    return () => {
      document.body.removeChild(iframe);
    };
  }, [src]);

  if (loading) {
    throw new Promise((resolve) => {
      setTimeout(resolve, 1000); // Simulate loading delay
    });
  }

  return <iframe src={src} title={title} />;
};

export default IframeSuspense;
