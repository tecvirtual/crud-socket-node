const socket = io()

const form_note =  document.querySelector('#form_note')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

const notes = document.querySelector('#notes')

form_note.addEventListener('submit', e => {
    e.preventDefault()

    socket.emit('client:new_note', {
        title : title.value,
        description: description.value
    })

    socket.on('server:new_note', data => {
        notes.innerHTML += data
    })
})