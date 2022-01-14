import { useState, useEffect } from "react";

const useDevice = () => {
  const [device, setDevice] = useState<null | "mobile" | "desktop">(null);

  const checkViewport = () => {
    document.body.scrollWidth <= 768
      ? setDevice("mobile")
      : setDevice("desktop");
  };

  useEffect(() => {
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return device;
};

export { useDevice };
