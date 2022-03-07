import React, { useEffect, useState } from "react";

import Button from "../button";
import Icon from "../icon";
import Content from "./styles";

const ScrollToTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isVisible && (
        <Content
          onClick={scrollToTop}
          aria-label="scroll to top"
          isShowing={isVisible}
        >
          <Button ariaLabel="arrow to top" variant="icon">
            <Icon iconType="arrow" direction="up" />
          </Button>
        </Content>
      )}
    </>
  );
};

export default ScrollToTop;
