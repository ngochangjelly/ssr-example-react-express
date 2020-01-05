import path from 'path';
import fs from 'fs'

import React from 'react';
import express from 'express'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App.js'

const PORT = process.env.PORT || 3006

const app = express()

// We tell Express to serve contents from the build directory as static files.
app.use(express.static('./build'))

app.get('/*', (req, res) => {
  // We use a method from ReactDOMServer, renderToString, to render our app to a static HTML string.
  const app = ReactDOMServer.renderToString(<App />)

  const indexFile = path.resolve('./build/index.html')
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('error!')
    }

    // We then read the static index.html file from the built client app, inject our app’s static content in the div with a root id and send that as the response to the request.
    return res.send(data.replace('<div id="root"></div>', `<div id="root>${app}</div>`))
  })
})

app.listen(`server is listening on port ${PORT}`)