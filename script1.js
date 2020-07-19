function addNew(){
    var li= document.createElement("li");
    var inputValue = document.getElementById("task-name").value;
    var list = document.querySelector('ul');
  
    var task = `<span class="delete">&times;</span><input type="checkbox" class="done"> <label>${inputValue}</label>`;
    li.innerHTML = task;
    console.log(inputValue);
    document.getElementById("task-list").append(li);
}


var list = document.querySelector('ul');
list.addEventListener('click',function(ev) {
    console.log (ev);
    if (ev.target.className === 'done') {
        ev.target.nextSibling.nextSibling.classList.toggle('checked');
    
    }
    if (ev.target.className == 'delete') {
        console.log("delete this task");
        let task = ev.target.parentNode;
		let list = task.parentNode;
		list.removeChild(task);
    }
    
}, false);


function clearAll(){
    console.log("make clear all work");
    var list = document.getElementById("task-list");
    list.innerHTML = null;

}





