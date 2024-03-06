import windowCloseImg from '../images/window-close.svg';

import { EditTodo, DeleteTodo } from './TodoContent';

import { DisableButtons, EnableButtons } from '../utils/ButtonActivation';

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
function Todos(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');

    const todoSection = document.createElement('div');
    todoSection.classList.add('todo-section'); 
    
    inputSection.appendChild(todoSection); 

    const todos = JSON.parse(localStorage.getItem('todos')); 
    console.log('Todos on display: ', todos); // Testing
    console.log('\n'); // Testing

    todos.forEach((todo, index) => {
        const todoRow = document.createElement('div');
        todoRow.dataset.userTodo = index; 
        
        const todoName = document.createElement('div');
        todoName.textContent = `${todo.name}`;

        const todoDescription = document.createElement('button');
        todoDescription.textContent = 'Details';
        todoDescription.addEventListener('click', TodoDescription); 

        const editTodo = document.createElement('button');
        editTodo.textContent = 'Edit';
        editTodo.addEventListener('click', EditTodo);

        const deleteTodo = document.createElement('button');
        deleteTodo.textContent = `Del`;
        deleteTodo.addEventListener('click', DeleteTodo);

        todoRow.appendChild(todoName);
        todoRow.appendChild(todoDescription);
        todoRow.appendChild(editTodo); 
        todoRow.appendChild(deleteTodo);  

        todoSection.appendChild(todoRow); 
    });
}

// TodoDescription(): Will display the details about the todo.
function TodoDescription(e){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen'); 

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
        if (todo.name === e.target.parentNode.children[0].textContent)
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

    mainScreen.setAttribute('style', 'filter: blur(10px);'); // Blur the background 
    mainScreen.classList.add('disable-clicker'); 
    DisableButtons();

    content.appendChild(todoDescriptionWindow);

    closeButtonImage.addEventListener('click', RemoveTodoDescription);
}

// RemoveTodoDescription(): Will remove the todo description window
function RemoveTodoDescription(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const todoDescriptionWindow = document.querySelector('.todo-description-window');
    const closeButtonImage = document.querySelector('.todo-description-window > div:nth-child(1) > img[src]');
    
    content.removeChild(todoDescriptionWindow); 

    mainScreen.removeAttribute('style'); // Remove blur background
    mainScreen.classList.remove('disable-clicker'); 
    EnableButtons(); 

    closeButtonImage.removeEventListener('click', RemoveTodoDescription);
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