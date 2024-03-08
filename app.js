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
var table = document.createElement("table"),
  tr,
  td,
  row,
  cell,
  player2CheckerCount = 1,
  player1CheckerCount = 1;
let test = true;
let turn = true;
let selectedChecker;
let selectedCell;

for (row = 0; row < gameBoard.length; row++) {
  tr = document.createElement("tr");
  for (cell = 0; cell < gameBoard[row].length; cell++) {
    td = document.createElement("td");
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

    checker.onclick = (event) => {
      let parent = event.target.parentElement;
      let parentId = parent.id;
      handleCheckerClick(selectedChecker, parentId);

      document.getElementById(parent.id).style.background = "#6b1717b5";
      selectedChecker = event.target;
      console.log(selectedChecker)
      event.stopPropagation();
    };
  } else if (gameBoard[row][cell] === 2) {
    let checker = document.createElement("div");
    td.appendChild(checker);

    checker.className = "player-2";
    checker.id = "player2 " + player2CheckerCount;
    player2CheckerCount++;

    checker.onclick = (event) => {
      let parent = event.target.parentElement;
      let parentId = parent.id;
      handleCheckerClick(selectedChecker, parentId);

      document.getElementById(parent.id).style.background = "#6b1717b5";
      selectedChecker = event.target;
      event.stopPropagation();
    };
  }
}

function handleCheckerClick(selectedChecker, parentId) {
  if (selectedChecker) {
    if (document.getElementById(selectedChecker.id).className === "player-1") {
      document.getElementById(selectedChecker.id).style.background =
        "rgb(241, 192, 132)";
    } else {
      document.getElementById(selectedChecker.id).style.background =
        "rgb(8, 5, 5)";
    }

    document.getElementById(parentId).style.background = "rgb(57, 23, 23)";
    console.log("hey"); //having troubles resetting the background color of parent element as well.
    
  }
}


 


//turn will decide what divs will be locked and unclickable if its true then player-1 can only move and if its false then player-2 can move.

//manage page landing

//click of play button - followed by unhide and hide of elements from rules page to buttons identification page

//click on next button - followed by the checkers board

//select gitta
//select location to move gitta
