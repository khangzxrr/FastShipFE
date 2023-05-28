import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { StrictMode } from "react";
const root = ReactDOM.createRoot(document.getElementById('root'));

const persistor = persistStore(store)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <StrictMode>
          <App />
        </StrictMode>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
