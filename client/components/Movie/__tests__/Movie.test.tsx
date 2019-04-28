import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/globalStyles';
import Movie from '../Movie';

import { emptyMovieArray } from '../../../utils/testDummies';

const theToggler: Function = jest.fn();
const { movieTitle, movieThumbnail, movieHref } = emptyMovieArray[0];
afterEach(cleanup);

const renderMovie = () =>
  render(
    <ThemeProvider theme={theme}>
      <Movie
        movieTitle={movieTitle}
        movieThumbnail={movieThumbnail}
        movieHref={movieHref}
        jumboTron={false}
      />
    </ThemeProvider>
  );

test('<Movie />', () => {
  const { getByTestId, queryByTestId } = renderMovie();
  const movie = getByTestId('movie');
  const img = getByTestId('movie__img');
  const figcaption = getByTestId('movie__figcaption');
  const h3 = getByTestId('movie__h3');
  const a = queryByTestId('movie__a');

  const children = [img, figcaption, h3];

  expect(a).not.toBeInTheDocument();
  children.forEach(childElement =>
    expect(movie).toContainElement(childElement)
  );

  expect(img.getAttribute('src')).toBe(movieThumbnail);
  expect(img.getAttribute('alt')).toBe(movieTitle);
  expect(h3.textContent).toBe(movieTitle);
});
