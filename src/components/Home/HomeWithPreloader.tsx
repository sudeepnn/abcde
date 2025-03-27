import { useState, useEffect } from "react";
import Home from "./Home";
import Preloader from "./Preloader";

const HomeWithPreloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowPreloader(false), 6000); // 4s delay + 2s animation
  }, []);

  return (
    <div className="relative">
      <Home />

      {showPreloader && <Preloader />}
    </div>
  );
};

export default HomeWithPreloader;
