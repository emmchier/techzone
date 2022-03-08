import { keyframes } from "styled-components";

export const fadeIn = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;

export const pulse = keyframes`
    0% { opacity: 1; transition: .2s ease-in-out; }
    30% { opacity: .8; transition: .2s ease-in-out;}
    40% { opacity: .7; transition: .2s ease-in-out;}
    50% { opacity: .5; transition: .2s ease-in-out;}
    80% { opacity: .7; transition: .2s ease-in-out;}
    90% { opacity: .8; transition: .2s ease-in-out;}
    100% { opacity: 1; transition: .2s ease-in-out;}
`;
