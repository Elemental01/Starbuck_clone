import React, { useState, useEffect } from "react";

function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 3000);
  }, []);

  if (!showPreloader) {
    return null;
  }

  return <div id="preload"></div>;
}

export default Preloader;
