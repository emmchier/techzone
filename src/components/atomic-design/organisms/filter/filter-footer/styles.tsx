import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;

  @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    justify-content: center;
    flex-direction: column;

    p:nth-child(1) {
      order: 2;
      margin-top: ${({ theme }) => theme.spacing(8)};
    }
  }
`;
