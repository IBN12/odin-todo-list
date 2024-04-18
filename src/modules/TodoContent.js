import { compareAsc, format } from "date-fns";
import { StoreTodos, StoreEditedTodos, DeleteStoredTodos } from "../utils/InitialStorage";
import { DisableButtons, EnableButtons } from "../utils/ButtonActivation";
import { ViewTodos } from "./DisplayTodos";
import { todoMatcher } from "../utils/TodoMatcher";
import windowCloseImage from '../images/window-close.svg';

// InputTodo(): Allows the user to input todo information.
export function InputTodo(e){
    ClearInputSection(); 
    RemovePreviousSelectedButton();

    e.target.classList.value = "current-button";

    TodoForm();
    TodoName(); 
    TodoDescription();
    TodoDueDate(); 
    TodoPriority(); 
    TodoSubmit();
}

// TodoForm(): Creates the todo form.
function TodoForm(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    
    const todoForm = document.createElement('form');
    
    displayScreen.appendChild(todoForm); 
}

// TodoName(): The todo name section.
function TodoName(){
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form');

    const todoFormSectionOne = document.createElement('div');
    const todoNameLabel = document.createElement('label');
    todoNameLabel.textContent = "Name";
    todoNameLabel.setAttribute('for', 'todo-name');
    const todoName = document.createElement('input');
    todoName.setAttribute('type', 'text');
    todoName.setAttribute('id', 'todo-name');
    todoName.setAttribute('name', 'todo-name');
    todoName.setAttribute('maxLength', '20'); 

    todoFormSectionOne.appendChild(todoNameLabel);
    todoFormSectionOne.appendChild(todoName); 

    todoForm.appendChild(todoFormSectionOne);
}

// TodoDescription(): The todo description section.
function TodoDescription(){
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form');
    
    const todoFormSectionTwo = document.createElement('div'); 
    const todoDescriptionLabel = document.createElement('label'); 
    todoDescriptionLabel.textContent = "Description";
    todoDescriptionLabel.setAttribute('for', 'todo-description');
    const todoDescription = document.createElement('textarea');
    todoDescription.classList.add('disable-resize'); 
    todoDescription.setAttribute('type', 'text');
    todoDescription.setAttribute('id', 'todo-description');
    todoDescription.setAttribute('name', 'todo-description');
    todoDescription.setAttribute('rows', '10');
    todoDescription.setAttribute('maxLength', '150'); 


    todoFormSectionTwo.appendChild(todoDescriptionLabel);
    todoFormSectionTwo.appendChild(todoDescription); 

    todoForm.appendChild(todoFormSectionTwo); 
}

// TodoDueDate(): The todo due date section.
function TodoDueDate(){
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form');

    const todoFormSectionThree = document.createElement('div');
    const todoDueDateLabel = document.createElement('label');
    todoDueDateLabel.textContent = "Due Date";
    todoDueDateLabel.setAttribute('for', 'todo-due-date');
    const todoDueDate = document.createElement('input');
    todoDueDate.setAttribute('type', 'date');
    todoDueDate.setAttribute('id', 'todo-due-date');
    todoDueDate.setAttribute('name', 'todo-due-date'); 

    todoFormSectionThree.appendChild(todoDueDateLabel); 
    todoFormSectionThree.appendChild(todoDueDate);

    todoForm.appendChild(todoFormSectionThree);
}

// TodoPriority(): The todo priority section. 
function TodoPriority(){
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form');

    const todoFormSectionFour = document.createElement('div');
    const todoPriorityLabel = document.createElement('h4');
    todoPriorityLabel.textContent = 'Priority'; 

    const todoPriority = document.createElement('div');
    const lowPriority = document.createElement('button');
    lowPriority.textContent = 'Low';
    lowPriority.setAttribute('type', 'button');
    const medPriority = document.createElement('button');
    medPriority.textContent = 'Med';
    medPriority.setAttribute('type', 'button');
    const highPriority = document.createElement('button'); 
    highPriority.textContent = 'High';
    highPriority.setAttribute('type', 'button'); 

    todoPriority.appendChild(lowPriority); 
    todoPriority.appendChild(medPriority); 
    todoPriority.appendChild(highPriority); 

    todoFormSectionFour.appendChild(todoPriorityLabel); 
    todoFormSectionFour.appendChild(todoPriority); 

    todoForm.appendChild(todoFormSectionFour);

    lowPriority.addEventListener('click', LowPriority);
    medPriority.addEventListener('click', MedPriority);
    highPriority.addEventListener('click', HighPriority); 
}

