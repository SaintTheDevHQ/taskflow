
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskPriority = document.querySelector('#task-priority');
const tasksContainer = document.querySelector('#tasks-container');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const taskName = taskInput.value;
  const priority = taskPriority.value;

  // Create task container
  const task = document.createElement('div');
  task.classList.add('task-item');

  // Create task title
  const taskTitle = document.createElement('h3');
  taskTitle.textContent = taskName;

  // Create task priority
  const taskLevel = document.createElement('span');
  taskLevel.textContent = priority + ' priority';
  taskLevel.classList.add(priority);

  // Create Complete button
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

  // Create Delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');

  deleteButton.addEventListener('click', function() {
    task.remove();
  });

  // Add elements to task
  task.appendChild(taskTitle);
  task.appendChild(taskLevel);
  task.appendChild(completeButton);
  task.appendChild(deleteButton);

  // Display task
  tasksContainer.appendChild(task);

  // Clear input
  taskInput.value = '';
});
