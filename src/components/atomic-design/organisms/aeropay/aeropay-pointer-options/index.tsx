import React, { useContext, useState } from "react";

import { postPoints } from "../../../../../api/service";
import { ToastContext, UserContext } from "../../../../../context";
import { pointerOptions } from "../../../../../domain/pointer-options";
import { showCustomToast } from "../../../../../helpers";
import { ToastType, UserType } from "../../../../../interfaces";
import Button from "../../../atoms/buttons/button";
import Icon from "../../../atoms/icon";
import { PointerItem, PointOptions } from "./styles";

const PointerOptions = () => {
  const { user, setUser } = useContext(UserContext) as UserType;
  const [selected, setSelected] = useState(0);

  const { toast, setToast } = useContext(ToastContext) as ToastType;

  const handlePoints = (newPoints: number) => {
    postPoints(newPoints);
    setUser({ ...user, points: user.points + newPoints });
    showCustomToast(
      "success",
      `${selected} points added!`,
      toast,
      setToast,
      6000
    );
  };
  return (
    <>
      <PointOptions>
        {pointerOptions.map((item) => (
          <PointerItem key={item.id}>
            <Button
              onClick={() => setSelected(item.value)}
              ariaLabel={`add ${item.value} points`}
              size="small"
              state={selected === item.value ? "selected" : "unselected"}
            >
              <span>{item.value}</span>
            </Button>
          </PointerItem>
        ))}
      </PointOptions>
      <Button ariaLabel="redeem product" onClick={() => handlePoints(selected)}>
        <Icon
          iconType="logoCircle"
          color="#FFFFFF"
          background="url(#paint0_linear_485_5621)"
        />
        Add Points
      </Button>
    </>
  );
};

export default PointerOptions;
