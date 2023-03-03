//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: createTodo.js
// Description: Will allow the user to create new todos.
// Notes:
// -> We want to display the todo data in the home display window. This will probably be done by using local storage. 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import parse from "date-fns/parse";
import compareAsc from "date-fns/compareAsc";
import {populateStorage}  from "./local-storage";
import { DisplayTodoList } from "./DOM-Contnet";

// CreateTodo Factory Function: Contains all the data from the form controls for each todo.
export const CreateTodo = () => {
    const todoName = document.querySelector('#todo-name').value;
    const todoDescription = document.querySelector('#todo-description').value;
    const todoDueDate = document.querySelector('#todo-due-date').value;
    const todoPriority = document.querySelector('#todo-priority').value;

    return {todoName, todoDescription, todoDueDate, todoPriority};
}

// SumbitTodo(): Will submit the todo data.
export function SubmitTodo(e, todoList){
    e.preventDefault();
    const addWindow = document.querySelector('.add-window');
    const todoForm = document.querySelector('.add-window-todo-ui > form');
    console.log("The todo was submitted..."); // Testing

    const myTodo = CreateTodo();
    // Testing todoName, todoDescription, due date, and priorty values in the console.log().
    console.log(`Todo Name: ${myTodo.todoName} \nTodo Description: ${myTodo.todoDescription} \nDue Date: ${myTodo.todoDueDate} \nPriorty: ${myTodo.todoPriority}`);

    // Parsing the due date value.
    const myDueDateParsed =  parse(myTodo.todoDueDate, 'yyyy-MM-dd', new Date());
    console.log(`Due Date Parsed: ${myDueDateParsed}`); // Testing
    console.log(`Due Date Parsed Year: ${myDueDateParsed.getFullYear()}`); // Testing
    console.log(`Due Date Parsed Month: ${myDueDateParsed.getMonth() + 1}`); // Testing
    console.log(`Due Date Parsed Date: ${myDueDateParsed.getDate()}`); // Testing

    // Getting todays date.
    const todaysDate = new Date();
    console.log(`Todays Date: ${todaysDate}`); // Testing

    // Comparing the dates.
    const compareResult = compareAsc(new Date(myDueDateParsed.getFullYear(), myDueDateParsed.getMonth() + 1, myDueDateParsed.getDate()), new Date(todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()));
    console.log(`Date Comparison Result: ${compareResult}`); // Testing
    console.log('\n'); // Testing

    // Testing Logic: This logic will determine if the user can move forward to the local storage or not. The due date can't be behind the current date.
    if (compareResult === 1)
    {
        console.log('The due date is ahead...');
        console.log('Commence local storage...');
        // populateStorage();
        todoList.home.push(myTodo);
        localStorage.setItem('myTodoList', JSON.stringify(todoList));
       
        addWindow.classList.add('hide-window');
        todoForm.reset();
        DisplayTodoList();
    }
    else if (compareResult === -1)
    {
        console.log('The due date is behind...');
        console.log('Local storage will not commence...');
        todoForm.reset();
        // TODO NOTE: Make a window pop up telling the user that the date is not avaiable anymore and 
        // that they should update the date form control. 
    }
    else if (compareResult === 0)
    {
        console.log('The Dates are the same...');
        console.log('Commence local storage...');
        // populateStorage();
        todoList.home.push(myTodo);
        localStorage.setItem('myTodoList', JSON.stringify(todoList));
        
        addWindow.classList.add('hide-window');
        todoForm.reset();
        DisplayTodoList();
    }
    console.log('\n');
}