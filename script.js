//* Get references to DOM elements
const noteContainer = document.getElementById("container");
const noteInput = document.querySelector("textarea");

//& Function to create a new note when the create button is clicked
function createNote(e) {
    e.preventDefault();
    const text = noteInput.value;
    if (text === "") return;

    createNoteElement(text);
    noteInput.value = "";
    saveNotes();
}

//& Function to create a new note element with given text
function createNoteElement(text) {

    //* Create DOM elements for the new note
    const newNote = document.createElement("div");
    newNote.classList.add("note", "saved_note", "column");

    const noteTextParagraph = document.createElement("p");
    noteTextParagraph.textContent = text;

    const deleteNoteButton = document.createElement("button");
    deleteNoteButton.classList.add("btn", "delete");
    deleteNoteButton.textContent = "Borrar";
    deleteNoteButton.addEventListener("click", deleteNote);

    //* Append elements to the note container
    newNote.appendChild(noteTextParagraph);
    newNote.appendChild(deleteNoteButton);
    noteContainer.appendChild(newNote);
}

//& Function to save notes to localStorage
function saveNotes() {
    let notes = [...document.querySelectorAll(".note p")].map(note => note.textContent);
    localStorage.setItem("savedNotes", JSON.stringify(notes));
}

//& Function to delete a node
function deleteNote() {
    const note = this.parentElement;
    noteContainer.removeChild(note);
    saveNotes();
}

//& Function to load saved notes
function loadNotes() {
    let savedNotes = JSON.parse(localStorage.getItem("savedNotes")) || [];
    savedNotes.forEach(noteText => createNoteElement(noteText));
}

//* Load saved notes from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadNotes);