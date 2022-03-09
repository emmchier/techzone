import React from "react";

import Content, { ButtonI } from "./styles";

const Button = ({
  children,
  ariaLabel = "",
  variant = "contained",
  size = "default",
  state = "",
  ...rest
}: ButtonI) => {
  return (
    <Content
      aria-label={ariaLabel}
      variant={variant}
      size={size}
      state={state}
      {...rest}
    >
      {children}
    </Content>
  );
};

export default Button;
