import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './reducer/store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import teal from '@material-ui/core/colors/teal';
import { CssBaseline } from '@material-ui/core';
import Home from './layouts/Home';

const myColor = teal; 

const theme = createMuiTheme({
  palette: {
    primary: myColor,
    secondary: myColor,
  }
})

// Return the App, rendering the MainContainer within it
const App = ({store}) => {

  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      {/* works the same as a CSS-reset */}
        <CssBaseline />
        {/* could be made into a component and stored on routes folder */}
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
};
App.propTypes = {store: PropTypes.object.isRequired};

export default App; 
