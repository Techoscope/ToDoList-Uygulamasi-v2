let todoItems = [];

function addItem(){
  const input = document.getElementById('todo_input');
  todoItems.push(input.value);
  localStorage.setItem('todoItems', todoItems);
  input.value = '';
  getItems();
}

function getItems() {
  const todoList =  document.getElementById('todo_list');
  todoItems = localStorage.getItem('todoItems').split(',');
  todoList.innerHTML = '';
  todoItems.forEach( item => {
    todoList.innerHTML += '<li>' + item + '</li>';
  })
}

getItems();
