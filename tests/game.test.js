const { initGame } = require('../src/game');

describe('Game: ', () => {
  const gameArea = { max_x: 5, max_y: 5};
  const position = { x: 1, y: 3, heading: 'N' };
  const robotMoves = 'LMLM';
  const robotMock = {
    position: Object.assign({}, position),
    move: jest.fn(),
    getCurrentPosition: jest.fn().mockReturnValue(position)
  };

  it('should play the game', () => {
    const game = initGame({ gameArea });
    game.playRobot(robotMock, robotMoves);
    expect(robotMock.move.mock.calls).toEqual([
      [{ gameArea, nextAction: 'L' }],
      [{ gameArea, nextAction: 'M' }],
      [{ gameArea, nextAction: 'L' }],
      [{ gameArea, nextAction: 'M' }],
    ]);
  });

  it('should return robot position', () => {
    const game = initGame({ gameArea });
    const result = game.resultRobot(robotMock, robotMoves);
    expect(robotMock.getCurrentPosition).toHaveBeenCalled();
    expect(result).toEqual(position);
  });
});

