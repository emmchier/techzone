import React from "react";

import Icon from "../../../atoms/icon";
import Text from "../../../atoms/text";

import AeropayCardPattern from "../aeropay-card-pattern";

import {
  BrandInfo,
  Content,
  InfoContent,
  UserInfo,
  WavesContent,
} from "./styles";

const AeropayCard = () => (
  <Content>
    <InfoContent>
      <BrandInfo>
        <Text type="l1" weight="bold">
          Aerocard
        </Text>
        <Icon iconType="logoCircle" color="#FFFFFF" background="#252F3D" />
      </BrandInfo>
      <UserInfo>
        <Text type="l2" weight="medium">
          John Kite
        </Text>
        <Text type="l2" weight="medium">
          07/23
        </Text>
      </UserInfo>
    </InfoContent>
    <WavesContent>
      <AeropayCardPattern />
    </WavesContent>
  </Content>
);

export default AeropayCard;
