import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import App from './App';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);