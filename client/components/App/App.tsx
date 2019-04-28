import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../../utils/globalStyles';

import Grid from '../Grid/Grid';
import Backdrop from '../Backdrop/Backdrop';
import Movie from '../Movie/Movie';
import Nav from '../Nav/Nav';
import { emptyMovie } from '../../utils/testDummies';

import {
  IMovie,
  IGetMoviesResponse,
  IServerResponse,
  ITimestamp
} from '../../utils/clientDictionary';

interface IState {
  jumboTron: boolean;
  movies: IMovie[];
  timestamp: ITimestamp['timestamp'];
  currentMovie: IMovie;
  lastUpdated: string;
  error: boolean;
}

class App extends React.Component<{}, IState> {
  state = {
    jumboTron: false,
    movies: [],
    timestamp: '',
    currentMovie: {
      movieTitle: '',
      movieHref: '',
      movieThumbnail: ''
    },
    lastUpdated: '',
    error: false
  };

  componentDidMount() {
    return fetch('http://localhost:4000/getMovies')
      .then(
        (rawResponse: IGetMoviesResponse): Promise<IGetMoviesResponse> =>
          rawResponse.json()
      )
      .then(
        ({ movies, timestamp }: IGetMoviesResponse): void =>
          this.setState(
            (prevState: IState): IState => ({
              ...prevState,
              movies,
              timestamp
            })
          )
      )
      .catch(
        (err: IServerResponse): void =>
          this.setState(
            (prevState: IState): IState => ({ ...prevState, error: true })
          )
      );
  }

  theToggler: Function = (movie: IMovie): void => {
    console.log('hello?');
    return this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        jumboTron: !this.state.jumboTron,
        currentMovie: movie
      })
    );
  };

  render(): JSX.Element {
    const { error, jumboTron, currentMovie, timestamp } = this.state;
    const { movieTitle, movieHref, movieThumbnail } = currentMovie;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Nav timestamp={timestamp} />
          <Grid
            theToggler={this.theToggler}
            movies={this.state.movies}
            error={error}
            jumboTron={false}
          />
          {jumboTron && (
            <Backdrop
              jumboTron={jumboTron}
              onClick={(): Function => this.theToggler(emptyMovie)}>
              <Movie
                theToggler={this.theToggler}
                movieTitle={movieTitle}
                movieHref={movieHref}
                movieThumbnail={movieThumbnail}
                jumboTron={jumboTron}
                onClick={(): Function => this.theToggler(emptyMovie)}
              />
            </Backdrop>
          )}
        </>
      </ThemeProvider>
    );
  }
}

export default App;
