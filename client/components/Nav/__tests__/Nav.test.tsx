import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/globalStyles';
import Nav from '../Nav';

afterEach(cleanup);

const timestamp = 'date';

const renderNav = () =>
  render(
    <ThemeProvider theme={theme}>
      <Nav timestamp={timestamp} />
    </ThemeProvider>
  );

test('<Nav />', () => {
  const { getByTestId } = renderNav();
  const nav = getByTestId('nav');
  const logo = getByTestId('logo');
  const timestamp = getByTestId('timestamp');

  // Content
  expect(nav).toContainElement(logo);
  expect(nav).toContainElement(timestamp);
  expect(timestamp.textContent).toBe('Last Updated: date');
  // Styles
  expect(nav).toHaveStyleRule('display', 'flex');
  expect(nav).toHaveStyleRule('justify-content', 'space-between');
  expect(nav).toHaveStyleRule('align-items', 'center');
});
