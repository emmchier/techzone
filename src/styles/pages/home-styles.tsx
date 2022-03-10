import styled from "styled-components";

export const BannerText = styled.div`
  p:nth-child(3) {
    margin-top: ${({ theme }) => theme.spacing(8)};
    margin-bottom: ${({ theme }) => theme.spacing(16)};
    width: 80%;
  }
`;

export const HeroContainer = styled.div`
  position: relative;

  img {
    background: transparent;
    position: absolute !important;
    z-index: 1;
    transform: scale(1.25);
  }
`;

export const BackgroundHero = styled.div`
  height: 75vh;
  z-index: 0;
  background: ${({ theme }) => theme.color.specials.sectionBG};
  border-radius: ${({ theme }) => theme.border.radius104};
  transform: translateY(-516px);
`;

export const WalkthroughContent = styled.div`
  width: 100%;
  position: relative;
  height: 100vh !important;
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
  height: 55vh;
  z-index: 0;
  position: absolute;
`;
