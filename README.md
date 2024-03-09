<h1>Project-1: Checkers Mania </h1>

Game logic:

There are three important checker move rules:

1. Checkers can only move diagonally on dark squares.
2. At the start of the game, checkers can only move forward, meaning toward the opposite player’s side.
3. Checkers may move up and down when they become “kings” by reaching the last row of the opposite side.
4. Remove your opponent’s checkers from the board by jumping them if your checker is diagonal to your opponent’s and there is an empty dark space to hop to.
5. Jump the checker by moving your piece straight over theirs and landing on the empty dark space. 
6. Double Jump will be available in the Version2.
7. Winning Logic: Whoever captures all their opponents’ checkers wins.
means one has to be 0 to win the



Player Info:

Red: Player-1
Black: Player-2
Restart Button: To restrat the game
Current Player: To keep track of who's turn it is
Scores: Listed for each player
Checker Board: 8*8 checker board with 24 checkers/pieces


Wireframe:

There are three views of this game:
1. Game Info:
![Screen Shot 2024-03-08 at 11 47 37 PM](https://github.com/falgunisharma1/Checkers-Game/assets/155585711/d27652cc-a206-4a2c-9983-bc9f12a28bbd)

2.Player Info:
![Screen Shot 2024-03-08 at 11 47 37 PM](https://github.com/falgunisharma1/Checkers-Game/assets/155585711/a79ed83e-24a6-4e34-b877-649058dc23af)

3. Main Checker Board View:
![Screen Shot 2024-03-08 at 11 47 56 PM](https://github.com/falgunisharma1/Checkers-Game/assets/155585711/ab1ef8b7-b8bc-4f66-952e-5cc8042fc293)


How I created my Checkers Board?

I have used a matrix i.e Array or arrays with 0, 1 and 2 values, each denoting a placeholder for a checker.

1 - For Player-1; ---
2 - For Player-2; ---
0 - Empty Cells; ---

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

**This took me a long time to figure out but it helped me cutting down a lot of work in DOM manipulation. 
**

- The turns are tracked by a variable which is updated after every move. This would restrict the movement of the other player's checkers.
- Every time an opponent checker is captured, it would add it to the player' score count who captured.
- Winning is determined when all the checkers of one player are captured leaving the other one with the highest score.

