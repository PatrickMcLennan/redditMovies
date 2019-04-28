import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/globalStyles';
import Grid from '../Grid';

import { emptyMovieArray } from '../../../utils/testDummies';

const theToggler: Function = jest.fn();
const jumboTron = false;

afterEach(cleanup);

const renderGrid = () =>
  render(
    <ThemeProvider theme={theme}>
      <Grid
        theToggler={theToggler}
        movies={emptyMovieArray}
        error={false}
        jumboTron={jumboTron}
      />
    </ThemeProvider>
  );

test('<Grid />', () => {
  const { getByTestId, getAllByTestId } = renderGrid();
  const grid = getByTestId('grid');
  const movies = getAllByTestId('movie');

  movies.forEach(movie => expect(grid).toContainElement(movie));
  expect(movies.length).toBe(emptyMovieArray.length);
});
