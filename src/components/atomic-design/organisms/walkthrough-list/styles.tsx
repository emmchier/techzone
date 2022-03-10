import styled from "styled-components";

export const Content = styled.div`
  li {
    &:nth-child(1) {
      position: relative;
      transform: rotate(-3deg) translateX(60px) translateY(25px);
      p:nth-child(1) {
        width: 75%;
      }
    }
    &:nth-child(2) {
      p:nth-child(1) {
        width: 80%;
      }
    }
    &:nth-child(3) {
      position: relative;
      z-index: 2;
      transform: rotate(3deg) translateX(-60px) translateY(25px);
      p:nth-child(1) {
        width: 80%;
      }
    }

    @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        transform: rotate(0) translateX(0) translateY(0) !important;
        p:nth-child(1) {
          width: 100%;
        }
      }
    }
  }
`;
