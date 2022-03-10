import styled from "styled-components";

const Content = styled.div`
  border: 1px solid ${({ theme }) => theme.color.neutral.grey300};
  border-radius: ${({ theme }) => theme.border.radius24};
  box-shadow: ${({ theme }) => theme.shadow.elevation1.default};
  background: rgba(255, 255, 255, 0.7);
  padding: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  overflow: hidden;

  div:nth-child(1) {
    background-color: ${({ theme }) => theme.color.neutral.white};
    div:nth-child(1) {
      padding: 0;

      span,
      p {
        margin-bottom: ${({ theme }) => theme.spacing(3)};
      }
      p {
        margin-left: ${({ theme }) => theme.spacing(3)};
        font-size: ${({ theme }) => theme.font.title.l3.desk.size};
        line-height: ${({ theme }) => theme.font.title.l3.desk.lineHeight};
        text-transform: uppercase;
        font-style: normal;
        background: ${({ theme }) => theme.color.brand.default};
        font-weight: ${({ theme }) => theme.font.weight.bold};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
          font-size: ${({ theme }) => theme.font.title.l3.mob.size};
          line-height: ${({ theme }) => theme.font.title.l3.mob.lineHeight};
        }
      }
    }
  }
`;

export default Content;
