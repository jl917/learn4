import React from 'react';
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import fs from 'fs';
import path from 'path';
import App from '../client/App';

const PORT = 8000;

const app = express();
app.use(express.static('dist', {index: 'aaa.html'}));

app.use('/*', (req, res, next) => {
  fs.readFile(path.resolve('./dist/client/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).send("Some error happened")
    }
    return res.send(data.replace('<div id="app"></div>', `<div id="app">${ReactDOMServer.renderToString(<App />)}</div>`))
  }) 
})

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
})
