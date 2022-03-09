import styled, { css } from "styled-components";
import { fadeIn } from "../../ui/animations/pulse";

type NavbarTypes = {
  isFixed: boolean;
};

export const Header = styled.header`
  position: fixed;
  z-index: 9;
  top: 0;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const Background = styled.div<NavbarTypes>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all ease-in-out;
  ${({ theme, isFixed }) =>
    isFixed
      ? css`
          background-color: ${theme.color.neutral.white};
          box-shadow: ${theme.shadow.elevation1.default};
          -webkit-animation: ${fadeIn} 0.2s;
          -moz-animation: ${fadeIn} 0.2s;
          -ms-animation: ${fadeIn} 0.2s;
          -o-animation: ${fadeIn} 0.2s;
          animation: ${fadeIn} 0.2s;
        `
      : "background: transparent;"};
`;

export const Content = styled.div<NavbarTypes>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: ${({ theme }) => theme.spacing(5)} 0;
  z-index: 2;
  transition: all ease-in-out;
  ${({ isFixed }) =>
    isFixed
      ? css`
          padding: ${({ theme }) => theme.spacing(2)} 0;
          transition: all ease-in-out;
        `
      : css`
          padding: ${({ theme }) => theme.spacing(5)} 0;
          transition: all ease-in-out;
        `};
`;

export const Brand = styled.div`
  span {
    svg {
      height: ${({ theme }) => theme.spacing(7)};
    }
  }
`;
