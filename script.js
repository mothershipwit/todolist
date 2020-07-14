function init() {

}
var addToTask = document.querySelector('#add-to-task');
var tasklistItem = document.querySelector('#todo-task');
var tasklist = document.querySelector('#todotask');

addToTask.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the task item is empty
	if (taskList.value.length < 1) return;

	// Add item to todo list
	todo.innerHTML += '<li><label><input type="checkbox"> ' + todoTaskList.value + '</label></li>';

	// Clear input
	taskList.value = '';

	// Save the list to localStorage
	localStorage.setItem('todoListItems',tasklist.innerHTML);

}, false);


var saved = localStorage.getItem('wishlistItems');

if (saved) {
	tasklist.innerHTML = saved;
}

document.addEventListener('click', function (event) {


	if (event.target.id === 'todolist-remove-all') {
		todolist.innerHTML = '';
		localStorage.removeItem('todolistItems');
	}


	var item = event.target.closest('#todotask input');
	if (item) {
		if (item.checked) {
			item.parentNode.className = 'completed';
			item.setAttribute('checked', 'checked');
		} else {
			item.parentNode.className = '';
			item.removeAttribute('checked');
		}
		localStorage.setItem('tasklistItems', tasklist.innerHTML);
	}

}, false);