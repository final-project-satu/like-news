import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import UpdateContextProvider from './context/updateContext.jsx';
import { Provider } from 'react-redux';
import store from './services/store.js';

ReactDOM.render(
  <React.StrictMode>
    <UpdateContextProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </UpdateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);