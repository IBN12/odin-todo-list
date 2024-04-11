// DisableButtons(): Will disable the UI buttons.
export function DisableButtons(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    const displayTodoButtons = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > div:nth-child(2) > img[src]');
    const displayProjectsNameButton = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > div:nth-child(1)');
    const displayProjectsDeleteButton = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > div:nth-child(2) > img[src]'); 
    const displayProjectTodosButtonPrompt = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div:nth-child(2) > img[src]'); 
    const displayProjectTodosButton = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div:nth-child(3) > div > div:nth-child(2) > img[src]'); 
    
    buttonSection.forEach((button) => {
        button.setAttribute('disabled', 'true');
    });

    displayTodoButtons.forEach((imgButton) => {
        imgButton.setAttribute('disabled', 'true');
    });

    displayProjectsNameButton.forEach((nameButton) => {
        nameButton.setAttribute('disabled', 'true');
    });

    displayProjectsDeleteButton.forEach((deleteButton) => {
        deleteButton.setAttribute('disabled', 'true'); 
    });

    displayProjectTodosButtonPrompt.forEach((promptButton) => {
        promptButton.setAttribute('disabled', 'true'); 
    });

    displayProjectTodosButton.forEach((projectTodoButton) => {
        projectTodoButton.setAttribute('disabled', 'true');
    });
}

// EnableButtons(): Will enable the UI buttons.
export function EnableButtons(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    const displayTodoButtons = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > div:nth-child(2) > img[src]');
    const displayProjectsNameButton = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > div:nth-child(1)'); 
    const displayProjectsDeleteButton = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > div:nth-child(2) > img[src]'); 
    const displayProjectTodosButtonPrompt = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div:nth-child(2) > img[src]'); 
    const displayProjectTodosButton = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div:nth-child(3) > div > div:nth-child(2) > img[src]'); 

    buttonSection.forEach((button) => {
        button.removeAttribute('disabled'); 
    });

    displayTodoButtons.forEach((button) => {
        button.removeAttribute('disabled');
    });

    displayProjectsNameButton.forEach((nameButton) => {
        nameButton.removeAttribute('disabled'); 
    }); 

    displayProjectsDeleteButton.forEach((deleteButton) => {
        deleteButton.removeAttribute('disabled');
    }); 

    displayProjectTodosButtonPrompt.forEach((promptButton) => {
        promptButton.removeAttribute('disabled'); 
    }); 

    displayProjectTodosButton.forEach((projectTodoButton) => {
        projectTodoButton.removeAttribute('disabled'); 
    }); 
}