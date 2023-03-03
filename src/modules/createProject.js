//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: createProject.js
// Description: Will allow the user to create new projects.
// Notes: N/A
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { MainProjectDisplayScreen } from "./DOM-Contnet";

// CreateProject(): Factory function will return the project form controls value.
export const CreateProject = () => {
    const projectName = document.getElementById('project').value;

    return {projectName};
}

// SubmitProject(): Submits all project values from the project form.
export function SubmitProject(e, todoList) {
    e.preventDefault();
    console.log('The project was submitted...'); // Testing
    const projectForm = document.querySelector('.add-window-project-form');
    const addWindow = document.querySelector('.add-window');

    const newProject = CreateProject();
    console.log(`The value for the new project: ${newProject.projectName}`); // Testing

    todoList[newProject.projectName] = [];
    localStorage.setItem('myTodoList', JSON.stringify(todoList));

    addWindow.classList.add('hide-window');

    projectForm.reset();
    
    MainProjectDisplayScreen();
}