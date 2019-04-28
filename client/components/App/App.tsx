import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../../utils/globalStyles';

import Grid from '../Grid/Grid';
import Backdrop from '../Backdrop/Backdrop';
import Movie from '../Movie/Movie';

import {
  IMovie,
  IGetMoviesResponse,
  IServerResponse
} from '../../utils/clientDictionary';

interface IState {
  jumboTron: boolean;
  movies: IMovie[];
  currentMovie: IMovie;
  lastUpdated: string;
  error: boolean;
}

class App extends React.Component<{}, IState> {
  state = {
    jumboTron: false,
    movies: [],
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
        ({ movies }: IGetMoviesResponse): void =>
          this.setState(
            (prevState: IState): IState => ({
              ...prevState,
              movies
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
    return this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        jumboTron: !this.state.jumboTron,
        currentMovie: movie
      })
    );
  };

  render(): JSX.Element {
    const { error, jumboTron, currentMovie } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Grid
          theToggler={this.theToggler}
          movies={this.state.movies}
          error={error}
        />
        {jumboTron && (
          <Backdrop>
            <Movie {...currentMovie} onClick={/>
          </Backdrop>
        )}
      </ThemeProvider>
    );
  }
}

export default App;
