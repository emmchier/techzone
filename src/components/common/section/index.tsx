import React from "react";
import Container from "../container";
import Content from "./styles";

interface SectionI {
  children: React.ReactNode;
  auto?: boolean;
  container?: string;
}

const Section = ({ auto = true, container = "fluid", children }: SectionI) => {
  return (
    <Content auto={auto}>
      <Container size={container}>{children}</Container>
    </Content>
  );
};

export default Section;
