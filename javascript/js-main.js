const container = document.querySelector(".container");
const size_btn = document.querySelector("#user-input");
const GRID_SIZE = 16;

// default displayed grid
createGrid(16);

container.addEventListener("mouseover", e => {
    // target is a tile
    addHoverEffect(e.target);
})

container.addEventListener("mouseout", e => {
    // target is a tile
    console.log(e.target);
    removeHoverEffect(e.target);
})

size_btn.addEventListener("click", e => {
    let msg = parseInt(prompt("Enter a valid size (1-100): ", "1"), 10)
    
    if (!checkValidInput(msg)) {
        alert("Invalid Input");
    }
    else {
        createNewGrid(msg);
    }
});

function createGrid(size) {
    // creates a grid of divs in the container
    for (let i=0; i<size; i++) {
        let row_div = document.createElement("div");
        row_div.setAttribute("class", "container-row");
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            div.setAttribute("class", "tile");
            row_div.appendChild(div);             
        }
        container.appendChild(row_div);
    }
}

function addHoverEffect(tile) {
    tile.classList.add("tile-hover");
}

function removeHoverEffect(tile) {
    tile.classList.remove("tile-hover");
}

function checkValidInput(input) {
    if (isNaN(input)) {
        return false;
    }
    if (input <= 0 || input > 100) {
        return false;
    }
    return true;
}

function clearGrid() {
    container.textContent = "";
}

function createNewGrid(size) {
    clearGrid();
    createGrid(size);
}