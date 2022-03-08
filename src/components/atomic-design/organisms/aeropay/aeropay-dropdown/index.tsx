import React, { useState } from "react";
import Button from "../../../atoms/buttons/button";

import Icon from "../../../atoms/icon";
import AeropayModule from "../aeropay-module";

import { Container, MenuContent, Content, ArrowContainer } from "./styles";

const AeropayDropdown = ({ isSkeleton = false }) => {
  const [show, setShow] = useState(false);

  return (
    <Container
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
    >
      <Content isSkeleton={isSkeleton}>
        <Button
          ariaLabel="user points counter"
          variant="outlined"
          size="medium"
        >
          <Icon iconType="logoCircle" />
          <b>10.000</b>
          <ArrowContainer>
            <Icon iconType="chevron" direction={show ? "right" : "left"} />
          </ArrowContainer>
        </Button>
      </Content>

      <MenuContent
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
      >
        <AeropayModule show={show} setShow={setShow} />
      </MenuContent>
    </Container>
  );
};

export default AeropayDropdown;
