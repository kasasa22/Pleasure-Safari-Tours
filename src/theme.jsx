// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change this to your primary color
    },
    secondary: {
      main: '#dc004e', // Change this to your secondary color
    },
    error: {
      main: '#f44336', // Change this to your error color
    },
    background: {
      default: '#f5f5f5', // Default background color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Default font
  },
});

export default theme;
