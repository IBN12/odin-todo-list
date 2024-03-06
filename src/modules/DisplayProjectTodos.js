import deleteProjectTodoImage from '../images/delete-outline.svg';
import detailsProjectTodoImage from '../images/note-outline.svg';
import editProjectTodoImage from '../images/note-edit-outline.svg'; 

import { todoMatcher } from '../utils/TodoMatcher';

// DisplayProjectTodos(): Will display all the project todos from each project. 
export function DisplayProjectTodos(){
    const projectArray = JSON.parse(localStorage.getItem('projects'));

    const projectSection = document.querySelector('.project-section');

    projectArray.forEach((project) => {
        if (project.projectName === todoMatcher.matcher)
        {
            const projectTodosSection = document.createElement('div');
            projectTodosSection.classList.add('project-todos-section');
            
            const todoArray = project.todos;

            for (let i = 0; i < todoArray.length; i++)
            {
                const projectTodo = document.createElement('div');

                const projectTodoName = document.createElement('div');
                projectTodoName.textContent = `${todoArray[i].name}`;

                projectTodo.appendChild(projectTodoName); 

                const projectTodoButtons = document.createElement('div');

                const detailsImageButton = new Image();
                detailsImageButton.src = detailsProjectTodoImage;
                
                const editImageButton = new Image();
                editImageButton.src = editProjectTodoImage;
    
                const deleteImageButton = new Image();
                deleteImageButton.src = deleteProjectTodoImage;
    
                projectTodoButtons.appendChild(detailsImageButton);
                projectTodoButtons.appendChild(editImageButton);
                projectTodoButtons.appendChild(deleteImageButton);
    
                projectTodo.appendChild(projectTodoButtons); 
    
                projectTodosSection.appendChild(projectTodo); 
    
                projectSection.appendChild(projectTodosSection); 
            }
        }
    });
}