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
  width: 100% !important;
  display: flex;
  align-items: center;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.font.text.l1.desk.size};
  line-height: ${({ theme }) => theme.font.text.lineHeight};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.neutral.grey600};
  margin-right: ${({ theme }) => theme.spacing(3)};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const SelectLabel = styled.label`
  display: none;
`;

export const SelectList = styled.select`
  cursor: pointer;
  overflow: hidden;
  color: ${({ theme }) => theme.color.neutral.grey600};
  ${({ theme }) => `padding: ${theme.spacing(3)} ${theme.spacing(4)}`};
  background-color: ${({ theme }) => theme.color.neutral.white};
  border: 1px solid ${({ theme }) => theme.color.neutral.grey300};
  font-size: ${({ theme }) => theme.font.text.l1.desk.size};
  line-height: ${({ theme }) => theme.font.text.lineHeight};
  border-radius: ${({ theme }) => theme.border.radius16};

  /* Arrow */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #252f3d 50%),
    linear-gradient(135deg, blue 50%, transparent 50%),
    linear-gradient(to right, #ffffff, #ffffff);
  background-position: calc(100% - 20px) calc(1em + 5px),
    calc(100% - 15px) calc(1em + 5px), 100% 0;
  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
  background-repeat: no-repeat;

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
    position: relative;
    width: 100% !important;
  }
`;

export const SelectOption = styled.option`
  width: 100% !important;
  color: ${({ theme }) => theme.color.neutral.grey600};
`;
