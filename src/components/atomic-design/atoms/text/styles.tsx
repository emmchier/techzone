import styled, { css } from "styled-components";

type ParagraphI = {
  type?: string;
  color?: string;
  weight?: string;
  cap?: string;
};

const typeStyles = (theme, type: string) =>
  ({
    l1: css`
      font-size: ${theme.font.text.l1.desk.size};
      line-height: ${theme.font.text.l1.desk.lineHeight};

      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.text.l1.mob.size};
        line-height: ${theme.font.text.l1.mob.lineHeight};
      }
    `,
    l2: css`
      font-size: ${theme.font.text.l2.desk.size};
      line-height: ${theme.font.text.l2.desk.lineHeight};

      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.text.l2.mob.size};
        line-height: ${theme.font.text.l2.mob.lineHeight};
      }
    `,
  }[type]);

const colorStyles = (theme, color: string) =>
  ({
    white: css`
      color: ${theme.color.neutral.white};
    `,
    light: css`
      color: ${theme.color.neutral.grey600};
    `,
    dark: css`
      color: ${theme.color.neutral.grey900};
    `,
  }[color]);

const weightStyles = (theme, weight: string) =>
  ({
    light: css`
      font-weight: ${theme.font.weight.light};

      b {
        font-weight: ${theme.font.weight.light};
      }
    `,
    medium: css`
      font-weight: ${theme.font.weight.medium};

      b {
        font-weight: ${theme.font.weight.medium};
      }
    `,
    bold: css`
      font-weight: ${theme.font.weight.bold};

      b {
        font-weight: ${theme.font.weight.bold};
      }
    `,
  }[weight]);

const capStyles = (cap: string) =>
  ({
    default: css`
      text-transform: none;
    `,
    allCaps: css`
      text-transform: uppercase;
    `,
    light: css`
      text-transform: lowercase;
    `,
    cap: css`
      text-transform: capitalize;
    `,
  }[cap]);

export const Paragraph = styled.p<ParagraphI>`
  ${({ theme, type }) => typeStyles(theme, type)};
  ${({ theme, weight }) => weightStyles(theme, weight)};
  ${({ theme, color }) => colorStyles(theme, color)};
  ${({ cap }) => capStyles(cap)};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding: 0;
  margin: 0;

  b {
    font-style: normal;
    background: ${({ theme }) => theme.color.brand.default};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
