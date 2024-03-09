let gameBoard = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 2, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 2, 0, 2, 0],
];

let currentPlayer = 1;
let player2CheckerCount = 1;
let player1CheckerCount = 1;
let selectedChecker;
let selectedCell;
let selectedCheckerPosition;
let selectedCellPosition;
let player1Score = 0;
let player2Score = 0;

document.getElementById(
  "currentPlayer"
).textContent = `Current Player: ${currentPlayer}`;

function buttonClickNext() {
  document.getElementById("info").style.display = "none";
  document.getElementById("Buttons-info").style.display = "flex";
}

function clickStartButton() {
  document.getElementById("gameBoard").style.visibility = "visible";
  document.getElementById("Buttons-info").style.display = "none";
}

document.getElementById("next").addEventListener("click", buttonClickNext);

document
  .getElementById("start-game")
  .addEventListener("click", clickStartButton);

function deleteGame() {
  let table = document.getElementById("table");
  table.remove();
}

function resetGame() {
  deleteGame();
  createGame();
}

function createGame() {
  let test = true;
  let table = document.createElement("table");
  table.id = "table";
  for (let row = 0; row < gameBoard.length; row++) {
    let tr = document.createElement("tr");
    for (let cell = 0; cell < gameBoard[row].length; cell++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.id = `[${row}, ${cell}]`;
      td.onclick = (event) => handleCellClick(event, row, cell);
      if (row !== 0 && cell === 0) {
        test = !test;
      }
      if (test) {
        td.className = "light";
        test = false;
      } else {
        td.className = "dark";
        test = true;
      }

      createChecker(row, cell, td);
    }

    table.appendChild(tr);
  }
  document.getElementById("container").appendChild(table);
}

createGame();

function handleCellClick(event, destRow, destCell) {
  // if (event.target.style.background == "rgb(239, 208, 192)") {
  //   console.log(event.target.style.background);
  // } else {
  if (selectedCell) {
    if (document.getElementById(selectedCell.id).className === "dark") {
      document.getElementById(selectedCell.id).style.background =
        "rgb(57, 23, 23)";
    } else {
      document.getElementById(selectedCell.id).style.background =
        "rgb(239, 208, 192)";
    }
  }

  event.target.style.background = "#6b1717b6";
  selectedCell = event.target;
  selectedCellPosition = [destRow, destCell];
  let checkerRow = selectedCheckerPosition[0];
  let checkerCell = selectedCheckerPosition[1];
  if (!selectedCheckerPosition) {
    return;
  }
  if (canCheckerMove(selectedCheckerPosition, selectedCellPosition)) {
    if (currentPlayer === 1) {
      if (gameBoard[checkerRow][checkerCell] === 10) {
        gameBoard[destRow][destCell] = 10;
        gameBoard[checkerRow][checkerCell] = 0;
      } else {
        gameBoard[destRow][destCell] = 1;
        gameBoard[checkerRow][checkerCell] = 0;
      }
      currentPlayer = 2;
      document.getElementById(
        "currentPlayer"
      ).textContent = `Current Player: ${currentPlayer}`;
    } else if (currentPlayer === 2) {
      if (gameBoard[checkerRow][checkerCell] === 20) {
        gameBoard[destRow][destCell] = 20;
        gameBoard[checkerRow][checkerCell] = 0;
      }
      {
        gameBoard[destRow][destCell] = 2;
        gameBoard[checkerRow][checkerCell] = 0;
      }
      currentPlayer = 1;
      document.getElementById(
        "currentPlayer"
      ).textContent = `Current Player: ${currentPlayer}`;
    }

    if (destRow === 0) {
      gameBoard[destRow][destCell] = 20;
    } else if (destRow === 7) {
      gameBoard[destRow][destCell] = 10;
    }

    resetGame();
  }
}

function handleCheckerClick(event, row, cell) {
  let parent = event.target.parentElement;
  parent.style.background = "#6b1717b5";
  selectedChecker = event.target;
  selectedCheckerPosition = [row, cell];
  event.stopPropagation();
}

