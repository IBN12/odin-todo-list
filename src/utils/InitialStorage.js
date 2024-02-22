import { todos } from "./TodoArray";

// InitialStorage(): The initial local storage area for the application.
export function InitialStorage(){
    if (localStorage.length === 0)
    {
        localStorage.setItem('todos', JSON.stringify([]));
    } 
}

// StoreTodos(): Will store todos into the local storage. 
export function StoreTodos(todoName, todoDescription, todoDueDate, todoPriority){
    console.log('Todo Name: ', todoName); // Testing
    console.log('Todo Description: ', todoDescription); // Testing
    console.log('Todo Due Date: ', todoDueDate); // Testing
    console.log('Todo Priority: ', todoPriority); // Testing
    console.log('\n'); // Testing 

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