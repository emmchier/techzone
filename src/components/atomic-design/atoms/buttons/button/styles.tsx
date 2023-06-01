import styled, { css, DefaultTheme } from "styled-components";

export interface ButtonI {
  children: React.ReactNode;
  size?: string;
  state: string | boolean;
  variant?: string;
}

const sizeStyles = (theme: DefaultTheme, size: string) =>
  ({
    big: css`
      padding: ${theme.spacing(5)} ${theme.spacing(8)};
      text-transform: uppercase;
      border-radius: ${theme.border.radius24} !important;
    `,
    default: css`
      width: 100%;
      padding: ${theme.spacing(3)} 0;
      svg {
        padding: 0 ${theme.spacing(1.3)};
        height: ${theme.spacing(5)};
      }
    `,
    medium: css`
      padding: ${theme.spacing(1.5)} ${theme.spacing(4.8)};
      border-radius: ${theme.border.radius12} !important;
    `,
    small: css`
      padding: ${theme.spacing(1)} 0;
      border-radius: ${theme.border.radius12} !important;
    `,
  }[size]);

const stateStyles = (theme: DefaultTheme, state: string) =>
  ({
    processing: css`
      background: ${theme.color.brand.default} !important;
      box-shadow: ${theme.shadow.elevation1.default} !important;
      opacity: 0.5;
      cursor: inherit !important;
      &:hover,
      &:active {
        filter: brightness(100%) !important;
      }
    `,
    selected: css`
      background: ${theme.color.brand.default} !important;
      box-shadow: ${theme.shadow.elevation1.default} !important;
      border-left-color: ${theme.color.brand.blue} !important;
      border-right-color: ${theme.color.brand.pink} !important;

      &:hover,
      &:active {
        filter: brightness(100%) !important;
      }
    `,
    unselected: css`
      background: ${theme.color.brand.light} !important;
      box-shadow: ${theme.shadow.elevation1.default} !important;
      border: 1px solid transparent !important;

      &:hover,
      &:active {
        filter: brightness(100%) !important;
      }

      span {
        background: ${theme.color.brand.default} !important;
        background-clip: text !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
      }
    `,
  }[state]);

const variantStyles = (theme: DefaultTheme, variant: string) =>
  ({
    contained: css`
      color: ${theme.color.neutral.white};
      background: ${theme.color.brand.default};
      box-shadow: ${theme.shadow.elevation1.default};
      border: 1px solid transparent;
      border-left-color: ${theme.color.brand.blue};
      border-right-color: ${theme.color.brand.pink};
      border-radius: ${theme.border.radius16};

      &:hover {
        background: ${theme.color.brand.hover};
      }

      &:active {
        background: ${theme.color.brand.hover};
        filter: brightness(85%);
      }

      &:disabled {
        color: ${theme.color.neutral.grey600};
        background: ${theme.color.neutral.grey200};
        border: 1px solid transparent;
      }
    `,
    outlined: css`
      background: transparent;
      border: 1px solid ${theme.color.neutral.grey300};
      color: ${theme.color.neutral.grey600};
      box-shadow: ${theme.shadow.elevation1.default};
      border-radius: ${theme.border.radius16};

      &:disabled {
        border: 1px solid ${theme.color.neutral.grey200};
        color: ${theme.color.neutral.grey200};
      }
    `,
    text: css`
      background: transparent;
      border: transparent;
      padding: 0;
      color: ${theme.color.neutral.grey600};

      &:hover {
        filter: brightness(85%);
        background: ${theme.color.brand.default};
        font-weight: ${theme.font.weight.medium};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &:disabled {
        color: ${theme.color.neutral.grey200};
      }
    `,
    icon: css`
      background: transparent;
      border: 1px solid transparent;
      padding: 0;
      color: ${theme.color.neutral.grey600};

      &:hover {
        filter: brightness(85%);
      }
    `,
  }[variant]);

const Content = styled.button<ButtonI>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 !important;
  cursor: pointer;
  filter: brightness(100%);
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.text.l1.desk.size};
  line-height: ${({ theme }) => theme.font.text.lineHeight};
  transition: ${({ theme }) => theme.transition.main};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  ${({ theme, size }) => sizeStyles(theme, size as string)};
  ${({ theme, state }) => stateStyles(theme, state as string)};
  ${({ theme, variant }) => variantStyles(theme, variant as string)};

  b {
    background: ${({ theme }) => theme.color.brand.default};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover,
  &:active {
    transition: ${({ theme }) => theme.transition.main};
  }
  &:disabled {
    cursor: inherit;
  }
  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.text.l1.mob.size};
  }
`;

export default Content;
