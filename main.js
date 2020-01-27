const playingField = document.getElementById("playing-field")

// const downB = document.getElementById("down")
// const upB = document.getElementById("up")
// const leftB = document.getElementById("left")
//  const rightB = document.getElementById("right")

const block = document.getElementById("block")

const move = function (dir) {

    let left = parseInt(block.style.left) || 0
    let up = parseInt(block.style.top) || 0

    switch (dir) {
        case "right":
            left += 15
            break;
        case "left":
            left -= 15
            break;
        case "up":
            up -= 15
            break;
        case "down":
            up += 15
            break;
    }
    block.style.left = left + "px"
    block.style.top = up + "px"
}

// const moveRight = function () {
//     let left = parseInt(block.style.left) || 0
//     left += 15
//     block.style.left = left + "px"
// }
// const moveLeft = function () {
//     let left = parseInt(block.style.left) || 0
//     left -= 15
//     block.style.left = left + "px"
// }
// const moveUp = function () {
//     let down = parseInt(block.style.top) || 0
//     down -= 15
//     block.style.top = down + "px"
// }
// const moveDown = function () {
//     let up = parseInt(block.style.top) || 0
//     up += 15
//     block.style.top = up + "px"
// }

document.addEventListener('keydown', function (event) {
    switch (event.code) {
        case 'ArrowLeft':
            move('left')
            break;

        case 'ArrowRight':
            move('right')
            break;

        case 'ArrowUp':
            move('up')
            break;

        case 'ArrowDown':
            move('down')
            break;
    }
});

const boxes = document.getElementsByClassName("box")
const enterColor = function (ids) {
    for (box of boxes) {
        if (box.id == ids)
            box.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}

