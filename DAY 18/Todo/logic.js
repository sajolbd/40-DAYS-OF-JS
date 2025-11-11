console.log("Task Manager");
function addTask() {
  const taskInput = document.getElementById("taskinput");
  const tasklist = document.getElementById("tasklist");

  const task = taskInput.value;
  if (task.trim() === "") return;

  const li = document.createElement("li");
  li.innerText = task;
  const deleteElement = document.createElement("button");
  deleteElement.innerText = "X";
  deleteElement.style.marginLeft = "10px";
  deleteElement.style.color = "red";
  deleteElement.onclick = function(){
    li.remove()
  }
  tasklist.appendChild(li);
  li.appendChild(deleteElement);
}
