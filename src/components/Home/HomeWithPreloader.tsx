import { useState, useEffect } from "react";
import Home from "./Home";
import Preloader from "./Preloader";

const HomeWithPreloader = () => {
  const [showPreloader, setShowPreloader] = useState(
    !localStorage.getItem("hasVisited")
  );

  useEffect(() => {
    if (showPreloader) {
      setTimeout(() => {
        setShowPreloader(false);
        localStorage.setItem("hasVisited", "true");
      }, 6000); // 4s delay + 2s animation
    }
  }, [showPreloader]);

  return (
    <div className="relative">
      <Home />
      {showPreloader && <Preloader />}
    </div>
  );
};

export default HomeWithPreloader;
