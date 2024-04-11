import deleteNoteImage from '../images/delete-outline.svg'; 

import { DeleteNoteFromLocalStorage } from '../utils/InitialStorage';

// DisplayNotes(): Will control the flow of notes being displayed. 
export function DisplayNotes(e){
    ClearDisplayScreen();
    RemovePreviousSelectedButton(); 

    e.target.classList.value = 'current-button'; 

    NotesBeingDisplayed();
}

// NotesBeingDisplayed(): Will display all the user created notes. 
export function NotesBeingDisplayed(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)'); 
    
    const notesScreen = document.createElement('div');
    notesScreen.classList.add('notes-screen'); 

    const notesArray = JSON.parse(localStorage.getItem('notes')); 

    notesArray.forEach((noteObj) => {
        const noteContainer = document.createElement('div');

        const deleteNoteContainer = document.createElement('div');
        const deleteNote = new Image();
        deleteNote.src = deleteNoteImage; 
        deleteNoteContainer.appendChild(deleteNote); 
        deleteNote.addEventListener('click', DeleteNoteFromLocalStorage); 

        const note = document.createElement('div');
        note.textContent = `${noteObj.note}`;

        noteContainer.appendChild(deleteNoteContainer);
        noteContainer.appendChild(note); 
        notesScreen.appendChild(noteContainer);
    });
    
    displayScreen.appendChild(notesScreen); 
}

// ClearDisplayScreen(): Clear the display the screen of all the previous content.
function ClearDisplayScreen(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)'); 
    displayScreen.replaceChildren(); 
}

// RemovePreviousSelectedButton(): Will remove the selector from the previously selected button. 
function RemovePreviousSelectedButton(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button'); 
    
    buttonSection.forEach(button => button.classList.remove('current-button'));
}