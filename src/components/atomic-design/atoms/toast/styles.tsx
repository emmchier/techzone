import styled, { css } from "styled-components";
import { fadeIn } from "../../../ui/animations/pulse";

export type ToastI = {
  type?: string;
  message?: string;
  isShowing?: boolean;
};

const typeStyles = (theme, type: string) =>
  ({
    success: css`
      border: 2px solid ${theme.color.green.default};
    `,
    error: css`
      border: 2px solid ${theme.color.red.default};
    `,
  }[type]);

export const Container = styled.div<ToastI>`
  position: fixed;
  bottom: 0;
  left: 0;

  ${({ isShowing }) =>
    isShowing
      ? css`
          animation: ${fadeIn} 0.6s ease-in-out;
          display: block;
        `
      : css`
          animation: ${fadeIn} 0.6s ease-in-out;
          display: none;
        `};
  ${({ theme, type }) => typeStyles(theme, type)};
`;

export const Content = styled.div<ToastI>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme, type }) => typeStyles(theme, type)};
  border-radius: ${({ theme }) => theme.border.radius12};
  box-shadow: ${({ theme }) => theme.shadow.elevation1.default};
  background-color: ${({ theme }) => theme.color.neutral.white};
  margin: ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(5)};

  p {
    width: 100%;
    margin-left: ${({ theme }) => theme.spacing(3)};
  }

  button {
    width: ${({ theme }) => theme.spacing(5)};
    position: relative;
    z-index: 2;
  }
`;

export const ToastInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
