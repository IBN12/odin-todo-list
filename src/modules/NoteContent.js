import { SubmitNoteToLocalStorage } from "../utils/InitialStorage";

// InputNote(): Will allow the user to input notes into the application.
export function InputNotes(e){
    ClearDisplayScreen(); 
    RemovePreviousSelectedButton(); 

    e.target.classList.value = 'current-button'; 

    NoteForm(); 
    NoteInput(); 
    NoteSubmit();
}

// NoteForm(): Creates the user note form.
function NoteForm(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    
    const noteForm = document.createElement('form');

    displayScreen.appendChild(noteForm); 
}

// NoteInput(): Creates the the user input for notes. 
function NoteInput(){
    const noteForm = document.querySelector('.main-screen > div:nth-child(2) > form'); 

    const noteFormSectionOne = document.createElement('div');
    const noteInputLabel = document.createElement('label');
    noteInputLabel.textContent = 'Enter Notes';
    noteInputLabel.setAttribute('for', 'note-input');
    const noteInput = document.createElement('textarea');
    noteInput.classList.add('disable-resize'); 
    noteInput.setAttribute('type', 'text');
    noteInput.setAttribute('name', 'note-input');
    noteInput.setAttribute('id', 'note-input'); 
    noteInput.setAttribute('rows', '10');
    noteInput.setAttribute('maxLength', '200');

    noteFormSectionOne.appendChild(noteInputLabel);
    noteFormSectionOne.appendChild(noteInput);

    noteForm.appendChild(noteFormSectionOne); 
}

// NoteSubmit(): Creates the submit button. 
function NoteSubmit(){
    const noteForm = document.querySelector('.main-screen > div:nth-child(2) > form');
    
    const noteFormSectionTwo = document.createElement('div');
    const noteSubmit = document.createElement('button');
    noteSubmit.textContent = 'Submit'; 
    noteSubmit.setAttribute('type', 'submit');
    noteSubmit.addEventListener('click', SubmitNoteToLocalStorage); 

    noteFormSectionTwo.appendChild(noteSubmit);

    noteForm.appendChild(noteFormSectionTwo);
}

// ClearInputSection(): Clears the input section
function ClearDisplayScreen(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    displayScreen.replaceChildren(); 
}

// RemovePreviousSelectedButton(): Will remove the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    buttonSection.forEach(button => button.classList.remove('current-button'));
}