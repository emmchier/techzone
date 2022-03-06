import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body,
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.text.l1.desk.size};
  }
  * {
    text-decoration: none;
    list-style: none;
  }
  ul {
    padding: 0;
  }
  p {
    color: ${({ theme }) => theme.color.neutral.grey600};
  }
  a {
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.color.neutral.grey600};
  }
`;
