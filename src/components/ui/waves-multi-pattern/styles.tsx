import styled from "styled-components";

export const Pattern = styled.ul`
  li {
    &:nth-child(1) {
      transform: translateY(30px);
    }
    &:nth-child(2) {
      transform: translateY(15px);
    }
  }
`;
