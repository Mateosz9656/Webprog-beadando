
const addButton = document.getElementById("addButton");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const szamlalo = document.getElementById("todoCount");

let maradt = 0;


addButton.addEventListener("click", () => {
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("A teendő szövege nem lehet üres!");
        return;
    }

    const listItem = document.createElement("li");


    const textSpan = document.createElement("span");
    textSpan.textContent = todoText;


    const doneButton = document.createElement("button");
    doneButton.textContent = "✔";
    doneButton.className = "done";


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✖";
    deleteButton.className = "delete";


    doneButton.addEventListener("click", () => {
        if (!listItem.classList.contains("done")) {
            listItem.classList.add("done");
            listItem.removeChild(deleteButton);
            maradt--;
            counter();
        }
    });

    deleteButton.addEventListener("click", () => {
        todoList.removeChild(listItem);
        if (!listItem.classList.contains("done")) {
            maradt--;
            counter();
        }
    });


    listItem.appendChild(textSpan);
    listItem.appendChild(deleteButton);
    listItem.appendChild(doneButton);


    todoList.appendChild(listItem);


    todoInput.value = "";
    maradt++;
    counter();
});


function counter() {
    szamlalo.textContent = `Jelenleg ${maradt}db befejezetlen teendő van.`;
}
