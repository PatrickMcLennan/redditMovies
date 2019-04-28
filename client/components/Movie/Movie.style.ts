import styled, { css } from 'styled-components';

interface IProps {
  jumboTron: boolean;
}

export const StyledFigure = styled.figure`
  ${({ theme: { flexin } }: any) => flexin('space-evenly', 'center', 'column')}
  padding: .3rem;

  ${(props: IProps) =>
    props.jumboTron &&
    css`
      position: absolute;
      z-index: 10;
    `}
`;

export const StyledFigCaption = styled.figcaption`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
  text-align: center;
`;

export const StyledImg = styled.img`
  box-shadow: 0.2rem 0.2rem 5px black;
`;
