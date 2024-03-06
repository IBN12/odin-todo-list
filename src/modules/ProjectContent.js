import { StoreProjects } from "../utils/InitialStorage";
import { todoMatcher } from "../utils/TodoMatcher";
import { DisableButtons, EnableButtons } from "../utils/ButtonActivation";
import { compareAsc, format } from "date-fns";

import plusButtonImage from '../images/plus.svg'; 
import windowCloseImage from '../images/window-close.svg';

import { DisplayProjectTodos } from "./DisplayProjectTodos";

// InputProject(): Allows the user to input project information. 
export function InputProject(e){
    ClearInputSection();
    RemovePreviousSelectedButton();

    e.target.classList.value = "current-button"; 

    ProjectForm();
    ProjectName(); 
    ProjectSubmit();
}

// ProjectForm(): Creates the user project form.
function ProjectForm(){
    const inputScreen = document.querySelector('.main-screen > div:nth-child(2)');
    
    const projectForm = document.createElement('form');
    
    inputScreen.appendChild(projectForm); 
}

// ProjectName(): Creates the user project input for the name.
function ProjectName(){
    const projectForm = document.querySelector('.main-screen > div:nth-child(2) > form');

    const projectFormSectionOne = document.createElement('div');

    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = "Project Name";
    projectNameLabel.setAttribute('for', 'project-name');
    const projectName = document.createElement('input'); 
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('id', 'project-name');
    projectName.setAttribute('name', 'project-name');

    projectFormSectionOne.appendChild(projectNameLabel);
    projectFormSectionOne.appendChild(projectName); 

    projectForm.appendChild(projectFormSectionOne); 
}

// ProjectSubmit(): Creates the user project submit button.
function ProjectSubmit(){
    const projectForm = document.querySelector('.main-screen > div:nth-child(2) > form');
    
    const projectFormSectionTwo = document.createElement('div'); 
    const projectSubmit = document.createElement('button');
    projectSubmit.textContent = "Submit"; 
    projectSubmit.setAttribute('type', 'submit');
    
    projectFormSectionTwo.appendChild(projectSubmit); 

    projectForm.appendChild(projectFormSectionTwo); 

    projectSubmit.addEventListener('click', ProjectSubmitted);
}

// ProjectSubmitted(): Submitting the project into the local storage.
function ProjectSubmitted(e){
    e.preventDefault();
    console.log(e); // Testing
    console.log(e.target); // Testing 

    const projectForm = document.querySelector('.main-screen > div:nth-child(2) > form');
    const projectName = document.getElementById('project-name');
    StoreProjects(projectName.value);

    projectForm.reset();
}

// ProjectClicked(): Brings up the project content when clicked in the display projects section.
export function ProjectClicked(e){
    console.log(e); // Testing
    console.log(e.target); // Testing
    console.log('\n'); // Testing
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)'); 

    todoMatcher.matcher = e.target.textContent; 

    ClearInputSection();
    RemovePreviousSelectedButton(); 

    e.target.classList.add('current-button'); 

    // Todo: Add project content from the project that the user has clicked on in here.
    // Note: You may be able to put this into a different function.
    // Note: 3-5-2024 ~ You will showcase all the todos from each project here. 
    const projectSection = document.createElement('div');
    projectSection.classList.add('project-section');
    
    inputSection.appendChild(projectSection); 

    AddTodoToProject();

    DisplayProjectTodos(); 
}

// AddTodoToProject(): The add todo plus button will add todos to the project.  
function AddTodoToProject(){
    const projectSection = document.querySelector('.project-section'); 
    const addTodoContainer = document.createElement('div');
    const addTodoButton = new Image();
    addTodoButton.src = plusButtonImage;
    addTodoContainer.appendChild(addTodoButton); 
    projectSection.appendChild(addTodoContainer); 

    addTodoButton.addEventListener('click', AddTodoWindow);
}

