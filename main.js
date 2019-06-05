'use strict'

/** 
console.log('working');

const form = document.querySelector('form');
const todoInput = document.querySelector('#task-input');
const todoContainer = document.querySelector('#task-container')

form.addEventListener('submit', submitTodo);

function submitTodo(e) {
    let todos = [];

    e.preventDefault();
    getTodos(todos);

}

function getTodos(todos) {
    // getting todos
    const todo = todoInput.value;
    todos.push(todo);

    todoInput.value = '';   // clearing the input
    save(todos);
    // console.log(save(todos))

    // displaying todos
    // displayTodo(todos);
};
// console.log(todos)

// saving and retriving todos from localStorage
function save(todos) {
    const todosString = JSON.stringify(todos)
    // console.log(todosString);
    window.localStorage.setItem('tasks', todosString);  //saving todos to localstorage

    const savedTodos = JSON.parse(window.localStorage.getItem('tasks'));  //getting them back and converting back to array to be displayed
    // console.log(savedTodos, typeof savedTodos)
    
    displayTodo(savedTodos)
}


function displayTodo(todos) {
    // console.log(todos);
    let htmlContent = todos.map(todo => 
            `<div class="task">
                <input class="checkbox" name="tasks" type="checkbox">
                <label for="${todo}">${todo}</label>
            </div>`
        ).join('');

    if(todoContainer.hasChildNodes()) {
        todoContainer.innerHTML = '';
        todoContainer.insertAdjacentHTML('beforeend', htmlContent)
    } else {
        todoContainer.insertAdjacentHTML('beforeend', htmlContent)
    }

    // todoContainer.insertAdjacentHTML('beforeend', htmlContent)

}

**/

