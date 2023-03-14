//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: DOM-Content.js
// Description: Handles all Dom manipulation for the application.
// Notes: 
// -> Will have the Create TODO contents in this file for now as the default button when the user wants to add a new todo to the list.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CurrentProjectModule: Will control which project the user is currently trying to input todos into.
export const CurrentProjectModule = (() => {
    var currentProject = "";

    const setCurrentProject = (project) => {
        currentProject = project;
    }

    const getCurrentProject = () => {
        return currentProject;
    }

    return {setCurrentProject, getCurrentProject};
})();

export function LoadDomContent() {
    // Home button will be the default button selected when the application opens.
    const homeButton = document.querySelector('.main-window-nav > div:nth-child(1) button');
    homeButton.classList.add('current-module-tab');

    // Project display screen will be hidden by default
    const projectDisplay = document.querySelector('.project-display');
    projectDisplay.classList.add('hide-window');

    // Project todos window will be hidden by default
    const projectTodosWindow = document.querySelector('.project-todos-window');
    projectTodosWindow.setAttribute('id', 'hide-project-todos-window');

    // Detail todos window will be hidden by default
    const detailTodosWindow = document.querySelector('.detail-todos-window');
    detailTodosWindow.setAttribute('id', 'hide-detail-todos-window');

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

        const projectDisplay = document.querySelector('.project-display');
        projectDisplay.classList.add('hide-window');

        const homeDisplay = document.querySelector('.home-display');
        homeDisplay.classList.remove('hide-window');

        DisplayTodoList();
    }
}

// MainProjectDisplayScreen(): The main display screen for projects.
export function MainProjectDisplayScreen(){
    const projectDisplay = document.querySelector('.project-display');

    const myProjects = JSON.parse(localStorage.getItem('myTodoList'));
    const editedProjects = Object.assign({}, myProjects);
    delete editedProjects.home;

    const projectContainer = document.querySelector('.project-container');

    let index = 0;

    if (document.querySelector('.main-window-nav > div:nth-child(1) button').classList.contains('current-module-tab') || document.querySelector('.main-window-nav > div:nth-child(2) button').classList.contains('current-module-tab'))
    {
        document.querySelector('.main-window-nav > div:nth-child(1) button').classList.remove('current-module-tab');

        const projectButton = document.querySelector('.main-window-nav > div:nth-child(2) button');
        projectButton.classList.add('current-module-tab');

        const homeDisplay = document.querySelector('.home-display');
        homeDisplay.classList.add('hide-window');

        projectDisplay.classList.remove('hide-window');

        // Testing: Testing the edited object.
        for (const  keys in editedProjects){
            console.log(`Edited object key names: ${keys}`);
        }
        console.log("\n"); // Testing

        // Testing Object.keys() method
        if (Object.keys(editedProjects).length === 0)
        {
            console.log(`The object is empty`); 
            console.log("\n");
        }
        else
        {
            console.log(`The object is not empty`);
            console.log("\n");
        }

        // Remove all the current children from the project container to display them again.
        if (projectContainer.children.length > 0)
        {
            projectContainer.replaceChildren();
        }

        // Display the projects in the project section. 
        if (Object.keys(editedProjects).length !== 0)
        {
            for (const project in editedProjects){
                const projects = document.createElement('div');
                projects.textContent = project;
                projects.dataset.projectNumber = index;

                const addTodo = document.createElement('button');
                addTodo.innerHTML = 'Add Todo'
                addTodo.dataset.projectNumber = index;
                
                const viewTodos = document.createElement('button');
                const viewTodosContainer = document.createElement('div');
                const todosLength = document.createElement('div');
                todosLength.textContent = 'length';
                todosLength.style.display = "inline";
                viewTodos.innerHTML = "Your Todo's";
                viewTodos.dataset.projectNumber = index;
                viewTodosContainer.appendChild(viewTodos);
                viewTodosContainer.appendChild(todosLength);
                
                const deleteProject = document.createElement('button');
                deleteProject.innerHTML = 'Delete';
                deleteProject.dataset.projectNumber = index;

                projectContainer.appendChild(projects);
                projectContainer.appendChild(addTodo);
                projectContainer.appendChild(viewTodosContainer);
                projectContainer.appendChild(deleteProject);
                index++;

                projectDisplay.appendChild(projectContainer);

                // Adds a new todo to the choosen project in callback form. 
                addTodo.addEventListener('click', () => {
                    console.log(`Adding todo to ${project} project.`); // Testing
                    // Step 1: Reveal the add window.
                    RevealAddWindow();

                    // Step 2: Let the application know what the current project is.
                    CurrentProjectModule.setCurrentProject(project);
                });

                // Allows the user to view all the todos that were created for the selected project. 
                viewTodos.addEventListener('click', () => {
                    console.log(`Viewing the list of todos in the ${project} project.`); // Testing
                    const projectTodosWindow = document.querySelector('.project-todos-window');
                    projectTodosWindow.removeAttribute('id');

                    DisplayTodosInCustomProjects(editedProjects[project]);
                });

                deleteProject.addEventListener('click', () => {
                    console.log(`Deleting the ${project} project.`); // Testing
                });
            }
        }
    }
    // else if (document.querySelector('.main-window-nav > div:nth-child(2) > button').classList.contains('current-module-tab'))
    // {
    //     if (projectContainer.children.length > 0)
    //     {
    //         projectContainer.replaceChildren();
    //     }

    //     if (Object.keys(editedProjects) !== 0)
    //     {
    //         for (const project in editedProjects){
    //             const projects = document.createElement('div');
    //             projects.textContent = project;

    //             const addTodo = document.createElement('button');
    //             addTodo.innerHTML = 'Add Todo'
                
    //             const viewTodos = document.createElement('button');
    //             viewTodos.innerHTML = "Your Todo's";

    //             const deleteProject = document.createElement('button');
    //             deleteProject.innerHTML = 'Delete';

    //             projectContainer.appendChild(projects);
    //             projectContainer.appendChild(addTodo);
    //             projectContainer.appendChild(viewTodos);
    //             projectContainer.appendChild(deleteProject);

    //             projectDisplay.appendChild(projectContainer);
    //         }
    //     }
    // }
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
    
    const todoListContainer = document.querySelector('.todo-list-container');
    if (todoListContainer.children.length > 0)
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

        // Testing: Testing to display all the key pairs in the local storage object type.
        // Note: this method will be used to showcase every todo from each project that is 
        // a key pair for the local storage object type. 
        for (const key in myTodos)
        {
            console.log(`${key}: ${myTodos[key]}`);
            myTodos[key].forEach(obj => {
                console.log(`Todo name: ${obj.todoName}`);
            });
        }
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
    }
}

