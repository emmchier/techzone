import React, { useState } from "react";
import Button from "../buttons/button";
import Icon from "../icon";
import Text from "../text";
import { Container, Content, ToastInfo } from "./styles";

const Toast = ({ type = "success", message = "", isShowing = false }) => {
  return (
    <Container isShowing={isShowing}>
      <Content type={type}>
        <ToastInfo>
          <Icon
            iconType={type === "success" ? "success" : "error"}
            aria-label={type === "success" ? "success icon" : "error icon"}
          />
          <Text type="l1">{message}</Text>
        </ToastInfo>
        <Button variant="icon" ariaLabel="lalal">
          <Icon iconType="close" aria-label="close button" />
        </Button>
      </Content>
    </Container>
  );
};

export default Toast;
