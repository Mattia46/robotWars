const isHeadingPositionEmpty = ({ headingPosition, rivalPosition = {} }) =>
    JSON.stringify(headingPosition) === JSON.stringify(rivalPosition)
      ? false
      : true;

const moveRobot = ({ gameArea, position, rivalPosition }) => {
  const originalPosition = { ...position };
  position.heading === "N"
    ? position.y < gameArea.max_y
        ? position.y++
        : console.log('not enough space')
    : null;

  if(position.heading === "S" && position.y > 0) position.y--;
  if(position.heading === "E" && position.x < gameArea.max_x) position.x++;
  if(position.heading === "W" && position.x > 0) position.x--;

  return isHeadingPositionEmpty({ headingPosition: position, rivalPosition })
    ? position
    : originalPosition;
}

const mappingAction = {
  'N': action => action === 'L' ? 'W' : 'E',
  'S': action => action === 'L' ? 'E' : 'W',
  'W': action => action === 'L' ? 'S' : 'N',
  'E': action => action === 'L' ? 'N' : 'S',
}

const rotateRobot = ({ position,  nextAction}) => {
  position.heading = mappingAction[position.heading](nextAction);
  return position;
}

const initRobot = ({ position }) => ({
  move: ({ gameArea, nextAction, rivalPosition }) =>
    position = nextAction === 'M'
      ? moveRobot({ gameArea, position, rivalPosition })
      : rotateRobot({ position, nextAction }),
  getCurrentPosition: () => position,
});

module.exports = { initRobot };
