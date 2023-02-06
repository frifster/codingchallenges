/**
 * INCOMPLETE
 * Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.
 * Before the game begins, players set up the board and place the ships accordingly to the following rules:
- There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). 
- Any additional ships are not allowed, as well as missing ships.
- Each ship must be a straight line, except for submarines, which are just single cell. 
- The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.
**
images = [
  "https://i.imgur.com/IWxeRBV.png",
  "https://i.imgur.com/FleBpT9.png",
  "https://i.imgur.com/MuLvnug.png",
]
** source "https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript";
 */
function validateBattleField(field: BatteField): boolean {
  // Given
  // - 10 x 10 two dimension array

  const rows: RowsData = {};

  // check if the sum of all 1's is valid. should be 20
  const sumOfAllCells = field.reduce((cellsSum, current, index) => {
    const sumOfRow = current.reduce((sum, rowNum, innerIndex) => {
      if (rowNum === 1) {
        if (index === 0) {
          if (innerIndex === 0) {
            // if index = 0, and inner index = 0, check forward and down
            // let foundAdjacent = false;
            // let checkedIndex = index;
          }
        }
        console.log({ index, innerIndex });
      }

      return rowNum + sum;
    }, 0);

    rows[index] = { ...rows[index], sum: sumOfRow };

    return sumOfRow + cellsSum;
  }, 0);

  const VALID_SUM_OF_ALL_CELLS = 20;

  if (sumOfAllCells !== VALID_SUM_OF_ALL_CELLS) {
    return false;
  }

  console.log(sumOfAllCells);

  // check for valid number of batteships
  // one 4-cell straight line  - 4 cells
  // two 3-cell straight line - 6 cells
  // three 2-cell straight line - 6 cells
  // four 1-cell - 4 cell

  //

  return true;
}

const validField: BatteField = [
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

validateBattleField(validField);
