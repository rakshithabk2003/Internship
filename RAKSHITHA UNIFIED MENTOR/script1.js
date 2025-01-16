const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add event listener to the form
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const taskText = todoInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    todoInput.value = ''; // Clear input field
  }
});

// Function to add a task
function addTask(task) {
  const li = document.createElement('li');
  li.classList.add('todo-item');

  li.innerHTML = `
    <span>${task}</span>
    <div class="todo-actions">
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  // Add event listeners for Complete and Delete buttons
  li.querySelector('.complete-btn').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  // Append the task to the list
  todoList.appendChild(li);
}