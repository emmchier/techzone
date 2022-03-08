import React from "react";
import RedeemButton from "../../../atoms/buttons/redeem-button";

import Card from "../card";
import { Content, ButtonContainer } from "./styles";

type ProductCardTypes = {
  img?: string;
  alt?: string;
  name?: string;
  category?: string;
  isSkeleton?: boolean;
};

const ProductCard = ({
  img,
  alt = "",
  name = "",
  category = "",
  isSkeleton = false,
}: ProductCardTypes) => (
  <Content>
    <Card
      image={img}
      alt={alt}
      title={name}
      description={category}
      isSkeleton={isSkeleton}
    />
    <ButtonContainer isSkeleton={isSkeleton}>
      <RedeemButton />
    </ButtonContainer>
  </Content>
);

export default ProductCard;
