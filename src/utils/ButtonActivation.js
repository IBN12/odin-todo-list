// DisableButtons(): Will disable the UI buttons.
export function DisableButtons(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    const displayTodoButtons = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > button');
    const displayProjectButtons = document.querySelectorAll('.main-screen > div:nth-child(1) > div > button');
    const projectTodosSection = document.querySelectorAll('.project-todos-section > div > div:nth-child(2) > img[src]'); // Might not need this. 
    
    buttonSection.forEach((button) => {
        button.setAttribute('disabled', 'true');
    });

    displayTodoButtons.forEach((button) => {
        button.setAttribute('disabled', 'true');
    });

    displayProjectButtons.forEach((button) => {
        button.setAttribute('disabled', 'true');
    });
}

// EnableButtons(): Will enable the UI buttons.
export function EnableButtons(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    const displayTodoButtons = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > button');
    const displayProjectButtons = document.querySelectorAll('.main-screen > div:nth-child(1) > div > button'); 
    const projetTodosSection = document.querySelectorAll('.project-todos-section > div > div:nth-child(2) > img[src]'); // Might not need this.

    buttonSection.forEach((button) => {
        button.removeAttribute('disabled'); 
    });

    displayTodoButtons.forEach((button) => {
        button.removeAttribute('disabled');
    });

    displayProjectButtons.forEach((button) => {
        button.removeAttribute('disabled'); 
    }); 
}