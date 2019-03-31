import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

export const RotateDiv = styled.div`
  animation: ${rotate} 9s linear infinite;
`;

export const MovingDiv = styled.div`
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translate(200px, 150px) rotate(20deg);
  }
`;
