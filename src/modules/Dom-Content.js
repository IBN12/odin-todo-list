import { InputTodo } from "./TodoContent";
import { InputProject } from "./ProjectContent";
import { InputNotes } from "./NoteContent";
import { DisplayProjects } from "./DisplayProjects";
import { DisplayNotes } from "./DisplayNotes";
import { ViewTodos } from "./DisplayTodos"; 


// InitializeDomContent(): Initalizing all dom dontent for the application. 
export function InitializeDomContent(){
    MainTitle();

    MainScreen(); 

    ButtonSection();

    InputSection();
}

// MainTitle(): The main title for the application.
function MainTitle(){
    const mainTitle = document.createElement('h1');
    mainTitle.classList.add('main-title'); 
    mainTitle.textContent = "The Todo List";

    const content = document.getElementById('content');
    
    content.appendChild(mainTitle); 
}

// MainScreen(): The main todo list screen.
function MainScreen(){
    const mainScreen = document.createElement('div');
    mainScreen.classList.add('main-screen');
    
    const content = document.getElementById('content'); 

    content.appendChild(mainScreen);
}

// ButtonSection(): The main button section for the todo list.
function ButtonSection(){
    const buttonSection = document.createElement('div');

    const mainScreen = document.querySelector('.main-screen');
    mainScreen.appendChild(buttonSection);

    TodoButton();

    ProjectButton(); 

    NotesButton();

    ViewTodosButton();
    
    ViewNotesButton(); 

    ViewProjectsButton();
}

// InputSection(): The main input section for the todo list.
function InputSection(){
    const inputSection = document.createElement('div');
    inputSection.textContent = "Create New Todo's";

    const mainScreen = document.querySelector('.main-screen');

    mainScreen.appendChild(inputSection);
}

// TodoButton(): The todo list button.
function TodoButton(){
    const todoButton = document.createElement('button');
    todoButton.textContent = 'New Todo';
    
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');
    buttonSection.appendChild(todoButton); 

    todoButton.addEventListener('click', InputTodo);
}

// ProjectButton(): The project button.
function ProjectButton(){
    const projectButton = document.createElement('button');
    projectButton.textContent = 'New Project';

    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)'); 
    buttonSection.appendChild(projectButton);

    projectButton.addEventListener('click', InputProject); 
}

// NotesButton(): The notes button. 
function NotesButton(){
    const notesButton = document.createElement('button');
    notesButton.textContent = "New Note";

    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');
    buttonSection.appendChild(notesButton);

    notesButton.addEventListener('click', InputNotes); 
}

// ViewTodosButton(): Button will allow the users to view all the current todos.
function ViewTodosButton(){
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');

    const viewTodosButton = document.createElement('button');
    viewTodosButton.textContent = 'View Todos';

    buttonSection.appendChild(viewTodosButton); 

    viewTodosButton.addEventListener('click', ViewTodos); 
}

// ViewNotesButton(): Button will allow the user to view all the current notes.
function ViewNotesButton(){
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');

    const viewNotesButton = document.createElement('button');
    viewNotesButton.textContent = 'View Notes';
    viewNotesButton.addEventListener('click', DisplayNotes);

    buttonSection.appendChild(viewNotesButton);
}

// ViewProjectsButton(): Button will allow the user to view all the current projects.
function ViewProjectsButton(){
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');
    const viewProjectsButton = document.createElement('button');
    viewProjectsButton.textContent = 'View Projects';

    buttonSection.appendChild(viewProjectsButton); 

    viewProjectsButton.addEventListener('click', DisplayProjects); 
}