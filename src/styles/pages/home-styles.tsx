import styled from "styled-components";

export const HomeContent = styled.div`
  height: auto;
  padding: ${({ theme }) => theme.spacing(20)} 0;
`;

export const BannerContent = styled.div`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing(25)};
`;

export const BannerText = styled.div`
  p:nth-child(3) {
    margin-top: ${({ theme }) => theme.spacing(8)};
    margin-bottom: ${({ theme }) => theme.spacing(16)};
    width: 80%;
  }
`;

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.color.specials.sectionBG};
  border-radius: ${({ theme }) => theme.border.radius104};
  height: 88%;

  span {
    transform: scale(1.23) translateY(-110px);
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
`;

export const BackrgoundGradient = styled.span`
  background: ${({ theme }) => theme.color.specials.sectionBG};
  width: 100%;
  height: 50vh;
  z-index: 0;
  position: absolute;
`;
