import React from "react";
import Text from "../../../atoms/text";
import Pager from "../../pager";
import { Container, Content } from "./styles";

const FilterFooter = () => {
  return (
    <Container>
      <Content>
        <Text type="l1">
          <b>16 of 32</b> products
        </Text>
        <Pager />
      </Content>
    </Container>
  );
};

export default FilterFooter;
