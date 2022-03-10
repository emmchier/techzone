import styled from "styled-components";

export const HomeContent = styled.div`
  height: auto;
  padding-top: ${({ theme }) => theme.spacing(20)};
  padding-bottom: ${({ theme }) => theme.spacing(20)};
`;

export const BannerContent = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing(15)};

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: 0;
    display: flex;
    justify-content: center;
    margin: 0 auto !important;
    width: 40%;
  }
`;

export const BannerText = styled.div`
  position: relative;
  p:nth-child(3) {
    margin-top: ${({ theme }) => theme.spacing(8)};
    margin-bottom: ${({ theme }) => theme.spacing(16)};
    width: 80%;

    @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
      width: 100%;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.color.specials.sectionBG};
  border-radius: ${({ theme }) => theme.border.radius104};
  box-shadow: ${({ theme }) => theme.shadow.elevation1.default};
  height: 88%;

  span {
    transform: scale(1.23) translateY(-110px);

    @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
      transform: scale(1.4) translateY(0);
      position: relative;
      z-index: 1;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    background: transparent;
    box-shadow: none;

    margin-top: ${({ theme }) => theme.spacing(14)};
  }
`;

export const WalkthroughContent = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  div {
    position: relative;
    z-index: 1;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-end;
  }
`;

export const BackrgoundGradient = styled.span`
  background: ${({ theme }) => theme.color.specials.sectionBG};
  width: 100%;
  height: 45vh;
  z-index: 0;
  position: absolute;

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    height: 57vh;
  }
`;

export const WavesContainer = styled.span`
  position: absolute;
`;
