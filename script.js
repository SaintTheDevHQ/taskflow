
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskPriority = document.querySelector('#task-priority');
const tasksContainer = document.querySelector('#tasks-container');
const filterAll = document.querySelector('#filter-all');
const filterPending = document.querySelector('#filter-pending');
const filterCompleted = document.querySelector('#filter-completed');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const taskName = taskInput.value;
  const priority = taskPriority.value;

  
  const task = document.createElement('div');
  task.classList.add('task-item');

 
  const taskTitle = document.createElement('h3');
  taskTitle.textContent = taskName;


  const taskLevel = document.createElement('span');
  taskLevel.textContent = priority + ' priority';
  taskLevel.classList.add(priority);

 
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.classList.add('complete-btn');

completeButton.addEventListener('click', function() {
  taskTitle.classList.toggle('completed');

  if (taskTitle.classList.contains('completed')) {
    completeButton.textContent = 'Undo';
  } else {
    completeButton.textContent = 'Complete';
  }
  });

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-btn');

  editButton.addEventListener('click', function() {
  const newTaskName = prompt('Edit your task:', taskTitle.textContent);

  if (newTaskName !== null && newTaskName.trim() !== '') {
    taskTitle.textContent = newTaskName;
  }
});

 
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');

  deleteButton.addEventListener('click', function() {
    task.remove();
  });

  
  task.appendChild(taskTitle);
  task.appendChild(taskLevel);
  task.appendChild(completeButton);
  task.appendChild(deleteButton);
  task.appendChild(editButton);

  
  tasksContainer.appendChild(task);


  taskInput.value = '';
});

filterAll.addEventListener('click', function() {
  const tasks = document.querySelectorAll('.task-item');

  tasks.forEach(function(task) {
    task.style.display = 'flex';
  });
});

filterPending.addEventListener('click', function() {
  const tasks = document.querySelectorAll('.task-item');

  tasks.forEach(function(task) {
    const taskTitle = task.querySelector('h3');

    if (taskTitle.classList.contains('completed')) {
      task.style.display = 'none';
    } else {
      task.style.display = 'flex';
    }
  });
});

filterCompleted.addEventListener('click', function() {
  const tasks = document.querySelectorAll('.task-item');

  tasks.forEach(function(task) {
    const taskTitle = task.querySelector('h3');

    if (taskTitle.classList.contains('completed')) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  });
});

