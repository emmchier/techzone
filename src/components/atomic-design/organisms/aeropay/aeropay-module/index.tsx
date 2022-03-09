import React, { useContext, useState } from "react";

import { postPoints } from "../../../../../api/service";
import { UserContext } from "../../../../../context";
import { pointerOptions } from "../../../../../domain/pointer-options";
import { UserType } from "../../../../../interfaces";
import Button from "../../../atoms/buttons/button";
import Icon from "../../../atoms/icon";
import Text from "../../../atoms/text";
import AeropayCard from "../aeropay-card";
import PointerOptions from "../aeropay-pointer-options";
import { Body, Content, Header, PointOptions } from "./styles";

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
