// All code should be written in this file.
// global move and value variables
let playerOneMoveOneType,
playerOneMoveTwoType,
playerOneMoveThreeType,
playerOneMoveOneValue,
playerOneMoveTwoValue,
playerOneMoveThreeValue,
playerTwoMoveOneType,
playerTwoMoveTwoType,
playerTwoMoveThreeType,
playerTwoMoveOneValue,
playerTwoMoveTwoValue,
playerTwoMoveThreeValue;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) =>{

  if (!player || !moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue){
    return null;
  }

  if (player != "Player One" && player != "Player Two"){
    return null;
  }
  //incorrect value check

  if (moveOneType != "rock" && moveOneType != "scissor" && moveOneType != "paper"){
    return null;
  }
  if (moveTwoType != "rock" && moveTwoType != "scissor" && moveTwoType != "paper"){
    return null;
  }
  
  if (moveThreeType != "rock" && moveThreeType != "scissors" && moveThreeType != "paper"){
    return null;
  }  
  
  if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1){
    return null;
  }
  if (moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99) {
    return null;
  }

  if (player === `Player One`) {
    console.log("player one is here");
    playerOneMoveOneType = moveOneType;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeValue = moveThreeValue;
  }

  if (player === `Player Two`) {
    console.log("player two is here");
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeValue = moveThreeValue;
  }
}

const getRoundWinner = (roundNumber) =>{
  let playerOnePoints = 0;
  let playerTwoPoints = 0;

  switch (roundNumber){
    case 1:
      if (playerOneMoveOneType === playerTwoMoveOneType){
        if(PlayerOneMoveOneValue === playerTwoMoveOneValue){
          return "tie";
        } else if (PlayerOneMoveOneValue > playerTwoMoveOneValue){
          return "Player One"
        } else{
          return "Player Two"
        }
      }  
      if (playerOneMoveOneType === "rock" && playerTwoMoveOneValue === "paper") {
            return "Player Two";
      } 
      if (playerOneMoveOneType === "paper" && playerTwoMoveOneValue === "scissors") {
            return "Player Two";
      }
      if (playerOneMoveOneType === "scissors" && playerTwoMoveOneValue === "rock"){
        return "Player Two"
      }
        
      

      case 2:
      if (playerOneMoveTwoType === playerTwoMoveTwoType){
        if(PlayerOneMoveTwoValue === playerTwoMoveTwoValue){
          return "tie";
        } else if (PlayerOneMoveTwoValue > playerTwoMoveTwoValue){
          return "Player One"
        } else{
          return "Player Two"
        }
      }  
      if (playerOneMoveTwoType === "rock" && playerTwoMoveTwoValue === "paper") {
            return "Player Two";
      } else {
        return "Player One";
      }
      if (
        playerOneMoveTwoType === "paper" &&
        playerTwoMoveTwoValue === "scissors"
      ) {
        return "Player Two";
      } else {
        return "Player One";
      }
      if (playerOneMoveTwoType === "scissor" && playerTwoMoveTwoValue === "rock"){
        return "Player Two"
      }  else {
        return "Player One";
      }
      
      case 3:
      if (playerOneMoveThreeType === playerTwoMoveThreeType){
        if(PlayerOneMoveThreeValue === playerTwoMoveThreeValue){
          return "tie";
        } else if (PlayerOneMoveThreeValue > playerTwoMoveThreeValue){
          return "Player One"
        } else{
          return "Player Two"
        }
      }  

      if (
        playerOneMoveThreeType === "rock" &&
        playerTwoMoveThreeValue === "paper"
      ) {
        return "Player Two";
      } else {
        return "Player One";
      }
      if (
        playerOneMoveThreeType === "paper" &&
        playerTwoMoveThreeValue === "scissors"
      ) {
        return "Player Two";
      } else {
        return "Player One";
      }
      if (
        playerOneMoveThreeType === "scissor" &&
        playerTwoMoveThreeValue === "rock"
      ) {
        return "Player Two";
      }  else {
        return "Player One";
      }    
  }
}

const getGameWinner = () => {
  let playerOneTotalWins = 0;
  let playerTwoTotalWins = 0;

  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);
  if (roundOneWinner === "Player One"){
    playerOneTotalWins += 1;
  }else if(roundOneWinner === "Player Two"){
    playerTwoTotalWins += 1;
  }else{
    playerOneTotalWins += 1;
    playerTwoTotalWins +=1;
  }

    if (roundTwoWinner === "Player One") {
      playerOneTotalWins += 1;
    } else if (roundTwoWinner === "Player Two") {
      playerTwoTotalWins += 1;
    } else {
      playerOneTotalWins += 1;
      playerTwoTotalWins += 1;
    }

  if (roundThreeWinner === "Player One") {
    playerOneTotalWins += 1;
  } else if (roundThreeWinner === "Player Two") {
    playerTwoTotalWins += 1;
  } else {
    playerOneTotalWins += 1;
    playerTwoTotalWins += 1;
  }

  if (playerOneTotalWins > playerTwoTotalWins){
    return "Player One";
  } else if (playerOneTotalWins < playerTwoTotalWins) {
    return "Player Two";
  }else{
    return "Tie";
  }
}

const setComputerMoves = () =>{
  const moveTypes = ["rock", "paper", "scissors"];
  let total = 99;
  playerTwoMoveOneType = moveTypes[Math.floor(Math.random() * 3)];
  playerTwoMoveTwoType = moveTypes[Math.floor(Math.random() * 3)];
  playerTwoMoveThreeType = moveTypes[Math.floor(Math.random() * 3)];
  //random value for computer
  //cannot exceed 99 total or be 0 for each value
  for (let i = 0; i <= 2; i++) {
    let newValue = Math.floor(Math.random() * 97);

    if (i == 0) {
      playerTwoMoveOneValue = newValue;
      //if random pick is too low or total less than 0 get a new random pick
      if (
        total - playerTwoMoveOneValue < 2 ||
        total - playerTwoMoveOneValue < 0
      ) {
        i = 0;
      }
    }
    if (i == 1) {
      playerTwoMoveOneValue = newValue;

      if (
        total - playerTwoMoveTwoValue < 2 ||
        total - playerTwoMoveTwoValue < 0
      ) {
        i = 1;
      }
    }
    if (i == 2) {
      playerTwoMoveThreeValue = newValue;
      if (total - playerTwoMoveThreeValue < 0) {
        i = 2;
      }
    }
  }
}