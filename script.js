const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');
const progressList = document.getElementById('progress-list');
const doneList = document.getElementById('done-list');

taskForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = createTaskItem(taskText);
    todoList.appendChild(taskItem);
    taskInput.value = '';
  }
});

function createTaskItem(taskText) {
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  taskItem.addEventListener('click', function () {
    if (this.parentNode === todoList) {
      progressList.appendChild(this);
    } else if (this.parentNode === progressList) {
      doneList.appendChild(this);
    }
  });

  return taskItem;
}
