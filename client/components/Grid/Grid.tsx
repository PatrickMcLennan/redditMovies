import * as React from 'react';

import Movie from '../Movie/Movie';
import { IMovie } from '../../utils/clientDictionary';

interface IProps {
  theToggler: Function;
  movies: IMovie[];
  error: boolean;
}

class Grid extends React.Component<IProps, {}> {
  render(): JSX.Element {
    const { theToggler, movies, error } = this.props;
    return (
      <div data-testid="grid">
        {movies.length >= 1 &&
          movies.map((movie: IMovie) => (
            <Movie
              onClick={() => theToggler(movie)}
              {...movie}
              key={Math.random()}
            />
          ))}
        {error && (
          <h3>
            Sorry - there was an issue connecting to the database. Please try
            again later.
          </h3>
        )}
      </div>
    );
  }
}

export default Grid;
