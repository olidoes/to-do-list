<<<<<<< HEAD
const data = fetch("./toDos.json")
    .then((response) => response.json())
    .then((json) => {
        console.log(json[0]);
    });
let toDos = [];
=======
let toDos =
    localStorage.getItem("toDos") === null
        ? []
        : JSON.parse(localStorage.getItem("toDos"));

console.log();
>>>>>>> pre-json

function loadToDos() {
    for (let i = 0; i < toDos.length; i++) {
        if (toDos[i].added === true || toDos[i].value === "") {
            continue;
        }
        if (toDos[i].done === true) {
            delete toDos[i];
        } else {
            const toDosContiner = document.querySelector(
                ".to-do-list-container",
            );
            let p = document.createElement("p");
            p.innerText = toDos[i].value;
            p.className = `toDo-${toDos[i].value}`;

            toDosContiner.appendChild(p);

            toDos[i].added = true;
            console.log(data);
        }
    }
}

function handleAddButtonClick() {
    const inputFieldValue = document.getElementById("input-area").value;
    const newToDo = {
        value: inputFieldValue,
        done: false,
        added: false,
    };

    toDos.push(newToDo);

    localStorage.setItem("toDos", JSON.stringify(toDos));

    loadToDos();
}

function handleToDoClick(event) {
    for (const obj of toDos) {
        if (`toDo-${obj.value}` === event.target.className) {
            delete toDos[obj];
            document.querySelector(`.toDo-${obj.value}`).remove();

            localStorage.setItem("toDos", JSON.stringify(toDos));
        }
    }
}

document
    .getElementById("input-button")
    .addEventListener("click", handleAddButtonClick);

document
    .querySelector(".to-do-list-container")
    .addEventListener("click", (event) => handleToDoClick(event));

<<<<<<< HEAD
window.onload = loadToDos;
=======
window.addEventListener("load", (event) => {
    loadToDos();
});
>>>>>>> pre-json
