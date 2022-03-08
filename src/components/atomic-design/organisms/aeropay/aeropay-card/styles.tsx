import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 148px;
  border-radius: ${({ theme }) => theme.border.radius8};
  background: ${({ theme }) => theme.color.neutral.grey900};
  overflow: hidden;
`;

export const InfoContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const BrandInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  p,
  svg {
    margin: ${({ theme }) => theme.spacing(4)};
    color: ${({ theme }) => theme.color.neutral.white};
  }
`;

export const UserInfo = styled(BrandInfo)``;

export const WavesContent = styled.div`
  opacity: 0.2;
`;
