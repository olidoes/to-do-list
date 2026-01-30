let toDos =
    localStorage.getItem("toDos") === null
        ? []
        : JSON.parse(localStorage.getItem("toDos"));

console.log(toDos);

function loadToDos() {
    if (toDos.length === 0) {
        console.log("Returned");
        return;
    }

    for (let i = 0; i < toDos.length; i++) {
        const toDoContainer = document.querySelector(
            ".to-do-list-container",
        ).childNodes;

        for (let test of toDoContainer) {
            if (test.className !== `toDo-${toDos[i].value}`) {
                toDos[i].isLoaded = false;
                continue;
            } else {
                toDos[i].isLoaded = true;
            }
        }
    }

    for (let i = 0; i < toDos.length; i++) {
        if (toDos[i].value === "" || toDos[i].isLoaded === true) {
            continue;
        } else {
            const toDosContainer = document.querySelector(
                ".to-do-list-container",
            );
            let p = document.createElement("p");
            p.innerText = toDos[i].value;

            p.className = `toDo-${toDos[i].value}`;

            toDos[i].isLoaded = true;

            toDosContainer.appendChild(p);
        }
    }
}

function handleAddButtonClick() {
    const inputFieldValue = document.getElementById("input-area").value;

    if (inputFieldValue === "") {
        return;
    }

    document.getElementById("input-area").value = "";
    const newToDo = {
        value: inputFieldValue,
        isLoaded: false,
    };

    toDos.push(newToDo);

    localStorage.setItem("toDos", JSON.stringify(toDos));

    loadToDos();
}

function handleToDoClick(event) {
    for (const obj of toDos) {
        if (`toDo-${obj.value}` === event.target.className) {
            indexOfObj = toDos[toDos.indexOf(obj)];

            toDos.pop(indexOfObj);

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

window.addEventListener("load", (event) => {
    loadToDos();
});
