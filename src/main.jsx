import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import UpdateContextProvider from './context/updateContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UpdateContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UpdateContextProvider>
  </React.StrictMode>
);
