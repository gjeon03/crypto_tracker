import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from 'styled-components';
import App from './App';
import {theme} from "./theme";
import {HelmetProvider} from "react-helmet-async";

const queryClient = new QueryClient();
const helmetContext = {};

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <HelmetProvider context={helmetContext}>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
