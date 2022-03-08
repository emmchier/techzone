import styled from "styled-components";
import { fadeIn } from "../../ui/animations/pulse";

const Body = styled.main`
  padding-top: ${({ theme }) => theme.spacing(30)};
  -webkit-animation: ${fadeIn} 0.2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: ${fadeIn} 0.2s; /* Firefox < 16 */
  -ms-animation: ${fadeIn} 0.2s; /* Internet Explorer */
  -o-animation: ${fadeIn} 0.2s; /* Opera < 12.1 */
  animation: ${fadeIn} 0.2s;
`;

export default Body;
