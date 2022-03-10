import styled from "styled-components";

const Content = styled.footer`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => `padding: ${theme.spacing(40)} 0 ${theme.spacing(15)} 0`};
`;

export default Content;
