import styled from "styled-components";

export const SelectInput = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  ${({ isDisabled }) =>
    isDisabled
      ? `span { display: none;}`
      : `span { background: linear-gradient(to right, transparent, rgba(235, 237, 245, 1) 69%); transform: translateX(-40px); border-radius: 8px}`}
`;

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  &:focus-within label {
    color: ${({ theme }) => theme.color.neutral.grey900};
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  transform: rotate(0);
  right: ${({ theme }) => theme.spacing(5)};
  ${({ openClose }) =>
    openClose
      ? "button { transform: rotate(180deg) }"
      : "button { transform: rotate(0) }"};
  button {
    width: ${({ theme }) => theme.spacing(20)};
    &:disabled {
      svg {
        opacity: 0.3;
      }
    }
  }
`;

export const InputLabel = styled.label`
  font-style: normal;
  display: none;
`;

export const SelectLabel = styled.label`
  display: none;
`;

export const SelectList = styled.select`
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  color: ${({ theme }) => theme.color.neutral.grey900};
  border-radius: ${({ theme }) => theme.border.radius12};
  font-style: normal;
  padding: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.color.neutral.white};
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  border: 2px solid transparent;
  margin: 0;
  &:focus {
    color: ${({ theme }) => theme.color.neutral.grey900};
    border: 2px solid ${({ theme }) => theme.color.neutral.grey300};
    background-color: ${({ theme }) => theme.color.neutral.white};
    outline: none;
  }
  &:disabled {
    border: 2px solid ${({ theme }) => theme.color.brand.light} !important;
    color: ${({ theme }) => theme.color.brand.light} !important;
    background-color: transparent;
  }
  &::-ms-expand {
    display: none;
  }
  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(5)};
  }
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(5)};
  }
`;

export const SelectOption = styled.option`
  color: ${({ theme }) => theme.color.neutral.grey900};
`;
