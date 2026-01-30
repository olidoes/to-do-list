const toDos = [];

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
        }
    }
}

function handleAddButtonClick() {
    const inputFieldValue = document.getElementById("input-area").value;
    const newToDo = toDos.push({
        value: inputFieldValue,
        done: false,
        added: false,
    });

    loadToDos();
}

function handleToDoClick(event) {
    for (const obj of toDos) {
        if (`toDo-${obj.value}` === event.target.className) {
            delete toDos[obj];
            document.querySelector(`.toDo-${obj.value}`).remove();
        }
    }
}

document
    .getElementById("input-button")
    .addEventListener("click", handleAddButtonClick);

document
    .querySelector(".to-do-list-container")
    .addEventListener("click", (event) => handleToDoClick(event));
