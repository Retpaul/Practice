// DOM Elements
const addTaskForm = document.querySelector("#addTaskForm");
const taskList = document.querySelector("#taskList");
let taskNo = 0;

// Event Listener: Form submission
addTaskForm.addEventListener("submit", addTask); // When form is submitted run addTask function

// Event Listener: Task actions (Edit and Delete)
taskList.addEventListener("click", handleClickEvent);

// Event Listener: Checkbox change
taskList.addEventListener("change", handleCheckboxChange);

// Function: Add a new task
function addTask(event) {
  event.preventDefault();

  // Retrieve form input values
  const taskNameInput = document.querySelector("#taskName");
  const startTimeInput = document.querySelector("#startTime");
  const endTimeInput = document.querySelector("#endTime");
  

  const taskName = taskNameInput.value;
  const startTime = startTimeInput.value;
  const endTime = endTimeInput.value;
  
  taskNo+=1
  // Create a new task row
  const taskRow = document.createElement("tr");
  taskRow.innerHTML = `
    <td>${taskNo}</td>
    <td class="task-name">${taskName}</td>
    <td>${startTime}</td>
    <td>${endTime}</td>
    <td>
      <a class="edit">Edit</a> |
      <a class="delete">Delete</a>
    </td>
    <td><input type="checkbox" class="completed-checkbox"></td>
  `;

    

  // Append the task row to the task list
  taskList.appendChild(taskRow);
  
 

  // Clear the form inputs
  taskNameInput.value = "";
  startTimeInput.value = "";
  endTimeInput.value = "";
  
  
}

// Function: Handle click events on task actions (Edit and Delete)
function handleClickEvent(event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains("edit")) {
    // Retrieve the task row
    const taskRow = clickedElement.closest("tr");

    // Retrieve task details
    const taskName = taskRow.cells[1].textContent;
    const startTime = taskRow.cells[2].textContent;
    const endTime = taskRow.cells[3].textContent;

    // Update the form inputs with task details
    document.querySelector("#taskName").value = taskName;
    document.querySelector("#startTime").value = startTime;
    document.querySelector("#endTime").value = endTime;

    // Remove the task row
    taskRow.remove();
  } else if (clickedElement.classList.contains("delete")) {
    // Remove the task row
    const taskRow = clickedElement.closest("tr");
    taskRow.remove();
  }
}

// Function: Handle checkbox change
function handleCheckboxChange(event) {
  const checkbox = event.target;

  if (checkbox.classList.contains("completed-checkbox")) {
    const taskRow = checkbox.closest("tr");
    taskRow.classList.toggle("completed-task");
  }
}
