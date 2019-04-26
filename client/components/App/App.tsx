import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../../utils/globalStyles';

import Grid from '../Grid/Grid';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <Grid />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
