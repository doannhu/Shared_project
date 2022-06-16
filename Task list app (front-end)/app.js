const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load event listener
loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click',removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

function addTask(anElement) {
    if(taskInput.vale ===''){
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

    taskInput.value = '';

    console.log(li);

    anElement.preventDefault();
}

function removeTask(_anElement){
    if(_anElement.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure to delete the this task? ')){
            _anElement.target.parentElement.parentElement.remove();
        }
        
    }
}

function clearTasks(){
    taskList.innerHTML = '';
}

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
