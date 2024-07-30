const taskElem = document.querySelector(".todoList");
const taskInput = document.querySelector(".todoInput");
const addButton = document.querySelector(".todoButton");

addButton.addEventListener("click", () => {
  addTask();
});

taskElem.innerHTML = localStorage.getItem("taskData");

function addTask() {
  let task;
  task = document.createElement("p");
  task.innerText = taskInput.value;

  if (task.innerText === "") {
    alert("The task is empty");
    return;
  }

  const span = document.createElement("span");
  span.innerHTML = "\u00d7";
  span.classList.add("deleteBtn");

  span.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event from bubbling up to the parent <p> element
    task.remove(); // Remove task on click
    saveData(); // Save updated list to localStorage
  });

  taskElem.appendChild(task);
  task.appendChild(span);
  taskInput.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem("taskData", taskElem.innerHTML);
}

taskElem.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    e.target.classList.toggle("checked");
  }
});
