function addTask() {
  const input = document.getElementById("taskInput");
  //console.log(input)
  const taskText = input.value.trim();
  //console.log(taskText)
// Validation
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");
console.log(taskList)
  const li = document.createElement("li");
  console.log(li)
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  console.log(deleteBtn)
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => taskList.removeChild(li);
  console.log(deleteBtn)

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  console.log(taskList)

  input.value = "";
}
