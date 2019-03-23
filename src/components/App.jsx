import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import HomePage from 'components/routes/HomePage';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'styles/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </HashRouter>
    </MuiThemeProvider>
  );
}

export default hot(module)(App);
