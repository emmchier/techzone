import React from "react";

import Card from "../card";
import Content from "./styles";

type WalkthroughCardTypes = {
  img?: string;
  alt?: string;
  icon?: string;
  title?: string;
  description?: string;
};

const WalkthroughCard = ({
  img,
  alt = "",
  icon = "",
  title = "",
  description = "",
}: WalkthroughCardTypes) => (
  <Content>
    <Card
      image={img}
      alt={alt}
      icon={icon}
      title={title}
      description={description}
      backgroundImg={true}
    />
  </Content>
);

export default WalkthroughCard;
