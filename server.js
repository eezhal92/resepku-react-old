import express from 'express'
import compression from 'compression'
import path from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './src/modules/routes'

var app = express()

app.use(compression())
// serve static files
app.use(express.static(path.join(__dirname, 'public')))

// send  all request to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  // res.sendFile(path.join(__dirname, 'public', 'index.html'))
  match(({ routes: routes, location: req.url }, (err, redirect, props) => {
    const appHtml = renderToString(<RouterContext {...props} />)

    res.send(renderPage(appHtml))
  }))
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
      <head>
        <meta charset="utf-8" />
        <title>My First React Iso</title>
      </head>
      <body>
        <div id="app">${appHtml}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}

var port = process.env.PORT || 8081
app.listen(port, function () {
    console.log('Production Express Server running on port : ' + port)
})
