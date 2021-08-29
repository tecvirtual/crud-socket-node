const socket = io()

const saveNote = (title, description) => {
    socket.emit('client:new_note', {
        title : title,
        description : description
    })
}

socket.on('server:new_note', data => {
    appendNote(data)
})

//socket.on('server:new_note', appendNote)

