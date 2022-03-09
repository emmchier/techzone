import React, { useContext } from "react";
import { postPoints } from "../../../../../api/service";
import { UserContext } from "../../../../../context";
import { UserType } from "../../../../../interfaces";
import Button from "../../../atoms/buttons/button";
import Icon from "../../../atoms/icon";
import Text from "../../../atoms/text";
import AeropayCard from "../aeropay-card";
import { Body, Content, Header, PointOptions } from "./styles";

const AeropayModule = ({ show, setShow }) => {
  const { user, setUser } = useContext(UserContext) as UserType;

  const handlePoints = (newPoints: number) => {
    postPoints(newPoints);
    setUser({ ...user, points: user.points + newPoints });
  };

  return (
    <Content
      show={show && show}
      fade={show}
      onMouseLeave={() => setShow(false)}
    >
      <Header>
        <Text type="l1" color="dark" weight="medium">
          Add Balance
        </Text>
      </Header>
      <Body>
        <AeropayCard />
        <PointOptions>
          <li>
            <Button
              onClick={() => handlePoints(1000)}
              ariaLabel="add 1000 points"
              size="small"
              state="unselected"
            >
              <span>1000</span>
            </Button>
          </li>
          <li>
            <Button ariaLabel="add 5000 points" size="small" state="selected">
              <span>5000</span>
            </Button>
          </li>
          <li>
            <Button ariaLabel="add 7500 points" size="small" state="unselected">
              <span>7500</span>
            </Button>
          </li>
        </PointOptions>
        <Button ariaLabel="redeem product">
          <Icon
            iconType="logoCircle"
            color="#FFFFFF"
            background="url(#paint0_linear_485_5621)"
          />
          Add Points
        </Button>
      </Body>
    </Content>
  );
};

export default AeropayModule;
