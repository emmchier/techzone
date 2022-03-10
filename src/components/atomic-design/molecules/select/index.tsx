import React, { useState } from "react";
import Button from "../../atoms/buttons/button";
import Icon from "../../atoms/icon";

import {
  SelectInput,
  SelectLabel,
  InputLabel,
  SelectList,
  SelectOption,
  Container,
  IconContainer,
} from "./styles";

const Select = ({
  options,
  inputName,
  name,
  value,
  onChange,
  label,
  placeHolder,
  isDisabled,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Container>
      <InputLabel htmlFor={inputName}>{label}</InputLabel>
      <SelectInput onClick={handleClick}>
        <Container>
          <SelectLabel htmlFor={name}>{value}</SelectLabel>
          <SelectList
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            disabled={isDisabled}
          >
            {placeHolder && (
              <option disabled hidden>
                {placeHolder}
              </option>
            )}
            {options.map((option) => (
              <SelectOption key={option} value={option}>
                {option}
              </SelectOption>
            ))}
          </SelectList>
        </Container>
      </SelectInput>
    </Container>
  );
};

export default Select;
