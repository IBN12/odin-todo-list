import { StoreProjects } from "../utils/InitialStorage";
import { StoreEditedTodoProjects } from "../utils/InitialStorage";
import { DeleteStoredProject } from "../utils/InitialStorage";
import { todoMatcher } from "../utils/TodoMatcher";
import { projectMatcher } from "../utils/ProjectMatcher";
import { DisableButtons, EnableButtons } from "../utils/ButtonActivation";
import { compareAsc, format } from "date-fns";

import plusButtonImage from '../images/plus.svg'; 
import windowCloseImage from '../images/window-close.svg';
import deleteForeverButton from '../images/delete-forever.svg';

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

    projectMatcher.matcher = e.target.textContent; 
    
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
    DeleteProject(); 

    DisplayProjectTodos(); 
}

// DeleteProject(): Button will delete the current project that the user has clicked on.
export function DeleteProject(){
    const addTodoContainer = document.querySelector('.project-section > div:nth-child(1)');
    const deleteProjectButton = new Image();
    deleteProjectButton.src = deleteForeverButton;
    addTodoContainer.appendChild(deleteProjectButton);

    deleteProjectButton.addEventListener('click', DeleteProjectWindow); 
}

// DeleteProjectWindow(): Will bring the delete project to prompt the user about deleting the project. 
function DeleteProjectWindow(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const deleteProjectWindow = document.createElement('div');
    deleteProjectWindow.classList.add('delete-project-window');
    
    content.appendChild(deleteProjectWindow);

    mainScreen.setAttribute('style', 'filter: blur(10px);');
    mainScreen.classList.add('disable-clicker');
    DisableButtons(); 

    // Close Window Button:
    const closeButtonContainer = document.createElement('div');
    const closeButtonImage = new Image();
    closeButtonImage.src = windowCloseImage;
    closeButtonContainer.appendChild(closeButtonImage); 
    deleteProjectWindow.appendChild(closeButtonContainer); 

    // Delete Prompt:
    const deletePromptContainer = document.createElement('div'); 
    const deletePromptMssg = document.createElement('p');
    deletePromptMssg.textContent = 'Continue with project deletion?';
    deletePromptContainer.appendChild(deletePromptMssg);
    deleteProjectWindow.appendChild(deletePromptContainer); 

    // Delete Project (Yes Button):
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Yes';
    deletePromptContainer.appendChild(deleteButton); 
    deleteButton.addEventListener('click', DeleteStoredProject);

    closeButtonImage.addEventListener('click', CloseDeleteProjectWindow); 
}

// CloseDeleteProjectWindow(): Will close the delete project window.
function CloseDeleteProjectWindow(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen'); 
    const deleteProjectWindow = document.querySelector('.delete-project-window'); 
    const closeButtonImage = document.querySelector('.delete-project-window > div:nth-child(1) > img[src]');

    content.removeChild(deleteProjectWindow);

    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    EnableButtons(); 

    closeButtonImage.removeEventListener('click', CloseDeleteProjectWindow); 
}

// AddTodoToProject(): The add todo plus button will add todos to the project.  
export function AddTodoToProject(){
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

    closeButtonImage.addEventListener('click', CloseAddTodoWindow);

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
            if (project.projectName === projectMatcher.matcher)
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
        DeleteProject(); 
        DisplayProjectTodos(); 
    }
    // TODO: 3-05-2024 ~ Will need to create a popup note that tells the user if the date is behind, and when one of the
    // fields is empty.  
}

// RemoveAddTodo(): Will close the add todo window.
function CloseAddTodoWindow(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const addTodoWindow = document.querySelector('.add-todo-window');
    const closeButtonImage = document.querySelector('.add-todo-window > div:nth-child(1) > img[src]');

    content.removeChild(addTodoWindow);
    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    EnableButtons(); 

    closeButtonImage.removeEventListener('click', CloseAddTodoWindow); 
}

