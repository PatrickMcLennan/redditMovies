import * as React from 'react';

import Movie from '../Movie/Movie';
import { IMovie } from '../../utils/clientDictionary';

interface IProps {
  theToggler: Function;
  movies: IMovie[];
}

class Grid extends React.Component<IProps, {}> {
  render(): JSX.Element {
    const { theToggler, movies } = this.props;
    return (
      <div>
        {movies.length >= 1 &&
          movies.map((movie: IMovie) => (
            <Movie onClick={() => theToggler(movie)} {...movie} />
          ))}
      </div>
    );
  }
}

export default Grid;
