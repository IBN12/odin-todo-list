import deleteProjectTodoImage from '../images/delete-outline.svg';
import detailsProjectTodoImage from '../images/note-outline.svg';
import editProjectTodoImage from '../images/note-edit-outline.svg'; 

import { projectMatcher } from '../utils/ProjectMatcher';
import { todoMatcher } from '../utils/TodoMatcher';

import { ProjectTodoDetailsWindow } from './ProjectContent';
import { ProjectTodoEditWindow } from './ProjectContent';
import { DeleteStoredTodoProject } from '../utils/InitialStorage';

// DisplayProjectTodos(): Will display all the project todos from each project. 
export function DisplayProjectTodos(){
    const projectArray = JSON.parse(localStorage.getItem('projects'));

    const projectScreen = document.querySelector('.project-screen');

    projectArray.forEach((project) => {
        if (project.projectName === projectMatcher.matcher)
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
                detailsImageButton.addEventListener('click', ProjectTodoDetailsWindow); 
                
                const editImageButton = new Image();
                editImageButton.src = editProjectTodoImage;
                editImageButton.addEventListener('click', ProjectTodoEditWindow); 
    
                const deleteImageButton = new Image();
                deleteImageButton.src = deleteProjectTodoImage;
                deleteImageButton.addEventListener('click', DeleteStoredTodoProject);
    
                projectTodoButtons.appendChild(detailsImageButton);
                projectTodoButtons.appendChild(editImageButton);
                projectTodoButtons.appendChild(deleteImageButton);
    
                projectTodo.appendChild(projectTodoButtons); 
    
                projectTodosSection.appendChild(projectTodo); 
    
                projectScreen.appendChild(projectTodosSection); 
            }
        }
    });
}