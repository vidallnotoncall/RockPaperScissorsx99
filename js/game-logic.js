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

}

const getRoundWinner = (roundNumber) =>{
  
}

const getGameWinner = () => {
  let total = 0;
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