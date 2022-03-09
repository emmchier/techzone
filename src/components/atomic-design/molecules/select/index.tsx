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
} from "./styles";

interface SelectI {
  options?: [];
  inputName?: string;
  name?: string;
  value?: Function;
  onChange?: Function;
  label?: string;
  placeHolder?: string;
  isDisabled?: boolean;
}

const Select = ({
  options,
  inputName,
  name,
  value,
  onChange,
  label,
  placeHolder,
  isDisabled,
}: SelectI) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Container>
      <InputLabel htmlFor={inputName} isDisabled={isDisabled}>
        {label}
      </InputLabel>
      <SelectInput onClick={handleClick} isDisabled={isDisabled}>
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
              <SelectOption key={option.id} value={option.text}>
                {option.text}
              </SelectOption>
            ))}
          </SelectList>
        </Container>

        <Button
          variant="icon"
          ariaLabel={show ? "open" : "close"}
          disabled={isDisabled}
        >
          <Icon iconType="chevron" />
        </Button>
      </SelectInput>
    </Container>
  );
};

export default Select;
