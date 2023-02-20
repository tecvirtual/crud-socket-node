const notesList = document.querySelector('#notes')

const noteUI = note => {

    const div = document.createElement("div")

    div.innerHTML = `
    <div class="card card-body rounded-2 mb-2">
    <div class="d-flex justify-content-between">
        <h3>${note.title}</h3>
        <div>
            <button class="btn btn-danger delete" data-id="${note.id}"> Delete </button>
            <button class="btn btn-info update" data-id="${note.id}"> Update </button>
        </div>
    </div>
    <p>${note.description}</p>
</div>   `
   
    const btnDelete = div.querySelector(".delete")

    btnDelete.addEventListener('click', () => {
        deleteNote(btnDelete.dataset.id)
    })

    return div
}

const renderNotes = notes => {
    notesList.innerHTML = ''
    notes.forEach((note) => {
        notesList.append(noteUI(note))
    });
}

const appendNote = note => {
    notesList.append(noteUI(note))
}