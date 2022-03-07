import styled, { css } from "styled-components";
import { fadeIn } from "../../../ui/animations/pulse";

type ArrowType = {
  isShowing?: boolean;
};

const Content = styled.div<ArrowType>`
  width: ${({ theme }) => theme.spacing(10)};
  height: ${({ theme }) => theme.spacing(10)};
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: ${({ theme }) => theme.shadow.elevation1.hover};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  position: fixed;
  z-index: 99;
  bottom: 0;
  right: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  margin: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.border.radiusFull};
  ${({ isShowing }) =>
    isShowing &&
    css`
      animation: ${fadeIn} 0.1s ease-in-out;
    `};

  &:hover {
    background-color: ${({ theme }) => theme.color.brand.light};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

export default Content;
