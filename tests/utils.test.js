const { normaliseInput, getArea } = require('../src/utils');

describe('Utils: ', () => {
  it('should normalise the input', () => {
    const expectedData = {
      position: {
        x: 1,
        y: 3,
        heading: 'N'
      },
    }
    const input = ['1', '3', 'N']
    expect(normaliseInput(input)).toEqual(expectedData);
  });

  it('should get the game boundaries', () => {
    const expectedData = {
      max_x: 5,
      max_y: 5
    };
    const gameBoundaries = ['5', '5'];
    expect(getArea(gameBoundaries)).toEqual(expectedData);
  });
});
