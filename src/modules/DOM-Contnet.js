//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: DOM-Content.js
// Description: Handles all Dom manipulation for the application.
// Notes: N/A
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function LoadDomContent() {
    // Home button will be the default button selected when the application opens.
    const homeButton = document.querySelector('.main-window-nav > div:nth-child(1) button');
    homeButton.classList.add('current-module-tab');

    // Display screen will be the default screen selected when the application opens.
    const mainWindowDisplay = document.querySelector('.main-window-display');
    const homeDisplay = document.createElement('div');
    homeDisplay.classList.add('home-display');
    homeDisplay.textContent = 'You are viewing the main home display screen.';
    mainWindowDisplay.appendChild(homeDisplay);

    // Hide any UI for adding new todos and projects.
    HideAddWindow();
}

// MainHomeDisplayScreen(): The main display screen for home todo's.
export function MainHomeDisplayScreen() {

    if (document.querySelector('.main-window-nav > div:nth-child(2) button').classList.contains('current-module-tab'))
    {
        document.querySelector('.main-window-nav > div:nth-child(2) button').classList.remove('current-module-tab');

        const homeButton = document.querySelector('.main-window-nav > div:nth-child(1) button');
        homeButton.classList.add('current-module-tab');

        const mainWindowDisplay = document.querySelector('.main-window-display');
        mainWindowDisplay.replaceChildren();

        const homeDisplay = document.createElement('div');
        homeDisplay.classList.add('home-display');
        homeDisplay.textContent = 'You are viewing the main home display screen';

        mainWindowDisplay.appendChild(homeDisplay);
    }
}

// MainProjectDisplayScreen(): The main display screen for projects.
export function MainProjectDisplayScreen(){

    if (document.querySelector('.main-window-nav > div:nth-child(1) button').classList.contains('current-module-tab'))
    {
        document.querySelector('.main-window-nav > div:nth-child(1) button').classList.remove('current-module-tab');

        const projectButton = document.querySelector('.main-window-nav > div:nth-child(2) button');
        projectButton.classList.add('current-module-tab');

        const mainWindowDisplay = document.querySelector('.main-window-display');
        mainWindowDisplay.replaceChildren();

        const projectDisplay = document.createElement('div');
        projectDisplay.classList.add('project-display');
        projectDisplay.textContent = 'You are viewing the main project display screen';

        mainWindowDisplay.appendChild(projectDisplay); 

    }
}

// DisplayAddWindow(): Displays the add window when the user clicks on the add button.
export function DisplayAddWindow(){
    console.log("You are now viewing the add window..."); // Testing
    RevealAddWindow();
}

// HideAddWindow(): Hides the add todo or porject window until the user clicks the add button. 
function HideAddWindow(){
    const addWindow = document.querySelector('.add-window');
    addWindow.classList.add('hide-window');
}

// RevealAddWindow(): Reveals the add todo or project window when the user clicks the add button.
function RevealAddWindow(){
    const addWindow = document.querySelector('.add-window');
    addWindow.classList.remove('hide-window');
}
