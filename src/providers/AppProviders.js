import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { AuthProvider } from 'hooks/useAuth';
import { Provider } from 'react-redux';
import { store } from 'store';

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
            <AuthProvider>
              <GlobalStyle />
              {children}
            </AuthProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default AppProviders;