// LowPriority(): Low priority selection.
function LowPriority(e){
    const medPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(3)');
    
    medPriority.classList.remove('priority-chosen');
    highPriority.classList.remove('priority-chosen');

    e.target.classList.value = 'priority-chosen';
}

// MedPriority(): Med priority selection. 
function MedPriority(e){
    const lowPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(1)');
    const highPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(3)'); 

    lowPriority.classList.remove('priority-chosen');
    highPriority.classList.remove('priority-chosen'); 

    e.target.classList.value = 'priority-chosen';
}

// HighPriority(): High priority selection. 
function HighPriority(e){
    const lowPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(2)');

    lowPriority.classList.remove('priority-chosen');
    medPriority.classList.remove('priority-chosen'); 

    e.target.classList.value = 'priority-chosen'; 
}

// TodoSubmit(): The todo submit section.
function TodoSubmit(){
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form');

    const todoFormSectionFive = document.createElement('div');
    const todoSubmit = document.createElement('button');
    todoSubmit.textContent = "Submit";
    todoSubmit.setAttribute('type', 'submit'); 

    todoFormSectionFive.appendChild(todoSubmit); 

    todoForm.appendChild(todoFormSectionFive); 

    todoSubmit.addEventListener('click', SubmitData);
}

// SubmitData(): Submit the todo data into the initial storage.
function SubmitData(e){
    e.preventDefault(); 
    const errorContainer = document.createElement('div'); 
    errorContainer.classList.add('error-container');
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form'); 
    const todoName = document.getElementById('todo-name');
    const todoDescription = document.getElementById('todo-description'); 
    const lowPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(3)'); 
    let priority = "";

    // Test if the error container is inside in the todo form. 
    if (todoForm.classList.contains('contains-error-container'))
    {
        const previousErrorContainer = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(6)'); 
        todoForm.removeChild(previousErrorContainer); 
        todoForm.classList.remove('contains-error-container');  
    }

    const todoDueDate = document.getElementById('todo-due-date');
    const dueDate = new Date(todoDueDate.value); 

    const currentDate = new Date();

    // Test if the due date is ahead of the current date. 
    const result = compareAsc(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 
                   new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())); 

    if (lowPriority.classList.contains('priority-chosen'))
    {
        priority = "Low";
    }
    else if (medPriority.classList.contains('priority-chosen'))
    {
        priority = "Med";
    }
    else if (highPriority.classList.contains('priority-chosen'))
    {
        priority = "High"; 
    }

    if (todoName.value === "" || priority === "" || todoDescription.value === "" || todoDueDate.value === "")
    {
        if (todoName.value === "")
        {
            const todoNameError = document.createElement('div');
            todoNameError.textContent = 'Name field is missing...';
            errorContainer.appendChild(todoNameError); 
        }
        
        if (todoDescription.value === "")
        {
            const todoDescriptionError = document.createElement('div');
            todoDescriptionError.textContent = "Description field is missing...";
            errorContainer.appendChild(todoDescriptionError);
        }

        if (todoDueDate.value === "")
        {
            const todoDueDateError = document.createElement('div');
            todoDueDateError.textContent = "Due date field is missing..."; 
            errorContainer.appendChild(todoDueDateError); 
        }

        if (priority === "")
        {
            const priorityError = document.createElement('div'); 
            priorityError.textContent = "Priority field is missing..."; 
            errorContainer.appendChild(priorityError); 
        }

        todoForm.appendChild(errorContainer);  
        todoForm.classList.add('contains-error-container'); 
        return; 
    }

    if (result === 1 || result === 0) 
    {
        const reformattedDueDate = format(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 'MMM-dd-yyyy');

        StoreTodos(todoName.value, todoDescription.value, reformattedDueDate, priority);

        lowPriority.classList.remove('priority-chosen');
        medPriority.classList.remove('priority-chosen');
        highPriority.classList.remove('priority-chosen');
        todoForm.reset();
    }
    else if (result === -1)
    {
        const dueDateInvalid = document.createElement('div'); 
        dueDateInvalid.textContent = 'Due date older than current date...'; 
        errorContainer.appendChild(dueDateInvalid); 
        todoForm.classList.add('contains-error-container');
        todoForm.appendChild(errorContainer); 
        return; 
    }
}

