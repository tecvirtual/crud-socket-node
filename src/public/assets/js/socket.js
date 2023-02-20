const socket = io()

const saveNote = (title, description) => {
    socket.emit('client:new_note', {
        title : title,
        description : description
    })
}

const deleteNote = (id) => {
    socket.emit('client:delete_note', id)
}

socket.on('server:new_note', data => {
    appendNote(data)
})

//socket.on('server:new_note', appendNote)

socket.on('server:load_notes', notes => {
    renderNotes(notes)
})

