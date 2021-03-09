// CRUD - Create, Read, Update, Delete,
// BREAD - Browse, Read, Edit, Add, Delete

let todoItems = [];

function addItem(){
  const input = document.getElementById('todo_input');
  todoItems.push(input.value);
  localStorage.setItem('todoItems', todoItems);
  input.value = '';
  getItems().then((resolvedValue)=>{listItems(resolvedValue)});
}

// List all items
function getItems() {
  return new Promise((resolve)=>{
    setTimeout(() => {
      todoItems = localStorage.getItem('todoItems') ? localStorage.getItem('todoItems').split(',') : [] ;
      resolve(todoItems);
    }, 1000);
  })
}

function listItems(todoItems) {
  const todoList =  document.getElementById('todo_list');
  todoList.innerHTML = '';
  todoItems.forEach( item => {
    // todoList.innerHTML += '<li onclick="removeItem(this)">' + item + '</li>';
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    listItem.addEventListener('click', removeItem);
    todoList.appendChild(listItem);
  })
}

// Tiklamis oldugum list item'in texti haric diger itemlardan filtrele
// Filtrelenmis item'lari bir degiskene assign et
// Bu yeni array'i local storage'a gonder

function removeItem(e) {
  const filteredArray = todoItems.filter(item => {
    return item !== e.target.innerHTML;
  })
  localStorage.setItem('todoItems', filteredArray);
  getItems().then((resolvedValue)=>{listItems(resolvedValue)});
}

getItems().then(resolvedValue => listItems(resolvedValue));


