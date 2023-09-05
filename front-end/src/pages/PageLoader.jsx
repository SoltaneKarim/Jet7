"use client"
import React, { useEffect , useState } from 'react';
import CssImports from "../app/CssImports.jsx";
function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={`page-loader ${isLoading ? '' : 'loaded'}`}>
     
    </div>
  );
}

export default PageLoader;