// DisplayTodosInCustomProjects(): Will allow the user to view todos in user created projects.
function DisplayTodosInCustomProjects(userProject)
{
    const projectTodosWindow = document.querySelector('.project-todos-window');
    // Note: Reminder ---> For this project the local storage is a object value with key names that are projects
    //       with key values that are arrays. These array values have there own objects inside. 
    //       Example: {name: [{},{},{}],
    //                 Gym: [{},{},{}]                     
    //                  }

    // GUI Architecture: These are the tabs that should be displayed in the window for the custom user todos
    //                   in the selected projects:
    //                   todo name | details(todo description, todo due date) | todo priority | edit todo | delete todo
    console.log('Display the todos in the DisplayTodosInCustomProjects function...'); // Testing
    console.log(userProject); // Testing
    console.log(`The project is of type: ${typeof userProject}`); // Testing
    console.log("\n"); // Testing

    userProject.forEach(obj => {
        const customTodoName = document.createElement('div');
        customTodoName.textContent = obj.todoName;

        const todoDetailsButton = document.createElement('button');
        todoDetailsButton.innerHTML = 'Details';

        const customTodoPriority = document.createElement('div');
        customTodoPriority.textContent = obj.todoPriority;

        const editTodo = document.createElement('button');
        editTodo.innerHTML = 'Edit';

        const deleteTodo = document.createElement('button');
        deleteTodo.innerHTML = 'Delete';

        projectTodosWindow.appendChild(customTodoName);
        projectTodosWindow.appendChild(todoDetailsButton);
        projectTodosWindow.appendChild(customTodoPriority);
        projectTodosWindow.appendChild(editTodo);
        projectTodosWindow.appendChild(deleteTodo);

        todoDetailsButton.addEventListener('click',() => {
            TodoDetails(obj.todoDescription, obj.todoDueDate);
        });
    });
}

// TodoDetails(): Allows the user to display the todo details for each todo in the home and custom projects.
function TodoDetails(todoDescription, todoDueDate){
    console.log('User is viewing the todo details in the Details window.'); // Testing
    const detailTodosWindow = document.querySelector('.detail-todos-window');
    detailTodosWindow.removeAttribute('id');

    const todoDescriptionLabel = document.createElement('h2');
    todoDescriptionLabel.textContent = 'Description:';

    const customTodoDescription = document.createElement('div');
    customTodoDescription.textContent = todoDescription; 


    const todoDueDateLabel = document.createElement('h2');
    todoDueDateLabel.textContent = 'Due Date:'

    const customTodoDueDate = document.createElement('div');
    customTodoDueDate.textContent =  todoDueDate; 

    detailTodosWindow.appendChild(todoDescriptionLabel);
    detailTodosWindow.appendChild(customTodoDueDate);
    detailTodosWindow.appendChild(todoDueDateLabel);
    detailTodosWindow.appendChild(customTodoDescription);
}