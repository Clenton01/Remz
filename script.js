const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

clearBtn.addEventListener('click', clearAllTasks);

function addTask() {
    const taskValue = taskInput.value.trim();  

    if (taskValue === '') {
        alert('Please enter a task!'); 
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    const deleteBtn = document.createElement('button'); 
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(listItem); 
    });

    listItem.appendChild(deleteBtn); 
    taskList.appendChild(listItem); 
    listItem.addEventListener('click', function () {
        listItem.classList.toggle('completed');
    });

    taskInput.value = ''; 
}

function clearAllTasks() {
    taskList.innerHTML = ''; 
}