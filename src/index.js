import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from 'components/App';

import { store } from './redux/store';
import { Provider } from 'react-redux';

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    text: '#2a2a2a',
    background: '#e9edff',
    primary: '#2b3162',
    secondary: '#1a236a;',
    accent: '#0000ff',
    gray: '#a0a0a0',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
