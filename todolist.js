function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
      alert("Please enter a task!");
      return;
    }
    var taskList = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.textContent = input;
    taskList.appendChild(listItem);
    document.getElementById("taskInput").value = "";
  }