import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${({ theme }) => theme.color.neutral.grey300};
  border-radius: ${({ theme }) => theme.border.radius16};
  ${({ theme }) => `padding: ${theme.spacing(2)} ${theme.spacing(3)}`};

  p {
    margin: 0 ${({ theme }) => theme.spacing(5)};
  }

  button {
    width: ${({ theme }) => theme.spacing(1.5)};
    height: ${({ theme }) => theme.spacing(1.5)};
    padding: 20px;
    border-radius: ${({ theme }) => theme.border.radius8} !important;
    background-color: ${({ theme }) => theme.color.brand.light};

    &:hover {
      filter: brightness(100%);
    }

    &:disabled {
      background-color: ${({ theme }) => theme.color.neutral.grey200};
      cursor: inherit;
    }
  }
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    p {
      width: 100px;
      text-align: center;
    }
  }
`;
