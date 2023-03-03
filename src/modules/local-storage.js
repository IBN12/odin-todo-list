//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: local-storage.js
// Description: All user values from ui will be stored in the local storage.
// Notes: 
// -> Practice the information about saving multiple items in the local storage. (complete)
// -> TODO: Study and practice using the local storage with JSON to save the muliple items correctly. 
// -> TODO: The todo's are displaying in the home window. But they don't save to the local storage because of the array.
//    Find a way to save these bad boys to the local storage. You will also need to find a way to save the projects also.
//    Looking at other individuals code in the projects section might help. Only study a few sections a day to understand them
//    Even just a function a day will help. 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TodoStorageFactory(): Renders new values that will be inputted into the storage.
const TodoStorageFactory = () =>{
    let todoName = document.querySelector('#todo-name').value;
    let todoDescription = document.querySelector('#todo-description').value;
    let todoDueDate = document.querySelector('#todo-due-date').value;
    let todoPriority = document.querySelector('#todo-priority').value;

    return {todoName, todoDescription, todoDueDate, todoPriority};
}

const CreateProject = () =>{
    const projectName = document.getElementById('project').value;
    return {projectName};
}

// populateStorage(): Will populate the users local storage file.
export function populateStorage(e){
    console.log('Now populating local storage...'); // Testing

    if (localStorage.getItem('myTodoList') == null)
    {
        localStorage.setItem('myTodoList', '{"home": []}');
        console.log("Sequenced");
    }

    const myTodos = JSON.parse(localStorage.getItem('myTodoList'));

    const myNewTodo = TodoStorageFactory();

    myTodos['home'].push(myNewTodo);

    localStorage.setItem('myTodoList', JSON.stringify(myTodos));

    // DisplayTheLocalStorageItems(myTodos); // Testing
}

// DisplayTheLocalStorageItems(): Function will display all the storage items in the console log.
function DisplayTheLocalStorageItems(myTodos){
    console.log('Display the storage items in the console....');
    myTodos.home.forEach(obj => {
        console.log(`Name: ${obj.todoName} \nDescription: ${obj.todoDescription} \nDue Date: ${obj.todoDueDate} \nPriority: ${obj.todoPriority}`);
    });
    console.log('\n');
}