// EditTodo(): Allows the user to edit the todo.
export function EditTodo(e){
    todoMatcher.matcher = e.target.parentNode.parentNode.children[0].textContent; 

    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const mainTitle = document.querySelector('.main-title'); 
    const editTodoWindow = document.createElement('div');
    editTodoWindow.classList.add('edit-todo-window'); 

    const closeContainer = document.createElement('div');
    const closeButtonImage = new Image();
    closeButtonImage.src = windowCloseImage;
    closeContainer.appendChild(closeButtonImage); 

    editTodoWindow.appendChild(closeContainer);

    const editForm = document.createElement('form');

    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach((todo) => {
        if (todo.name === e.target.parentNode.parentNode.children[0].textContent)
        {
            const editFormSectionOne = document.createElement('div');
            const editNameLabel = document.createElement('label');
            editNameLabel.setAttribute('for', 'edit-name');
            editNameLabel.textContent = 'Edit Name'; 
            const editNameInput = document.createElement('input');
            editNameInput.setAttribute('type', 'text');
            editNameInput.setAttribute('id', 'edit-name');
            editNameInput.setAttribute('name', 'edit-name');
            editNameInput.setAttribute('value', `${todo.name}`);
            editNameInput.setAttribute('maxLength', '20'); 
            editFormSectionOne.appendChild(editNameLabel);
            editFormSectionOne.appendChild(editNameInput); 

            const editFormSectionTwo = document.createElement('div');
            const editDescriptionLabel = document.createElement('label');
            editDescriptionLabel.setAttribute('for', 'edit-description');
            editDescriptionLabel.textContent = 'Edit Description';
            const editDescriptionInput = document.createElement('textarea');
            editDescriptionInput.classList.add('disable-resize'); 
            editDescriptionInput.setAttribute('type', 'text');
            editDescriptionInput.setAttribute('id', 'edit-description');
            editDescriptionInput.setAttribute('name', 'edit-description');
            editDescriptionInput.setAttribute('rows', '10'); 
            editDescriptionInput.setAttribute('maxLength', '150'); 
            editDescriptionInput.innerHTML = `${todo.description}`;
            editFormSectionTwo.appendChild(editDescriptionLabel);
            editFormSectionTwo.appendChild(editDescriptionInput); 

            const d = new Date(`${todo.dueDate}`); 
            let dMonth = String(d.getMonth() + 1); 
            let dYear = String(d.getFullYear());
            let dDate = String(d.getDate()); 
            if (d.getMonth() < 10)
            {
                dMonth = '0' + String(d.getMonth() + 1);
            }
            
            if (d.getDate() < 10)
            {
                dDate = '0' + String(d.getDate());
            }
    
            const editFormSectionThree = document.createElement('div');
            const editDueDateLabel = document.createElement('label');
            editDueDateLabel.setAttribute('for', 'edit-due-date');
            editDueDateLabel.textContent = 'Edit Due Date';
            const editDueDateInput = document.createElement('input');
            editDueDateInput.setAttribute('type', 'date'); 
            editDueDateInput.setAttribute('id', 'edit-due-date');
            editDueDateInput.setAttribute('name', 'edit-due-date');
            editDueDateInput.setAttribute('value', `${dYear}-${dMonth}-${dDate}`);
            editFormSectionThree.appendChild( editDueDateLabel);
            editFormSectionThree.appendChild(editDueDateInput); 

            const editFormSectionFour = document.createElement('div');
            const editPriorityLabel = document.createElement('h4');
            editPriorityLabel.textContent = "Edit Priority"; 
            const editPriority = document.createElement('div');
            const editLowButton = document.createElement('button');
            editLowButton.setAttribute('type', 'button');
            editLowButton.addEventListener('click', EditPriority)
            editLowButton.textContent = 'Low';
            const editMedButton = document.createElement('button');
            editMedButton.setAttribute('type', 'button');
            editMedButton.textContent = 'Med';
            editMedButton.addEventListener('click', EditPriority);
            const editHighButton = document.createElement('button');
            editHighButton.setAttribute('type', 'button');
            editHighButton.textContent ='High';
            editHighButton.addEventListener('click', EditPriority); 

            if (todo.priority === "Low")
            {
                editLowButton.classList.add('priority-chosen');
            }
            else if (todo.priority === 'Med')
            {
                editMedButton.classList.add('priority-chosen');
            }
            else if (todo.priority === 'High')
            {
                editHighButton.classList.add('priority-chosen'); 
            }
            editPriority.appendChild(editLowButton);
            editPriority.appendChild(editMedButton);
            editPriority.appendChild(editHighButton); 
            editFormSectionFour.appendChild(editPriorityLabel);
            editFormSectionFour.appendChild(editPriority);

            const editFormSectionFive = document.createElement('div');
            const editSubmitButton = document.createElement('button');
            editSubmitButton.textContent = "Submit"; 
            editSubmitButton.setAttribute('type', 'submit');
            editSubmitButton.addEventListener('click', SubmitEditedTodo);
            editFormSectionFive.appendChild(editSubmitButton);


            editForm.appendChild(editFormSectionOne);
            editForm.appendChild(editFormSectionTwo);
            editForm.appendChild(editFormSectionThree);
            editForm.appendChild(editFormSectionFour); 
            editForm.appendChild(editFormSectionFive); 
        }
    });

    mainScreen.setAttribute('style', 'filter: blur(10px);');
    mainTitle.setAttribute('style', 'filter: blur(10px);'); 
    mainScreen.classList.add('disable-clicker');
    DisableButtons();

    editTodoWindow.appendChild(editForm); 
    content.appendChild(editTodoWindow); 

    closeButtonImage.addEventListener('click', CloseEditTodoWindow);
}

