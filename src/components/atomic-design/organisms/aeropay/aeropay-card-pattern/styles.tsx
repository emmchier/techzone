import styled from "styled-components";

export const Pattern = styled.ul`
  li {
    height: 10px;
    width: 100px;
    svg {
      transform: scale(-1.5, 0.9) rotate(15deg) translateY(10px)
        translateX(10px);
    }
  }
`;
