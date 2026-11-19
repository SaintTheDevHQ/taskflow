
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskPriority = document.querySelector('#task-priority');
const tasksContainer = document.querySelector('#tasks-container');

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

task.appendChild(taskTitle);
task.appendChild(taskLevel);

tasksContainer.appendChild(task);
});
