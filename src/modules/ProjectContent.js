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
}

// ClearInputSection(): Clears the input section 
function ClearInputSection(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    inputSection.replaceChildren();
}

// RemovePreviousSelectedButton(): Will remove the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttons = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    
    buttons.forEach((button) => button.classList.remove('current-button'));
}