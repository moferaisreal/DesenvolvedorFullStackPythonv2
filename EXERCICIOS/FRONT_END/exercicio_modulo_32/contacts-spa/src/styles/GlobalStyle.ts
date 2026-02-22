import { createGlobalStyle } from 'styled-components';
import * as t from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${t.theme.colors.background};
    color: ${t.theme.colors.textPrimary};
    font-family: "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input {
    outline: none;
  }
`;
