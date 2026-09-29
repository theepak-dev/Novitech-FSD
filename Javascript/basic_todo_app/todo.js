function addToDo(){
        let taskvalue = document.getElementById('inputtask').value;
        if (taskvalue == ""){
            return;
        }
        let taskstore = document.createElement("div");
        taskstore.className = "taskstore"

        let tasktext = document.createElement("span");
        tasktext.innerText = taskvalue;

        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove"
        removeButton.className = "removeButton"
        removeButton.onclick = function(){
            taskstore.remove();
        }

        taskstore.appendChild(tasktext);
        taskstore.appendChild(removeButton);

        document.getElementById("todolist").appendChild(taskstore);

        document.getElementById('inputtask').value = ""
    }