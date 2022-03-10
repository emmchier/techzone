import React from "react";
import { theme } from "../../../../styles/theme";
import Button from "../../atoms/buttons/button";
import Icon from "../../atoms/icon";
import Text from "../../atoms/text";
import { Content } from "./styles";

const Pager = () => {
  return (
    <Content>
      <Button
        ariaLabel="left pagination button"
        variant="icon"
        size="medium"
        disabled={true}
      >
        <Icon
          color={theme.color.neutral.grey300}
          iconType="chevron"
          direction="up"
        />
      </Button>
      <Text type="l1">
        Page <b>1 of 2</b>
      </Text>
      <Button ariaLabel="left pagination button" variant="icon" size="medium">
        <Icon iconType="chevron" />
      </Button>
    </Content>
  );
};

export default Pager;
