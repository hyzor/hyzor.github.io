import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#0099cc',
    },
    secondary: {
      main: '#336699',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
});

export default theme;
