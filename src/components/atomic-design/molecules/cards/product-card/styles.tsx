import styled, { css } from "styled-components";
import { pulse } from "../../../../ui/animations/pulse";
import { SkeletonI } from "../card/styles";

export const Content = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(18)};
  button {
    margin-top: ${({ theme }) => theme.spacing(4)} !important;
  }
`;

export const ButtonContainer = styled.div<SkeletonI>`
  ${({ isSkeleton }) =>
    isSkeleton &&
    css`
      button {
        display: none;
      }
      width: 100%;
      margin-top: ${({ theme }) => theme.spacing(4)} !important;
      height: ${({ theme }) => theme.spacing(13)};
      border-radius: ${({ theme }) => theme.border.radius16};
      background: ${({ theme }) => theme.color.neutral.grey300};
      -webkit-animation: ${pulse} 0.8s infinite; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: ${pulse} 0.8s infinite; /* Firefox < 16 */
      -ms-animation: ${pulse} 0.8s infinite; /* Internet Explorer */
      -o-animation: ${pulse} 0.8s infinite; /* Opera < 12.1 */
      animation: ${pulse} 0.8s infinite;
    `};
`;
