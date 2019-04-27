import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../../utils/globalStyles';

import Grid from '../Grid/Grid';

import { IMovie, IGetMoviesResponse } from '../../utils/clientDictionary';

interface IState {
  jumboTron: boolean;
  movies: IMovie[];
  currentMovie: IMovie;
  lastUpdated: string;
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
    lastUpdated: ''
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
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Grid theToggler={this.theToggler} />
      </ThemeProvider>
    );
  }
}

export default App;
