import styled from "styled-components";

export const PointOptions = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing(9)} 0
    ${({ theme }) => theme.spacing(5)} 0;
`;

export const PointerItem = styled.li`
  width: 100%;
  button {
    width: 100%;
  }
`;
