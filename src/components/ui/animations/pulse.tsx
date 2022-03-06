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
    0% { transform: translateX(-100%); opacity: 0; transition: .2s ease-in-out; }
    10% { transform: translateX(-80%); opacity: .2; transition: .2s ease-in-out;}
    20% { transform: translateX(-60%); opacity: .4; transition: .2s ease-in-out;}
    30% { transform: translateX(-40%); opacity: .6; transition: .2s ease-in-out;}
    40% { transform: translateX(-20%); opacity: .8; transition: .2s ease-in-out;}
    50% { transform: translateX(0); opacity: 1; transition: .2s ease-in-out;}
    60% { transform: translateX(20%); opacity: .8; transition: .2s ease-in-out;}
    70% { transform: translateX(40%); opacity: .6; transition: .2s ease-in-out;}
    80% { transform: translateX(60%); opacity: .4; transition: .2s ease-in-out;}
    90% { transform: translateX(80%); opacity: .2; transition: .2s ease-in-out;}
    100% { transform: translateX(100%); opacity: 0; transition: .2s ease-in-out;}
`;
