import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server";
import App from './App';

export const render = (url: any) => renderToString(
  <StaticRouter location={url}>
    <App />
  </StaticRouter>
)