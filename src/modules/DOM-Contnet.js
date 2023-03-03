//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: DOM-Content.js
// Description: Handles all Dom manipulation for the application.
// Notes: 
// -> Will have the Create TODO contents in this file for now as the default button when the user wants to add a new todo to the list.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function LoadDomContent() {
    // Home button will be the default button selected when the application opens.
    const homeButton = document.querySelector('.main-window-nav > div:nth-child(1) button');
    homeButton.classList.add('current-module-tab');

    // Home display screen will be the default screen shown when the application opens.
    const mainWindowDisplay = document.querySelector('.main-window-display');
    const homeDisplay = document.createElement('div');
    homeDisplay.classList.add('home-display');
    homeDisplay.textContent = 'You are viewing the main home display screen.';
    mainWindowDisplay.appendChild(homeDisplay);

    // Project display screen
    const projectDisplay = document.createElement('div');
    projectDisplay.classList.add('project-display');
    projectDisplay.classList.add('hide-window');
    mainWindowDisplay.appendChild(projectDisplay);

    // Hide any UI for adding new todos and projects.
    HideAddWindow();

    // Create TODO button will be the default button selected when the add window opens. 
    const createTodoButton = document.querySelector('.add-window-nav > div:nth-child(1) button');
    createTodoButton.classList.add('current-module-tab');

    // Hides the ui from the user.
    HideUI();

    // Will display the todo list on the home screen.
    DisplayTodoList();
}

// MainHomeDisplayScreen(): The main display screen for home todo's.
export function MainHomeDisplayScreen() {

    if (document.querySelector('.main-window-nav > div:nth-child(2) button').classList.contains('current-module-tab'))
    {
        document.querySelector('.main-window-nav > div:nth-child(2) button').classList.remove('current-module-tab');

        const homeButton = document.querySelector('.main-window-nav > div:nth-child(1) button');
        homeButton.classList.add('current-module-tab');

        const mainWindowDisplay = document.querySelector('.main-window-display');
        const projectDisplay = document.querySelector('.project-display');
        projectDisplay.classList.add('hide-window');
        // mainWindowDisplay.replaceChildren();

        // const homeDisplay = document.createElement('div');
        const homeDisplay = document.querySelector('.home-display');
        homeDisplay.classList.remove('hide-window');
        homeDisplay.classList.add('home-display');
        homeDisplay.textContent = 'You are viewing the main home display screen'; // Testing

        mainWindowDisplay.appendChild(homeDisplay);

        DisplayTodoList();
    }
}

// MainProjectDisplayScreen(): The main display screen for projects.
export function MainProjectDisplayScreen(){
    const mainWindowDisplay = document.querySelector('.main-window-display');

    const projectDisplay = document.querySelector('.project-display');

    const myProjects = JSON.parse(localStorage.getItem('myTodoList'));
    const editedProjects = Object.assign({}, myProjects);
    delete editedProjects.home;

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    if (document.querySelector('.main-window-nav > div:nth-child(1) button').classList.contains('current-module-tab'))
    {
        document.querySelector('.main-window-nav > div:nth-child(1) button').classList.remove('current-module-tab');

        const projectButton = document.querySelector('.main-window-nav > div:nth-child(2) button');
        projectButton.classList.add('current-module-tab');

        // const mainWindowDisplay = document.querySelector('.main-window-display');
        const homeDisplay = document.querySelector('.home-display');
        homeDisplay.classList.add('hide-window');

        // const projectDisplay = document.createElement('div');
        // const projectDisplay = document.querySelector('.project-display');
        projectDisplay.classList.remove('hide-window');
        projectDisplay.classList.add('project-display');
        projectDisplay.textContent = 'You are viewing the main project display screen'; // Testing

        // Displaying the project values on the main display screen for projects.
        // const myProjects = JSON.parse(localStorage.getItem('myTodoList'));
        // const editedProjects = Object.assign({}, myProjects);
        // delete editedProjects.home;

        // Remove all the project items for to view them again inside a clean parent node.
        if (projectDisplay.hasChildNodes())
        {
            projectDisplay.replaceChildren();
        }
        
        // const projectContainer = document.createElement('div');
        // projectContainer.classList.add('project-container');

        // Testing: Testing the edited object.
        for (const  keys in editedProjects){
            console.log(`Edited object key names: ${keys}`);
        }
        console.log("\n"); // Testing

        if (editedProjects !== {})
        {
            for (const project in editedProjects){
                const projects = document.createElement('div');
                projects.textContent = project;

                const addTodo = document.createElement('button');
                addTodo.innerHTML = 'Add Todo'
                
                const viewTodos = document.createElement('button');
                viewTodos.innerHTML = "Your Todo's";
                const projectInventoryLength = document.createElement('div');

                const deleteProject = document.createElement('button');
                deleteProject.innerHTML = 'Delete';

                projectContainer.appendChild(projects);
                projectContainer.appendChild(addTodo);
                viewTodos.appendChild(projectInventoryLength);
                projectContainer.appendChild(viewTodos);
                projectContainer.appendChild(deleteProject);
            }
            projectDisplay.appendChild(projectContainer);
        }

        mainWindowDisplay.appendChild(projectDisplay);
    }
    else if (document.querySelector('.main-window-nav > div:nth-child(2) > button').classList.contains('current-module-tab'))
    {
        if (projectDisplay.hasChildNodes())
        {
            projectDisplay.replaceChildren();
        }
        
        if (editedProjects !== {})
        {
            for (const project in editedProjects){
                const projects = document.createElement('div');
                projects.textContent = project;

                const addTodo = document.createElement('button');
                addTodo.innerHTML = 'Add Todo'
                
                const viewTodos = document.createElement('button');
                viewTodos.innerHTML = "Your Todo's";
                const projectInventoryLength = document.createElement('div');

                const deleteProject = document.createElement('button');
                deleteProject.innerHTML = 'Delete';

                projectContainer.appendChild(projects);
                projectContainer.appendChild(addTodo);
                viewTodos.appendChild(projectInventoryLength);
                projectContainer.appendChild(viewTodos);
                projectContainer.appendChild(deleteProject);
            }
            projectDisplay.appendChild(projectContainer);
        }

        mainWindowDisplay.appendChild(projectDisplay);
    }
}

