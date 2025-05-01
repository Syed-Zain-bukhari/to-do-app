function addtask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task first");
    return;
  }

  var taskList = document.getElementById("taskList");
  var li = document.createElement("li");
  li.textContent = taskText;

  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
