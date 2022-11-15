// const compChoice ="";

// let sign = window.prompt('Are you feeling lucky', 'sure')

// function getComputerChoice(){
//   let num = Math.floor(Math.random() * 3);
//   //returns a number : 0, 1, 2
//   //according to that number
//   //we will make our choice of rock paper or scissors
//   if(num==0){
//     console.log("rock")
//   }
//   else if(num==1){
//     console.log("paper");
//   }
//   else if(num==2){
//     console.log("scissors");
//   }
//   return num;
// }

// const playerSelection = "rock";
// const pc = 0;
// let compSelection = getComputerChoice();
// console.log("comp choice : " + compSelection);
// console.log("your choice : " + playerSelection);

// function playGame(pc, compSelection){
//   if(compSelection==0){
//     console.log("its a tie//rocks brother together");
//     return 0;
//   }
//   else if(compSelection==1){
//     console.log("you lose//paper over rock");
//     return -1;
//   }
//   else if(compSelection==2){
//     console.log("you win//rock over scissors");
//     return 1;
//   }
// }

// function game(){
//   let userScore=0;
//   let compScore=0;

//   // for(let i=0;i<5;i++){
//   //   if(playGame()==1){
//   //     userScore+=1;
//   //   }
//   //   else if(playGame()==-1){
//   //     compScore+=1;
//   //   }
//   //   else{
//   //     return 0;
//   //   }
//     console.log("round " + i + " :" + "user : " + userScore);
//     console.log("compScore : " + compScore);
//   }
// // }

// console.log(playGame(playerSelection, compSelection));
// console.log(game());

var you;
var yourScore =0;
var opponent;
var opponentScore =0;

var choices =["rock", "paper", "scissors"];

window.onload=function(){
  // <img id = "rock" src="rock.png">
  for(let i=0;i<3;i++){
    let choice=document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
}

function selectChoice(){
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  //random for opponent
  opponent = choices[Math.floor(Math.random()*3)];
  document.getElementById("opponent-choice").src =opponent + ".png";


//check for winner
if(you==opponent){
  yourScore+=1;
  opponent+=1;
}
else{
  if(you=="rock"){
    if(opponent=="scissors"){
      yourScore+=1;
    }
    else if(opponent=="paper"){
      opponentScore+=1;
    }  
 }
  else if(you=="scissors"){
    if(opponent=="paper"){
      yourScore+=1;
    }
    else if(opponent=="rock"){
      opponentScore+=1;
    }
  }
  else if(you=="paper"){
    if(opponent=="rock"){
      yourScore+=1;
    }
    else if(opponent=="scissor"){
      opponentScore+=1;
    }
  }
}
document.getElementById("your-score").innerText = yourScore;
document.getElementById("opponent-score").innerText = opponentScore;

}