import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import App from './App';

hydrate(
  <BrowserRouter>
  <ul>
      <li>
          <Link to="/">main</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/product">product</Link>
        </li>
      </ul>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);