// AddTodoDetails(): Details about the todo added to the project.
export function ProjectTodoDetailsWindow(e){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen'); 

    const projectTodoDetailsWindow = document.createElement('div');
    projectTodoDetailsWindow.classList.add('project-todo-details-window');

    content.appendChild(projectTodoDetailsWindow); 

    // Close Button Section
    const closeButtonContainer = document.createElement('div');
    const closeButtonImage = new Image(); 
    closeButtonImage.src = windowCloseImage;
    closeButtonContainer.appendChild(closeButtonImage); 
    projectTodoDetailsWindow.appendChild(closeButtonContainer); 
    closeButtonImage.addEventListener('click', CloseProjectTodoDetailsWindow);

    // Details Section
    const projectTodoDetails = document.createElement('div'); 
    const projects = JSON.parse(localStorage.getItem('projects'));
    console.log(projects); // Testing
    projects.forEach((project) => {
        if (project.projectName === projectMatcher.matcher)
        {
            const todoArray = project.todos;

            for (let i = 0; i < todoArray.length; i++)
            {
                const todoObject = todoArray[i];

                if (todoObject.name === e.target.parentNode.parentNode.childNodes[0].textContent)
                {
                    const projectTodoDescriptionSection = document.createElement('div');
                    const projectTodoDescriptionLabel = document.createElement('div');
                    projectTodoDescriptionLabel.textContent = "Description";
                    const projectTodoDescription = document.createElement('div');
                    projectTodoDescription.textContent = `${todoObject.description}`;
                    projectTodoDescriptionSection.appendChild(projectTodoDescriptionLabel);
                    projectTodoDescriptionSection.appendChild(projectTodoDescription); 
                    
                    const projectTodoDueDateSection = document.createElement('div');
                    const projectTodoDueDateLabel = document.createElement('div');
                    projectTodoDueDateLabel.textContent = 'Due Date'; 
                    const projectTodoDueDate = document.createElement('div');
                    projectTodoDueDate.textContent = `${todoObject.dueDate}`;
                    projectTodoDueDateSection.appendChild(projectTodoDueDateLabel);
                    projectTodoDueDateSection.appendChild(projectTodoDueDate); 

                    const projectTodoPrioritySection = document.createElement('div');
                    const projectTodoPriorityLabel = document.createElement('div');
                    projectTodoPriorityLabel.textContent = "Priority";
                    const projectTodoPriority = document.createElement('div');
                    projectTodoPriority.textContent = `${todoObject.priority}`;
                    projectTodoPrioritySection.appendChild(projectTodoPriorityLabel);
                    projectTodoPrioritySection.appendChild(projectTodoPriority); 
                    
                    projectTodoDetails.appendChild(projectTodoDescriptionSection);
                    projectTodoDetails.appendChild(projectTodoDueDateSection);
                    projectTodoDetails.appendChild(projectTodoPrioritySection);
                }
            }
        }
    });
    projectTodoDetailsWindow.appendChild(projectTodoDetails); 

    mainScreen.setAttribute('style', 'filter:blur(10px);');
    mainScreen.classList.add('disable-clicker');
    DisableButtons(); 
}

// CloseProjectTodoDetailsWindow(): Will close the project todo details window.
function CloseProjectTodoDetailsWindow(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const projectTodoDetailsWindow = document.querySelector('.project-todo-details-window'); 
    
    content.removeChild(projectTodoDetailsWindow);

    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    EnableButtons();
}

