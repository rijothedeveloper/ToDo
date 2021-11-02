const toDoBtn = document.querySelector("#toDoButton");
const toDoInput = document.querySelector("input[name='todo-name']");
const list = document.querySelector("ul");
let toDos="";

updateToDos();

function updateToDos() {
    list.innerHTML = localStorage.toDos;
}

toDoBtn.addEventListener("click", function(event) {
    event.preventDefault();
    createToDo(toDoInput.value);
})

function createToDo(toDo) {
    const newLi = document.createElement("li");
    newLi.innerText = toDo;
    const btn = document.createElement("button");
    btn.innerText = "remove";
    newLi.append(btn);
    list.append(newLi);
    updateLocalStorage();
}

list.addEventListener("click", function(event) {
    if(event.target.localName==="button") {
        removeElement(event.target.parentElement)
    } else if(event.target.localName==="li") {
        markCompleted(event.target)
    }
})


function removeElement(element) {
    element.remove();
    updateLocalStorage();
}

function markCompleted(element) {
    element.classList.toggle("completed");
    updateLocalStorage();
}

function updateLocalStorage() {
    toDos = list.innerHTML;
    localStorage.toDos = toDos;
}
