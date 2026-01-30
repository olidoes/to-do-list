let toDos =
    localStorage.getItem("toDos") === null
        ? []
        : JSON.parse(localStorage.getItem("toDos"));

function loadToDos() {
    const toDosContainer = document.querySelector(".to-dos");

    toDosContainer.innerHTML = "";

    for (let i = 0; i < toDos.length; i++) {
        let p = document.createElement("p");
        p.innerText = toDos[i].value;
        p.id = toDos[i].id;

        toDosContainer.appendChild(p);
    }
}

function handleAddButtonClick() {
    let inputFieldValue = document.getElementById("input-area").value;

    if (inputFieldValue === "") {
        return;
    }

    const newToDo = {
        value: inputFieldValue,
        id: Date.now(),
    };

    document.getElementById("input-area").value = "";

    toDos.push(newToDo);

    localStorage.setItem("toDos", JSON.stringify(toDos));

    loadToDos();
}

function handleToDoClick(event) {
    for (const object of toDos) {
        if (String(object.id) === event.target.id) {
            toDos = toDos.filter(
                (currentObject) =>
                    String(object.id) !== String(currentObject.id),
            );

            localStorage.setItem("toDos", JSON.stringify(toDos));

            loadToDos();
            return;
        }
    }
}

document
    .getElementById("input-button")
    .addEventListener("click", handleAddButtonClick);

document
    .querySelector(".to-dos")
    .addEventListener("click", (event) => handleToDoClick(event));

window.addEventListener("load", (event) => {
    loadToDos();
});
