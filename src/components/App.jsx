import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import HomePage from 'components/routes/HomePage';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'styles/theme';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </HashRouter>
      </MuiThemeProvider>
    </ParallaxProvider>
  );
}

export default hot(module)(App);
