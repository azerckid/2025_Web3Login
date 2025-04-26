import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
