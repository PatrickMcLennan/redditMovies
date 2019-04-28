import * as React from 'react';

import Movie from '../Movie/Movie';
import { StyledDiv } from './Grid.style';
import { IMovie } from '../../utils/clientDictionary';

interface IProps {
  theToggler: Function;
  movies: IMovie[];
  jumboTron: boolean;
  error: boolean;
}

class Grid extends React.Component<IProps, {}> {
  render(): JSX.Element {
    const { theToggler, movies, error, jumboTron } = this.props;
    return (
      <StyledDiv data-testid="grid">
        {movies.length >= 1 &&
          movies.map((movie: IMovie) => (
            <Movie
              onClick={() => theToggler(movie)}
              {...movie}
              jumboTron={jumboTron}
              key={Math.random()}
            />
          ))}
        {error && (
          <h3>
            Sorry - there was an issue connecting to the database. Please try
            again later.
          </h3>
        )}
      </StyledDiv>
    );
  }
}

export default Grid;
