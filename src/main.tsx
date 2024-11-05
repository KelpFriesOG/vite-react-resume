import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from '@mui/material/styles';  // Import ThemeProvider
import CssBaseline from '@mui/material/CssBaseline';  // Import CssBaseline for consistent styling
import rusticTheme from './themes/rustic';  // Import your custom rustic theme

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={rusticTheme}>
      <CssBaseline /> {/* Normalizes styles across different browsers */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
