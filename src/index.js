// import packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import react css styling package
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-image-gallery/styles/css/image-gallery.css";
import { ChakraProvider } from '@chakra-ui/react';

// use ReactDOM.render method to render a react element into the actual DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>  
  </React.StrictMode>
);