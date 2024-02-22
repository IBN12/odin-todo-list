import { compareAsc, format } from "date-fns";
import { StoreTodos } from "../utils/InitialStorage";
import { ViewTodos } from "./DisplayTodos";

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
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    
    const todoForm = document.createElement('form');
    
    inputSection.appendChild(todoForm); 
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
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form'); 
    const todoName = document.getElementById('todo-name');
    const todoDescription = document.getElementById('todo-description'); 
    const lowPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(3)'); 
    let priority = "";

    const todoDueDate = document.getElementById('todo-due-date');
    console.log(todoDueDate.value); // Testing
    const dueDate = new Date(todoDueDate.value); 
    console.log(dueDate); // Testing 
    console.log('Date: ', dueDate.getDate() + 1); // Testing
    console.log('Year: ', dueDate.getFullYear()); // Testing
    console.log('Month: ', dueDate.getMonth()); // Testing
    console.log('\n'); // Testing

    const currentDate = new Date();
    console.log('Current Date: ', currentDate); // Testing
    console.log('Current Day Date: ', currentDate.getDate()); // Testing
    console.log('Current Year: ', currentDate.getFullYear()); // Testing
    console.log('Current Month: ', currentDate.getMonth()); // Testing 
    console.log('\n');

    // Test if the due date is ahead of the current date. 
    const result = compareAsc(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 
                   new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())); 
    console.log('Comparisons Result: ', result); // Testing
    console.log('\n'); // Testing

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
        console.log("There is an empty field, please fill it in."); // Testing
        return; 
    }

    if (result === 1)
    {
        const reformattedDueDate = format(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 'MMM-dd-yyyy');

        StoreTodos(todoName.value, todoDescription.value, reformattedDueDate, priority);

        lowPriority.classList.remove('priority-chosen');
        medPriority.classList.remove('priority-chosen');
        highPriority.classList.remove('priority-chosen');
        todoForm.reset();

        // ViewTodos();
    }
}


// ClearInputSection(): Clears the input section. 
function ClearInputSection(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    inputSection.replaceChildren(); 
}

// RemovePreviousSelectedButton(): Will the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttons = document.querySelectorAll('.main-screen > div:nth-child(1) > button');

    buttons.forEach((button) => button.classList.remove('current-button'));
}