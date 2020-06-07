var rndNum1 = Math.floor(Math.random()*6)+1;
var rndNum2 = Math.floor(Math.random()*6)+1;
var rndDice1 = "images/dice"+rndNum1+".png";
var rndDice2 = "images/dice"+rndNum2+".png";
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",rndDice1);
image2.setAttribute("src", rndDice2);

if(rndNum1>rndNum2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(rndNum1<rndNum2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else
document.querySelector("h1").innerHTML = "Draw!";
