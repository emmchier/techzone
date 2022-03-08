import React from "react";
import Content from "./styles";

const Button = ({
  children,
  ariaLabel = "",
  variant = "contained",
  size = "default",
  state = "",
  ...rest
}) => {
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
