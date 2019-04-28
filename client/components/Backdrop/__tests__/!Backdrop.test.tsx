import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/globalStyles';
import Backdrop from '../Backdrop';

afterEach(cleanup);

const renderBackdrop = () =>
  render(
    <ThemeProvider theme={theme}>
      <Backdrop jumboTron={false} />
    </ThemeProvider>
  );

test('<Backdrop />', () => {
  const { getByTestId } = renderBackdrop();
  const backdrop = getByTestId('backdrop');

  expect(backdrop).not.toBeInTheDocument();
});