// AddTodo(): The add todo window will showcase all the form fields to add the todo content to the project. 
function AddTodoWindow(e){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const addTodoWindow = document.createElement('div');
    addTodoWindow.classList.add('add-todo-window'); 

    content.appendChild(addTodoWindow);

    const closeButtonContainer = document.createElement('div');
    const closeButtonImage = new Image(); 
    closeButtonImage.src = windowCloseImage;
    closeButtonContainer.appendChild(closeButtonImage); 

    const addTodoForm = document.createElement('form');

    const addTodoSectionOne = document.createElement('div');
    const addTodoNameLabel = document.createElement('label');
    addTodoNameLabel.textContent = "Name";
    addTodoNameLabel.setAttribute('for', 'add-todo-name');
    const addTodoName = document.createElement('input');
    addTodoName.setAttribute('type', 'text');
    addTodoName.setAttribute('id', 'add-todo-name');
    addTodoName.setAttribute('name', 'add-todo-name'); 
    addTodoSectionOne.appendChild(addTodoNameLabel);
    addTodoSectionOne.appendChild(addTodoName); 

    const addTodoSectionTwo = document.createElement('div');
    const addTodoDescriptionLabel = document.createElement('label');
    addTodoDescriptionLabel.textContent  = "Description";
    addTodoDescriptionLabel.setAttribute('for', 'add-todo-description');
    const addTodoDescription = document.createElement('textarea');
    addTodoDescription.setAttribute('type', 'text');
    addTodoDescription.setAttribute('id', 'add-todo-description'); 
    addTodoDescription.setAttribute('name', 'add-todo-description'); 
    addTodoSectionTwo.appendChild(addTodoDescriptionLabel);
    addTodoSectionTwo.appendChild(addTodoDescription); 

    const addTodoSectionThree = document.createElement('div');
    const addTodoDueDateLabel = document.createElement('label');
    addTodoDueDateLabel.textContent = "Due Date";
    addTodoDueDateLabel.setAttribute('for', 'add-todo-due-date');
    const addTodoDueDate = document.createElement('input');
    addTodoDueDate.setAttribute('type', 'date');
    addTodoDueDate.setAttribute('id', 'add-todo-due-date');
    addTodoDueDate.setAttribute('name', 'add-todo-due-date');
    addTodoSectionThree.appendChild(addTodoDueDateLabel);
    addTodoSectionThree.appendChild(addTodoDueDate); 

    const addTodoSectionFour = document.createElement('div');
    const addTodoPriorityLabel = document.createElement('h4'); 
    addTodoPriorityLabel.textContent = "Priority"; 
    const addTodoPriority = document.createElement('div');
    const lowPriority = document.createElement('button');
    lowPriority.textContent = 'Low';
    lowPriority.setAttribute('type', 'button');
    lowPriority.addEventListener('click', AddLowPriority);
    const medPriority = document.createElement('button');
    medPriority.textContent = 'Med';
    medPriority.setAttribute('type', 'button');
    medPriority.addEventListener('click', AddMedPriority); 
    const highPriority = document.createElement('button');
    highPriority.textContent = 'High';
    highPriority.setAttribute('type', 'button');
    highPriority.addEventListener('click', AddHighPriority);
    addTodoPriority.appendChild(lowPriority);
    addTodoPriority.appendChild(medPriority);
    addTodoPriority.appendChild(highPriority); 
    addTodoSectionFour.appendChild(addTodoPriorityLabel); 
    addTodoSectionFour.appendChild(addTodoPriority); 

    const addTodoSectionFive = document.createElement('div');
    const addTodoSubmit = document.createElement('button');
    addTodoSubmit.textContent = "Submit";
    addTodoSubmit.setAttribute('type', 'submit');
    addTodoSectionFive.appendChild(addTodoSubmit);

    addTodoForm.appendChild(addTodoSectionOne); 
    addTodoForm.appendChild(addTodoSectionTwo); 
    addTodoForm.appendChild(addTodoSectionThree); 
    addTodoForm.appendChild(addTodoSectionFour);
    addTodoForm.appendChild(addTodoSectionFive);  

    closeButtonImage.addEventListener('click', RemoveAddTodo);

    addTodoSubmit.addEventListener('click', SubmitAddTodo);
    
    mainScreen.setAttribute('style', 'filter: blur(10px);');
    mainScreen.classList.add('disable-clicker'); 
    DisableButtons(); 

    addTodoWindow.appendChild(closeButtonContainer); 
    addTodoWindow.appendChild(addTodoForm); 
}

// AddLowPriority(): Adds a low priority to the todo.
function AddLowPriority(){
    const lowPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(3)');

    medPriority.classList.remove('priority-chosen');
    highPriority.classList.remove('priority-chosen');

    lowPriority.classList.add('priority-chosen');
}

