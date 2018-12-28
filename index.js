const fs = require('fs')
const http = require('http')
const stencil = require('@stencil/core/server')

// load the config
const config = stencil.loadConfig(__dirname)

// ensure ssr flag is set on the config
config.flags = { ssr: true }

// create the renderer
const renderer = new stencil.Renderer(config)

// load the source index.html
const srcIndexHtml = fs.readFileSync(config.srcIndexHtml, 'utf8')

module.exports = (req, res) => {
  // hydrate!!
  renderer
    .hydrate({
      html: srcIndexHtml,
      req: req
    })
    .then(results => {
      // console log any diagnostics
      results.diagnostics.forEach(d => {
        console.log(d.messageText)
      })

      // respond with the hydrated html
      res.end(results.html)
    })
}
