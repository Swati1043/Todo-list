const mainContainer = document.getElementById("main");
const input = document.getElementById("input-bar");
const myBtn = document.getElementById("btn");
const taskList = document.getElementById("task-list");

function addTask() {
    // remove extra spaces
    let inputStore = input.value.trim();

    // if input is empty
    if (inputStore === "") {
        alert("please add task!");
        return;
    }

    // create elements
    const div = document.createElement("div");
    const para = document.createElement("p");

    para.innerText = inputStore;

    // create buttons
    const edit = document.createElement("button");
    const remove = document.createElement("button");

    edit.innerText = "Edit";
    remove.innerText = "Remove";

    // append everything ONCE
    div.append(para, edit, remove);
    taskList.append(div);

    // remove task
    remove.addEventListener("click", () => {
        div.remove();
    });

    // edit task
    edit.addEventListener("click", () => {
        let newText = prompt("Edit your task", para.innerText);
        if (newText && newText.trim() !== "") {
            para.innerText = newText.trim();
        }
    });

    // clear input
    input.value = "";

    // auto scroll
    taskList.scrollTop = taskList.scrollHeight;
}

// Button click
myBtn.addEventListener("click", addTask);

// Enter key support
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
