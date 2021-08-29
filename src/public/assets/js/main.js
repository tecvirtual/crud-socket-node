

const form_note =  document.querySelector('#form_note')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

form_note.addEventListener('submit', e => {
    e.preventDefault()

    saveNote(title.value, description.value)
})