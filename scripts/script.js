const taskElem = document.querySelector(".todoList");
const taskInput = document.querySelector(".todoInput");
const addButton = document.querySelector(".todoButton");

addButton.addEventListener("click", () => {
  addTask();
});
taskElem.innerHTML = localStorage.getItem("taskData");

function addTask() {
  let task = document.createElement("p");
  task.innerText = taskInput.value;
  if (task.innerText === "") {
    alert("The task is empty");
  } else {
    taskElem.appendChild(task);
    taskInput.value = "";
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    task.appendChild(span);
  }
  saveData();
}
function saveData() {
  localStorage.setItem("taskData", taskElem.innerHTML);
}
