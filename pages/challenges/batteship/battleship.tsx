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
function validateBattleField(field: BatteField) {
  let shipCount = [0, 0, 0, 0];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (field[i][j] === 1) {
        let shipSize = checkShipSize(field, i, j);
        if (
          shipSize === -1 ||
          shipSize > 4 ||
          shipCount[shipSize - 1] >= 4 - shipSize + 1
        ) {
          return false;
        }
        shipCount[shipSize - 1]++;
        markShip(field, i, j, shipSize);
      }
    }
  }
  return (
    shipCount[0] === 4 &&
    shipCount[1] === 3 &&
    shipCount[2] === 2 &&
    shipCount[3] === 1
  );
}

function checkShipSize(field: BatteField, i: number, j: number): ShipSize {
  let shipSize = 1;
  let direction = 0;
  if (j < 9 && field[i][j + 1] === 1) {
    direction = 1;
  } else if (i < 9 && field[i + 1][j] === 1) {
    direction = 2;
  } else {
    return 1;
  }
  for (let k = 1; k < 4; k++) {
    if (direction === 1) {
      if (j + k >= 10 || field[i][j + k] !== 1) {
        return -1;
      }
    } else {
      if (i + k >= 10 || field[i + k][j] !== 1) {
        return -1;
      }
    }
    shipSize++;
  }
  return shipSize;
}

function markShip(field: BatteField, i: number, j: number, shipSize: ShipSize) {
  let direction = 0;
  if (j < 9 && field[i][j + 1] === 1) {
    direction = 1;
  } else {
    direction = 2;
  }
  for (let k = 0; k < shipSize; k++) {
    if (direction === 1) {
      field[i][j + k] = 2;
    } else {
      field[i + k][j] = 2;
    }
  }
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
