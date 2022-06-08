import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { theme }  from './resources/theme/theme'
import Fonts from './resources/theme/foundations/Fonts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Fonts />
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();
