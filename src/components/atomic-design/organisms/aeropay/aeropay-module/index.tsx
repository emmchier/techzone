import React from "react";

import Text from "../../../atoms/text";
import AeropayCard from "../aeropay-card";
import PointerOptions from "../aeropay-pointer-options";
import { Body, Content, Header } from "./styles";

const AeropayModule = ({ show, setShow }) => {
  return (
    <Content
      show={show && show}
      fade={show}
      onMouseLeave={() => setShow(false)}
    >
      <Header>
        <Text type="l1" color="dark" weight="medium">
          Add Balance
        </Text>
      </Header>
      <Body>
        <AeropayCard />
        <PointerOptions />
      </Body>
    </Content>
  );
};

export default AeropayModule;
