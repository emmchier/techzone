import React from "react";

import Icon from "../../icon";
import Button from "../button";

const RedeemButton = () => {
  return (
    <Button ariaLabel="redeem product">
      Redeem for
      <Icon
        iconType="logoCircle"
        color="#FFFFFF"
        background="url(#paint0_linear_485_5621)"
      />
      12.500
    </Button>
  );
};

export default RedeemButton;
