import React, { Suspense, useState } from "react";

const IFrameFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-100">
    <h1 className="text-gray-900 text-lg ml-2">Loading...</h1>
  </div>
);

export default function IFrameSuspense({ src, title, classes = "" }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Suspense fallback={IFrameFallback()}>
      <iframe src={src} title={title} className={`relative ${classes}`} loading="lazy" onLoad={() => setIsLoading(false)} />
    </Suspense>
  );
}
