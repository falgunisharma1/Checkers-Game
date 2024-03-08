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
var table = document.createElement("table");
let player2CheckerCount = 1;
let player1CheckerCount = 1;
let test = true;
let turn = true;
let selectedChecker;
let selectedCell;

let selectedCheckerPosition;
let selectedCellPosition;

function createGame() {
  for (let row = 0; row < gameBoard.length; row++) {
    let tr = document.createElement("tr");
    for (let cell = 0; cell < gameBoard[row].length; cell++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.id = `[${row}, ${cell}]`;
      let currCellAddress = [row, cell];
      td.onclick = (event) => {
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
      };

      if (gameBoard[row][cell] === 0) {
        td.className = "light";
      } else {
        td.className = "dark";
      }

      if (row === 3 || row === 4) {
        if (cell === 0) {
          test = !test;
        }
        if (test) {
          td.className = "light";
          test = false;
        } else {
          td.className = "dark";
          test = true;
        }
      }
      createChecker(row, cell, td);
    }

    table.appendChild(tr);
  }
  document.getElementById("container").appendChild(table);
}
createGame();

function handleCheckerClick(event, row, cell) {
  if (selectedChecker) {
    updatePrevSelectedCheckerBg(selectedChecker);
  }
  let parent  = event.target.parentElement;
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
    checker.onclick = (event) => handleCheckerClick(event, row, cell);
  } else if (gameBoard[row][cell] === 2) {
    let checker = document.createElement("div");
    td.appendChild(checker);

    checker.className = "player-2";
    checker.id = "player2 " + player2CheckerCount;
    player2CheckerCount++;
    checker.onclick = handleCheckerClick;
  }
}

function updatePrevSelectedCheckerBg(selectedChecker) {
  let parent = selectedChecker.parentElement;
  parent.style.background = "rgb(57, 23, 23)";
}

function moveChecker() {  
  if (selectedCell && selectedChecker) {
    if (selectedCell.childNodes.length === 0) {
      let parent = selectedChecker.parentElement;
      parent.style.background = "rgb(57, 23, 23)";

      let targetParent = selectedCell;
      if (targetParent.className === "dark") {
        targetParent.appendChild(selectedChecker);
        parent.removeChild(selectedChecker);
      }
    }
  }
}
document.getElementById("okok").addEventListener("click", moveChecker);
