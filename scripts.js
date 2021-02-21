// Story 1 - When User type a todo item on input and click add button, the item will be added to the list. 
// Task 1.1 - Invoke a function onclick button
// Task 1.2 - Get input value
// Task 1.3 - Create and add the input value to ul list.

function addItem(){
  const inputValue = document.getElementById('todo_input').value;
  
  const listItem = document.createElement('li');
  listItem.className = 'todo-list-item';
  listItem.innerHTML = inputValue;
  document.getElementById('todo_list').appendChild(listItem);

  // console.log(listItem);
}

// When User click on the item in the list, the item will be removed/deleted.