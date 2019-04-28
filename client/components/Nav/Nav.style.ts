import styled from 'styled-components';

export const StyledNav = styled.nav`
  ${({ theme: { flexin } }: any) => flexin('space-between')}
  grid-area: 1 / 1 / 2 / -1;
  padding: 1rem;
`;

export const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: 0.3rem;
`;

export const StyledP = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0.15rem;
  font-weight: 300;
`;
