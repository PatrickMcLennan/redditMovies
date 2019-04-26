import * as React from 'react';

interface IProps {
  date: Date;
}

const Nav: React.FunctionComponent<IProps> = ({
  date
}: IProps): JSX.Element => (
  <nav>
    <h1>redditMovies</h1>
    <p>Last Updated: {date}</p>
  </nav>
);

export default Nav;
