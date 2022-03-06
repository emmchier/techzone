import styled from "styled-components";

export const Content = styled.div`
  border: 1px solid ${({ theme }) => theme.color.neutral.grey300};
  border-radius: ${({ theme }) => theme.border.radius16};
  box-shadow: ${({ theme }) => theme.shadow.elevation1.default};
  overflow: hidden;
`;

export const ImageContent = styled.div`
  padding: ${({ theme }) => theme.spacing(5)};
`;

export const DefaultImage = styled.div`
  padding: ${({ theme }) => theme.spacing(22)};
`;

export const TextContent = styled.div`
  padding: ${({ theme }) => theme.spacing(5)};
  border-top: 1px solid ${({ theme }) => theme.color.neutral.grey300};

  p:nth-child(2) {
    margin-top: ${({ theme }) => theme.spacing(1)};
  }
`;
