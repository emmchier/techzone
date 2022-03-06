import React from "react";
import { Paragraph } from "./styles";

type TextI = {
  children: React.ReactNode;
  type?: string;
  weight?: string;
  cap?: string;
  color?: string;
};

const Text = ({
  children,
  type = "l1",
  weight = "medium",
  cap = "default",
  color = "light",
}: TextI) => (
  <Paragraph type={type} weight={weight} cap={cap} color={color}>
    {children}
  </Paragraph>
);

export default Text;
