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

const valuesAreBad = () => {
  if (
    !playerOneMoveOneType ||
    !playerOneMoveTwoType ||
    !playerOneMoveThreeType ||
    !playerOneMoveOneValue ||
    !playerOneMoveTwoValue ||
    !playerOneMoveThreeValue ||
    !playerTwoMoveOneType ||
    !playerTwoMoveTwoType ||
    !playerTwoMoveThreeType ||
    !playerTwoMoveOneValue ||
    !playerTwoMoveTwoValue ||
    !playerTwoMoveThreeValue
  ) {
    return true;
  }else{
    return false;
  }
};

const setPlayerMoves = (
  player,
  moveOneType,
  moveOneValue,
  moveTwoType,
  moveTwoValue,
  moveThreeType,
  moveThreeValue
) => {
  if (
    !player ||
    !moveOneType ||
    !moveOneValue ||
    !moveTwoType ||
    !moveTwoValue ||
    !moveThreeType ||
    !moveThreeValue
  ) {
    return null;
  }

  if (player != "Player One" && player != "Player Two") {
    return null;
  }
  //incorrect value check

  if (
    moveOneType != "rock" &&
    moveOneType != "scissor" &&
    moveOneType != "paper"
  ) {
    return null;
  }
  if (
    moveTwoType != "rock" &&
    moveTwoType != "scissor" &&
    moveTwoType != "paper"
  ) {
    return null;
  }

  if (
    moveThreeType != "rock" &&
    moveThreeType != "scissors" &&
    moveThreeType != "paper"
  ) {
    return null;
  }

  if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1) {
    return null;
  }
  if (moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99) {
    return null;
  }
  if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
    return null;
  }
  if (player === `Player One`) {
    playerOneMoveOneType = moveOneType;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeValue = moveThreeValue;
  }

  if (player === `Player Two`) {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeValue = moveThreeValue;
  }
};

const getRoundWinner = (roundNumber) => {
  if (!roundNumber) {
    return null;
  }
  if (roundNumber != "1" && roundNumber != "2" && roundNumber != "3") {
    return null;
  }

  if (
    !playerOneMoveOneType ||
    !playerOneMoveTwoType ||
    !playerOneMoveThreeType ||
    !playerOneMoveOneValue ||
    !playerOneMoveTwoValue ||
    !playerOneMoveThreeValue ||
    !playerTwoMoveOneType ||
    !playerTwoMoveTwoType ||
    !playerTwoMoveThreeType ||
    !playerTwoMoveOneValue ||
    !playerTwoMoveTwoValue ||
    !playerTwoMoveThreeValue
  ) {
    return null;
  }
  let roundResult = "";

  if (roundNumber === 1) {
    console.log(playerOneMoveOneValue)
    if (playerOneMoveOneType === playerTwoMoveOneType) {
      if (PlayerOneMoveOneValue === playerTwoMoveOneValue) {
        roundResult = "Tie";
      } else if (PlayerOneMoveOneValue > playerTwoMoveOneValue) {
        roundResult = "Player One";
      } else {
        roundResult = "Player Two";
      }
    }

    if (playerOneMoveOneType === "rock") {
      if (playerTwoMoveOneType === "scissors") {
        roundResult = "Player One";
      }
      if (playerTwoMoveOneType === "paper") {
        roundResult = "Player Two";
      }
    }
    if (playerOneMoveOneType === "scissors") {
      if (playerTwoMoveOneType === "paper") {
        roundResult = "Player One";
      }
      if (playerTwoMoveOneType === "rock") {
        roundResult = "Player Two";
      }
    }
    if (playerOneMoveOneType === "paper") {
      if (playerTwoMoveOneType === "rock") {
        roundResult = "Player One";
      }
      if (playerTwoMoveOneType === "scissors") {
        roundResult = "Player Two";
      }
    }
  }

  if (roundNumber === 2) {
    if (playerOneMoveTwoType === playerTwoMoveTwoType) {
      console.log("equal");
      if (PlayerOneMoveTwoValue === playerTwoMoveTwoValue) {
        roundResult = "Tie";
      } else if (PlayerOneMoveTwoValue > playerTwoMoveTwoValue) {
        roundResult = "Player One";
      } else {
        roundResult = "Player Two";
      }
    }

    if (playerOneMoveTwoType === "rock") {
      if (playerTwoMoveTwoType === "scissors") {
        roundResult = "Player One";
      }
      if (playerTwoMoveTwoType === "paper") {
        roundResult = "Player Two";
      }
    }
    if (playerOneMoveTwoType === "scissors") {
      if (playerTwoMoveTwoType === "paper") {
        roundResult = "Player One";
      }
      if (playerTwoMoveTwoType === "rock") {
        roundResult = "Player Two";
      }
    }
    if (playerOneMoveTwoType === "paper") {
      if (playerTwoMoveTwoType === "rock") {
        roundResult = "Player One";
      }
      if (playerTwoMoveTwoType === "scissors") {
        roundResult = "Player Two";
      }
    }
  }

  if (roundNumber === 3) {
    if (playerOneMoveThreeType === playerTwoMoveThreeType) {
      if (PlayerOneMoveThreeValue === playerTwoMoveThreeValue) {
        roundResult = "Tie";
      } else if (PlayerOneMoveThreeValue > playerTwoMoveThreeValue) {
        roundResult = "Player One";
      } else {
        roundResult = "Player Two";
      }
    }

    if (playerOneMoveThreeType === "rock") {
      if (playerTwoMoveThreeType === "scissors") {
        roundResult = "Player One";
      }
      if (playerTwoMoveThreeType === "paper") {
        roundResult = "Player Two";
      }
    }
    if (playerOneMoveThreeType === "scissors") {
      if (playerTwoMoveThreeType === "paper") {
        roundResult = "Player One";
      }
      if (playerTwoMoveThreeType === "rock") {
        roundResult = "Player Two";
      }
    }
    if (playerOneMoveThreeType === "paper") {
      if (playerTwoMoveThreeType === "rock") {
        roundResult = "Player One";
      }
      if (playerTwoMoveThreeType === "scissors") {
        roundResult = "Player Two";
      }
    }
  }
  return roundResult;
};

