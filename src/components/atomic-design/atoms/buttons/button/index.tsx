import React from "react";

import Content from "./styles";

interface ButtonI {
  children: React.ReactNode;
  size?: string;
  state?: string | boolean;
  variant?: string;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Button = ({
  children,
  ariaLabel = "",
  variant = "contained",
  size = "default",
  state = "",
  onClick = () => {},
  disabled = false,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: ButtonI) => {
  return (
    <Content
      aria-label={ariaLabel}
      variant={variant}
      size={size}
      state={state}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Content>
  );
};

export default Button;
