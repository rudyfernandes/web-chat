const http = require('http')
const express = require('express')
const app = express()
const servidorHttp = http.createServer(app)
const io = require('socket.io')(servidorHttp)


io.addListener('connection', (socket) => {
    console.log('concetado usuario')
    socket.addListener('nova mensagem', (msg) =>{
        io.emit('nova mensagem', msg)
    })
})

app.use(express.static('public'))

servidorHttp.listen(1000, 'localhost')
