import * as React from 'react';

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
    return (
      <figure onClick={this.theToggler}>
        <img src={movieThumbnail} alt={movieTitle} />

        <figcaption>
          <h3>{movieTitle}</h3>
        </figcaption>
      </figure>
    );
  }
}
