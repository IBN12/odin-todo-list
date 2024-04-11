import { EditTodo, DeleteTodo } from './TodoContent';

import { DisableButtons, EnableButtons } from '../utils/ButtonActivation';

import windowCloseImg from '../images/window-close.svg';
import descriptionTodoImage from '../images/note-outline.svg'; 
import editDescriptionTodoImage from '../images/note-edit-outline.svg'; 
import deleteTodoImage from '../images/delete-outline.svg';

// ViewTodos(): Will display all the todos in the application.
export function ViewTodos(e){
    ClearInputSection();
    RemovePreviousSelectedButton();

    e.target.classList.value = "current-button"; 
    const viewTodoButton = document.querySelector('.main-screen > div:nth-child(1) > button:nth-child(4)');
    viewTodoButton.classList.add('current-button'); // When (e) is not applicable. 

    Todos(); 
}

// Todos(): All the todos in the application. (Note: Called again after editing the todo.)
export function Todos(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');

    const todoSection = document.createElement('div');
    todoSection.classList.add('todo-screen'); 
    
    displayScreen.appendChild(todoSection); 

    const todos = JSON.parse(localStorage.getItem('todos')); 
    console.log('Todos on display: ', todos); // Testing
    console.log('\n'); // Testing

    todos.forEach((todo, index) => {
        const todoRow = document.createElement('div');
        todoRow.dataset.userTodo = index; 
        
        const todoName = document.createElement('div');
        todoName.textContent = `${todo.name}`;

        const todoMisc = document.createElement('div');

        const todoDescription = new Image();
        todoDescription.src = descriptionTodoImage;
        todoDescription.addEventListener('click', ViewTodoDescription); 

        const editTodo = new Image();
        editTodo.src = editDescriptionTodoImage;
        editTodo.addEventListener('click', EditTodo);

        const deleteTodo = new Image();
        deleteTodo.src = deleteTodoImage;
        deleteTodo.addEventListener('click', DeleteTodo);

        todoMisc.appendChild(todoDescription);
        todoMisc.appendChild(editTodo);
        todoMisc.appendChild(deleteTodo);
        todoRow.appendChild(todoName);
        todoRow.appendChild(todoMisc);  

        todoSection.appendChild(todoRow); 
    });
}

// TodoDescription(): Will display the details about the todo.
function ViewTodoDescription(e){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen'); 
    const mainTitle = document.querySelector('.main-title'); 

    const todoDescriptionWindow = document.createElement('div');
    todoDescriptionWindow.classList.add('todo-description-window');

    const closeContainer = document.createElement('div');
    const closeButtonImage = new Image();
    closeButtonImage.src = windowCloseImg;
    closeContainer.appendChild(closeButtonImage); 

    const detailsContainer = document.createElement('div');

    todoDescriptionWindow.appendChild(closeContainer);
    todoDescriptionWindow.appendChild(detailsContainer); 

    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach((todo) => {
        if (todo.name === e.target.parentNode.parentNode.children[0].textContent)
        {
            const detailsSectionOne = document.createElement('div');
            const descriptionTitle = document.createElement('div');
            descriptionTitle.textContent = 'Description:';
            const description = document.createElement('div');
            description.textContent = todo.description;
            detailsSectionOne.appendChild(descriptionTitle); 
            detailsSectionOne.appendChild(description);

            const detailsSectionTwo = document.createElement('div');
            const dueDateTitle = document.createElement('div');
            dueDateTitle.textContent = "Due Date:";
            const dueDate = document.createElement('div');
            dueDate.textContent = todo.dueDate;
            detailsSectionTwo.appendChild(dueDateTitle); 
            detailsSectionTwo.appendChild(dueDate);

            const detailsSectionThree = document.createElement('div');
            const priorityTitle = document.createElement('div');
            priorityTitle.textContent = "Priority:";
            const priority = document.createElement('div'); 
            priority.textContent = todo.priority;
            detailsSectionThree.appendChild(priorityTitle);
            detailsSectionThree.appendChild(priority); 

            detailsContainer.appendChild(detailsSectionOne);
            detailsContainer.appendChild(detailsSectionTwo);
            detailsContainer.appendChild(detailsSectionThree);
        }
    });

    mainTitle.setAttribute('style', 'filter: blur(10px);');
    mainScreen.setAttribute('style', 'filter: blur(10px);'); // Blur the background 
    mainScreen.classList.add('disable-clicker'); 
    DisableButtons();

    content.appendChild(todoDescriptionWindow);

    closeButtonImage.addEventListener('click', CloseTodoDescriptionWindow);
}

// CloseTodoDescriptionWindow(): Will remove the todo description window
function CloseTodoDescriptionWindow(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const mainTitle = document.querySelector('.main-title'); 
    const todoDescriptionWindow = document.querySelector('.todo-description-window');
    const closeButtonImage = document.querySelector('.todo-description-window > div:nth-child(1) > img[src]');
    
    content.removeChild(todoDescriptionWindow); 

    mainTitle.removeAttribute('style');  
    mainScreen.removeAttribute('style'); // Remove blur background
    mainScreen.classList.remove('disable-clicker'); 
    EnableButtons(); 

    closeButtonImage.removeEventListener('click', CloseTodoDescriptionWindow);
}

// ClearInputSection(): Clears the input section.
function ClearInputSection(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    inputSection.replaceChildren(); 
}

// RemovePreviousSelectedButton(): Will remove the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttons = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    const projects = document.querySelectorAll('.main-screen > div:nth-child(1) > div > button');
    
    buttons.forEach(button => button.classList.remove('current-button')); 
    projects.forEach(button => button.classList.remove('current-button')); 
}