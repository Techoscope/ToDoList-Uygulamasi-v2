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

function addItem() {
  const xhr = new XMLHttpRequest();
  const url = 'http://127.0.0.1:8080/api/todoitems';
  const data = JSON.stringify({title: document.getElementById('todo_input').value});
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
      getItems();
    }
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(data);
}

function listItems(todoItems) {
  const todoList =  document.getElementById('todo_list');
  todoList.innerHTML = '';
  todoItems.forEach( item => {
    // todoList.innerHTML += '<li onclick="removeItem(this)">' + item + '</li>';
    const listItem = document.createElement('li');
    listItem.id = item.id;
    listItem.innerHTML = item.title;
    listItem.addEventListener('click', removeItem);
    todoList.appendChild(listItem);
  })
}

function removeItem(e) {
  const xhr = new XMLHttpRequest();
  const url = 'http://127.0.0.1:8080/api/todoitems/' + e.target.id;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
      getItems();
    }
  }
  xhr.open('DELETE', url);
  xhr.send();
}

getItems()
