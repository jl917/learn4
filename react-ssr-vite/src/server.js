const fs = require('fs')
const path = require('path')
const express = require('express')
const { createServer: createViteServer } = require('vite')

const isLocal = process.argv[2] === 'local';

async function createServer() {
  const app = express()
  if (!isLocal) {
    app.use(express.static(path.resolve(__dirname), { index: '_index.html' }));
  }

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    const url = req.originalUrl

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')

      template = await vite.transformIndexHtml(url, template)

      const { render } = await vite.ssrLoadModule('./index.server.tsx')

      const appHtml = await render(url)

      const html = template.replace(`<!--ssr-outlet-->`, appHtml)

      res.status(200).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      console.error(e)
      res.status(500).end(e.message)
    }
  })

  app.listen(3000, () => console.log('Server listening on port 3000'))
}

createServer()