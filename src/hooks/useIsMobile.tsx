import { useEffect, useState } from "react";

const useIsMobile = (media = "mobile") => {
  const breakpoints = {
    smallMobile: 479,
    mobile: 767,
    tablet: 991,
  };
  const isMobileView = () => {
    if (typeof window == "undefined") {
      return false;
    } else {
      return window.innerWidth <= breakpoints[media];
    }
  };

  const [isMobile, setIsMobile] = useState(isMobileView());

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(isMobileView());

    window.addEventListener("resize", updateIsMobile);
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
