import * as React from 'react';

import { StyledFigure } from './Movie.style';

import { IMovie } from '../../utils/clientDictionary';

interface IState {
  jumboTron: boolean;
}

class Movie extends React.Component<IMovie, IState> {
  state = {
    jumboTron: false
  };

  theToggler = (): void => {
    return this.setState({ jumboTron: !this.state.jumboTron });
  };

  render(): JSX.Element {
    const { movieTitle, movieHref, movieThumbnail } = this.props;
    const { jumboTron } = this.state;
    return (
      <StyledFigure onClick={this.theToggler} jumboTron={jumboTron}>
        <img src={movieThumbnail} alt={movieTitle} />

        <figcaption>
          <h3>{movieTitle}</h3>
          {jumboTron && <a href={movieHref}>Watch Me</a>}
        </figcaption>
      </StyledFigure>
    );
  }
}

export default Movie;
