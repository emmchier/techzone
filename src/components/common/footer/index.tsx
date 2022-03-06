import React, { useState } from "react";
import { theme } from "../../../styles/theme";
import Button from "../../atomic-design/atoms/button";
import Icon from "../../atomic-design/atoms/icon";
import Container from "../container";
import Content from "./styles";

const Footer = () => {
  const [hover, setHover] = useState(false);

  return (
    <Content>
      <Container>
        <a
          href="https://github.com/emmchier/challenge-aerolab"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            ariaLabel="link to github repository"
            variant="text"
          >
            <Icon
              iconType="github"
              color={
                hover === true
                  ? "url(#paint0_linear_4563_808)"
                  : theme.color.neutral.grey500
              }
              background={hover === true ? "" : "#FFFFFF"}
            />
            View this repository
          </Button>
        </a>
      </Container>
    </Content>
  );
};

export default Footer;
