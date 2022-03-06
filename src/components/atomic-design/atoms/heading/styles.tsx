import styled, { css } from "styled-components";

type HeadingI = {
  type?: string;
  weight?: string;
  cap?: string;
};

const typesStyles = (theme, type: string) =>
  ({
    l1: css`
      font-size: ${theme.font.title.l1.desk.size};
      line-height: ${theme.font.title.l1.desk.lineHeight};
      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.title.l1.mob.size};
        line-height: ${theme.font.title.l1.mob.lineHeight};
      }
    `,
    l2: css`
      font-size: ${theme.font.title.l2.desk.size};
      line-height: ${theme.font.title.l2.desk.lineHeight};

      span {
        color: ${theme.color.neutral.blue};
        font-weight: ${theme.font.weight.bold};
      }

      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.title.l2.mob.size};
        line-height: ${theme.font.title.l2.mob.lineHeight};
      }
    `,
    l3: css`
      font-size: ${theme.font.title.l3.desk.size};
      line-height: ${theme.font.title.l3.desk.lineHeight};

      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.title.l3.mob.size};
        line-height: ${theme.font.title.l3.mob.lineHeight};
      }
    `,
  }[type]);

export const Content = styled.div<HeadingI>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-style: normal;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.color.neutral.grey900};
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    ${({ theme, type }) => typesStyles(theme, type)};
  }

  b {
    font-style: normal;
    background: ${({ theme }) => theme.color.brand.default};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Title1 = styled.h1``;

export const Title2 = styled.h2``;

export const Title3 = styled.h3``;

export const Title4 = styled.h4``;

export const Title5 = styled.h5``;

export const Title6 = styled.h6``;
