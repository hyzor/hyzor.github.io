import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import HomePage from 'components/routes/HomePage';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </HashRouter>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default hot(module)(App);
