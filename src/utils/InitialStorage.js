import { ProjectPrompt } from "../modules/DisplayProjects";
import { ProjectsBeingDisplayed } from "../modules/DisplayProjects";
import { NotesBeingDisplayed } from "../modules/DisplayNotes";

import { projectMatcher } from "./ProjectMatcher";
import { EnableButtons } from "./ButtonActivation";

// InitialStorage(): The initial local storage area for the application.
export function InitialStorage(){
    if (localStorage.length === 0)
    {
        localStorage.setItem('todos', JSON.stringify([]));
        localStorage.setItem('projects', JSON.stringify([])); 
        localStorage.setItem('notes', JSON.stringify([]));
    } 
}

// StoreTodos(): Will store todos into the local storage. 
export function StoreTodos(todoName, todoDescription, todoDueDate, todoPriority){
    const todoObj = {
        name: todoName,
        description: todoDescription,
        dueDate: todoDueDate,
        priority: todoPriority,
    }

    let todoArr = JSON.parse(localStorage.getItem('todos'));
    todoArr.push(todoObj); 
    localStorage.setItem('todos', JSON.stringify(todoArr));
}

// StoreEditedTodos(): Will store the edited todo content into the local storage.
export function StoreEditedTodos(todoName, todoDescription, todoDueDate, todoPriority, todoArray, indexToReplace){
    const todoObj = {
        name: todoName,
        description: todoDescription,
        dueDate: todoDueDate,
        priority: todoPriority,
    };

    todoArray[indexToReplace] = todoObj; 

    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(todoArray)); 
}

// DeleteStoredTodos(): Will Delete the stored todos in the local storage.
export function DeleteStoredTodos(todoArray){
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(todoArray)); 
}

// StoreProjects(): Will store the project into the local storage as an array. 
export function StoreProjects(project){
    const projectArray = JSON.parse(localStorage.getItem('projects'));
    
    const projectObj = {
        projectName: project,
        todos: [], 
    };

    projectArray.push(projectObj);

    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(projectArray)); 
}

// StoreTodoProjects(): Will store the edited todo 
export function StoreEditedTodoProjects(todoName, todoDescription, todoDueDate, todoPriority){
    const projectArray = JSON.parse(localStorage.getItem('projects'));
    projectArray.forEach((project) => {
        if (project.projectName === projectMatcher.matcher)
        {
            const todoArray = project.todos;

            todoArray[projectMatcher.editedTodoIndex] = {name: todoName, description: todoDescription, dueDate: todoDueDate, priority: todoPriority};

            project.todos = todoArray;
            
            localStorage.removeItem('projects');
        }
    });

    localStorage.setItem('projects', JSON.stringify(projectArray));
}

// DeleteStoredTodoProject(): Will delete the stored todo in the proeject section. 
export function DeleteStoredTodoProject(e){
    const deleteName = e.target.parentNode.parentNode.childNodes[0].textContent;

    const projectArray = JSON.parse(localStorage.getItem('projects'));
    projectArray.forEach((project) => {
        if (project.projectName === projectMatcher.matcher)
        {
            const todoArray = project.todos;

            todoArray.forEach((todo, index) => {
                if (todo.name === deleteName)
                {
                    todoArray.splice(index, 1);
                    project.todos = todoArray;

                    localStorage.removeItem('projects'); 
                }
            });
        }
    });

    localStorage.setItem('projects', JSON.stringify(projectArray));
    
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    displayScreen.replaceChildren(); 

    ProjectPrompt(); 
}

// DeleteStoredProject(): Delete the current stored project that the user clicked on. 
export function DeleteStoredProject(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)'); 
    const content = document.getElementById('content'); 
    const deleteProjectWindow = document.querySelector('.delete-project-window');
    const mainTitle = document.querySelector('.main-title'); 
    const mainScreen = document.querySelector('.main-screen');
    const projectArray = JSON.parse(localStorage.getItem('projects'));

    projectArray.forEach((project, index) => {
        if (project.projectName === projectMatcher.matcher)
        {
            projectArray.splice(index, 1);
        }
    });

    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(projectArray));

    content.removeChild(deleteProjectWindow); 

    displayScreen.replaceChildren(); 

    mainTitle.removeAttribute('style'); 
    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    EnableButtons();

    ProjectsBeingDisplayed(); 
}

// SubmitNote(): Will submit the note to the local storage. 
export function SubmitNoteToLocalStorage(e){
    e.preventDefault(); 
    const noteInput = document.getElementById('note-input');
    const noteForm = document.querySelector('.main-screen > div:nth-child(2) > form'); 
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-container'); 

    if (noteForm.classList.contains('contains-error-container'))
    {
        const previousErrorContainer = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(3)');
        noteForm.removeChild(previousErrorContainer); 
        noteForm.classList.remove('contains-error-container'); 
    }

    if (noteInput.value === "")
    {
        const noteInputError = document.createElement('div'); 
        noteInputError.textContent = 'Note field is missing....';
        errorContainer.appendChild(noteInputError);
        noteForm.appendChild(errorContainer); 
        noteForm.classList.add('contains-error-container'); 
        return; 
    }

    const noteObj = {
        note: noteInput.value,
    }


    const noteArray = JSON.parse(localStorage.getItem('notes'));
    noteArray.push(noteObj);

    localStorage.removeItem('notes');
    localStorage.setItem('notes', JSON.stringify(noteArray));

    noteForm.reset(); 
}

// DeleteNoteFromLocalStorage(): Will delete the note from the local storage. 
export function DeleteNoteFromLocalStorage(e){
    const currentNote = e.target.parentNode.nextSibling.textContent; 
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)'); 
    const noteArray = JSON.parse(localStorage.getItem('notes'));
    
    noteArray.forEach((note, index) => {
        if (note.note === currentNote)
        {
            noteArray.splice(index, 1); 
        }
    });

    localStorage.removeItem('notes');
    localStorage.setItem('notes', JSON.stringify(noteArray));

    displayScreen.replaceChildren(); 
    NotesBeingDisplayed(); 
}