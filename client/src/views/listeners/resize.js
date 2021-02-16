import { useState, useEffect } from "react";

function GetWindowSize() {
  const getSize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [windowSize, setSize] = useState(getSize());
  useEffect(() => {
    const onResize = () => {
      setSize(getSize());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return windowSize;
}

export default GetWindowSize;