// ProjectTodoEditWindow(): User can edit the projects todo content.
export function ProjectTodoEditWindow(e){
    console.log(e); // Testing
    console.log(e.target); // Testing
    console.log(e.target.parentNode.parentNode.childNodes[0].textContent); // Testing 

    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen'); 

    const projectTodoEditWindow = document.createElement('div');
    projectTodoEditWindow.classList.add('project-todo-edit-window');

    content.appendChild(projectTodoEditWindow);

    // Close Button Section:
    const closeButtonContainer = document.createElement('div');
    const closeButtonImage = new Image();
    closeButtonImage.src = windowCloseImage;
    closeButtonContainer.appendChild(closeButtonImage); 
    projectTodoEditWindow.appendChild(closeButtonContainer); 

    // Edit Todo Section:
    const projectTodoEdit = document.createElement('form');

    const projectArray = JSON.parse(localStorage.getItem('projects'));
    projectArray.forEach((project) => {
        if (project.projectName === projectMatcher.matcher)
        {
            const todoArray = project.todos;

            for (let i = 0; i < todoArray.length; i++)
            {
                const todo = todoArray[i];

                if (todo.name === e.target.parentNode.parentNode.childNodes[0].textContent)
                {
                    // Collecting the todo index: 
                    projectMatcher.editedTodoIndex = i; 

                    // Edit Name:
                    const projectTodoEditSectionOne = document.createElement('div');
                    const projectTodoEditNameLabel = document.createElement('label');
                    projectTodoEditNameLabel.setAttribute('for', 'edit-project-name-todo');
                    projectTodoEditNameLabel.textContent = "Edit Name";
                    const projectTodoEditName = document.createElement('input');
                    projectTodoEditName.setAttribute('type', 'text');
                    projectTodoEditName.setAttribute('id', 'edit-project-name-todo');
                    projectTodoEditName.setAttribute('name', 'edit-project-name-todo'); 
                    projectTodoEditName.setAttribute('value', `${todo.name}`); 
                    projectTodoEditSectionOne.appendChild(projectTodoEditNameLabel);
                    projectTodoEditSectionOne.appendChild(projectTodoEditName); 
                    projectTodoEdit.appendChild(projectTodoEditSectionOne); 

                    // Edit Description:
                    const projectTodoEditSectionTwo = document.createElement('div');
                    const projectTodoEditDescriptionLabel = document.createElement('label');
                    projectTodoEditDescriptionLabel.setAttribute('for', 'edit-project-todo-description');
                    projectTodoEditDescriptionLabel.textContent = "Edit Description"; 
                    const projectTodoEditDescription = document.createElement('textarea');
                    projectTodoEditDescription.setAttribute('id', 'edit-project-todo-description');
                    projectTodoEditDescription.setAttribute('name', 'edit-project-todo-description');
                    projectTodoEditDescription.innerHTML = `${todo.description}`;
                    projectTodoEditSectionTwo.appendChild(projectTodoEditDescriptionLabel);
                    projectTodoEditSectionTwo.appendChild(projectTodoEditDescription);
                    projectTodoEdit.appendChild(projectTodoEditSectionTwo);

                    // Edit Due Date: 
                    const d = new Date(`${todo.dueDate}`);
                    let dMonth = String(d.getMonth() + 1); 
                    let dYear = String(d.getFullYear()); 
                    let dDate = String(d.getDate());
                    if (d.getMonth() < 10)
                    {
                        dMonth = '0' + String(d.getMonth() + 1);
                    }

                    if (d.getDate() < 10)
                    {
                        dDate = '0' + String(d.getDate()); 
                    }
                    const projectTodoEditSectionThree = document.createElement('div');
                    const projectTodoEditDueDateLabel = document.createElement('label');
                    projectTodoEditDueDateLabel.setAttribute('for', 'edit-project-todo-due-date');
                    projectTodoEditDueDateLabel.textContent = 'Edit Due Date';
                    const projectTodoEditDueDate = document.createElement('input');
                    projectTodoEditDueDate.setAttribute('type', 'date');
                    projectTodoEditDueDate.setAttribute('id', 'edit-project-todo-due-date');
                    projectTodoEditDueDate.setAttribute('name', 'edit-project-todo-due-date'); 
                    projectTodoEditDueDate.setAttribute('value', `${dYear}-${dMonth}-${dDate}`);
                    projectTodoEditSectionThree.appendChild(projectTodoEditDueDateLabel);
                    projectTodoEditSectionThree.appendChild(projectTodoEditDueDate); 
                    projectTodoEdit.appendChild(projectTodoEditSectionThree); 

                    // Edit Priority:
                    const projectTodoEditSectionFour = document.createElement('div');
                    const projectTodoEditPriorityLabel = document.createElement('h4');
                    projectTodoEditPriorityLabel.textContent = 'Edit Priority'; 
                    const projectTodoEditPriority = document.createElement('div');
                    const lowPriority = document.createElement('button');
                    lowPriority.setAttribute('type', 'button');
                    lowPriority.textContent = 'Low';
                    lowPriority.addEventListener('click', EditProjectTodoPriority);
                    const medPriority = document.createElement('button');
                    medPriority.setAttribute('type', 'button');
                    medPriority.textContent = 'Med';
                    medPriority.addEventListener('click', EditProjectTodoPriority);
                    const highPriority = document.createElement('button');
                    highPriority.setAttribute('type', 'button');
                    highPriority.textContent = 'High';
                    highPriority.addEventListener('click', EditProjectTodoPriority); 
                    if (todo.priority === lowPriority.textContent)
                    {
                        lowPriority.classList.add('priority-chosen');
                    }
                    else if (todo.priority === medPriority.textContent)
                    {
                        medPriority.classList.add('priority-chosen'); 
                    }
                    else if (todo.priority === highPriority.textContent)
                    {
                        highPriority.classList.add('priority-chosen'); 
                    }    
                    projectTodoEditPriority.appendChild(lowPriority);
                    projectTodoEditPriority.appendChild(medPriority);
                    projectTodoEditPriority.appendChild(highPriority);
                    projectTodoEditSectionFour.appendChild(projectTodoEditPriorityLabel);
                    projectTodoEditSectionFour.appendChild(projectTodoEditPriority); 
                    projectTodoEdit.appendChild(projectTodoEditSectionFour); 

                    // Sumbit Button:
                    const projectTodoEditSectionFive = document.createElement('div');
                    const projectTodoEditSubmit = document.createElement('button');
                    projectTodoEditSubmit.setAttribute('type', 'submit'); 
                    projectTodoEditSubmit.textContent = 'Submit';
                    projectTodoEditSubmit.addEventListener('click', SubmitEditedProjectTodo); 
                    projectTodoEditSectionFive.appendChild(projectTodoEditSubmit); 
                    projectTodoEdit.appendChild(projectTodoEditSectionFive); 
                }
            }
        }
    });
    projectTodoEditWindow.appendChild(projectTodoEdit); 

    mainScreen.setAttribute('style', 'filter: blur(10px);'); 
    mainScreen.classList.add('disable-clicker');
    DisableButtons(); 

    closeButtonImage.addEventListener('click', CloseProjectTodoEditWindow);
}

