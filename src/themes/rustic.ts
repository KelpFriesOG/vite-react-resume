// rusticTheme.ts
import { createTheme } from '@mui/material/styles';

const rusticTheme = createTheme({
  
    typography: {
        fontFamily: `'Roboto Slab', 'Georgia', serif`, // Use Google Font with web-safe fallbacks
        h1: {
          fontFamily: `'Roboto Slab', 'Trebuchet MS', sans-serif`,
          fontWeight: 600,
        },
        button: {
          fontFamily: `'Roboto Slab', 'Verdana', sans-serif`,
          textTransform: 'none',
        },
        body1: {
          fontFamily: `'Roboto Slab', 'Arial', sans-serif`,
          fontSize: '1rem',
          color: '#333',
        },
    },
  
    palette: {
    primary: {
      main: '#6E4D43', // Dark warm brown
      light: '#A48A69',
      dark: '#475445',
      contrastText: '#DCCEB7', // Light beige for contrast
    },
    secondary: {
      main: '#35402B', // Deep green
      light: '#475445',
      dark: '#242A18',
      contrastText: '#ffffff', // White for text contrast on buttons
    },
    background: {
      default: '#DCCEB7', // Light beige as background
      paper: '#A48A69',   // Mid-brown for cards
    },
    text: {
      primary: '#6E4D43', // Dark warm brown for primary text
      secondary: '#35402B', // Green for secondary text
    },
  },
});

export default rusticTheme;