import {createTheme} from '@mui/material/styles';

const lightThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#E6E2DD',
      main: '#ff7961',
      dark: '#373A36',
      contrastText: '#fff',
    },
    secondary: {
      light: '#E6E2DD',
      main: '#ff7961',
      dark: '#373A36',
      contrastText: '#fff',
    },
  },
});

export default lightThemeOptions;