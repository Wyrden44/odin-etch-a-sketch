const container = document.querySelector(".container");
const GRID_SIZE = 16;

container.addEventListener("mouseover", e => {
    // target is a tile
    addHoverEffect(e.target);
})

container.addEventListener("mouseout", e => {
    // target is a tile
    console.log(e.target);
    removeHoverEffect(e.target);
})

function createGrid() {
    // creates a grid of divs in the container
    for (let i=0; i<GRID_SIZE; i++) {
        let row_div = document.createElement("div");
        row_div.setAttribute("class", "container-row");
        for (let j = 0; j < GRID_SIZE; j++) {
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

createGrid();