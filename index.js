
//first dice
var n = Math.round(Math.random()*6)+1;  //range 1-6
var randomNumber1 = n;          // var n for image 2

if (randomNumber1 === 1) {
  document.querySelector("img").setAttribute("src", "./images/dice1.png");
} else if (randomNumber1 === 2) {
  document.querySelector("img").setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 === 3) {
  document.querySelector("img").setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 === 4) {
  document.querySelector("img").setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 === 5) {
  document.querySelector("img").setAttribute("src", "./images/dice5.png");
} else {
  document.querySelector("img").setAttribute("src", "./images/dice6.png");
}

// -----X-----first dice-----X------

// second dice
var m = Math.round(Math.random()*6)+1;   //range 1-6
var randomNumber2 = m;       // var m for image 2

if (randomNumber2 === 1) {
  document.querySelectorAll("img")[1].setAttribute("src", "./images/dice1.png");
} else if (randomNumber2 === 2) {
  document.querySelectorAll("img")[1].setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 === 3) {
  document.querySelectorAll("img")[1].setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 === 4) {
  document.querySelectorAll("img")[1].setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 === 5) {
  document.querySelectorAll("img")[1].setAttribute("src", "./images/dice5.png");
} else {
  document.querySelectorAll("img")[1].setAttribute("src", "./images/dice6.png");
}
//-----X-----second dice-----X------

if(n===m){
    document.querySelector("h1").innerHTML="Draw!";
}else if(n>m){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}else{
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
