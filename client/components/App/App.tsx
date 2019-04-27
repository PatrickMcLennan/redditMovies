import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../../utils/globalStyles';

import Grid from '../Grid/Grid';

import { IMovie } from '../../utils/clientDictionary';

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
    lastUpdated: '',
  };

  componentDidMount() {
    return fetch('http://localhost:4000/getMovies').then((response: IMovie[]): void => this.setState((prevState: IState): IState => ({...prevState, movies: response}))
  }

  theToggler: Function = () => {
    return this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        jumboTron: !this.state.jumboTron
      })
    );
  };

  setMovie: Function;
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
