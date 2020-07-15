function addNew(){
    var li= document.createElement("li");
    var inputValue = document.getElementById("task-name").value;
    var list = document.querySelector('ul');
    li.append(inputValue);
    console.log(inputValue);

    document.getElementById("task-list").append(li);
   

}

