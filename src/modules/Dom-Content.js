import { InputTodo } from "./TodoContent";

// InitializeDomContent(): Initalizing all dom dontent for the application. 
export function InitializeDomContent(){
    MainTitle();

    MainScreen(); 

    ButtonSection();

    InputSection();
}

// MainTitle(): The main title for the application.
function MainTitle(){
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "The Todo List";

    const content = document.getElementById('content');
    
    content.appendChild(mainTitle); 
}

// MainScreen(): The main todo list screen.
function MainScreen(){
    const mainScreen = document.createElement('div');
    mainScreen.classList.add('main-screen');
    
    const content = document.getElementById('content'); 

    content.appendChild(mainScreen);
}

// ButtonSection(): The main button section for the todo list.
function ButtonSection(){
    const buttonSection = document.createElement('div');

    const mainScreen = document.querySelector('.main-screen');
    mainScreen.appendChild(buttonSection);

    TodoButton();

    ProjectButton(); 
}

// InputSection(): The main input section for the todo list.
function InputSection(){
    const inputSection = document.createElement('div');
    inputSection.textContent = "Create New Todo's";

    const mainScreen = document.querySelector('.main-screen');

    mainScreen.appendChild(inputSection);
}

// TodoButton(): The todo list button.
function TodoButton(){
    const todoButton = document.createElement('button');
    todoButton.textContent = 'New Todo';
    
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');
    buttonSection.appendChild(todoButton); 

    todoButton.addEventListener('click', InputTodo);
}

function ProjectButton(){
    const projectButton = document.createElement('button');
    projectButton.textContent = 'New Project';

    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)'); 
    buttonSection.appendChild(projectButton);
}