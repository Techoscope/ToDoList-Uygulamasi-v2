// Story 1 - When User type a todo item on input and click add button, the item will be added to the list. 
// Task 1.1 - Invoke a function onclick button
// Task 1.2 - Get input value
// Task 1.3 - Create and add the input value to ul list.

// BugFix - Empty input when item inserted successfully
// BugFix - Dont insert the task when input is empty

function addItem(){
  // Access input box as a node
  let inputBox = document.getElementById('todo_input');
  if (inputBox.value) {
    // Create li element for HTML
    const listItem = document.createElement('li');
    // Add a class to the li element
    listItem.className = 'todo-list-item';
    // Assign input box value to li element's innerHTML
    listItem.innerHTML = inputBox.value;
    // Insert newly created li element above to ul element.
    document.getElementById('todo_list').appendChild(listItem);
    // Empty input box value
    inputBox.value = '';
  } else {
    alert('Input box cannot be empty')
  }
}

// Story 2 - When User click on the item in the list, the item will be removed/deleted.
// Task 2.1 - Add onclick attribute to li element

function removeItem(listItem) {
  // const isConfirmed = confirm('Are you sure?')
  // if (isConfirmed) {
  //   listItem.remove();
  // }
  document.getElementById('todo_list').removeChild(listItem);
}