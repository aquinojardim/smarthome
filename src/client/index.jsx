import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import store from './reducer/store';
import App from './App';

const myColor = teal;

const theme = createMuiTheme({
  palette: {
    primary: myColor,
    secondary: myColor,
    type: 'dark',
  },
});

// Wrap the app in a provider tag (redux)
render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      {/* works the same as a CSS-reset */}
      <CssBaseline />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