function createChecker(row, cell, td) {
  if (gameBoard[row][cell] === 1) {
    let checker = document.createElement("div");
    td.appendChild(checker);

    checker.className = "player-1";
    checker.id = "player1 " + player1CheckerCount;
    player1CheckerCount++;
    checker.onclick = (event) => {
      handleCheckerClick(event, row, cell);
    };
  } else if (gameBoard[row][cell] === 2) {
    let checker = document.createElement("div");
    td.appendChild(checker);

    checker.className = "player-2";
    checker.id = "player2 " + player2CheckerCount;
    player2CheckerCount++;
    checker.onclick = (event) => handleCheckerClick(event, row, cell);
  } else if (gameBoard[row][cell] === 10) {
    let checker = document.createElement("div");
    let kingEmoji = document.createElement("p");
    kingEmoji.id = "kingEmoji";
    kingEmoji.textContent = "👑";
    checker.appendChild(kingEmoji);
    td.appendChild(checker);
    checker.className = "king-player-1";
    checker.onclick = (event) => {
      handleCheckerClick(event, row, cell);
    };
  } else if (gameBoard[row][cell] === 20) {
    let checker = document.createElement("div");
    let kingEmoji = document.createElement("p");
    kingEmoji.id = "kingEmoji";
    kingEmoji.textContent = "👑";
    checker.appendChild(kingEmoji);
    td.appendChild(checker);
    checker.className = "king-player-2";
    checker.onclick = (event) => {
      handleCheckerClick(event, row, cell);
    };
  }
}

function moveChecker(row, cell) {
  if (selectedCell && selectedChecker) {
    if (selectedCell.childNodes.length === 0) {
      let parent = selectedChecker.parentElement;
      parent.style.background = "rgb(57, 23, 23)";

      let targetParent = selectedCell;
      console.log(targetParent, selectedChecker);
      if (targetParent.className === "dark") {
        targetParent.appendChild(selectedChecker);
      }
    }
  }
}

function canCheckerMove(checkPos, destCellPos) {
  let canMove = false;
  let checkerRow = checkPos[0];
  let checkerCell = checkPos[1];
  let destRow = destCellPos[0];
  let destCell = destCellPos[1];
  let element = gameBoard[checkerRow][checkerCell];
  if (gameBoard[destRow][destCell] === 0) {
    if (checkCurrentPlayer(checkerRow, checkerCell, element)) {
      canMove = isPlayerTurnAllowed(checkerRow, checkerCell, destRow, destCell);
      if (!canMove) {
        canMove = checkOpponent(destRow, destCell, checkerRow, checkerCell);
      }
    }
  }

  return canMove;
}

function isPlayerTurnAllowed(checkerRow, checkerCell, destRow, destCell) {
  let canMove = false;
  //add king functionality
  if (currentPlayer === 1) {
    if (
      (destRow === checkerRow + 1 &&
        (destCell === checkerCell + 1 || destCell === checkerCell - 1)) ||
      (gameBoard[checkerRow][checkerCell] === 10 &&
        destRow === checkerRow - 1 &&
        (destCell === checkerCell + 1 || destCell === checkerCell - 1))
    ) {
      canMove = true;
    }
  } else if (currentPlayer === 2) {
    if (
      (destRow === checkerRow - 1 &&
        (destCell === checkerCell + 1 || destCell === checkerCell - 1)) ||
      (gameBoard[checkerRow][checkerCell] === 20 &&
        destRow === checkerRow + 1 &&
        (destCell === checkerCell + 1 || destCell === checkerCell - 1))
    ) {
      canMove = true;
    }
  }

  return canMove;
}