// EditProjectTodoPriority(): Will allow the user to choose the priority for the project todo. 
function EditProjectTodoPriority(e){
    const lowPriority = document.querySelector('.project-todo-edit-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.project-todo-edit-window > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.project-todo-edit-window > form > div:nth-child(4) > div > button:nth-child(3)');
    
    lowPriority.classList.remove('priority-chosen');
    medPriority.classList.remove('priority-chosen'); 
    highPriority.classList.remove('priority-chosen'); 

    e.target.classList.add('priority-chosen');  
}

// SubmitEditProjectTodo(): Will submit all the edited project todo data.
function SubmitEditedProjectTodo(e){
    e.preventDefault();

    const mainScreen = document.querySelector('.main-screen'); 
    const content = document.getElementById('content'); 
    const projectSection = document.querySelector('.project-section'); 
    const projectTodoEditWindow = document.querySelector('.project-todo-edit-window'); 
    const editedProjectTodoName = document.querySelector('.project-todo-edit-window > form > div:nth-child(1) > input');
    const editedProjectTodoDescription = document.querySelector('.project-todo-edit-window > form > div:nth-child(2) > textarea');
    const editedProjectTodoDueDate = document.querySelector('.project-todo-edit-window > form > div:nth-child(3) > input');
    const editedProjectTodoPriority = document.querySelectorAll('.project-todo-edit-window > form > div:nth-child(4) > div > button');
    let priority = ""; 

    editedProjectTodoPriority.forEach((button) => {
        if (button.classList.contains('priority-chosen'))
        {
            priority = button.textContent; 
        }
    });

    if (editedProjectTodoName.value === "" || editedProjectTodoDescription.value === "" || editedProjectTodoDueDate.value === "")
    {
        console.log('Please fill in the missing fields'); // Testing
        return;
    }

    // Todo: Work with the DueDate first. 
    const dueDate = new Date(editedProjectTodoDueDate.value);
    console.log('Full Edited Date: ', dueDate); // Testing
    console.log('Edited Year: ', dueDate.getFullYear()); // Testing
    console.log('Edited Month: ', dueDate.getMonth()); // Testing
    console.log('Edited Date: ', dueDate.getDate() + 1); // Testing
    console.log('\n'); // Testing 

    const currentDate = new Date();
    console.log('Full Current Date: ', currentDate); // Testing
    console.log('Current Year: ', currentDate.getFullYear()); // Testing
    console.log('Current Month: ', currentDate.getMonth()); // Testing
    console.log('Current Date: ', currentDate.getDate()); // Testing
    console.log('\n'); // Testing 

    const result = compareAsc(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1),
                              new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
    console.log('Result: ', result); // Testing 
    console.log('\n'); // Testing

    if (result === 1 || result === 0)
    {
        const reformattedDueDate = format(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 'MMM-dd-yyyy');

        StoreEditedTodoProjects(editedProjectTodoName.value, editedProjectTodoDescription.value, reformattedDueDate, priority); 

        content.removeChild(projectTodoEditWindow); 

        projectSection.replaceChildren(); 

        mainScreen.removeAttribute('style');
        mainScreen.classList.remove('disable-clicker');
        EnableButtons();

        AddTodoToProject(); 
        DisplayProjectTodos(); 
    }
    // Note: Implement an else statement if the result of the due date is older than the current date. 


}

// CloseProjectTodoEditWindow(): Will close the project todo edit window.
function CloseProjectTodoEditWindow(){
    const content = document.getElementById('content');
    const projectTodoEditWindow = document.querySelector('.project-todo-edit-window');
    const mainScreen = document.querySelector('.main-screen');

    content.removeChild(projectTodoEditWindow);

    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    EnableButtons(); 
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