const express = require('express')
const cors = require('cors')
const http = require('http')

const routes = require('./routes/index.route')
const port = process.env.PORT || 4000

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Rižoto Template Demo API!')
})

app.use(cors())
app.use('/', routes)

const server = http.createServer(app)

server.on('listening', function () {
  console.log(`HTTP server listening at port ${port}`)
})

server.listen(port)

module.exports = { app }
