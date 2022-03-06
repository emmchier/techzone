import styled from "styled-components";
import { fadeIn } from "../../ui/animations/pulse";

const Body = styled.main`
  -webkit-animation: ${fadeIn} 0.8s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: ${fadeIn} 0.8s; /* Firefox < 16 */
  -ms-animation: ${fadeIn} 0.8s; /* Internet Explorer */
  -o-animation: ${fadeIn} 0.8s; /* Opera < 12.1 */
  animation: ${fadeIn} 0.8s;
`;

export default Body;
