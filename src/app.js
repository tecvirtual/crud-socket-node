import express from 'express'
import morgan from 'morgan'
import { Server as WebSocketServer } from 'socket.io'
import http from 'http'
import { v4 as uuid } from 'uuid';

const app = express()

app.use(express.json())
app.use(morgan('dev'))

/*app.get('/', (req, res) => {
    res.json('hello world')
})*/

app.use(express.static(__dirname + '/public'))

const server = http.createServer(app)
const io = new WebSocketServer(server)

let notes = []

io.on('connection', (socket) => {
    console.log('new conection', socket.id)

    socket.emit('server:load_notes', notes)

    socket.on('client:new_note', data => {
        
        const note = { ...data, id: uuid() }

        console.log(note)

        notes.push(note)

        socket.emit('server:new_note', note)
    })

    socket.on('client:delete_note', id => {
        notes = notes.filter((note) => note.id !== id)
        socket.emit('server:load_notes', notes)
    })
})

export default server;