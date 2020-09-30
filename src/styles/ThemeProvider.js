import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './GlobalStyles';

const ThemeProvider = ({ children }) => (
  <Provider theme={theme}>
    <GlobalStyles />
    {children}
  </Provider>
);

export default ThemeProvider;
