import styled from "styled-components";

export const SelectInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  position: absolute;
  transform: rotate(0);
  right: -${({ theme }) => theme.spacing(4)};
  z-index: 0;
  button {
    width: ${({ theme }) => theme.spacing(20)};
  }
`;

export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.font.text.l1.desk.size};
  line-height: ${({ theme }) => theme.font.text.lineHeight};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.neutral.grey600};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const SelectLabel = styled.label`
  display: none;
`;

export const SelectList = styled.select`
  width: 35vh;
  cursor: pointer;
  overflow: hidden;
  color: ${({ theme }) => theme.color.neutral.grey600};
  ${({ theme }) => `padding: ${theme.spacing(3)} ${theme.spacing(4)}`};
  background-color: ${({ theme }) => theme.color.neutral.white};
  border: 1px solid ${({ theme }) => theme.color.neutral.grey300};
  font-size: ${({ theme }) => theme.font.text.l1.desk.size};
  line-height: ${({ theme }) => theme.font.text.lineHeight};
  border-radius: ${({ theme }) => theme.border.radius16};
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  margin-left: ${({ theme }) => theme.spacing(4)};

  &:focus {
    color: ${({ theme }) => theme.color.neutral.grey600};
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
    padding: ${({ theme }) => theme.spacing(3)};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
  }
`;

export const SelectOption = styled.option`
  color: ${({ theme }) => theme.color.neutral.grey600};
`;
