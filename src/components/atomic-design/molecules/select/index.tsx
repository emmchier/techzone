import React, { FC, useState } from "react";

import {
  SelectInput,
  SelectLabel,
  InputLabel,
  SelectList,
  SelectOption,
  Container,
} from "./styles";

interface SelectProps {
  options: string[];
  inputName: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement> ;
  label: string;
  placeHolder?: string;
  isDisabled?: boolean
}

const Select: FC<SelectProps> = ({
  options = [],
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
