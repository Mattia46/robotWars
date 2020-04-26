const readlineSync = require("readline-sync");

const gameBoundaries = readlineSync
  .question("Hi, welcome to robotWar.\nPlease set your game boundaries. i.e. 5 5: \n")
  .trim()
  .split(' ')
  .slice(0, 2);

const firstPlayerPosition = readlineSync
  .question('Please insert First player position and heading. i.e. 1 2 N:\n')
  .trim()
  .split(' ')
  .slice(0, 3);

const firstPlayerMoves = readlineSync
  .question('Please insert First player moves. i.e. LMLMLMLMM:\n');

const secondPlayerPosition = readlineSync
  .question('Please insert Second player position and heading. i.e. 3 3 E:\n')
  .trim()
  .split(' ')
  .slice(0, 3);

const secondPlayerMoves = readlineSync
  .question('Please insert Second player moves. i.e. MMRMMRMRRM:\n')

module.exports = {
  gameBoundaries,
  firstPlayerPosition,
  firstPlayerMoves,
  secondPlayerPosition,
  secondPlayerMoves,
};
