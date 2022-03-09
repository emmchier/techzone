import React from "react";
import RedeemButton from "../../../atoms/buttons/redeem-button";

import Card from "../card";
import { Content, ButtonContainer } from "./styles";

type ProductCardTypes = {
  id?: string;
  img?: string;
  alt?: string;
  name?: string;
  cost?: number;
  category?: string;
  isSkeleton?: boolean;
};

const ProductCard = ({
  id = "",
  img,
  alt = "",
  name = "",
  cost = 0,
  category = "",
  isSkeleton = false,
}: ProductCardTypes) => {
  return (
    <Content>
      <Card
        image={img}
        alt={alt}
        title={name}
        description={category}
        isSkeleton={isSkeleton}
      />
      <ButtonContainer isSkeleton={isSkeleton}>
        <RedeemButton id={id} cost={cost} />
      </ButtonContainer>
    </Content>
  );
};

export default ProductCard;
