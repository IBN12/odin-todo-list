import deleteProjectImage from '../images/delete-forever.svg'; 
import backArrowImage from '../images/arrow-left.svg'; 
import addTodoImage from '../images/plus.svg';

import { projectMatcher } from '../utils/ProjectMatcher';
import { DeleteProjectWindow } from './ProjectContent';

import { AddTodoWindow } from './ProjectContent';
import { DisplayProjectTodos } from './DisplayProjectTodos';

// DisplayProjects(): Will display all the current user created projects.
export function DisplayProjects(e){
    ClearDisplayScreen();
    RemovePreviousSelectedButton(); 

    e.target.classList.add('current-button'); 

    ProjectsBeingDisplayed(); 
}

// ProjectsBeingDisplayed(): The projects will be displayed in the projects screen.
export function ProjectsBeingDisplayed(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');

    const projectsScreen = document.createElement('div');
    projectsScreen.classList.add('projects-screen');

    const projectArray = JSON.parse(localStorage.getItem('projects'));

    if (projectArray.length === 0)
    {
        const projectsMssg = document.createElement('div'); 
        projectsMssg.classList.add('projects-mssg'); 
        projectsMssg.textContent = "Add a new project by clicking on the New Project button.";
        projectsScreen.appendChild(projectsMssg); 
    }

    projectArray.forEach((project) => {
        const todoArray = project.todos;

        const projectContainer = document.createElement('div'); 

        const projectName = document.createElement('div');
        projectName.textContent = `${project.projectName}`;
        projectName.addEventListener('click', OpenProject);

        const projectMisc = document.createElement('div'); 

        const numOfTodos = document.createElement('div');
        numOfTodos.textContent = `Todos: ${todoArray.length}`; 

        const delProjectImg = new Image();
        delProjectImg.src = deleteProjectImage; 
        delProjectImg.addEventListener('click', DeleteProjectWindow);

        projectContainer.appendChild(projectName);
        projectContainer.appendChild(projectMisc); 
        projectMisc.appendChild(numOfTodos); 
        projectMisc.appendChild(delProjectImg);

        projectsScreen.appendChild(projectContainer);
    });

    displayScreen.appendChild(projectsScreen);
}

// OpenProject(): Will open the project in the projects being displayed. 
export function OpenProject(e){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    displayScreen.replaceChildren(); 

    projectMatcher.matcher = e.target.textContent; 

    ProjectPrompt(); 
}

// ProjectPrompt(): All the prompts associated with the project:
export function ProjectPrompt(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');

    const projectScreen = document.createElement('div');
    projectScreen.classList.add('project-screen'); 

    const projectArray = JSON.parse(localStorage.getItem('projects')); 

    projectArray.forEach((project) => {
        if (project.projectName === projectMatcher.matcher)
        {
            const projectPrompt = document.createElement('div'); 

            const backArrowImg = new Image();
            backArrowImg.src = backArrowImage;
            backArrowImg.addEventListener('click', BackToProjectsSection); 

            const projectName = document.createElement('div');
            projectName.textContent = `${projectMatcher.matcher}`; 
         
            const addTodoImg = new Image(); 
            addTodoImg.src = addTodoImage;
            addTodoImg.addEventListener('click', AddTodoWindow);

            projectPrompt.appendChild(backArrowImg);
            projectPrompt.appendChild(addTodoImg); 
            projectScreen.appendChild(projectName); 
            projectScreen.appendChild(projectPrompt); 
        }
    });

    displayScreen.appendChild(projectScreen); 

    DisplayProjectTodos();
}

// BackToProjectsSection(): Will take the user back to the projects section.
function BackToProjectsSection(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    displayScreen.replaceChildren(); 

    ProjectsBeingDisplayed(); 
}

// ClearDisplayScreen(): Will clear the display screen of any remaining data.
function ClearDisplayScreen(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    displayScreen.replaceChildren();
}

// RemovePreviousSelectedButton(): Will remove the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    buttonSection.forEach(button => button.classList.remove('current-button'));
}