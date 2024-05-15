// Selecting all box using their class
let boxes = document.querySelectorAll(".boxes");

// Selecting the reset button by its id
let resetButton = document.querySelector("#reset");

// Variable turnX ki kiski turn hai, true for X and false for O
let turnX = true;

// Selecting message elements
let message = document.querySelector('.message');

let gameEnd = false;

// winning condition pattrens
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
    disableBox();
}

// Function to display draw message
const showDrawMessage = () => {
    message.innerText = "It's a draw!";
    message.classList.remove("hide");
    disableBox();
}
const disableBox = () => {
    gameEnd = true;
}

// Function to check for a draw
const checkDraw = () => {
    let draw = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            // agar box empty hai to draw ko false kar dega
            draw = false;
            //loop se exit kar dega
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
        //console.log(winner);
            // box wala arrary (indivudal index nikala) 0 1 2
            //console.log(winner[0],winner[1],winner[2])
            // element check krne ke ley konsi position pe hai // 0<div 1<div 2<div
           // console.log(boxes[winner[0]],boxes[winner[1]],boxes[winner[2]])
            // value jo div ke andar hai , position 1 pe kya hai eg X ya O hai
            //console.log(boxes[winner[0]].innerText,boxes[winner[1]].innerText,boxes[winner[2]].innerText)
        let pos1 = boxes[winner[0]].innerText;
        let pos2 = boxes[winner[1]].innerText;
        let pos3 = boxes[winner[2]].innerText;
// !== (if they r not empty) ===( all r same)
        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            // agar ye sari condition match hoti hai to ek winner aa jayega
            showWinner(pos1);
            // end kr dega loop ko
            return;
        }
    }
    // agar ye winning condition match nhi kar pata to checkDraw fun ko call kr dega
    checkDraw(); 
}

// Function to handle box click events
const boxClick = (event) => {
    // Check if the game has ended
    if (!gameEnd) {
         // if the box r empty it will continues 
        if (event.innerText === "") {
            if (turnX) {
                event.innerText = "X";
                event.classList.add("red-text");
            } else {
                event.innerText = "O";
                event.classList.add("green-text");
            }
            // if X turn then it will switch to turn O and repeate it again and again
            turnX = !turnX;
            checkWinner();
        }
    }
};

// Event listeners for each boxes
boxes.forEach((box) => {
    box.addEventListener("click", boxClick);
});

// Event listener for the reset button
resetButton.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
    });
});
