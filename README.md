<h1>Project-1: Checkers Mania </h1>


[Game Link 🔗](https://checkers-mania.netlify.app/)


Game Rules:

1. Checkers can only move diagonally on dark squares.
2. At the start of the game, checkers can only move forward, meaning toward the opposite player’s side.
3. Checkers may move up and down when they become “kings” by reaching the last row of the opposite side.
4. Remove your opponent’s checkers from the board by jumping them if your checker is diagonal to your opponent’s and there is an empty dark space to hop to.
5. Jump the checker by moving your piece straight over theirs and landing on the empty dark space.
6. Double Jump will be available in the Version2.
7. Winning Logic: Whoever captures all their opponents’ checkers wins.
   means one has to be 0 to win the

<h2>Player Info:</h2>

- Red 🔴: Player-1
- Black ⚫ : Player-2
- Restart Button: To restrat the game
- Current Player: To keep track of who's turn it is
- Scores: Listed for each player
- Checker Board: 8\*8 checker board with 24 checkers/pieces

<h2>Wireframe:</h2>

There are three views of this game:

1. Game Info:
   ![Screen Shot 2024-03-08 at 11 47 37 PM](https://github.com/falgunisharma1/Checkers-Game/assets/155585711/d27652cc-a206-4a2c-9983-bc9f12a28bbd)

2.Player Info:
![Screen Shot 2024-03-08 at 11 47 37 PM](https://github.com/falgunisharma1/Checkers-Game/assets/155585711/a79ed83e-24a6-4e34-b877-649058dc23af)

3. Main Checker Board View:
   ![Screen Shot 2024-03-08 at 11 47 56 PM](https://github.com/falgunisharma1/Checkers-Game/assets/155585711/ab1ef8b7-b8bc-4f66-952e-5cc8042fc293)

<h2>How I created my Checkers Board?</h2>

I have used a matrix i.e Array of arrays with 0, 1 and 2 values, each denoting a placeholder for a checker. This helped in creating a table in HTML using a nested for-loop and led a much simpler way for styling and updating with every move. Something interesting that I figured out while making this: instead of making a lot of changes in styling and DOM every time a checker moves, I just updated the matrix with updated values based on the checker movement and re-created the table.

- For Player-1: 1
- For Player-2: 2
- Empty Cells: 0

![img](/Matrix.png)

- The turns are tracked by a variable which is updated after every move. This would restrict the movement of the other player's checkers.
- Every time an opponent checker is captured, it would add it to the player' score count who captured.
- Winning is determined when all the checkers of one player are captured leaving the other one with the highest score OR if one of the player can't move at all.

<h2>User Stories:</h2>

- A simple checkers game where each player play one by one.
- When players click on a checker it will highlight but they can only move their checkers when it's their turn

<h2>Technical Difficulties: </h2>

1. How to design the checkerboard was a major trouble because I didn't want to write 64 items or divs.

- First I decided to have the odd and even way, but it involved a lot of manual work which I wanted to avoid.

- Rendering checkers too was a seperate task with this appraoch.

<h3>So I decided to go with table and row format!</h3>
- I created rows and cells with a nested loop.
- Which worked great as I added on.clicks for every checker and cells/blocks in checkers. 
- However I faced issues with bugs because I depended on HTML class and ids.

<h3> At last I chose to recreate board everytime with updated game board values!</h3>
- I am using the same looping formula like last approach.
- However instead of updating locations of DOM elements manually with each on.click functions I am updating the value in my game board matrix and recreating the board each time to make it more straightforward and bug free.

This took me a long time to figure out but it helped me cutting down a lot of work in DOM manipulation.

2. Second was King Logic as it included a lot of ugly if and else statements and I would like to remove those with already exisiting logics within the functions.

<h2>Future Features:</h2>

- Double jumps in one turn.
- Player name input for each player for personaliation.
- More styling options for users to change
