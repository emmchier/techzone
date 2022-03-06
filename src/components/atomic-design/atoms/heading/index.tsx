import React from "react";
import {
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
  Title6,
  Content,
} from "./styles";

type HeadingI = {
  children: React.ReactNode;
  type?: string;
  variant?: string;
};

const Heading = ({ children, type = "l2", variant = "h3" }: HeadingI) => {
  const setHeading = () => {
    switch (variant) {
      case "h1":
        return <Title1>{children}</Title1>;
      case "h2":
        return <Title2>{children}</Title2>;
      case "h3":
        return <Title3>{children}</Title3>;
      case "h4":
        return <Title4>{children}</Title4>;
      case "h5":
        return <Title5>{children}</Title5>;
      case "h6":
        return <Title6>{children}</Title6>;
      default:
        return <Title3>{children}</Title3>;
    }
  };
  return <Content type={type}>{setHeading()}</Content>;
};

export default Heading;
