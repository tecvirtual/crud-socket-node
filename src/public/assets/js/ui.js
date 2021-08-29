const notesList = document.querySelector('#notes')

const appendNote = note => {
    notesList.innerHTML += `
    <div class="card card-body rounded-2 mb-2">
    <div class="d-flex justify-content-between">
        <h3>${note.title}</h3>
        <div>
            <button class="btn btn-danger"> Delete </button>
            <button class="btn btn-info"> Update </button>
        </div>
    </div>
    <p>${note.description}</p>
</div>   `
   
    
}