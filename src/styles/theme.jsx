import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#0c9bcc',
    },
    secondary: {
      main: '#2C3E50',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
});

export default theme;
