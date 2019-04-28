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
      <Backdrop jumboTron={true} />
    </ThemeProvider>
  );

test('<Backdrop />', () => {
  const { getByTestId } = renderBackdrop();
  const backdrop = getByTestId('backdrop');

  expect(backdrop).toBeInTheDocument();

  expect(backdrop).toHaveStyleRule('height', '100vh');
  expect(backdrop).toHaveStyleRule('width', '100vw');
});
