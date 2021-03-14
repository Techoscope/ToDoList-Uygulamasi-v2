async function getItems() {
  // fetch('http://127.0.0.1:8080/api/todoitems')
  //   .then(response => { return response.json() })
  //   .then(data => { listItems(data) })
  //   .catch(err => { console.log(err) })
  try {
    const response = await fetch('http://127.0.0.1:8080/api/todoitems');
    const data = await response.json();
    listItems(data);
  } catch (err) {
    console.log(err)
  }
  
}

function addItem() {
  const data = {
    method: 'POST',
    body: JSON.stringify({title: document.getElementById('todo_input').value}),
    headers: {
      'Content-type': 'application/json'
    }
  }

  fetch('http://127.0.0.1:8080/api/todoitems', data)
  .then(() => { getItems() })
  .catch(err => { console.log(err) })
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
  const data = {
    method: 'DELETE'
  }

  fetch('http://127.0.0.1:8080/api/todoitems/' + e.target.id, data)
  .then(() => { getItems() })
  .catch(err => { console.log(err) })
}

getItems();