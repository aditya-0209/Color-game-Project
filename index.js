var numOfSquares = 6;
// alert("Connected");
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("displayColor");
var messageDisplay = document.getElementById("message");
var demo = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
  numOfSquares = 3;
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  colors = generateRandomColors(numOfSquares); 
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i =0;i<squares.length;i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  colors = generateRandomColors(numOfSquares); 
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i =0;i<squares.length;i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
  
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numOfSquares); 
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  this.textContent = "New Colors";
  //change the color of the squares
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
  }
  demo.style.backgroundColor = "steelblue"; 
  
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  /////////////add initial colors to square
  squares[i].style.backgroundColor = colors[i];
  ///add click listeners to square
  squares[i].addEventListener("click", function () {
    //   alert("Clicked a Square");
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!!";
      resetButton.textContent = "Play Again!";
      changeColors(clickedColor);
      demo.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!!!!";
    }
  });
}
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  // console.log(squares[0].style);
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random colors and push it into array
    arr.push(randomColor());
  }
  //return that array in the end
  return arr;
}

function randomColor() {
  //pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0-255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}





