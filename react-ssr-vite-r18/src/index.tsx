import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('app'))

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);