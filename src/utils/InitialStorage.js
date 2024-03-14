import { DisplayProjects } from "../modules/Dom-Content";
import { DisplayProjectTodos } from "../modules/DisplayProjectTodos";
import { AddTodoToProject } from "../modules/ProjectContent";
import { DeleteProject } from "../modules/ProjectContent";

import { projectMatcher } from "./ProjectMatcher";
import { EnableButtons } from "./ButtonActivation";

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

// StoreTodoProjects(): Will store the edited todo 
export function StoreEditedTodoProjects(todoName, todoDescription, todoDueDate, todoPriority){
    const projectArray = JSON.parse(localStorage.getItem('projects'));

    console.log('Project Array: ', projectArray); // Testing
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
    console.log(e.target.parentNode.parentNode.childNodes[0].textContent); // Testing
    const deleteName = e.target.parentNode.parentNode.childNodes[0].textContent;
    console.log(e); // Testing 
    console.log('\n'); // Testing

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
    
    const projectSection = document.querySelector('.project-section');
    projectSection.replaceChildren(); 
    AddTodoToProject();
    DisplayProjectTodos();
}

// DeleteStoredProject(): Delete the current stored project that the user clicked on. 
export function DeleteStoredProject(){
    const displayAllProjects = document.querySelectorAll('.main-screen > div:nth-child(1) > div > button');
    const projectSection = document.querySelector('.project-section');
    const content = document.getElementById('content'); 
    const deleteProjectWindow = document.querySelector('.delete-project-window');
    const mainScreen = document.querySelector('.main-screen');
    const projectArray = JSON.parse(localStorage.getItem('projects'));

    projectArray.forEach((project, index) => {
        if (project.projectName === projectMatcher.matcher)
        {
            projectArray.splice(index, 1);
        }
    });

    displayAllProjects.forEach((button) => {
        if (button.textContent === projectMatcher.matcher)
        {
            const displayProjectContainer = document.querySelector('.main-screen > div:nth-child(1) > div');
            displayProjectContainer.removeChild(button); 
        }
    }); 

    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(projectArray));

    if (projectArray.length !== 0)
    {
        const firstProject = projectArray[0];
        projectMatcher.matcher = firstProject.projectName;

        displayAllProjects.forEach((button) => {
            if (button.textContent === projectMatcher.matcher)
            {
                button.classList.add('current-button'); 
            }
            else
            {
                button.classList.remove('current-button');
            }
        });

        content.removeChild(deleteProjectWindow); 

        projectSection.replaceChildren(); 

        mainScreen.removeAttribute('style');
        mainScreen.classList.remove('disable-clicker');
        EnableButtons();

        AddTodoToProject();
        DeleteProject();
        DisplayProjectTodos(); 
    }  
    // Note: Implement an else statement if the 'projectArray' is empty. 
}