//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: index.js
// Description: The main index javascript file for the application.
// Notes: This is the global index javascript file. All functions, objects, and properties will be global scope here.
// TODO: -> Implement Notes in the main navigation ui window so that the user can enter their daily notes. (not complete)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Center
import {LoadDomContent, MainHomeDisplayScreen, MainProjectDisplayScreen, DisplayAddWindow, CreateTodoUI, CreateProjectUI}  from "./modules/DOM-Contnet";
import { SubmitProject } from "./modules/createProject";
import {SubmitTodo } from "./modules/createTodo";
import { format, compareAsc } from "date-fns";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Testing Center

/** |Using date-fns|  */
console.log("---Using date-fns---");
const dateOne = format(new Date(2014, 1, 11), 'MM/dd/yyyy');
console.log(`Date Format One: ${dateOne}`);

const dateTwo = format(new Date(2023, 1, 18), 'yyyy/MM/dd');
console.log(`Date Format Two: ${dateTwo}`);

const dateThree = format(new Date(2030, 4, 19), 'MM-dd-yyyy');
console.log(`Date Format Three: ${dateThree}`)

const dateFour = format(new Date(2023, 1, 18), 'MM-dd-yyyy');
console.log(`Date Format Four: ${dateFour}`);

// Comparison...
const myDate = new Date();
console.log(`Today's Date: ${myDate}`);
console.log(`Month: ${myDate.getMonth() + 1}`);
console.log(`Date: ${myDate.getDate()}`);
console.log(`Year: ${myDate.getFullYear()}`);
const myDateFomatted = format(new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate()), 'MM-dd-yyyy');
console.log(`Today's Date reformatted: ${myDateFomatted}`);

// comparison 1:
if (compareAsc(new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate()), new Date(2023, 1, 18)) === 0)
{
    console.log("The dates are equal...");
}
else
{
    console.log('The dates are not equal...');
}

// comparison 2:
if (compareAsc(new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate()), new Date(2023, 1, 17)) === 1)
{
    console.log('The first date comes after the second...');
}
else
{
    console.log('The first date does not come after the second...');
}

console.log("\n");

// Practicing Local Storage with JSON:

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// |Populate Local Storage|: Local storage will global to the entire application.
if (localStorage.getItem('myTodoList') == null)
{
    localStorage.setItem('myTodoList', '{"home": []}');
    console.log("Sequenced");
}

const myTodos = JSON.parse(localStorage.getItem('myTodoList'));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  |Main Navigation Section|
// MainNavSelection() Module: Contains all the navigation buttons for the entire application.
const MainNavSelection = (()=>{
    const homeButton = document.querySelector('.main-window-nav > div:nth-child(1) button');
    const projectButton = document.querySelector('.main-window-nav > div:nth-child(2) button');
    const addButton = document.querySelector('.main-window-nav > div:nth-child(3) button');
    
    // Buttons inside of the add window.
    const createTodoButton = document.querySelector('.add-window-nav > div:nth-child(1) button');
    const createProjectButton = document.querySelector('.add-window-nav > div:nth-child(2) button');
    const submitTodo = document.querySelector('#todo-submit');
    const submitProject = document.querySelector('#project-submit');

    homeButton.addEventListener('click', MainHomeDisplayScreen);
    projectButton.addEventListener('click', MainProjectDisplayScreen);
    addButton.addEventListener('click', DisplayAddWindow);

    createTodoButton.addEventListener('click', CreateTodoUI);
    createProjectButton.addEventListener('click', CreateProjectUI);
    submitTodo.addEventListener('click', e => {
        SubmitTodo(e, myTodos);
    });
    submitProject.addEventListener('click', e => {
        SubmitProject(e, myTodos);
    });
})();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

LoadDomContent();