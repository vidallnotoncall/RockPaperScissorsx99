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
  if (player = "Player One"){
    playerOneMoveOneType = moveOneType;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeValue = moveThreeValue;
  }

  if (player = "Player Two"){
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
        if(PlayerOneMoveOneValue === playerOneMoveOneType){
          return "tie";
        }
        if (playerOneMoveOneType === "Rock" && playerTwoMoveOneValue === "Paper"){
          return "Player Two";
        } 
        else if (playerOneMoveOneType === "Paper" && playerTwoMoveOneValue === "Scissors"){
          return "Player Two";
        }

        }
      }

      case 2:
        if (playerOneMoveTwoType === playerTwoMoveTwoType){
          if(PlayerOneMoveTwoValue === playerOneMoveTwoType){
            return "tie";
          }
          if (playerOneMoveTwoType > playerTwoMoveTwoValue){
            return "Player One";
          } else {
            return "Player Two";
          }
        }
      
      case 3:
        if (playerOneMoveThreeType === playerTwoMoveThreeType){
          if(PlayerOneMoveThreeValue === playerOneMoveThreeType){
            return "tie";
          }
          if (playerOneMoveThreeType > playerTwoMoveThreeValue){
            return "Player One";
          } else {
            return "Player Two";
          }
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
  const moveTypes = ["Rock", "Paper", "Scissors"];
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