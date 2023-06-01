import React, { useContext } from "react";
import { UserContext } from "../../../../../context";
import WavesMultiPattern from "../../../../ui/waves-multi-pattern";

import Icon from "../../../atoms/icon";
import Text from "../../../atoms/text";

import {
  BrandInfo,
  Content,
  InfoContent,
  UserInfo,
  WavesContent,
} from "./styles";

const AeropayCard = () => {
  const { user } = useContext<any>(UserContext);

  return (
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
            {user.name}
          </Text>
          <Text type="l2" weight="medium">
            07/23
          </Text>
        </UserInfo>
      </InfoContent>
      <WavesContent>
        <WavesMultiPattern />
      </WavesContent>
    </Content>
  );
};

export default AeropayCard;
