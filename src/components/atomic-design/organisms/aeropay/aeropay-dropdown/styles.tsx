import styled, { css } from "styled-components";
import { pulse } from "../../../../ui/animations/pulse";

export interface DropdownI {
  isSkeleton: boolean;
  show: boolean;
  fade: boolean;
}

export const Container = styled.div``;

export const Content = styled.div<DropdownI>`
  transform: translateY(10px);
  position: relative;
  z-index: 999;
  svg {
    width: ${({ theme }) => theme.spacing(7.5)};
    height: ${({ theme }) => theme.spacing(7.5)};
    margin-right: ${({ theme }) => theme.spacing(1.9)};
  }

  button {
    border-radius: ${({ theme }) => theme.border.radius16} !important;
    ${({ theme }) => `padding: ${theme.spacing(1.7)} ${theme.spacing(3)}`};
  }

  ${({ isSkeleton }) =>
    isSkeleton &&
    css`
      button {
        display: none;
      }
      width: ${({ theme }) => theme.spacing(35)};
      height: ${({ theme }) => theme.spacing(11)};
      border-radius: ${({ theme }) => theme.border.radius16};
      background: ${({ theme }) => theme.color.neutral.grey300};
      -webkit-animation: ${pulse} 0.8s infinite; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: ${pulse} 0.8s infinite; /* Firefox < 16 */
      -ms-animation: ${pulse} 0.8s infinite; /* Internet Explorer */
      -o-animation: ${pulse} 0.8s infinite; /* Opera < 12.1 */
      animation: ${pulse} 0.8s infinite;
    `};
`;

export const ArrowContainer = styled.div`
  transform: translateY(2px);
  svg {
    width: ${({ theme }) => theme.spacing(4.5)};
    height: ${({ theme }) => theme.spacing(4.5)};
    margin-left: ${({ theme }) => theme.spacing(3)};
    margin-top: 0;
  }
`;

export const MenuContent = styled.div`
  width: 100%;
  &:after {
    content: ".";
    visibility: collapse;
  }
`;
