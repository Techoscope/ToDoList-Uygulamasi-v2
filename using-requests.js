function getItems() {
  const xhr = new XMLHttpRequest();
  const url = 'http://127.0.0.1:8080/api/todoitems';
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE){
      // return xhr.response;
      listItems(xhr.response)
    }
  }
  xhr.open('GET', url);
  xhr.send();
}

function listItems(todoItems) {
  const todoList =  document.getElementById('todo_list');
  todoList.innerHTML = '';
  todoItems.forEach( item => {
    // todoList.innerHTML += '<li onclick="removeItem(this)">' + item + '</li>';
    const listItem = document.createElement('li');
    listItem.innerHTML = item.title;
    // listItem.addEventListener('click', removeItem);
    todoList.appendChild(listItem);
  })
}

getItems()
