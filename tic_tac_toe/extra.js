// Selecting all boxes using their class
let boxes = document.querySelectorAll(".box");

// Selecting the reset button by its id
let resetButton = document.querySelector("#reset");

// Variable to keep track of whose turn it is, true for X and false for O
let turnX = true;

// Selecting message elements
let message = document.querySelector('.message');

// Array representing winning combinations
const winners = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Function to display winner message
const showWinner = (winner) => {
    message.innerText = `Congratulations ${winner}! You are the winner.`;
    message.classList.remove("hide");
}

// Function to display draw message
const showDrawMessage = () => {
    message.innerText = "It's a draw!";
    message.classList.remove("hide");
}

// Function to check for a draw
const checkDraw = () => {
    let draw = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            draw = false;
            break;
        }
    }
    if (draw) {
        showDrawMessage();
    }
}

// Function to check for a winner
const checkWinner = () => {
    for (let winner of winners) {
        let pos1 = boxes[winner[0]].innerText;
        let pos2 = boxes[winner[1]].innerText;
        let pos3 = boxes[winner[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return;
        }
    }
    checkDraw(); // Check for draw if no winner is found
}

// Event listeners for each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnX) {
                box.innerText = "X";
                box.classList.add("red-text");
            } else {
                box.innerText = "O";
                box.classList.add("green-text");
            }
            turnX = !turnX; // Toggle turn
            checkWinner();
        }
    });
});

// Event listener for the reset button
resetButton.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.classList.remove("red-text", "green-text");
    });
    message.classList.add("hide");
});