const getGameWinner = () => {
  if (
    !playerOneMoveOneType ||
    !playerOneMoveTwoType ||
    !playerOneMoveThreeType ||
    !playerOneMoveOneValue ||
    !playerOneMoveTwoValue ||
    !playerOneMoveThreeValue ||
    !playerTwoMoveOneType ||
    !playerTwoMoveTwoType ||
    !playerTwoMoveThreeType ||
    !playerTwoMoveOneValue ||
    !playerTwoMoveTwoValue ||
    !playerTwoMoveThreeValue
  ) {
    return null;
  }
  let playerOneTotalWins = 0;
  let playerTwoTotalWins = 0;

  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);
  if (roundOneWinner === "Player One") {
    playerOneTotalWins += 1;
  } else {
    playerTwoTotalWins += 1;
  }

  if (roundTwoWinner === "Player One") {
    playerOneTotalWins += 1;
  } else {
    playerTwoTotalWins += 1;
  }

  if (roundThreeWinner === "Player One") {
    playerOneTotalWins += 1;
  } else {
    playerTwoTotalWins += 1;
  }



  if (playerOneTotalWins > playerTwoTotalWins) {
    return "Player One";
  } else if (playerOneTotalWins < playerTwoTotalWins) {
    return "Player Two";
  } else {
    return "Tie";
  }
};

const setComputerMoves = () => {
  const moveTypes = ["rock", "paper", "scissors"];
  let total = 0;
  let moveValue = 0;
  playerTwoMoveOneType = moveTypes[Math.floor(Math.random() * 3)];
  playerTwoMoveTwoType = moveTypes[Math.floor(Math.random() * 3)];
  playerTwoMoveThreeType = moveTypes[Math.floor(Math.random() * 3)];
  //random value for computer
  //cannot exceed 99 total or be 0 for each value
  while (total != 99 && moveValue != 2) {
    let newValue = Math.floor(Math.random() * 97);

    if (moveValue === 0) {
      playerTwoMoveOneValue = newValue;
      total += playerTwoMoveOneValue;
      moveValue++;
      //if random pick is too low or total less than 0 get a new random pick
      if (total < 0 || total >= 99) {
        moveValue = 0;
        total -= newValue;
      }
    }
    if (moveValue === 1) {
      playerTwoMoveTwoValue = newValue;
      total += playerTwoMoveTwoValue;
      moveValue++;
      if (total < 0 || total >= 99) {
        moveValue = 1;
        total -= newValue;
      }
    }
    if (moveValue === 2) {
      playerTwoMoveThreeValue = 99 - total;
      total += playerTwoMoveThreeValue;
    }
  }
};
