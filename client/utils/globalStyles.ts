import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  .root {
    min-height: 100vh;
  }
`;

export const theme = {
  flexin: (jc = 'center', ai = 'center', fd = 'row') =>
    css`
      display: flex;
      justify-content: ${jc};
      align-items: ${ai};
      flex-direction: ${fd};
    `
};
