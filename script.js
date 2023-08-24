// Get necessary elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add event listener to the add button
addBtn.addEventListener('click', addTodo);

// Function to add a new todo item
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    todoItem.appendChild(checkbox);

    const todoLabel = document.createElement('label');
    todoLabel.textContent = todoText;
    todoItem.appendChild(todoLabel);

    todoList.appendChild(todoItem);

    // Clear the input field
    todoInput.value = '';
  }
}