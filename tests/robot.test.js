const { initRobot } = require('../src/robot');

describe('Robot: ', () => {
  const gameArea = { max_x: 5, max_y: 5};

  describe('should Move: ', () => {
    it('towards Y axis', () => {
      const position = { x: 1, y: 3, heading: 'N' };
      const robot = initRobot({ position });
      robot.move({ gameArea, nextAction: 'M' });
      expect(robot.position).toEqual({ ...position, y: 4 });
    });

    it('towards X axis', () => {
      const position = { x: 1, y: 3, heading: 'E' };
      const robot = initRobot({ position });
      robot.move({ gameArea, nextAction: 'M' });
      expect(robot.position).toEqual({ ...position, x: 2 });
    });
  });

  describe('should Not Move: ', () => {

    it('towards Y axis', () => {
      const position = { x: 5, y: 5, heading: 'N' };
      const robot = initRobot({ position });
      robot.move({ gameArea, nextAction: 'M' });
      expect(robot.position).toEqual(position);
    });

    it('towards X axis', () => {
      const position = { x: 5, y: 5, heading: 'E' };
      const robot = initRobot({ position });
      robot.move({ gameArea, nextAction: 'M' });
      expect(robot.position).toEqual(position);
    });
  });

  describe('should Rotate: ', () => {
    it('towards W when heading N and action L', () => {
      const position = { x: 5, y: 5, heading: 'N'};
      const robot = initRobot({ position });
      robot.move({ gameArea, nextAction: 'L' });
      expect(robot.position).toEqual({...position, heading: 'W'});
    });

    it('towards E when heading N and action R', () => {
      const position = { x: 5, y: 5, heading: 'N'};
      const robot = initRobot({ position });
      robot.move({ gameArea, nextAction: 'R' });
      expect(robot.position).toEqual({...position, heading: 'E'});
    });
  });
});