// DisplayAddWindow(): Displays the add window when the user clicks on the add button.
export function DisplayAddWindow(){
    console.log("You are now viewing the add window..."); // Testing
    console.log("\n");
    RevealAddWindow();
}

// CreateTodoUI(): Display's the UI to create a new todo. 
export function CreateTodoUI(){
    if (document.querySelector('.add-window-nav > div:nth-child(2) button').classList.contains('current-module-tab'))
    {
        document.querySelector('.add-window-nav > div:nth-child(2) button').classList.remove('current-module-tab');

        document.querySelector('.add-window-nav > div:nth-child(1) button').classList.add('current-module-tab');

        HideUI();
    }
}

// CreateProjectUI(): Display's the UI to create a new project. 
export function CreateProjectUI(){
    if (document.querySelector('.add-window-nav > div:nth-child(1) button').classList.contains('current-module-tab'))
    {
        document.querySelector('.add-window-nav > div:nth-child(1) button').classList.remove('current-module-tab');

        document.querySelector('.add-window-nav > div:nth-child(2) button').classList.add('current-module-tab');

        HideUI();
    }
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

// HideUI(): Hides the UI from the user.
function HideUI(){
    if (document.querySelector('.add-window-nav > div:nth-child(1) button').classList.contains('current-module-tab'))
    {
        document.querySelector('.add-window-todo-ui').classList.remove('hide-window');
        document.querySelector('.add-window-project-ui').classList.add('hide-window');
    }
    else if (document.querySelector('.add-window-nav > div:nth-child(2) button').classList.contains('current-module-tab'))
    {
        document.querySelector('.add-window-project-ui').classList.remove('hide-window');
        document.querySelector('.add-window-todo-ui').classList.add('hide-window');
    }
}

// DisplayTodoList(): Will display all the todo's.
export function DisplayTodoList(){
    console.log('Displaying the Todos....'); // Testing
    console.log("\n"); // Testing
    
    const homeDisplay = document.querySelector('.home-display');

    const todoListContainer = document.createElement('div');
    todoListContainer.classList.add('todo-list-container');

    if (todoListContainer.hasChildNodes())
    {
        todoListContainer.replaceChildren();
    }

    if (localStorage.getItem('myTodoList') === null)
    {
        return; 
    }
    else
    {
        // Testing: Displaying the items in the console log.
        const myTodos = JSON.parse(localStorage.getItem('myTodoList'));
        myTodos.home.forEach(obj => {
            console.log(`Name: ${obj.todoName} \nDescription: ${obj.todoDescription} \nDue Date: ${obj.todoDueDate} \nPriority: ${obj.todoPriority}`);
        });
        console.log('\n');

        myTodos.home.forEach(obj => {
            const todoNameContainer = document.createElement('div');
            todoNameContainer.textContent = obj.todoName;
            
            const todoDescriptionContainer = document.createElement('div');
            todoDescriptionContainer.textContent = obj.todoDescription;

            const todoDueDateContainer = document.createElement('div');
            todoDueDateContainer.textContent = obj.todoDueDate;

            const todoPriorityContainer = document.createElement('div');
            todoPriorityContainer.textContent = obj.todoPriority;

            todoListContainer.appendChild(todoNameContainer);
            todoListContainer.appendChild(todoDescriptionContainer);
            todoListContainer.appendChild(todoDueDateContainer);
            todoListContainer.appendChild(todoPriorityContainer);
        });

        homeDisplay.appendChild(todoListContainer);
    }
}