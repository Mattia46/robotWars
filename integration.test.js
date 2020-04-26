const { initGame } = require('./src/game');
const { initRobot } = require('./src/robot');
const { normaliseInput, getArea } = require('./src/utils');

const robot1 = initRobot(normaliseInput(['1', '2', 'N']));
const robot2 = initRobot(normaliseInput(['3', '3', 'E']));
const game = initGame({ gameArea: getArea(['5', '5']) });

const robot1ExpetedPosition = { x: 1, y: 3, heading: 'N' };
const robot2ExpetedPosition = { x: 5, y: 1, heading: 'E' };

describe('Integration test: ', () => {
  it('should return robots final position', () => {
    game.playRobot(robot1, 'LMLMLMLMM');
    game.playRobot(robot2, 'MMRMMRMRRM');

    const robot1FinalPosition = game.resultRobot(robot1);
    const robot2FinalPosition = game.resultRobot(robot2);

    expect(robot1FinalPosition).toEqual(robot1ExpetedPosition);
    expect(robot2FinalPosition).toEqual(robot2ExpetedPosition);
  });
});
