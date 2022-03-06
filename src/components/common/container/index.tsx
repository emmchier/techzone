import React from "react";
import Content from "./styles";

interface ContainerI {
  children: React.ReactNode;
  size?: string;
}

const Container = ({ children, size = "sm" }: ContainerI) => (
  <Content size={size}>{children}</Content>
);

export default Container;
