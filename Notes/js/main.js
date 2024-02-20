const addBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".noteList");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateNotes() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}
addBtn.addEventListener('click', ()=>{
    let notesList = document.createElement('p');
    let image = document.createElement('img');
    image.src="images/delete.png";
    notesList.className = "noteList";
    notesList.setAttribute('contenteditable','true');
    notesContainer.appendChild(notesList).appendChild(image);
})

notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateNotes();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".noteList");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateNotes();
            }
        })
    }
})

document.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})