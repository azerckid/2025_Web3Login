import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import { ThemeProvider, useThemeContext } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { router } from './routes';

const ThemedApp = () => {
  const { isDarkMode } = useThemeContext();

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </StyledThemeProvider>
  );
};

const Root = () => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <AuthProvider>
          <ThemedApp />
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Root />);