function checkOpponent(destRow, destCell, checkerRow, checkerCell) {
  console.log(destRow, destCell, checkerRow, checkerCell);
  //if player -1 but not a king checker
  if (currentPlayer === 1 && gameBoard[checkerRow][checkerCell] !== 10) {
    if (destRow === checkerRow + 2) {
      if (
        destCell === checkerCell + 2 &&
        gameBoard[checkerRow + 1][checkerCell + 1] === 2
      ) {
        gameBoard[checkerRow + 1][checkerCell + 1] = 0;
        player1Score = player1Score + 1;
        document.getElementById("player-1-score").textContent = player1Score;

        return true;
      }
    }

    if (destRow === checkerRow + 2) {
      if (
        destCell === checkerCell - 2 &&
        gameBoard[checkerRow + 1][checkerCell - 1] === 2
      ) {
        gameBoard[checkerRow + 1][checkerCell - 1] = 0;
        player1Score = player1Score + 1;
        document.getElementById("player-1-score").textContent = player1Score;
        return true;
      }
    }
  }

  //if player - 2 but not a king checker
  if (currentPlayer === 2 && gameBoard[checkerRow][checkerCell] !== 20) {
    if (destRow === checkerRow - 2) {
      if (
        destCell === checkerCell + 2 &&
        gameBoard[checkerRow - 1][checkerCell + 1] === 1
      ) {
        gameBoard[checkerRow - 1][checkerCell + 1] = 0;
        player2Score = player2Score + 1;
        document.getElementById("player-2-score").textContent = player2Score;
        console.log(player2Score);
        return true;
      }
    }

    if (destRow === checkerRow - 2) {
      console.log("hi");
      if (
        destCell === checkerCell - 2 &&
        gameBoard[checkerRow - 1][checkerCell - 1] === 1
      ) {
        gameBoard[checkerRow - 1][checkerCell - 1] = 0;
        player2Score = player2Score + 1;
        document.getElementById("player-2-score").textContent = player2Score;
        console.log(player2Score);
        return true;
      }
    }
  }

  //if player - 1 but a king checker
  if (currentPlayer === 1 && gameBoard[checkerRow][checkerCell] === 10) {
    if (destRow === checkerRow + 2) {
      if (
        destCell === checkerCell + 2 &&
        gameBoard[checkerRow + 1][checkerCell + 1] === 2
      ) {
        gameBoard[checkerRow + 1][checkerCell + 1] = 0;
        player1Score = player1Score + 1;
        document.getElementById("player-1-score").textContent = player1Score;

        return true;
      }
    }

    if (destRow === checkerRow + 2) {
      if (
        destCell === checkerCell - 2 &&
        gameBoard[checkerRow + 1][checkerCell - 1] === 2
      ) {
        gameBoard[checkerRow + 1][checkerCell - 1] = 0;
        player1Score = player1Score + 1;
        document.getElementById("player-1-score").textContent = player1Score;
        return true;
      }
    }

    if (destRow === checkerRow - 2) {
      if (
        destCell === checkerCell + 2 &&
        gameBoard[checkerRow - 1][checkerCell + 1] === 2
      ) {
        gameBoard[checkerRow - 1][checkerCell + 1] = 0;
        player1Score = player1Score + 1;
        document.getElementById("player-1-score").textContent = player1Score;
        return true;
      }
    }

    if (destRow === checkerRow - 2) {
      if (
        destCell === checkerCell - 2 &&
        gameBoard[checkerRow - 1][checkerCell - 1] === 2
      ) {
        gameBoard[checkerRow - 1][checkerCell - 1] = 0;
        player1Score = player1Score + 1;
        document.getElementById("player-1-score").textContent = player1Score;
        return true;
      }
    }
  }

  //if player - 2 but a king checker
  if (currentPlayer === 2 && gameBoard[checkerRow][checkerCell] === 20) {
    if (destRow === checkerRow - 2) {
      if (
        destCell === checkerCell + 2 &&
        gameBoard[checkerRow - 1][checkerCell + 1] === 1
      ) {
        gameBoard[checkerRow - 1][checkerCell + 1] = 0;
        player2Score = player2Score + 1;
        document.getElementById("player-2-score").textContent = player2Score;
        console.log(player2Score);
        return true;
      }
    }

    if (destRow === checkerRow - 2) {
      console.log("hi");
      if (
        destCell === checkerCell - 2 &&
        gameBoard[checkerRow - 1][checkerCell - 1] === 1
      ) {
        gameBoard[checkerRow - 1][checkerCell - 1] = 0;
        player2Score = player2Score + 1;
        document.getElementById("player-2-score").textContent = player2Score;
        console.log(player2Score);
        return true;
      }
    }

    if (destRow === checkerRow + 2) {
      if (
        destCell === checkerCell + 2 &&
        gameBoard[checkerRow + 1][checkerCell + 1] === 1
      ) {
        gameBoard[checkerRow + 1][checkerCell + 1] = 0;
        player2Score = player2Score + 1;
        document.getElementById("player-2-score").textContent = player2Score;

        return true;
      }
    }

    if (destRow === checkerRow + 2) {
      if (
        destCell === checkerCell - 2 &&
        gameBoard[checkerRow + 1][checkerCell - 1] === 1
      ) {
        gameBoard[checkerRow + 1][checkerCell - 1] = 0;
        player2Score = player2Score + 1;
        document.getElementById("player-2-score").textContent = player2Score;
        return true;
      }
    }
  }
}

function restartGame() {
  window.location.reload();
}

document.getElementById("reset").addEventListener("click", restartGame);

function checkCurrentPlayer(checkerRow, checkerCell, element) {
  if (element === 10 || element === 1) {
    element = 1;
    if (element === currentPlayer) {
      return true;
    }
  } else if (element === 20 || element === 2) {
    element = 2;
    if (element === currentPlayer) {
      return true;
    }
  }
}

