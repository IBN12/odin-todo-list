// ViewTodos(): Will display all the todos in the application.
export function ViewTodos(e){
    ClearInputSection();
    RemovePreviousSelectedButton();

    e.target.classList.value = "current-button"; 

    Todos(); 
}

// Todos(): All the todos in the application.
function Todos(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');

    const todoSection = document.createElement('div');
    todoSection.classList.add('todo-section'); 
    
    inputSection.appendChild(todoSection); 

    const todos = JSON.parse(localStorage.getItem('todos')); 
    console.log('Todos on display: ', todos); // Testing
    console.log('\n'); // Testing

    todos.forEach((todo) => {
        const todoRow = document.createElement('div');
        
        const todoName = document.createElement('div');
        todoName.textContent = `${todo.name}`;

        const todoDescription = document.createElement('button');
        todoDescription.textContent = 'Details';

        const todoDueDate = document.createElement('div');
        todoDueDate.textContent = `${todo.dueDate}`;

        const todoPriority = document.createElement('div');
        todoPriority.textContent = `${todo.priority}`; 

        const editTodo = document.createElement('button');
        editTodo.textContent = 'Edit';

        const deleteTodo = document.createElement('button');
        deleteTodo.textContent = `Del`;

        todoRow.appendChild(todoName);
        todoRow.appendChild(todoDescription);
        todoRow.appendChild(todoDueDate);
        todoRow.appendChild(todoPriority);
        todoRow.appendChild(editTodo); 
        todoRow.appendChild(deleteTodo);  

        todoSection.appendChild(todoRow); 
    });


}

// ClearInputSection(): Clears the input section.
function ClearInputSection(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    inputSection.replaceChildren(); 
}

// RemovePreviousSelectedButton(): Will remove the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttons = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    
    buttons.forEach(button => button.classList.remove('current-button')); 
}