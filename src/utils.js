const normaliseInput = position => ({
  position: {
    x: parseInt(position[0]),
    y: parseInt(position[1]),
    heading: position[2],
  }
})

const getArea = gameBoundaries => ({
  max_x: parseInt(gameBoundaries[0]),
  max_y: parseInt(gameBoundaries[1]),
})

module.exports = {
  normaliseInput,
  getArea,
};

