const { initGame } = require('./src/game');
const { initRobot } = require('./src/robot');
const { normaliseInput, getArea } = require('./src/utils');
const {
  gameBoundaries,
  firstPlayerPosition,
  firstPlayerMoves,
  secondPlayerPosition,
  secondPlayerMoves,
} = require('./src/stdin');

const robot1 = initRobot(normaliseInput(firstPlayerPosition));
const robot2 = initRobot(normaliseInput(secondPlayerPosition));
const game = initGame({ gameArea: getArea(gameBoundaries) });

game.playRobot(robot1, firstPlayerMoves);
game.playRobot(robot2, secondPlayerMoves);

game.resultRobot(robot1);
game.resultRobot(robot2);
