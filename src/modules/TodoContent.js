// InputTodo(): Allows the user to input todo information.
export function InputTodo(e){
    e.target.classList.value = "current-button";

    const inputSection = document.querySelector('.main-screen > div:nth-child(2)'); 
    inputSection.textContent = ""; 

    const todoForm = document.createElement('form');
    inputSection.appendChild(todoForm);

    TodoName(); 
    TodoDescription();
    TodoDueDate(); 
    TodoPriority(); 
    TodoSubmit();
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
    todoDescription.setAttribute('type', 'text');
    todoDescription.setAttribute('id', 'todo-description');
    todoDescription.setAttribute('name', 'todo-description');

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
    const medPriority = document.createElement('button');
    medPriority.textContent = 'Med';
    const highPriority = document.createElement('button'); 
    highPriority.textContent = 'High';

    todoPriority.appendChild(lowPriority); 
    todoPriority.appendChild(medPriority); 
    todoPriority.appendChild(highPriority); 

    todoFormSectionFour.appendChild(todoPriorityLabel); 
    todoFormSectionFour.appendChild(todoPriority); 

    todoForm.appendChild(todoFormSectionFour);
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
}