import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App'; // para ver el carrito de compras
//import App from './App'; // para ingresar al login
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
