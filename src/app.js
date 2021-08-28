import express from 'express'
import morgan from 'morgan'
import { Server as WebSocketServer } from 'socket.io'
import http from 'http'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

/*app.get('/', (req, res) => {
    res.json('hello world')
})*/

app.use(express.static(__dirname + '/public'))

const server = http.createServer(app)
const io = new WebSocketServer(server)

io.on('connection', () => {
    console.log('new conection')
})

export default server;