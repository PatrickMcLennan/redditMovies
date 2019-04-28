import * as React from 'react';

import { StyledNav, StyledH1, StyledP } from './Nav.style';

interface IProps {
  timestamp: string;
}

const Nav: React.FunctionComponent<IProps> = ({
  timestamp
}: IProps): JSX.Element => (
  <StyledNav data-testid="nav">
    <StyledH1 data-testid="logo">redditMovies</StyledH1>
    <StyledP data-testid="timestamp">Last Updated: {timestamp}</StyledP>
  </StyledNav>
);

export default Nav;
