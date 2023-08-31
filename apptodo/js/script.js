
// Get references to the elements
var taskInput = document.querySelector(".task-input");
var addTaskBtn = document.querySelector(".submit-task");
var taskList = document.querySelector(".task-list");

// Add task when the button is clicked
addTaskBtn.addEventListener("click", function () {
    addTask();
});

// Function to add a new task
function addTask() {
    // Create a new list item
    var li = document.createElement("li");
    li.classList.add("task-list-item");

    // Create a checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    // Create a span for the task text
    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    li.appendChild(taskText);

    // Create a div for buttons
    var buttonDiv = document.createElement("div");

    // Create a delete button
    var deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
    buttonDiv.appendChild(deleteBtn);

    // Add the new task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

    // Create an Edit button
    var editBtn = document.createElement("span");
    editBtn.classList.add("edit-btn")
    editBtn.addEventListener("click", function () {
        enableEditing(taskText, editBtn);
    });
    buttonDiv.appendChild(editBtn);

    // Append the button div to the list item
    li.appendChild(buttonDiv);

    // Create a Save button (initially hidden)
    var saveBtn = document.createElement("span");
    saveBtn.classList.add("save-btn")
    saveBtn.style.display = "none";
    saveBtn.addEventListener("click", function () {
        disableEditing(taskText, editBtn, saveBtn);
    });
    buttonDiv.appendChild(saveBtn);
}

// Function to enable editing
function enableEditing(taskText, editBtn) {
    taskText.contentEditable = true;
    taskText.style.border = "1px solid #ccc";
    editBtn.style.display = "none";
    taskText.focus();
    var saveBtn = editBtn.nextSibling;
    saveBtn.style.display = "inline-block";
}

// Function to disable editing
function disableEditing(taskText, editBtn, saveBtn) {
    taskText.contentEditable = false;
    taskText.style.border = "none";
    saveBtn.style.display = "none";
    editBtn.style.display = "inline-block";
}