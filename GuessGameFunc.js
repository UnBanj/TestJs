/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) 
*/
//Ovo je samo jedna funkcionalnost igre koja je postavljena u GuessMyNumberGame repo
//Play again
document.querySelector(".again").addEventListener("click", function () {
  //postavljamo inicijalna stanje svih prom, i novi random broj
  secretNumber = Math.trunc(Math.random() * 20) + 1; //da bi bili [1-20]
  const guess = Number(document.querySelector(".guess").value);
  score = 20;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing..");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
});