// AddMedPriority(): Adds a med priority to the todo.
function AddMedPriority(){
    const medPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(2)'); 
    const lowPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const highPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(3)');

    lowPriority.classList.remove('priority-chosen'); 
    highPriority.classList.remove('priority-chosen'); 

    medPriority.classList.add('priority-chosen');
}

// AddHighPriority(): Adds a high priority to the todo. 
function AddHighPriority(){
    const highPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(3)');
    const lowPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(2)'); 

    lowPriority.classList.remove('priority-chosen');
    medPriority.classList.remove('priority-chosen');

    highPriority.classList.add('priority-chosen'); 
}

// SubmitAddTodo(): Will submit all the data to the project. 
function SubmitAddTodo(e){
    e.preventDefault();
    
    const addTodoName = document.getElementById('add-todo-name'); 
    const addTodoDescription = document.getElementById('add-todo-description');
    const addTodoDueDate = document.getElementById('add-todo-due-date'); 
    const lowPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(3)');
    const content = document.getElementById('content');
    const addTodoWindow = document.querySelector('.add-todo-window'); 
    const mainScreen = document.querySelector('.main-screen'); 
    const projectSection = document.querySelector('.project-section'); 
    let priority = "";

    const projectArray = JSON.parse(localStorage.getItem('projects'));
    console.log(projectArray); //Testing 


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

    if (addTodoName.value === "" || addTodoDescription.value === "" || addTodoDueDate.value === "" || priority === "")
    {
        console.log("Some of the fields are missing"); // Testing 
        console.log("Please fill in all the fields..."); // Testing
        return; 
    }


    let dueDate = new Date(addTodoDueDate.value);
    console.log('Full Date: ', dueDate); // Testing 
    console.log("User Year: ", dueDate.getFullYear()); // Testing
    console.log("User Month: ", dueDate.getMonth()); // Testing
    console.log("User Date: ", dueDate.getDate() + 1); // Testing
    console.log('\n'); // Testing

    let currentDate = new Date();
    console.log('Current Full Date: ', currentDate); // Testing
    console.log("Current Year: ", currentDate.getFullYear()); // Testing
    console.log("Current Month: ", currentDate.getMonth()); // Testing
    console.log("Current Date: ", currentDate.getDate()); // Testing 
    console.log('\n'); // Testing

    const result = compareAsc(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1),
                              new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
    console.log("Result: ", result); // Testing 
    console.log('\n'); // Testing 

    if (result === 1 || result === 0)
    {
        const reformattedDueDate = format(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 'MMM-dd-yyyy');

        projectArray.forEach((project) => {
            if (project.projectName === todoMatcher.matcher)
            {
                project.todos.push({name: addTodoName.value, description: addTodoDescription.value, dueDate: reformattedDueDate, priority: priority});
            }
        });

        localStorage.removeItem('projects'); 
        localStorage.setItem('projects', JSON.stringify(projectArray));
        console.log('Current Storage: ', JSON.parse(localStorage.getItem('projects'))); // Testing 
        console.log('\n'); // Testing 

        mainScreen.removeAttribute('style');
        mainScreen.classList.remove('disable-clicker'); 
        EnableButtons(); 
        content.removeChild(addTodoWindow); 

        projectSection.replaceChildren();
        AddTodoToProject(); 
        DisplayProjectTodos(); 
    }
    // TODO: 3-05-2024 ~ Will need to create a popup note that tells the user if the date is behind, and when one of the
    // fields is empty.  
}

// RemoveAddTodo(): Will close the add todo window.
function RemoveAddTodo(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const addTodoWindow = document.querySelector('.add-todo-window');
    const closeButtonImage = document.querySelector('.add-todo-window > div:nth-child(1) > img[src]');

    content.removeChild(addTodoWindow);
    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    EnableButtons(); 

    closeButtonImage.removeEventListener('click', RemoveAddTodo); 
}

// ClearInputSection(): Clears the input section 
function ClearInputSection(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    inputSection.replaceChildren();
}

// RemovePreviousSelectedButton(): Will remove the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttons = document.querySelectorAll('.main-screen > div:nth-child(1) > button'); // Button Section
    const projects = document.querySelectorAll('.main-screen > div:nth-child(1) > div > button'); // Display Project Section.  
    
    buttons.forEach((button) => button.classList.remove('current-button'));
    projects.forEach((button) => button.classList.remove('current-button')); 
}