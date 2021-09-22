

var randomNumber1 = Math.floor(Math.random() * 6) + 1  //random number 1-6
var randomDiceImages1 = "images/" + "dice" + randomNumber1 + ".png";   //random images 1-6
document.querySelector(".img1").setAttribute("src",randomDiceImages1);    //set images 1-6

var randomNumber2 = Math.floor(Math.random() * 6) + 1   //random number 1-6
var randomDiceImages2 = "images/" + "dice" + randomNumber2 + ".png";    //random images 1-6
document.querySelector(".img2").setAttribute("src",randomDiceImages2);   //set images 1-6

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
