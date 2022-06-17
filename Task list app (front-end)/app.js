const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load event listener
loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getTask);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click',removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

// Add a task to task list
function addTask(anElement) {
    if(taskInput.value ===''){
        alert('Please add a task');
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);

    storeLocalStorage(taskInput.value); // store value to local storage

    taskInput.value = '';

    console.log(li);

    anElement.preventDefault();
}

// load tasks from local storage
function getTask() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
    
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
    
        li.appendChild(link);
    
        taskList.appendChild(li);
    });
}

// Remove a task
function removeTask(_anElement){
    if(_anElement.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure to delete the this task? ')){
            _anElement.target.parentElement.parentElement.remove();
            removeFromStorage(_anElement.target.parentElement.parentElement);
        }
        
    }
}

// Remove a task from local storage
function removeFromStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            console.log(task);
            tasks.splice(index, 1);
        }

    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear the whole list
function clearTasks(){
    taskList.innerHTML = '';
}


// Search a task
function filterTasks(anElement){
    const text = anElement.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );
    
}

// store tasks to local disk
function storeLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}