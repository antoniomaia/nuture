import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0,100%,0);
  }
  100% {
      opacity: 1;
      transform: translate3d(0,0,0);
  }
`;

const bounce = keyframes`
  0%, 60%, 75%, 90%, 100% {
      animation-timing-function: cubic-bezier(0.215,0.61,0.355,1);
  }
  0% {
      opacity: 0;
      transform: translate3d(3000px,0,0);
  }
  60% {
      opacity: 1;
      transform: translate3d(-25px,0,0);
  }
  75% {
      transform: translate3d(10px,0,0);
  }
  90% {
      transform: translate3d(-5px,0,0);
  }
  100% {
      transform: translate3d(0,0,0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 400px;
  width: 100%;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;
  box-sizing: border-box; 
 /* animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: ${bounce};*/
`;
