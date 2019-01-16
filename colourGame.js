var numOfSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        })
    };
}

function setUpSquares() {
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColour = this.style.backgroundColor;
            if (clickedColour === pickedColour) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again";
                changeColours(clickedColour);
                h1.style.backgroundColor = clickedColour;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
}


function reset() {
    //generate new colour
    colours = generateRandomColours(numOfSquares);
    //new random colour from array
    pickedColour = pickColour();
    //update heading
    colourDisplay.textContent = pickedColour;
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";
    //updating square colours
    for (var i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        }
        else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colours[i];
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
});


function changeColours(colour) {
    for (var i = 0; i < colours.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function generateRandomColours(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColour());
    }
    return arr;
}

function randomColour() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}