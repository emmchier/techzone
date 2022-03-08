import styled, { css } from "styled-components";
import { pulse } from "../../../../ui/animations/pulse";

export interface SkeletonI {
  isSkeleton?: boolean;
  background?: boolean;
}

export const Content = styled.div`
  border: 1px solid ${({ theme }) => theme.color.neutral.grey300};
  border-radius: ${({ theme }) => theme.border.radius16};
  box-shadow: ${({ theme }) => theme.shadow.elevation1.default};
  overflow: hidden;
`;

export const ImageContent = styled.div<SkeletonI>`
  padding: ${({ theme }) => theme.spacing(5)};
  ${({ background }) =>
    background &&
    css`
      background: ${({ theme }) => theme.color.specials.illustrationBG};
    `};
`;

export const DefaultImage = styled.div<SkeletonI>`
  padding: ${({ theme }) => theme.spacing(22)};
  ${({ isSkeleton }) =>
    isSkeleton &&
    css`
      img {
        -webkit-animation: ${pulse} 0.2s infinite; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: ${pulse} 0.2s infinite; /* Firefox < 16 */
        -ms-animation: ${pulse} 0.2s infinite; /* Internet Explorer */
        -o-animation: ${pulse} 0.2s infinite; /* Opera < 12.1 */
        animation: ${pulse} 0.2s infinite;
      }
    `};
`;

export const TextContent = styled.div`
  padding: ${({ theme }) => theme.spacing(5)};
  border-top: 1px solid ${({ theme }) => theme.color.neutral.grey300};

  p:nth-child(2) {
    margin-top: ${({ theme }) => theme.spacing(1)};
  }
`;

export const TitleContainer = styled.div<SkeletonI>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${({ isSkeleton }) =>
    isSkeleton &&
    css`
      p {
        display: none;
      }
      width: 75%;
      height: ${({ theme }) => theme.spacing(3.8)};
      border-radius: ${({ theme }) => theme.border.radius8};
      background: ${({ theme }) => theme.color.neutral.grey300};
      -webkit-animation: ${pulse} 0.2s infinite; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: ${pulse} 0.2s infinite; /* Firefox < 16 */
      -ms-animation: ${pulse} 0.2s infinite; /* Internet Explorer */
      -o-animation: ${pulse} 0.2s infinite; /* Opera < 12.1 */
      animation: ${pulse} 0.2s infinite;
    `};
`;

export const DescriptionContainer = styled.div<SkeletonI>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${({ isSkeleton }) =>
    isSkeleton &&
    css`
      p {
        display: none;
      }
      width: 40%;
      margin-top: ${({ theme }) => theme.spacing(2)};
      height: ${({ theme }) => theme.spacing(1.8)};
      border-radius: ${({ theme }) => theme.border.radius8};
      background: ${({ theme }) => theme.color.neutral.grey300};
      -webkit-animation: ${pulse} 0.8s infinite; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: ${pulse} 0.8s infinite; /* Firefox < 16 */
      -ms-animation: ${pulse} 0.8s infinite; /* Internet Explorer */
      -o-animation: ${pulse} 0.8s infinite; /* Opera < 12.1 */
      animation: ${pulse} 0.8s infinite;
    `};
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing(2)} !important;
  border-radius: ${({ theme }) => theme.border.radius8};
  background: ${({ theme }) => theme.color.brand.light};
  overflow: hidden;

  svg {
    transform: scale(1.3);
  }
`;
