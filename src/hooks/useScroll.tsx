import { useState, useEffect } from "react";

const useScroll = (threshold = 50) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const update = () =>
      window.scrollY >= threshold ? setIsFixed(true) : setIsFixed(false);

    window.addEventListener("scroll", update);
    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  return isFixed;
};

export default useScroll;
