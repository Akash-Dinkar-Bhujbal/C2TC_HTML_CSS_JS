//player 01 setup  // generate random number 1-6
var randomNum1 = Math.floor(Math.random() * 6) + 1;
//map images to randomnumber to files in images folder
var randomImageSource = "images/dice" + randomNum1 + ".png";

// img[0] - 1st image update as per random number
var image1 =  document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


// Player 2 setup
var randomNum2 = Math.floor(Math.random() * 6) + 1;
//map images to randomnumber to files in images folder
var randomImageSource2 = "images/dice" + randomNum2 + ".png";

// img[1] - 2nd image update as per random number
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


// Player 3 setup
var randomNum3 = Math.floor(Math.random() * 6) + 1;
//map images to randomnumber to files in images folder
var randomImageSource3 = "images/dice" + randomNum3 + ".png";

// img[2] - 3rd image update as per random number
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", randomImageSource3);

var p1 = randomNum1, p2 = randomNum2, p3 = randomNum3;
// Main Logic of Dice

if(p1===p2 && p2===p3){
// p1 p2 p3
document.querySelector("h1").innerHTML = "Draw";
}else if(p2===p3 && p2>p1){
  // p2 p3
  document.querySelector("h1").innerHTML = "Draw in Player 2 & Player 3 !";
}else if(p1===p3 && p1>p2){
  // p1 p3
  document.querySelector("h1").innerHTML = "Draw in Player 1 & Player 3 !";
}else if(p1===p2 && p1>p3){
  // p1 p2
  document.querySelector("h1").innerHTML = "Draw in Player 1 & Player 2 !";
}else if(p1>p2 && p1>p3){
  // p1
  document.querySelector("h1").innerHTML = "Player 1 Wins !";
}else if(p2>p1 && p2>p3){
  // p2
  document.querySelector("h1").innerHTML = "Player 2 Wins !";
}else if(p3>p1 && p3>p2){
  // p3
  document.querySelector("h1").innerHTML = "Player 3 Wins !";
}else{
  // undefine
  document.querySelector("h1").innerHTML = "Magic!!!";
}