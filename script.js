const input = document.getElementById("description");
const today = document.getElementById("date");
const button = document.getElementById("btn");
const addTask = document.getElementById("add-task-btn");
const btnContainer = document.getElementById("btn-container");
const taskList = document.getElementById("task-container");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date();
const form = document.getElementById("input-form");
today.innerHTML = "Today " + "- " + days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
addTask.addEventListener("click", displayTask);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        displayTask();
    }
    taskData;
});

function displayTask() {
    if(input.value === ""){
        alert("Please add a task!")
    } else {
        let list = document.createElement("li");
        list.innerHTML = input.value;
        taskList.appendChild(list);
        let deleteIcon = document.createElement("span");
        deleteIcon.classList.toggle("material-symbols-outlined");
        deleteIcon.innerHTML = "delete";
        list.appendChild(deleteIcon);
    };
    input.value = "";
    taskData();
};

taskList.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
        taskData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        taskData();
    }
});
const taskData = () => {
    localStorage.setItem("tasks", taskList.innerHTML);
}
const showTask = () => {
    taskList.innerHTML = localStorage.getItem("tasks");
};
showTask();
//localStorage.clear();