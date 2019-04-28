import * as React from 'react';

import { StyledFigure, StyledFigCaption, StyledImg } from './Movie.style';

import { IMovie } from '../../utils/clientDictionary';

interface IProps extends IMovie {
  onClick: Function;
}

interface IState {
  jumboTron: boolean;
}

class Movie extends React.Component<IProps, IState> {
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
        <StyledImg src={movieThumbnail} alt={movieTitle} />
        <StyledFigCaption>
          <h3>{movieTitle}</h3>
          {jumboTron && <a href={movieHref}>Watch Me</a>}
        </StyledFigCaption>
      </StyledFigure>
    );
  }
}

export default Movie;
