import styled from "styled-components";

const Content = styled.footer`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(20)} 0;
`;

export default Content;
