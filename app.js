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

let cellSelected;
var table = document.createElement("table"),
  tr,
  td,
  row,
  cell,
  player2CheckerCount = 1,
  player1CheckerCount = 1,
  selectedCell;
let selectedChecker;
let test = true;
let turn;

for (row = 0; row < gameBoard.length; row++) {
  tr = document.createElement("tr");
  for (cell = 0; cell < gameBoard[row].length; cell++) {
    td = document.createElement("td");
    tr.appendChild(td);
    td.id = `[${row}, ${cell}]`;
    let currCellAddress = [row, cell];
    td.onclick = () => {
      console.log(currCellAddress);
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
    createCheckers(row, cell);
  }

  table.appendChild(tr);
}

document.getElementById("container").appendChild(table);

function createCheckers(row, cell) {
  if (gameBoard[row][cell] === 1) {
    let checker = document.createElement("div");
    td.appendChild(checker);

    checker.className = "player-1";
    checker.id = "player1 " + player1CheckerCount;
    player1CheckerCount++;

    checker.onclick = () => {
      document.getElementById(`[${rowNum}, ${cellNum}]`).style.background =
        "#6b1717b5";
    };
  } else if (gameBoard[row][cell] === 2) {
    let checker = document.createElement("div");
    td.appendChild(checker);

    checker.className = "player-2";
    checker.id = "player2 " + player2CheckerCount;
    player2CheckerCount++;

    checker.onclick = () => {
      document.getElementById(`[${rowNum}, ${cellNum}]`).style.background =
        "#6b1717b5";
    };

   
  }
}

function turncheck (){

}



