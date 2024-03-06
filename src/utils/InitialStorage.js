import { DisplayProjects } from "../modules/Dom-Content";

// InitialStorage(): The initial local storage area for the application.
export function InitialStorage(){
    if (localStorage.length === 0)
    {
        localStorage.setItem('todos', JSON.stringify([]));
        localStorage.setItem('projects', JSON.stringify([])); 
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

// StoreEditedTodos(): Will store the edited todo content into the local storage.
export function StoreEditedTodos(todoName, todoDescription, todoDueDate, todoPriority, todoArray, indexToReplace){
    console.log('Edited Todo: ', todoName); // Testing
    console.log('Edited Todo Description: ', todoDescription); // Testing 
    console.log('Edited Todo Due Date: ', todoDueDate); // Testing
    console.log('Edited Todo Priority: ', todoPriority); 
    console.log('Todo Array: ', todoArray); // Testing 
    console.log('Index To Replace: ', indexToReplace); // Testing
    console.log('\n'); // Testing 

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
    console.log('Todo array after deletion',todoArray); // Testing 
    console.log('\n'); // Testing 

    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(todoArray)); 
}

// StoreProjects(): Will store the project into the local storage as an array. 
export function StoreProjects(project){
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');
    const displayProjects = document.querySelector('.main-screen > div:nth-child(1) > div');
    const projectArray = JSON.parse(localStorage.getItem('projects'));
    
    const projectObj = {
        projectName: project,
        todos: [], 
    };

    projectArray.push(projectObj);

    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(projectArray)); 

    buttonSection.removeChild(displayProjects); 

    DisplayProjects(); 
}