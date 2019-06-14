import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import HomePage from 'components/routes/HomePage';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default hot(module)(App);
