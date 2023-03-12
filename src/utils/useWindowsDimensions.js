import { useEffect, useState } from "react";
import getWindowsDimensions from "./getWindowsDimensions";

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowsDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowsDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}