// CloseEditTodoWindow(): Will remove the edit todo window. 
function CloseEditTodoWindow(e){
    const content = document.getElementById('content');
    const editTodoWindow = document.querySelector('.edit-todo-window');
    const mainScreen = document.querySelector('.main-screen');
    const mainTitle = document.querySelector('.main-title'); 
    const closeButtonImage = document.querySelector('.edit-todo-window > div:nth-child(1) > img[src]');

    mainScreen.removeAttribute('style'); 
    mainTitle.removeAttribute('style'); 
    mainScreen.classList.remove('disable-clicker');
    EnableButtons(); 

    content.removeChild(editTodoWindow); 

    closeButtonImage.removeEventListener('click', CloseEditTodoWindow); 
} 

// EditPriority(): Will allow the user to change the todo priority.
function EditPriority(e){
    const lowPriority = document.querySelector('.edit-todo-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.edit-todo-window > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.edit-todo-window > form > div:nth-child(4) > div > button:nth-child(3)'); 
    lowPriority.classList.remove('priority-chosen');
    medPriority.classList.remove('priority-chosen');
    highPriority.classList.remove('priority-chosen');

    e.target.classList.add('priority-chosen');
} 

// SubmitEditedTodo(): Submit edited todo back into the local storage.
function SubmitEditedTodo(e){
    e.preventDefault();

    const content = document.getElementById('content'); 
    const mainScreen = document.querySelector('.main-screen'); 
    const mainTitle = document.querySelector('.main-title');  
    const editTodoWindow = document.querySelector('.edit-todo-window'); 
    const editTodoForm = document.querySelector('.edit-todo-window > form'); 
    const editNameInput = document.getElementById('edit-name');
    const editDescriptionInput = document.getElementById('edit-description');
    const editDueDateInput = document.getElementById('edit-due-date');
    const editPriority = document.querySelectorAll('.edit-todo-window > form > div:nth-child(4) > div > button');
    const errorContainer = document.createElement('div'); 
    errorContainer.classList.add('error-container'); 
    let currentPriority = "";
    let indexToReplace = 0;

    const todos = JSON.parse(localStorage.getItem('todos'));

    if (editTodoForm.classList.contains('contains-error-container'))
    {
        const previousErrorContainer = document.querySelector('.edit-todo-window > form > div:nth-child(6)'); 
        editTodoForm.removeChild(previousErrorContainer); 
        editTodoForm.classList.remove('contains-error-container'); 
    }

    if (editNameInput.value === "" || editDescriptionInput.value === "" || editDueDateInput.value === "")
    {
        if (editNameInput.value === "")
        {
            const editNameInputError = document.createElement('div'); 
            editNameInputError.textContent = 'Name field is missing...'; 
            errorContainer.appendChild(editNameInputError); 
        }

        if (editDescriptionInput.value === "")
        {
            const editDescriptionInputError = document.createElement('div');
            editDescriptionInputError.textContent = 'Description field is missing...'; 
            errorContainer.appendChild(editDescriptionInputError); 
        }
        
        if (editDueDateInput.value === "")
        {
            const editDueDateInputError = document.createElement('div');
            editDueDateInputError.textContent = 'Due date field is missing...';
            errorContainer.appendChild(editDueDateInputError); 
        }

        editTodoForm.appendChild(errorContainer);
        editTodoForm.classList.add('contains-error-container');  
        return; 
    }

    const editedDueDate = new Date(editDueDateInput.value);

    const currentDate = new Date();

    const result = compareAsc(new Date(editedDueDate.getFullYear(), editedDueDate.getMonth(), editedDueDate.getDate() + 1),
                              new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));

    if (result === 1 || result === 0)
    {
        const reformattedDueDate = format(new Date(editedDueDate.getFullYear(), editedDueDate.getMonth(), editedDueDate.getDate() + 1), 'MMM-dd-yyyy');

        todos.forEach((todo, index) => {
            if (todo.name === todoMatcher.matcher)
            {
                indexToReplace = index;
            }
        });

        editPriority.forEach((priority) => {
            if (priority.classList.contains('priority-chosen'))
            {
                currentPriority = priority.innerHTML;
            }
        });

        StoreEditedTodos(editNameInput.value, editDescriptionInput.value, reformattedDueDate, currentPriority, todos, indexToReplace);
        content.removeChild(editTodoWindow);
        mainTitle.removeAttribute('style'); 
        mainScreen.removeAttribute('style'); 
        mainScreen.classList.remove('disable-clicker'); 
        EnableButtons();
        ViewTodos(e); 
    }
    else if (result === -1)
    {
        const invalidDueDate = document.createElement('div');
        invalidDueDate.textContent = "Due date is older than the current date..."; 
        errorContainer.appendChild(invalidDueDate); 
        editTodoForm.appendChild(errorContainer); 
        editTodoForm.classList.add('contains-error-container'); 
        return;  
    }
}

// DeleteTodo(): Will Delete the todo from the display and local storage.
export function DeleteTodo(e){
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach((todo, index) => {
        if (todo.name === e.target.parentNode.parentNode.childNodes[0].innerHTML)
        {
            todos.splice(index, 1);
        }
    });

    DeleteStoredTodos(todos); 
    ViewTodos(e);
}

// ClearInputSection(): Clears the input section. 
function ClearInputSection(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    inputSection.replaceChildren(); 
}

// RemovePreviousSelectedButton(): Will the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttons = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    const projects = document.querySelectorAll('.main-screen > div:nth-child(1) > div > button');

    buttons.forEach((button) => button.classList.remove('current-button'));
    projects.forEach((button) => button.classList.remove('current-button')); 
}