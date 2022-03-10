import styled from "styled-components";

export const HomeContent = styled.div`
  height: auto;
`;

export const BannerText = styled.div`
  p:nth-child(3) {
    margin-top: ${({ theme }) => theme.spacing(8)};
    margin-bottom: ${({ theme }) => theme.spacing(16)};
    width: 80%;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
`;

export const ImgContainer = styled.div`
  position: absolute;
  z-index: 1;
  transform: scale(1.25);
`;

export const BackgroundHero = styled.div``;

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
