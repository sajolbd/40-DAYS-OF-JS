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
function searchFilter() {
  const searchValue = document.getElementById("searchinput").value.toLowerCase();
  const tasks = document.querySelectorAll("#tasklist li");
console.log(tasks);
  tasks.forEach(task => {
    const text = task.firstChild.textContent.toLowerCase();
    if (text.includes(searchValue)) {
      task.style.display = "";
    } else {
      task.style.display = "none";
    }
  });
}
let count = 0;
function counter() {
      const btn = document.getElementById("btn");
      btn.addEventListener("click", () => {
        count++;
        console.log(count);
      });
    }
window.onload = counter