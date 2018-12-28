const http = require('http')
const requestHandler = require('./index')

// create the server
const server = http.createServer(requestHandler)

// set which port the server will be listening on
const port = 3030

// start listening and handling requests
server.listen(port, () =>
  console.log(`server-side rendering listening on port: ${port}`)
)
