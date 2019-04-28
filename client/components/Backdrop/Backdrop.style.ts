import styled, { css, keyframes } from 'styled-components';

interface IProps {
  jumboTron: boolean;
}

const animateIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
  `;
const animateOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
  `;

export const StyledDiv = styled.div`
  display: none;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 9;
  transform: translateX(100%);

  ${(props: IProps) =>
    props.jumboTron &&
    css`
      ${({ theme: { flexin } }: any) => flexin()}
      animation: ${animateIn} forwards;
      animation-duration: .5s;

    `}

  ${(props: IProps) =>
    !props.jumboTron &&
    css`
      animationg: ${animateOut} forwards;
    `}
`;
