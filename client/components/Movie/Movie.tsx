import * as React from 'react';

import { StyledFigure, StyledFigCaption, StyledImg } from './Movie.style';

import { IMovie } from '../../utils/clientDictionary';

interface IProps extends IMovie {
  movieTitle: IMovie['movieTitle'];
  movieHref: IMovie['movieHref'];
  movieThumbnail: IMovie['movieThumbnail'];
  key?: number;
  jumboTron: boolean;
  onClick?: Function;
  theToggler: Function;
}

const Movie: React.FunctionComponent<IProps> = ({
  movieTitle,
  movieHref,
  movieThumbnail,
  jumboTron,
  theToggler
}): JSX.Element => (
  <StyledFigure
    data-testid="movie"
    onClick={() => theToggler({ movieTitle, movieHref, movieThumbnail })}>
    <StyledImg data-testid="movie__img" src={movieThumbnail} alt={movieTitle} />
    <StyledFigCaption data-testid="movie__figcaption">
      <h3 data-testid="movie__h3">{movieTitle}</h3>
      {jumboTron && (
        <a data-testid="movie__a" target="_blank" href={movieHref}>
          Watch Me
        </a>
      )}
    </StyledFigCaption>
  </StyledFigure>
);

export default Movie;
