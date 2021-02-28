// CRUD - Create, Read, Update, Delete,
// BREAD - Browse, Read, Edit, Add, Delete

let todoItems = [];

function addItem(){
  const input = document.getElementById('todo_input');
  todoItems.push(input.value);
  localStorage.setItem('todoItems', todoItems);
  input.value = '';
  getItems();
}

// List all items
function getItems() {
  const todoList =  document.getElementById('todo_list');
  todoItems = localStorage.getItem('todoItems').split(',');
  todoList.innerHTML = '';
  todoItems.forEach( item => {
    todoList.innerHTML += '<li onclick="removeItem(this)">' + item + '</li>';
  })
}

// Tiklamis oldugum list item'in texti haric diger itemlardan filtrele
// Filtrelenmis item'lari bir degiskene assign et
// Bu yeni array'i local storage'a gonder

function removeItem(element) {
  const filteredArray = todoItems.filter(item => {
    return item !== element.innerHTML;
  })
  localStorage.setItem('todoItems', filteredArray);
  getItems();
}

getItems();
