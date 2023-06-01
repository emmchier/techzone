import styled, { css } from "styled-components";

type ContentTypes = {
  direction: "up" | "down" | "left" | "right" | "";
};

const directionStyles = (direction: string) =>
  ({
    up: css`
      svg {
        transform: rotate(180deg);
      }
    `,
    down: css`
      svg {
        transform: rotate(0);
      }
    `,
    left: css`
      svg {
        transform: rotate(90deg);
      }
    `,
    right: css`
      svg {
        transform: rotate(-90deg);
      }
    `,
  }[direction]);

export const Content = styled.div<ContentTypes>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ direction }) => directionStyles(direction)};
`;
